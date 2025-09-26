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
        userId: number;
    }): Promise<GymPlan>;
    findAll(userId: number): Promise<GymPlanWithExercises[]>;
    findOne(id: number, userId: number): Promise<GymPlanWithExercises | null>;
    update(id: number, userId: number, updateData: Partial<{
        week: number;
        day: number;
        muscleGroup: string;
    }>): Promise<GymPlan | null>;
    remove(id: number, userId: number): Promise<boolean>;
    addExercise(gymPlanId: number, userId: number, exerciseData: Omit<Exercise, "id" | "gymPlanId">): Promise<Exercise | null>;
    updateExercise(exerciseId: number, userId: number, updateData: Partial<Omit<Exercise, "id" | "gymPlanId">>): Promise<Exercise | null>;
    removeExercise(exerciseId: number, userId: number): Promise<boolean>;
    completeExercise(exerciseId: number, userId: number, completedData: Omit<CompletedExercise, "id" | "exerciseId">): Promise<CompletedExercise | null>;
}
export {};
