import { PrismaService } from "src/database/prisma.service";
import { Run } from "@prisma/client";
export declare class RunsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(runData: {
        stravaId?: string;
        date: Date;
        distance: number;
        duration: number;
        pace: number;
        notes?: string;
        userId: string;
    }): Promise<Run>;
    findAll(userId: string): Promise<Run[]>;
    findOne(id: number, userId: string): Promise<Run | null>;
    update(id: number, userId: string, updateData: Partial<{
        stravaId: string;
        date: Date;
        distance: number;
        duration: number;
        pace: number;
        notes: string;
    }>): Promise<Run | null>;
    remove(id: number, userId: string): Promise<boolean>;
    findByStravaId(stravaId: string): Promise<Run | null>;
}
