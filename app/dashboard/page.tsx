import { getCurrentContext } from "@/lib/auth/context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const context = await getCurrentContext();

  if (!context) {
    return null;
  }

  const { user, profile, membership, workspace } = context;

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
          {workspace ? (
            <>
              <div>
                <p className="text-sm text-muted-foreground">Company</p>

                <p className="text-lg font-medium">{workspace.name}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Workspace slug</p>

                <p className="font-mono text-sm">{workspace.slug}</p>
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
