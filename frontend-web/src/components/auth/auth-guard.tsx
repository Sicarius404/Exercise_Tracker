import { useEffect, type PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "@/lib/auth-store";

interface AuthGuardProps extends PropsWithChildren {
  readonly redirectTo?: string;
}

export function AuthGuard({
  children,
  redirectTo = "/auth/login",
}: AuthGuardProps) {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && router.pathname !== redirectTo) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, router, redirectTo]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
        <p className="text-sm text-zinc-400">Redirecting to login...</p>
      </div>
    );
  }

  return <>{children}</>;
}
