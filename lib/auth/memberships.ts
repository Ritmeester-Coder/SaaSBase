import { createClient } from "@/lib/supabase/server"

export async function getCurrentMemberships() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return []
  }

  const { data: memberships, error } = await supabase
    .from("memberships")
    .select(`
      id,
      role,
      company_id,
      company:companies (
        id,
        name,
        slug
      )
    `)
    .eq("user_id", user.id)
    .order("id")

  if (error) {
    throw error
  }

  return memberships ?? []
}