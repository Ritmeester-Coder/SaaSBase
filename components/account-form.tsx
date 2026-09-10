"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AccountFormProps = {
  fullName: string;
  email: string;
};

export function AccountForm({ fullName, email }: AccountFormProps) {
  const router = useRouter();
  const supabase = createClient();

  const [name, setName] = useState(fullName);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSave() {
    setSaving(true);
    setMessage("");
    setError("");

    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: name.trim(),
      })
      .eq("id", (await supabase.auth.getUser()).data.user?.id);

    if (error) {
      setError(error.message);
      setSaving(false);
      return;
    }

    setMessage("Your account details have been updated.");
    setSaving(false);

    router.refresh();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal information</CardTitle>

        <CardDescription>
          Update the information associated with your account.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="full-name">Full name</Label>

          <Input
            id="full-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your full name"
            disabled={saving}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>

          <Input id="email" value={email} disabled type="email" />

          <p className="text-xs text-muted-foreground">
            Your email address is managed by your authentication provider.
          </p>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        {message && <p className="text-sm text-muted-foreground">{message}</p>}

        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save changes"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
