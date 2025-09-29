import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { Run } from "@prisma/client";

@Injectable()
export class RunsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(runData: {
    stravaId?: string;
    date: Date;
    distance: number;
    duration: number;
    pace: number;
    notes?: string;
    userId: string;
  }): Promise<Run> {
    return this.prisma.run.create({ data: runData });
  }

  async findAll(userId: string): Promise<Run[]> {
    return this.prisma.run.findMany({ where: { userId } });
  }

  async findOne(id: number, userId: string): Promise<Run | null> {
    return this.prisma.run.findUnique({ where: { id, userId } });
  }

  async update(
    id: number,
    userId: string,
    updateData: Partial<{
      stravaId: string;
      date: Date;
      distance: number;
      duration: number;
      pace: number;
      notes: string;
    }>
  ): Promise<Run | null> {
    // First, verify the run exists and belongs to the user
    const existingRun = await this.prisma.run.findUnique({
      where: { id, userId },
    });

    if (!existingRun) {
      return null;
    }

    return this.prisma.run.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: number, userId: string): Promise<boolean> {
    // First, verify the run exists and belongs to the user
    const existingRun = await this.prisma.run.findUnique({
      where: { id, userId },
    });

    if (!existingRun) {
      return false;
    }

    await this.prisma.run.delete({ where: { id } });
    return true;
  }

  async findByStravaId(stravaId: string): Promise<Run | null> {
    return this.prisma.run.findUnique({ where: { stravaId } });
  }
}
