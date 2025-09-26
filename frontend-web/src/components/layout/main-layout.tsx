import Link from "next/link";
import { useRouter } from "next/router";
import { type PropsWithChildren, useMemo } from "react";
import { useAuthStore } from "@/lib/auth-store";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/runs", label: "Runs" },
  { href: "/plan", label: "Plan" },
];

export function MainLayout({ children }: PropsWithChildren) {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const currentPath = router.pathname;

  const navigationItems = useMemo(
    () =>
      navLinks.map((link) => ({
        ...link,
        isActive: currentPath === link.href,
      })),
    [currentPath]
  );

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } finally {
      logout();
      router.push("/auth/login");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 bg-zinc-900/60 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold text-white"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-emerald-400">
              ET
            </span>
            Exercise Tracker
          </Link>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-1 text-sm font-medium text-zinc-300">
              {navigationItems.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-full px-4 py-2 transition",
                      link.isActive
                        ? "bg-white text-zinc-900 shadow-sm"
                        : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 text-sm">
              {user && (
                <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400">
                  {user.email}
                </span>
              )}
              <button
                onClick={handleLogout}
                className="rounded-full border border-zinc-800 px-4 py-2 text-zinc-300 transition hover:border-white hover:text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-zinc-900/60 bg-zinc-950/60 p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]">
          {children}
        </div>
      </main>
    </div>
  );
}
