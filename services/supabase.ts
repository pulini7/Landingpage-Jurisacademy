
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ovzijoobblntlztaisyz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_PmHXZjjpVRKnv249V3XusQ_8Ox8akAD';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
