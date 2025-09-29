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
        userId: string;
    }): Promise<RunPlan>;
    findAll(userId: string): Promise<RunPlan[]>;
    findOne(id: number, userId: string): Promise<RunPlan | null>;
    update(id: number, userId: string, updateData: Partial<{
        week: number;
        day: number;
        type: string;
        plannedTime: number;
        plannedDistance: number;
        completedRunId: number;
    }>): Promise<RunPlan | null>;
    remove(id: number, userId: string): Promise<boolean>;
}
