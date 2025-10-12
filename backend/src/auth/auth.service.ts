import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";

/**
 * Provides authentication-related operations.
 */
@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Deletes all users and related data for development purposes.
   */
  async deleteAllUsers(): Promise<number> {
    const deletedUsers = await this.prismaService.$transaction(async (tx) => {
      await tx.completedExercise.deleteMany();
      await tx.exercise.deleteMany();
      await tx.gymPlan.deleteMany();
      await tx.runPlan.deleteMany();
      await tx.run.deleteMany();
      await tx.session.deleteMany();
      await tx.account.deleteMany();
      await tx.verification.deleteMany();
      return tx.user.deleteMany();
    });
    return deletedUsers.count;
  }
}
