// =============================================================================
// AMBIENT TYPES FOR SUPABASE EDGE RUNTIME (DENO)
// Ensures IDE TypeScript server recognizes Deno globals and npm/esm imports
// =============================================================================

declare namespace Deno {
  export namespace env {
    export function get(key: string): string | undefined;
    export function set(key: string, value: string): void;
    export function has(key: string): boolean;
  }
  export function serve(handler: (req: Request) => Promise<Response> | Response): void;
  export function serve(
    options: {
      port?: number;
      hostname?: string;
      onListen?: (params: { port: number; hostname: string }) => void;
    },
    handler: (req: Request) => Promise<Response> | Response
  ): void;
}

declare module "npm:@supabase/supabase-js@2.48.1" {
  export interface SupabaseClientOptions {
    auth?: {
      persistSession?: boolean;
      autoRefreshToken?: boolean;
    };
  }

  export interface PostgrestFilterBuilder<T> {
    insert(values: Record<string, unknown> | Record<string, unknown>[]): this;
    select(columns?: string): this;
    single(): Promise<{ data: any; error: any }>;
  }

  export interface SupabaseClient {
    from(table: string): PostgrestFilterBuilder<any>;
  }

  export function createClient(
    supabaseUrl: string,
    supabaseKey: string,
    options?: SupabaseClientOptions
  ): SupabaseClient;
}

declare module "https://esm.sh/@supabase/supabase-js@2.48.1" {
  export interface SupabaseClientOptions {
    auth?: {
      persistSession?: boolean;
      autoRefreshToken?: boolean;
    };
  }

  export interface PostgrestFilterBuilder<T> {
    insert(values: Record<string, unknown> | Record<string, unknown>[]): this;
    select(columns?: string): this;
    single(): Promise<{ data: any; error: any }>;
  }

  export interface SupabaseClient {
    from(table: string): PostgrestFilterBuilder<any>;
  }

  export function createClient(
    supabaseUrl: string,
    supabaseKey: string,
    options?: SupabaseClientOptions
  ): SupabaseClient;
}
