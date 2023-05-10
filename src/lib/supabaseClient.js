
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xaerywjpcrmbzvowvfbp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhZXJ5d2pwY3JtYnp2b3d2ZmJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MTk1NDEsImV4cCI6MTk5OTI5NTU0MX0.dPSwfSV1l4tC9Paifvf6FSJbqY55EBHe8V19bUM5EP4'
export const supabase = createClient(supabaseUrl, supabaseKey)