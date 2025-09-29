"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  BarChart3,
  CalendarCheck,
  Dumbbell,
  LineChart,
  LogOut,
  Settings,
  ShieldCheck,
  Swords,
  Trophy,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import clsx from "clsx";
import styles from "./app-shell.module.css";

type AppShellProps = {
  children: React.ReactNode;
};

const NAV_LINKS = [
  { href: { pathname: "/" }, label: "Dashboard", icon: BarChart3 },
  { href: { pathname: "/runs" }, label: "Runs", icon: LineChart },
  { href: { pathname: "/plans" }, label: "Plans", icon: CalendarCheck },
  { href: { pathname: "/gym" }, label: "Gym Log", icon: Dumbbell },
  { href: { pathname: "/strava" }, label: "Strava Sync", icon: Zap },
];

const SUPPORT_LINKS = [
  { href: { pathname: "/settings" }, label: "Settings", icon: Settings },
  { href: { pathname: "/security" }, label: "Security", icon: ShieldCheck },
];

function NavLink({
  href,
  label,
  icon: Icon,
}: {
  href: { pathname: string };
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const pathname = usePathname();
  const isActive = pathname === href.pathname;

  return (
    <Link
      href={href}
      className={clsx(styles.sidebarLink, isActive && styles.sidebarLinkActive)}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
}

export default function AppShell({ children }: AppShellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarBrand}>
            <Swords className="h-5 w-5" />
            Exercise Tracker
          </div>
          <button
            className={styles.navToggle}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-4 w-4" />
            Menu
          </button>
          <nav className={styles.sidebarNav} data-open={isOpen}>
            <div className={styles.sidebarGroup}>
              <div className={styles.sidebarHeading}>Training</div>
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href.pathname} {...link} />
              ))}
            </div>
            <div className={styles.sidebarGroup}>
              <div className={styles.sidebarHeading}>Account</div>
              {SUPPORT_LINKS.map((link) => (
                <NavLink key={link.href.pathname} {...link} />
              ))}
            </div>
          </nav>
          <div className={styles.sidebarFooter}>
            <div className={styles.sidebarBadge}>
              <Trophy className="h-4 w-4 inline-block mr-2" />
              Week 42 streak
            </div>
            <button
              className={styles.sidebarExit}
              type="button"
              onClick={signOut}
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </aside>
        <div className={styles.contentArea}>
          <header className={styles.topBar}>
            <div>
              <h1 className="text-2xl font-semibold text-neutral-900">
                Training HQ
              </h1>
              <p className="text-sm text-neutral-500">
                Plan, track, and conquer your goals
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col text-right">
                <span className="text-sm font-medium text-neutral-900">
                  Alex Runner
                </span>
                <span className="text-xs text-neutral-500">Solo athlete</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 font-medium">
                AR
              </div>
            </div>
          </header>
          <main className={styles.mainContent}>{children}</main>
        </div>
      </div>
    </div>
  );
}
