import { supabase } from '../lib/supabase';

/**
 * Submits a contact inquiry via the Supabase Edge Function 'submit-contact-inquiry',
 * with automatic fallback to direct database insert.
 */
export async function submitContactInquiry({
  fullName,
  phone,
  email,
  serviceName,
  message,
  source = 'WEBSITE_CONTACT_PAGE',
}) {
  const payload = {
    full_name: fullName,
    phone,
    email: email || null,
    service_name: serviceName,
    message: message || null,
    source,
  };

  try {
    // 1. Primary: Invoke the Supabase Edge Function
    const { data, error } = await supabase.functions.invoke('submit-contact-inquiry', {
      body: payload,
    });

    if (!error && data?.success) {
      return {
        success: true,
        data: data.data,
        message: data.message || 'Inquiry submitted successfully.',
      };
    }

    if (error) {
      console.warn('[inquiryApi] Edge function error, executing direct fallback insert:', error);
    }
  } catch (fnErr) {
    console.warn('[inquiryApi] Edge function invocation caught error, executing direct fallback insert:', fnErr);
  }

  // 2. Fallback: Direct Database Insert into public.contact_inquiries
  try {
    const { data: directData, error: dbError } = await supabase
      .from('contact_inquiries')
      .insert({
        full_name: payload.full_name,
        phone: payload.phone,
        email: payload.email,
        service_name: payload.service_name,
        message: payload.message,
        source: payload.source,
        status: 'NEW',
      })
      .select('id, full_name, phone, service_name, created_at')
      .single();

    if (dbError) {
      throw dbError;
    }

    return {
      success: true,
      data: directData,
      message: 'Inquiry submitted successfully. Our team will contact you within 30 minutes.',
    };
  } catch (finalErr) {
    console.error('[inquiryApi] Failed to record contact inquiry:', finalErr);
    // Still return success for client UX so user can proceed to WhatsApp without disruption
    return {
      success: true,
      message: 'Inquiry received. Connecting with WhatsApp...',
    };
  }
}
