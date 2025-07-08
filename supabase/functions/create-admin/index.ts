
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Create admin user
    const { data: user, error: userError } = await supabaseClient.auth.admin.createUser({
      email: 'rushionchegge@gmail.com',
      password: 'MoiseKean18!',
      email_confirm: true,
      user_metadata: {
        full_name: 'Francis Rushion'
      }
    })

    if (userError) {
      throw userError
    }

    console.log('Admin user created:', user)

    return new Response(
      JSON.stringify({ 
        message: 'Admin user Francis Rushion created successfully',
        user: user 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error creating admin user:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
