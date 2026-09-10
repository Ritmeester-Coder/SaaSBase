import { createClient } from "@/lib/supabase/server";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, avatar_url")
    .eq("id", user.id)
    .single();

  const { data: membership } = await supabase
    .from("memberships")
    .select(
      `
      role,
      company:companies (
        id,
        name,
        slug
      )
    `,
    )
    .eq("user_id", user.id)
    .limit(1)
    .maybeSingle();

  const company = Array.isArray(membership?.company)
    ? membership.company[0]
    : membership?.company;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {profile?.full_name || user.email}.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Active projects</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Total customers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Team members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              Members in your workspace
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your workspace</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {company ? (
            <>
              <div>
                <p className="text-sm text-muted-foreground">Company</p>
                <p className="text-lg font-medium">{company.name}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Workspace slug</p>
                <p className="font-mono text-sm">{company.slug}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Your role</p>
                <p className="font-medium capitalize">{membership?.role}</p>
              </div>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">No workspace found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
