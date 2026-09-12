import { BarChart3 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Reports</h1>

        <p className="text-muted-foreground">
          View insights and reports for your workspace.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reports</CardTitle>
          <CardDescription>
            Workspace reports and analytics will appear here.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex min-h-48 flex-col items-center justify-center text-center">
            <BarChart3 className="mb-3 h-10 w-10 text-muted-foreground" />

            <p className="font-medium">No reports available</p>

            <p className="text-sm text-muted-foreground">
              Reports will become available as your workspace grows.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
