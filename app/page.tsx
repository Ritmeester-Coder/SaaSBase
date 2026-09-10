export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>

        <p className="text-muted-foreground">Welcome to SaaSBase.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Projects</p>

          <p className="mt-2 text-3xl font-semibold">12</p>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Customers</p>

          <p className="mt-2 text-3xl font-semibold">48</p>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Tasks</p>

          <p className="mt-2 text-3xl font-semibold">126</p>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Completion</p>

          <p className="mt-2 text-3xl font-semibold">86%</p>
        </div>
      </div>
    </div>
  );
}
