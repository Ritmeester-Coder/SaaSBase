import { getCurrentUser } from "@/lib/auth/user"
import { getCurrentProfile } from "@/lib/auth/profile"
import { getCurrentMembership } from "@/lib/auth/membership"

export async function getCurrentContext() {
  const user = await getCurrentUser()

  if (!user) {
    return null
  }

  const [profile, membership] = await Promise.all([
    getCurrentProfile(),
    getCurrentMembership(),
  ])

  return {
    user,
    profile,
    membership,
    workspace: membership?.company ?? null,
  }
}