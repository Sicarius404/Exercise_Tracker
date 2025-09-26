export interface WeeklyStats {
  readonly totalMileage: number;
  readonly averagePace: number;
  readonly totalWeightLifted: number;
  readonly runCount: number;
  readonly completedExercises: number;
}

export interface PersonalRecords {
  readonly fastest5k: number | null;
  readonly fastest10k: number | null;
  readonly fastestMarathon: number | null;
  readonly heaviestSquat: number | null;
  readonly heaviestBench: number | null;
  readonly heaviestDeadlift: number | null;
}

export interface CalendarWorkout {
  readonly date: string;
  readonly type: "run" | "gym";
  readonly description: string;
  readonly planId?: number;
  readonly distance?: number;
  readonly pace?: number;
  readonly completed?: boolean;
}

export interface CalendarView {
  readonly plannedWorkouts: CalendarWorkout[];
  readonly completedWorkouts: CalendarWorkout[];
}

export interface DashboardResponse {
  readonly weeklyStats: WeeklyStats;
  readonly personalRecords: PersonalRecords;
  readonly calendarView: CalendarView;
}

export interface MonthlyStats {
  readonly totalRuns: number;
  readonly totalDistance: number;
  readonly totalGymSessions: number;
  readonly totalWeightLifted: number;
  readonly averagePace: number;
}
