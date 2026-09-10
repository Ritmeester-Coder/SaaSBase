"use client";

import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserMenu } from "@/components/user-menu";

type AppHeaderProps = {
  fullName: string | null;
  email: string | undefined;
};

export function AppHeader({ fullName, email }: AppHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b px-4">
      <SidebarTrigger />

      <Separator orientation="vertical" className="h-6" />

      <div className="flex-1">
        <span className="font-semibold">SaaSBase</span>
      </div>

      <ThemeToggle />

      <Button variant="ghost" size="icon">
        <Bell />
      </Button>

      <UserMenu fullName={fullName} email={email} />
    </header>
  );
}
