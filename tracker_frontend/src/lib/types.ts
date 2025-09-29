export type Run = {
  id: number;
  userId: number;
  stravaId?: string | null;
  date: string;
  distance: number;
  duration: number;
  pace: number;
  notes?: string | null;
};

export type RunPlan = {
  id: number;
  week: number;
  day: number;
  type: string;
  plannedTime?: number | null;
  plannedDistance?: number | null;
  completedRunId?: number | null;
};

export type GymPlan = {
  id: number;
  week: number;
  day: number;
  muscleGroup: string;
  exercises: Exercise[];
};

export type Exercise = {
  id: number;
  gymPlanId: number;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  notes?: string | null;
  completed: CompletedExercise[];
};

export type CompletedExercise = {
  id: number;
  exerciseId: number;
  actualSets: number;
  actualReps: number;
  actualWeight: number;
  notes?: string | null;
  createdAt?: string;
};

export type WeeklyStats = {
  totalMileage: number;
  averagePace: number;
  totalWeightLifted: number;
  runCount: number;
  completedExercises: number;
};

export type PersonalRecords = {
  fastest5k: number | null;
  fastest10k: number | null;
  fastestMarathon: number | null;
  heaviestSquat: number | null;
  heaviestBench: number | null;
  heaviestDeadlift: number | null;
};

export type CalendarWorkout = {
  date: string;
  type: "run" | "gym" | string;
  description: string;
  planId?: number;
  distance?: number;
  pace?: number;
  completed?: boolean;
};

export type CalendarResponse = {
  plannedWorkouts: CalendarWorkout[];
  completedWorkouts: CalendarWorkout[];
};

export type DashboardSnapshotResponse = {
  weeklyStats: WeeklyStats;
  personalRecords: PersonalRecords;
  calendarView: CalendarResponse;
};
