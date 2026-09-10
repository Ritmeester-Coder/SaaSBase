import { getCurrentUser } from "@/lib/auth/user"
import { getCurrentProfile } from "@/lib/auth/profile"
import { getCurrentMemberships } from "@/lib/auth/memberships"
import { getCurrentWorkspace } from "@/lib/auth/workspace"

export async function getCurrentContext() {
  const user = await getCurrentUser()

  if (!user) {
    return null
  }

  const [profile, memberships, workspace] = await Promise.all([
    getCurrentProfile(),
    getCurrentMemberships(),
    getCurrentWorkspace(),
  ])

  const membership =
    memberships.find(
      (item) => item.company_id === workspace?.id
    ) ?? null

  return {
    user,
    profile,
    membership,
    workspace,
  }
}