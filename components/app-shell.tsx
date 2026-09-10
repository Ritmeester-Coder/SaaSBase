"use client";

import { usePathname } from "next/navigation";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";

type AppShellProps = {
  children: React.ReactNode;
  fullName: string | null;
  email: string | undefined;
};

export function AppShell({ children, fullName, email }: AppShellProps) {
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
        <AppHeader fullName={fullName} email={email} />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
