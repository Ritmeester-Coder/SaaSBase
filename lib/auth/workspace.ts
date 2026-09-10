import { getCurrentMembership } from "@/lib/auth/membership"

export async function getCurrentWorkspace() {
  const membership = await getCurrentMembership()

  return membership?.company ?? null
}