"use server"

import { createClient } from "@/lib/supabase/server"
import { setActiveWorkspaceId } from "@/lib/workspace/active-workspace"

export async function switchWorkspace(workspaceId: string) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return {
      success: false,
      error: "You must be signed in to switch workspaces.",
    }
  }

  const { data: membership, error } = await supabase
    .from("memberships")
    .select("id, company_id")
    .eq("user_id", user.id)
    .eq("company_id", workspaceId)
    .maybeSingle()

  if (error) {
    return {
      success: false,
      error: error.message,
    }
  }

  if (!membership) {
    return {
      success: false,
      error: "You do not have access to this workspace.",
    }
  }

  await setActiveWorkspaceId(workspaceId)

  return {
    success: true,
  }
}