import { RunsService } from "./runs.service";
import { CreateRunDto, UpdateRunDto } from "./dto/run.dto";
export declare class RunsController {
    private readonly runsService;
    constructor(runsService: RunsService);
    create(createRunDto: CreateRunDto, req: any): Promise<{
        id: number;
        stravaId: string | null;
        date: Date;
        distance: number;
        duration: number;
        pace: number;
        notes: string | null;
        userId: string;
    }>;
    findAll(req: any): Promise<{
        id: number;
        stravaId: string | null;
        date: Date;
        distance: number;
        duration: number;
        pace: number;
        notes: string | null;
        userId: string;
    }[]>;
    findOne(id: string, req: any): Promise<{
        id: number;
        stravaId: string | null;
        date: Date;
        distance: number;
        duration: number;
        pace: number;
        notes: string | null;
        userId: string;
    } | null>;
    update(id: string, updateRunDto: UpdateRunDto, req: any): Promise<{
        id: number;
        stravaId: string | null;
        date: Date;
        distance: number;
        duration: number;
        pace: number;
        notes: string | null;
        userId: string;
    } | null>;
    remove(id: string, req: any): Promise<boolean>;
    findByStravaId(stravaId: string): Promise<{
        id: number;
        stravaId: string | null;
        date: Date;
        distance: number;
        duration: number;
        pace: number;
        notes: string | null;
        userId: string;
    } | null>;
}
