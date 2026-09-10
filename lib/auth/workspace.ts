import { getCurrentMemberships } from "@/lib/auth/memberships"
import { getActiveWorkspaceId } from "@/lib/workspace/active-workspace"

export async function getCurrentWorkspace() {
  const activeWorkspaceId = await getActiveWorkspaceId()
  const memberships = await getCurrentMemberships()

  if (memberships.length === 0) {
    return null
  }

  if (activeWorkspaceId) {
    const activeMembership = memberships.find(
      (membership) => membership.company_id === activeWorkspaceId
    )

    if (activeMembership) {
      const company = Array.isArray(activeMembership.company)
        ? activeMembership.company[0]
        : activeMembership.company

      return company ?? null
    }
  }

  const firstMembership = memberships[0]

  const company = Array.isArray(firstMembership.company)
    ? firstMembership.company[0]
    : firstMembership.company

  return company ?? null
}