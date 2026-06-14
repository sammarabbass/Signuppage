
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mxbkzpaxbpkhiigitybh.supabase.co'
const supabaseKey = 'sb_publishable_nNFftLOV0Du6_SEv0n96Tg_cdbjkKSm'
export const supabase = createClient(supabaseUrl, supabaseKey)