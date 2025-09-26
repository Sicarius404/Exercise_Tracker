import { PrismaService } from "../database/prisma.service";
import { RunPlan } from "@prisma/client";
export declare class RunPlansService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(runPlanData: {
        week: number;
        day: number;
        type: string;
        plannedTime?: number;
        plannedDistance?: number;
        userId: number;
    }): Promise<RunPlan>;
    findAll(userId: number): Promise<RunPlan[]>;
    findOne(id: number, userId: number): Promise<RunPlan | null>;
    update(id: number, userId: number, updateData: Partial<{
        week: number;
        day: number;
        type: string;
        plannedTime: number;
        plannedDistance: number;
        completedRunId: number;
    }>): Promise<RunPlan | null>;
    remove(id: number, userId: number): Promise<boolean>;
}
