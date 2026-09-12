import { Settings } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>

        <p className="text-muted-foreground">
          Manage your account and workspace settings.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Manage your personal account information.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Link
              href="/account"
              className="inline-flex h-9 items-center justify-center rounded-md border bg-background px-4 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Manage account
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Workspace</CardTitle>
            <CardDescription>
              Manage your company and workspace settings.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button variant="outline" disabled>
              Workspace settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
