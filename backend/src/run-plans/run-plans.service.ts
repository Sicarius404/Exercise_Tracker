import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { RunPlan } from "@prisma/client";

@Injectable()
export class RunPlansService {
  constructor(private readonly prisma: PrismaService) {}

  async create(runPlanData: {
    week: number;
    day: number;
    type: string;
    plannedTime?: number;
    plannedDistance?: number;
    userId: string;
  }): Promise<RunPlan> {
    return this.prisma.runPlan.create({ data: runPlanData });
  }

  async findAll(userId: string): Promise<RunPlan[]> {
    return this.prisma.runPlan.findMany({ where: { userId } });
  }

  async findOne(id: number, userId: string): Promise<RunPlan | null> {
    return this.prisma.runPlan.findUnique({ where: { id, userId } });
  }

  async update(
    id: number,
    userId: string,
    updateData: Partial<{
      week: number;
      day: number;
      type: string;
      plannedTime: number;
      plannedDistance: number;
      completedRunId: number;
    }>
  ): Promise<RunPlan | null> {
    const existingRunPlan = await this.prisma.runPlan.findUnique({
      where: { id, userId },
    });

    if (!existingRunPlan) {
      return null;
    }

    return this.prisma.runPlan.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: number, userId: string): Promise<boolean> {
    const existingRunPlan = await this.prisma.runPlan.findUnique({
      where: { id, userId },
    });

    if (!existingRunPlan) {
      return false;
    }

    await this.prisma.runPlan.delete({ where: { id } });
    return true;
  }
}
