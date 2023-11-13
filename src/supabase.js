import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qshpbgktgtfkheicvzpa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzaHBiZ2t0Z3Rma2hlaWN2enBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3MTk0NzUsImV4cCI6MjAxNTI5NTQ3NX0.ssgikPezjvBFNBCm2luvNxek1nUryrDI-WMEAR1lVaM";

export const supabase = createClient(supabaseUrl, supabaseKey);
