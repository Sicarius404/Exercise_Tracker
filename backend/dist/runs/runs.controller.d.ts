import { RunsService } from "./runs.service";
interface Run {
    id: number;
    stravaId?: string;
    date: Date;
    distance: number;
    duration: number;
    pace: number;
    notes?: string;
    userId: string;
}
export declare class RunsController {
    private readonly runsService;
    constructor(runsService: RunsService);
    create(createRunDto: {
        stravaId?: string;
        date: string;
        distance: number;
        duration: number;
        pace: number;
        notes?: string;
        userId: string;
    }): Promise<Run>;
    findAll(userId: string): Promise<Run[]>;
    findOne(id: string, userId: string): Promise<Run | undefined>;
    update(id: string, userId: string, updateRunDto: Partial<{
        stravaId: string;
        date: string;
        distance: number;
        duration: number;
        pace: number;
        notes: string;
    }>): Promise<Run | undefined>;
    remove(id: string, userId: string): Promise<boolean>;
    findByStravaId(stravaId: string): Promise<Run | undefined>;
}
export {};
