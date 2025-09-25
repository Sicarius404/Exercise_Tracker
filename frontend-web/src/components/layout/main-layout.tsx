import Link from "next/link";
import { useRouter } from "next/router";
import { type PropsWithChildren } from "react";
import { useAuthStore } from "@/lib/auth-store";

const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/runs", label: "Runs" },
  { href: "/plan", label: "Plan" },
];

export function MainLayout({ children }: PropsWithChildren) {
  const { user, logout } = useAuthStore();
  const router = useRouter();

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
          <Link href="/" className="text-lg font-semibold text-white">
            Exercise Tracker
          </Link>
          <div className="flex items-center gap-6">
            <ul className="flex gap-6 text-sm font-medium text-zinc-300">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 text-sm">
              {user && <span className="text-zinc-400">{user.email}</span>}
              <button
                onClick={handleLogout}
                className="text-zinc-300 hover:text-white transition"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
