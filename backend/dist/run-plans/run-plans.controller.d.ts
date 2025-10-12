import { RunPlansService } from "./run-plans.service";
import { CreateRunPlanDto, UpdateRunPlanDto } from "./dto/run-plan.dto";
export declare class RunPlansController {
    private readonly runPlansService;
    constructor(runPlansService: RunPlansService);
    create(createRunPlanDto: CreateRunPlanDto, req: any): Promise<{
        id: number;
        userId: string;
        week: number;
        day: number;
        type: string;
        plannedTime: number | null;
        plannedDistance: number | null;
        completedRunId: number | null;
    }>;
    findAll(req: any): Promise<{
        id: number;
        userId: string;
        week: number;
        day: number;
        type: string;
        plannedTime: number | null;
        plannedDistance: number | null;
        completedRunId: number | null;
    }[]>;
    findOne(id: string, req: any): Promise<{
        id: number;
        userId: string;
        week: number;
        day: number;
        type: string;
        plannedTime: number | null;
        plannedDistance: number | null;
        completedRunId: number | null;
    } | null>;
    update(id: string, updateRunPlanDto: UpdateRunPlanDto, req: any): Promise<{
        id: number;
        userId: string;
        week: number;
        day: number;
        type: string;
        plannedTime: number | null;
        plannedDistance: number | null;
        completedRunId: number | null;
    } | null>;
    remove(id: string, req: any): Promise<boolean>;
}
