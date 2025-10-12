import { GymPlansService } from "./gym-plans.service";
import { CreateGymPlanDto, UpdateGymPlanDto, ExerciseDto, UpdateExerciseDto, CompleteExerciseDto } from "./dto/gym-plan.dto";
export declare class GymPlansController {
    private readonly gymPlansService;
    constructor(gymPlansService: GymPlansService);
    create(createGymPlanDto: CreateGymPlanDto, req: any): Promise<{
        id: number;
        userId: string;
        week: number;
        day: number;
        muscleGroup: string;
    }>;
    findAll(req: any): Promise<({
        exercises: ({
            completed: {
                id: number;
                notes: string | null;
                exerciseId: number;
                actualSets: number;
                actualReps: number;
                actualWeight: number;
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
        userId: string;
        week: number;
        day: number;
        muscleGroup: string;
    })[]>;
    findOne(id: string, req: any): Promise<({
        exercises: ({
            completed: {
                id: number;
                notes: string | null;
                exerciseId: number;
                actualSets: number;
                actualReps: number;
                actualWeight: number;
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
        userId: string;
        week: number;
        day: number;
        muscleGroup: string;
    }) | null>;
    update(id: string, updateGymPlanDto: UpdateGymPlanDto, req: any): Promise<{
        id: number;
        userId: string;
        week: number;
        day: number;
        muscleGroup: string;
    } | null>;
    remove(id: string, req: any): Promise<boolean>;
    addExercise(gymPlanId: string, exerciseData: ExerciseDto, req: any): Promise<{
        name: string;
        id: number;
        gymPlanId: number;
        sets: number;
        reps: number;
        weight: number;
    } | null>;
    updateExercise(exerciseId: string, updateData: UpdateExerciseDto, req: any): Promise<{
        name: string;
        id: number;
        gymPlanId: number;
        sets: number;
        reps: number;
        weight: number;
    } | null>;
    removeExercise(exerciseId: string, req: any): Promise<boolean>;
    completeExercise(exerciseId: string, completedData: CompleteExerciseDto, req: any): Promise<{
        id: number;
        notes: string | null;
        exerciseId: number;
        actualSets: number;
        actualReps: number;
        actualWeight: number;
        createdAt: Date;
    } | null>;
}
