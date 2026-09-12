"use client";

import { useState } from "react";
import { Building2, Check, ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { switchWorkspace } from "@/lib/workspace/actions";
import type { Workspace } from "@/lib/workspace/types";

type WorkspaceSwitcherProps = {
  workspace: Workspace | null;
  workspaces: Workspace[];
};

export function WorkspaceSwitcher({
  workspace,
  workspaces,
}: WorkspaceSwitcherProps) {
  const router = useRouter();
  const [switching, setSwitching] = useState(false);

  async function handleSwitch(workspaceId: string) {
    if (workspaceId === workspace?.id || switching) {
      return;
    }

    setSwitching(true);

    const result = await switchWorkspace(workspaceId);

    if (result.success) {
      router.refresh();
    } else {
      console.error(result.error);
    }

    setSwitching(false);
  }

  if (!workspace) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className="h-9 gap-2 px-2 workspace-switcher-button"
            disabled={switching}
          />
        }
      >
        <Building2 className="h-4 w-4" />

        <span className="max-w-40 truncate">{workspace.name}</span>

        <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-64">
        <div className="px-2 py-1.5">
          <p className="text-xs font-medium text-muted-foreground">Workspace</p>
        </div>

        <DropdownMenuSeparator />

        {workspaces.map((item) => (
          <DropdownMenuItem
            key={item.id}
            disabled={switching}
            onClick={() => handleSwitch(item.id)}
          >
            <Building2 />

            <span className="flex-1 truncate">{item.name}</span>

            {item.id === workspace.id && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
