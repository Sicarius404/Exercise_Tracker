import { GymPlansService } from "./gym-plans.service";
export declare class GymPlansController {
    private readonly gymPlansService;
    constructor(gymPlansService: GymPlansService);
    create(createGymPlanDto: any, req: any): Promise<{
        id: number;
        week: number;
        day: number;
        muscleGroup: string;
        userId: string;
    }>;
    findAll(req: any): Promise<({
        exercises: ({
            completed: {
                id: number;
                exerciseId: number;
                actualSets: number;
                actualReps: number;
                actualWeight: number;
                notes: string | null;
                createdAt: Date;
            }[];
        } & {
            name: string;
            id: number;
            gymPlanId: number;
            sets: number;
            reps: number;
            weight: number;
        })[];
    } & {
        id: number;
        week: number;
        day: number;
        muscleGroup: string;
        userId: string;
    })[]>;
    findOne(id: string, req: any): Promise<{
        exercises: ({
            completed: {
                id: number;
                exerciseId: number;
                actualSets: number;
                actualReps: number;
                actualWeight: number;
                notes: string | null;
                createdAt: Date;
            }[];
        } & {
            name: string;
            id: number;
            gymPlanId: number;
            sets: number;
            reps: number;
            weight: number;
        })[];
    } & {
        id: number;
        week: number;
        day: number;
        muscleGroup: string;
        userId: string;
    }>;
    update(id: string, updateGymPlanDto: any, req: any): Promise<{
        id: number;
        week: number;
        day: number;
        muscleGroup: string;
        userId: string;
    }>;
    remove(id: string, req: any): Promise<boolean>;
    addExercise(gymPlanId: string, exerciseData: any, req: any): Promise<{
        name: string;
        id: number;
        gymPlanId: number;
        sets: number;
        reps: number;
        weight: number;
    }>;
    updateExercise(exerciseId: string, updateData: any, req: any): Promise<{
        name: string;
        id: number;
        gymPlanId: number;
        sets: number;
        reps: number;
        weight: number;
    }>;
    removeExercise(exerciseId: string, req: any): Promise<boolean>;
    completeExercise(exerciseId: string, completedData: any, req: any): Promise<{
        id: number;
        exerciseId: number;
        actualSets: number;
        actualReps: number;
        actualWeight: number;
        notes: string | null;
        createdAt: Date;
    }>;
}
