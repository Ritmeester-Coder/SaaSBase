"use client";

import { usePathname } from "next/navigation";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import type { Workspace } from "@/lib/workspace/types";

type AppShellProps = {
  children: React.ReactNode;
  fullName: string | null;
  email: string | undefined;
  workspace: Workspace | null;
  workspaces: Workspace[];
};

export function AppShell({
  children,
  fullName,
  email,
  workspace,
  workspaces,
}: AppShellProps) {
  const pathname = usePathname();

  const isPublicRoute =
    pathname === "/login" ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/auth") ||
    pathname.startsWith("/onboarding");

  if (isPublicRoute) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex min-h-screen w-full flex-col">
        <AppHeader
          fullName={fullName}
          email={email}
          workspace={workspace}
          workspaces={workspaces}
        />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
