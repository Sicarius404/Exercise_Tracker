export interface CompletedExercise {
  readonly id: number;
  readonly actualSets: number;
  readonly actualReps: number;
  readonly actualWeight: number;
  readonly notes?: string;
  readonly createdAt: string;
}

export interface GymExercise {
  readonly id: number;
  readonly name: string;
  readonly sets: number;
  readonly reps: number;
  readonly weight: number;
  readonly notes?: string;
  readonly completedEntries?: CompletedExercise[];
}

export interface GymPlan {
  readonly id: number;
  readonly week: number;
  readonly day: number;
  readonly muscleGroup: string;
  readonly userId: number;
  readonly exercises: GymExercise[];
}

export interface CreateGymPlanInput {
  readonly week: number;
  readonly day: number;
  readonly muscleGroup: string;
  readonly exercises: ReadonlyArray<CreateGymExerciseInput>;
}

export interface UpdateGymPlanInput {
  readonly week?: number;
  readonly day?: number;
  readonly muscleGroup?: string;
}

export interface CreateGymExerciseInput {
  readonly name: string;
  readonly sets: number;
  readonly reps: number;
  readonly weight: number;
  readonly notes?: string;
}

export interface UpdateGymExerciseInput {
  readonly name?: string;
  readonly sets?: number;
  readonly reps?: number;
  readonly weight?: number;
  readonly notes?: string;
}

export interface CompleteExerciseInput {
  readonly actualSets: number;
  readonly actualReps: number;
  readonly actualWeight: number;
  readonly notes?: string;
  readonly createdAt?: string;
}
