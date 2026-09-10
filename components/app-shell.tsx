"use client";

import { usePathname } from "next/navigation";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";

export function AppShell({ children }: { children: React.ReactNode }) {
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
        <AppHeader />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
