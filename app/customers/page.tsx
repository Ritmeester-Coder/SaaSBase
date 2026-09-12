import { Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CustomersPage() {
  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Customers</h1>

        <p className="text-muted-foreground">
          Manage your workspace customers.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customers</CardTitle>
          <CardDescription>Your customers will appear here.</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex min-h-48 flex-col items-center justify-center text-center">
            <Users className="mb-3 h-10 w-10 text-muted-foreground" />

            <p className="font-medium">No customers yet</p>

            <p className="text-sm text-muted-foreground">
              Add your first customer to get started.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
