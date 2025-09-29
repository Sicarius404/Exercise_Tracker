import { PrismaService } from "src/database/prisma.service";
import { GymPlan, Exercise, CompletedExercise, Prisma } from "@prisma/client";
declare const gymPlanWithExercises: {
    include: {
        exercises: {
            include: {
                completed: true;
            };
        };
    };
};
export type GymPlanWithExercises = Prisma.GymPlanGetPayload<typeof gymPlanWithExercises>;
export declare class GymPlansService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(gymPlanData: {
        week: number;
        day: number;
        muscleGroup: string;
        exercises: Omit<Exercise, "id" | "gymPlanId">[];
        userId: string;
    }): Promise<GymPlan>;
    findAll(userId: string): Promise<GymPlanWithExercises[]>;
    findOne(id: number, userId: string): Promise<GymPlanWithExercises | null>;
    update(id: number, userId: string, updateData: Partial<{
        week: number;
        day: number;
        muscleGroup: string;
    }>): Promise<GymPlan | null>;
    remove(id: number, userId: string): Promise<boolean>;
    addExercise(gymPlanId: number, userId: string, exerciseData: Omit<Exercise, "id" | "gymPlanId">): Promise<Exercise | null>;
    updateExercise(exerciseId: number, userId: string, updateData: Partial<Omit<Exercise, "id" | "gymPlanId">>): Promise<Exercise | null>;
    removeExercise(exerciseId: number, userId: string): Promise<boolean>;
    completeExercise(exerciseId: number, userId: string, completedData: Omit<CompletedExercise, "id" | "exerciseId">): Promise<CompletedExercise | null>;
}
export {};
