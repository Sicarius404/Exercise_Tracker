"use client";

import clsx from "clsx";
import styles from "../dashboard-page.module.css";

type DashboardCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function DashboardCard({
  children,
  className,
}: DashboardCardProps) {
  return <section className={clsx(styles.card, className)}>{children}</section>;
}
