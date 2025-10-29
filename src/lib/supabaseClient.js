// ...existing code...
import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  throw new Error('Missing Supabase env vars. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your .env');
}

export const supabase = createClient(url, anonKey);
// ...existing code...