
import { createClient } from '@supabase/supabase-js';

// Garante acesso seguro ao import.meta.env evitando erro de undefined
const env = (import.meta as any).env || {};

// Na Vercel, configure VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY
const SUPABASE_URL = env.VITE_SUPABASE_URL || 'https://ovzijoobblntlztaisyz.supabase.co';
const SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_PmHXZjjpVRKnv249V3XusQ_8Ox8akAD';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
