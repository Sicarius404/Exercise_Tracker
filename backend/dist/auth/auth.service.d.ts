import { PrismaService } from "src/database/prisma.service";
export declare class AuthService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    deleteAllUsers(): Promise<number>;
}
