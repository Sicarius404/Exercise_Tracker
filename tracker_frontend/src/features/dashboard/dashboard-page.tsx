import DashboardHeader from "./sections/dashboard-header";
import WeeklyOverview from "./sections/weekly-overview";
import TrainingHighlights from "./sections/training-highlights";
import PersonalRecords from "./sections/personal-records";
import TrainingCalendar from "./sections/training-calendar";
import styles from "./dashboard-page.module.css";

export default function DashboardPage() {
  return (
    <div>
      <DashboardHeader />
      <div className={styles.grid}>
        <WeeklyOverview />
        <TrainingHighlights />
        <PersonalRecords />
        <TrainingCalendar />
      </div>
    </div>
  );
}
