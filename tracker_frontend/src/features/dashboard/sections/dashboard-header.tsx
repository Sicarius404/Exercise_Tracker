"use client";

import { parseAsInteger, useQueryState } from "nuqs";
import { ArrowUpRight, Calendar, Plus } from "lucide-react";
import styles from "../dashboard-page.module.css";
import PrimaryButton from "@/components/ui/primary-button/primary-button";
import SecondaryButton from "@/components/ui/secondary-button/secondary-button";

export default function DashboardHeader() {
  const [week, setWeek] = useQueryState("week", parseAsInteger.withDefault(1));

  return (
    <header className={styles.header}>
      <div className={styles.titleGroup}>
        <h2 className={styles.title}>Week {week} overview</h2>
        <div className={styles.subtitle}>
          Keep building momentum. Your marathon block ends in 6 weeks.
        </div>
      </div>
      <div className={styles.actions}>
        <SecondaryButton icon={Calendar}>Calendar</SecondaryButton>
        <SecondaryButton icon={ArrowUpRight}>Import Strava</SecondaryButton>
        <PrimaryButton icon={Plus}>New workout</PrimaryButton>
      </div>
    </header>
  );
}
