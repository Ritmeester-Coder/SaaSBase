import { getCurrentContext } from "@/lib/auth/context";
import { AccountForm } from "@/components/account-form";

export default async function AccountPage() {
  const context = await getCurrentContext();

  if (!context) {
    return null;
  }

  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Account</h1>

        <p className="text-muted-foreground">
          Manage your personal account information.
        </p>
      </div>

      <AccountForm
        fullName={context.profile?.full_name ?? ""}
        email={context.user.email ?? ""}
      />
    </div>
  );
}
