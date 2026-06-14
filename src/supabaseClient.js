
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dyadvvydrluaoaxsoqlh.supabase.co'
const supabaseKey = 'sb_publishable_yU534ownpVHWMl03umHv-g_EbC01UJ_'
export const supabase = createClient(supabaseUrl, supabaseKey)