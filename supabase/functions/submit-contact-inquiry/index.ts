/// <reference path="../types.d.ts" />
// =============================================================================
// PLENORA SERVICE ECOSYSTEM - SUPABASE EDGE FUNCTION
// Function: submit-contact-inquiry
// Runtime: Deno / TypeScript (Supabase Edge Runtime)
// Description: Ingests, validates, rate-limits, and persists contact inquiries.
// =============================================================================

import { createClient } from "npm:@supabase/supabase-js@2.48.1";

// -----------------------------------------------------------------------------
// CORS Headers Configuration
// -----------------------------------------------------------------------------
const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// -----------------------------------------------------------------------------
// In-Memory Rate Limiting Cache (Per Edge Instance)
// Limit: 5 submissions per IP within a 10-minute sliding window
// -----------------------------------------------------------------------------
interface RateLimitRecord {
  count: number;
  firstRequestTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(clientIp: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(clientIp);

  if (!record) {
    rateLimitMap.set(clientIp, { count: 1, firstRequestTime: now });
    return false;
  }

  // Reset window if expired
  if (now - record.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(clientIp, { count: 1, firstRequestTime: now });
    return false;
  }

  // Increment count
  record.count += 1;
  return record.count > RATE_LIMIT_MAX_REQUESTS;
}

// -----------------------------------------------------------------------------
// Data Types & Payload Interfaces
// -----------------------------------------------------------------------------
type InquirySource = "WEBSITE_CONTACT_PAGE" | "WEBSITE_BOOKING_MODAL" | "APP_INQUIRY";

interface ContactInquiryRequest {
  full_name: string;
  phone: string;
  email?: string | null;
  service_name: string;
  message?: string | null;
  source?: InquirySource;
}

interface ValidationError {
  field: string;
  message: string;
}

// -----------------------------------------------------------------------------
// Input Validation Helper
// -----------------------------------------------------------------------------
function validatePayload(payload: Partial<ContactInquiryRequest>): {
  isValid: boolean;
  errors: ValidationError[];
  sanitizedData?: ContactInquiryRequest;
} {
  const errors: ValidationError[] = [];

  // 1. Full Name Validation
  const fullName = typeof payload.full_name === "string" ? payload.full_name.trim() : "";
  if (!fullName || fullName.length < 2) {
    errors.push({ field: "full_name", message: "Full name must be at least 2 characters long." });
  } else if (fullName.length > 150) {
    errors.push({ field: "full_name", message: "Full name cannot exceed 150 characters." });
  }

  // 2. Phone Validation (E.164 or 10-digit Indian Mobile)
  const rawPhone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const numericOnlyPhone = rawPhone.replace(/\D/g, "");

  if (!numericOnlyPhone || numericOnlyPhone.length < 10 || numericOnlyPhone.length > 15) {
    errors.push({ field: "phone", message: "A valid 10 to 15-digit phone number is required." });
  }

  // Normalize phone to +91 prefix if 10 digits
  let formattedPhone = rawPhone;
  if (numericOnlyPhone.length === 10) {
    formattedPhone = `+91${numericOnlyPhone}`;
  } else if (!formattedPhone.startsWith("+")) {
    formattedPhone = `+${numericOnlyPhone}`;
  }

  // 3. Email Validation (Optional, but must be valid if supplied)
  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : null;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    errors.push({ field: "email", message: "Invalid email address format." });
  }

  // 4. Service Name Validation
  const serviceName = typeof payload.service_name === "string" ? payload.service_name.trim() : "";
  if (!serviceName || serviceName.length < 2) {
    errors.push({ field: "service_name", message: "Please specify a service or inquiry topic." });
  } else if (serviceName.length > 150) {
    errors.push({ field: "service_name", message: "Service name cannot exceed 150 characters." });
  }

  // 5. Message Validation (Optional)
  const message = typeof payload.message === "string" ? payload.message.trim() : null;
  if (message && message.length > 2000) {
    errors.push({ field: "message", message: "Message cannot exceed 2000 characters." });
  }

  // 6. Source Validation
  const validSources: InquirySource[] = ["WEBSITE_CONTACT_PAGE", "WEBSITE_BOOKING_MODAL", "APP_INQUIRY"];
  const source: InquirySource = validSources.includes(payload.source as InquirySource)
    ? (payload.source as InquirySource)
    : "WEBSITE_CONTACT_PAGE";

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: [],
    sanitizedData: {
      full_name: fullName,
      phone: formattedPhone,
      email: email || null,
      service_name: serviceName,
      message: message || null,
      source,
    },
  };
}

// -----------------------------------------------------------------------------
// Standardized JSON Response Helper
// -----------------------------------------------------------------------------
function buildJsonResponse(
  status: number,
  body: Record<string, unknown>
): Response {
  return new Response(
    JSON.stringify({
      ...body,
      timestamp: new Date().toISOString(),
    }),
    {
      status,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    }
  );
}

// -----------------------------------------------------------------------------
// Main Edge Function Handler
// -----------------------------------------------------------------------------
Deno.serve(async (req: Request) => {
  // Handle HTTP CORS Preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  // Enforce POST method
  if (req.method !== "POST") {
    return buildJsonResponse(405, {
      success: false,
      error: "Method Not Allowed",
      message: "Only POST requests are supported.",
    });
  }

  // Extract Client IP for Rate Limiting & Diagnostics
  const clientIp =
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "unknown-client";

  // Check Rate Limit
  if (isRateLimited(clientIp)) {
    console.warn(`[submit-contact-inquiry] Rate limit exceeded for IP: ${clientIp}`);
    return buildJsonResponse(429, {
      success: false,
      error: "Too Many Requests",
      message: "Rate limit exceeded. Please wait a few minutes before submitting again.",
    });
  }

  try {
    // Read and parse request body safely
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch (_jsonErr) {
      return buildJsonResponse(400, {
        success: false,
        error: "Bad Request",
        message: "Invalid JSON payload provided.",
      });
    }

    // Validate and sanitize incoming parameters
    const { isValid, errors, sanitizedData } = validatePayload(
      (rawBody || {}) as Partial<ContactInquiryRequest>
    );

    if (!isValid || !sanitizedData) {
      return buildJsonResponse(422, {
        success: false,
        error: "Unprocessable Entity",
        message: "Validation failed for one or more fields.",
        validation_errors: errors,
      });
    }

    // Initialize Supabase Client with Service Role Key for elevated backend insert
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("[submit-contact-inquiry] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.");
      return buildJsonResponse(500, {
        success: false,
        error: "Internal Server Error",
        message: "Backend configuration error. Please contact system administrator.",
      });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    // Insert Inquiry Record into public.contact_inquiries
    const { data: insertedInquiry, error: dbError } = await supabase
      .from("contact_inquiries")
      .insert({
        full_name: sanitizedData.full_name,
        phone: sanitizedData.phone,
        email: sanitizedData.email,
        service_name: sanitizedData.service_name,
        message: sanitizedData.message,
        source: sanitizedData.source,
        status: "NEW",
      })
      .select("id, full_name, phone, service_name, source, status, created_at")
      .single();

    if (dbError) {
      console.error("[submit-contact-inquiry] Database insert error:", dbError);
      return buildJsonResponse(500, {
        success: false,
        error: "Database Error",
        message: "Failed to persist contact inquiry.",
      });
    }

    // Log Successful Ingestion
    console.log(
      `[submit-contact-inquiry] Successfully logged inquiry [${insertedInquiry.id}] from ${sanitizedData.full_name} (${sanitizedData.phone}) via ${sanitizedData.source}`
    );

    // Return structured 201 Created Response
    return buildJsonResponse(201, {
      success: true,
      message: "Inquiry submitted successfully. Our team will contact you within 30 minutes.",
      data: {
        inquiry_id: insertedInquiry.id,
        full_name: insertedInquiry.full_name,
        phone: insertedInquiry.phone,
        service_name: insertedInquiry.service_name,
        source: insertedInquiry.source,
        status: insertedInquiry.status,
        created_at: insertedInquiry.created_at,
      },
    });
  } catch (err: unknown) {
    const errorDetails = err instanceof Error ? err.message : String(err);
    console.error("[submit-contact-inquiry] Unhandled exception:", errorDetails);

    return buildJsonResponse(500, {
      success: false,
      error: "Internal Server Error",
      message: "An unexpected error occurred while processing your request.",
    });
  }
});
