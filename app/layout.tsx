import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { AppShell } from "@/components/app-shell";
import { getCurrentContext } from "@/lib/auth/context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaaSBase",
  description: "Reusable SaaS application foundation",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const context = await getCurrentContext();

  const fullName = context?.profile?.full_name ?? null;
  const email = context?.user?.email;
  const workspace = context?.workspace ?? null;
  const workspaces = context?.workspaces ?? [];

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} font-sans`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppShell
            fullName={fullName}
            email={email}
            workspace={workspace}
            workspaces={workspaces}
          >
            {children}
          </AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
