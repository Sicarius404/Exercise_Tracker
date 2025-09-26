import { RunPlansService } from "./run-plans.service";
export declare class RunPlansController {
    private readonly runPlansService;
    constructor(runPlansService: RunPlansService);
    create(createRunPlanDto: any, req: any): Promise<{
        id: number;
        userId: number;
        week: number;
        day: number;
        type: string;
        plannedTime: number | null;
        plannedDistance: number | null;
        completedRunId: number | null;
    }>;
    findAll(req: any): Promise<{
        id: number;
        userId: number;
        week: number;
        day: number;
        type: string;
        plannedTime: number | null;
        plannedDistance: number | null;
        completedRunId: number | null;
    }[]>;
    findOne(id: string, req: any): Promise<{
        id: number;
        userId: number;
        week: number;
        day: number;
        type: string;
        plannedTime: number | null;
        plannedDistance: number | null;
        completedRunId: number | null;
    }>;
    update(id: string, updateRunPlanDto: any, req: any): Promise<{
        id: number;
        userId: number;
        week: number;
        day: number;
        type: string;
        plannedTime: number | null;
        plannedDistance: number | null;
        completedRunId: number | null;
    }>;
    remove(id: string, req: any): Promise<boolean>;
}
