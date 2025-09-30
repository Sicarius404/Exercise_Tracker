"use client";

import { usePathname } from "next/navigation";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import AppShell from "./app-shell";

const PUBLIC_ROUTES = ["/login", "/signup"];

export default function ConditionalAppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  if (isPublicRoute) {
    return <>{children}</>;
  }

  return (
    <NuqsAdapter>
      <AppShell>{children}</AppShell>
    </NuqsAdapter>
  );
}
