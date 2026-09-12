import { HelpCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HelpPage() {
  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Help & Support
        </h1>

        <p className="text-muted-foreground">
          Find help and information about SaaSBase.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How can we help?</CardTitle>
          <CardDescription>
            Documentation and support resources will be available here.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex min-h-48 flex-col items-center justify-center text-center">
            <HelpCircle className="mb-3 h-10 w-10 text-muted-foreground" />

            <p className="font-medium">Support centre coming soon</p>

            <p className="text-sm text-muted-foreground">
              Help documentation and support options will be added here.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
