import { createClient } from "@/lib/supabase/server"

export async function getCurrentMembership() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const { data: membership } = await supabase
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
    .limit(1)
    .maybeSingle()

  if (!membership) {
    return null
  }

  const company = Array.isArray(membership.company)
    ? membership.company[0]
    : membership.company

  return {
    ...membership,
    company,
  }
}