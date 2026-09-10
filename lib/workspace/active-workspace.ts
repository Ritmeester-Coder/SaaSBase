import { cookies } from "next/headers"

const ACTIVE_WORKSPACE_COOKIE = "saasbase_active_workspace"

export async function getActiveWorkspaceId() {
  const cookieStore = await cookies()

  return cookieStore.get(ACTIVE_WORKSPACE_COOKIE)?.value ?? null
}

export async function setActiveWorkspaceId(workspaceId: string) {
  const cookieStore = await cookies()

  cookieStore.set(ACTIVE_WORKSPACE_COOKIE, workspaceId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  })
}

export async function clearActiveWorkspaceId() {
  const cookieStore = await cookies()

  cookieStore.delete(ACTIVE_WORKSPACE_COOKIE)
}