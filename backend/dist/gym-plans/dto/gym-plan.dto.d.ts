export declare class ExerciseDto {
    name: string;
    sets: number;
    reps: number;
    weight: number;
}
export declare class CreateGymPlanDto {
    week: number;
    day: number;
    muscleGroup: string;
    exercises: ExerciseDto[];
}
export declare class UpdateGymPlanDto {
    week?: number;
    day?: number;
    muscleGroup?: string;
}
export declare class UpdateExerciseDto {
    name?: string;
    sets?: number;
    reps?: number;
    weight?: number;
}
export declare class CompleteExerciseDto {
    actualSets: number;
    actualReps: number;
    actualWeight: number;
    notes?: string;
}
