"use client";

import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserMenu } from "@/components/user-menu";
import type { Workspace } from "@/lib/workspace/types";
import { WorkspaceSwitcher } from "@/components/workspace-switcher";

type AppHeaderProps = {
  fullName: string | null;
  email: string | undefined;
  workspace: Workspace | null;
  workspaces: Workspace[];
};

export function AppHeader({
  fullName,
  email,
  workspace,
  workspaces,
}: AppHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b px-4">
      <SidebarTrigger />

      <Separator orientation="vertical" className="h-6" />

      <div className="flex-1">
        <WorkspaceSwitcher workspace={workspace} workspaces={workspaces} />
      </div>

      <ThemeToggle />

      <Button variant="ghost" size="icon">
        <Bell />
      </Button>

      <UserMenu fullName={fullName} email={email} />
    </header>
  );
}
