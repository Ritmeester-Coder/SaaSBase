import { FolderKanban } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>

        <p className="text-muted-foreground">
          Manage and track your workspace projects.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>Your projects will appear here.</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex min-h-48 flex-col items-center justify-center text-center">
            <FolderKanban className="mb-3 h-10 w-10 text-muted-foreground" />

            <p className="font-medium">No projects yet</p>

            <p className="text-sm text-muted-foreground">
              Create your first project to get started.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
