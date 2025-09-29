import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { GymPlan, Exercise, CompletedExercise, Prisma } from "@prisma/client";

const gymPlanWithExercises = Prisma.validator<Prisma.GymPlanDefaultArgs>()({
  include: { exercises: { include: { completed: true } } },
});

export type GymPlanWithExercises = Prisma.GymPlanGetPayload<
  typeof gymPlanWithExercises
>;

@Injectable()
export class GymPlansService {
  constructor(private readonly prisma: PrismaService) {}

  async create(gymPlanData: {
    week: number;
    day: number;
    muscleGroup: string;
    exercises: Omit<Exercise, "id" | "gymPlanId">[];
    userId: string;
  }): Promise<GymPlan> {
    return this.prisma.gymPlan.create({
      data: {
        ...gymPlanData,
        exercises: {
          create: gymPlanData.exercises,
        },
      },
      include: {
        exercises: true,
      },
    });
  }

  async findAll(userId: string): Promise<GymPlanWithExercises[]> {
    return this.prisma.gymPlan.findMany({
      where: { userId },
      include: { exercises: { include: { completed: true } } },
    });
  }

  async findOne(
    id: number,
    userId: string
  ): Promise<GymPlanWithExercises | null> {
    return this.prisma.gymPlan.findUnique({
      where: { id, userId },
      include: { exercises: { include: { completed: true } } },
    });
  }

  async update(
    id: number,
    userId: string,
    updateData: Partial<{
      week: number;
      day: number;
      muscleGroup: string;
    }>
  ): Promise<GymPlan | null> {
    const existingPlan = await this.prisma.gymPlan.findUnique({
      where: { id, userId },
    });
    if (!existingPlan) {
      return null;
    }
    return this.prisma.gymPlan.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: number, userId: string): Promise<boolean> {
    const existingPlan = await this.prisma.gymPlan.findUnique({
      where: { id, userId },
    });
    if (!existingPlan) {
      return false;
    }
    await this.prisma.gymPlan.delete({ where: { id } });
    return true;
  }

  async addExercise(
    gymPlanId: number,
    userId: string,
    exerciseData: Omit<Exercise, "id" | "gymPlanId">
  ): Promise<Exercise | null> {
    const plan = await this.prisma.gymPlan.findUnique({
      where: { id: gymPlanId, userId },
    });
    if (!plan) {
      return null;
    }
    return this.prisma.exercise.create({
      data: { ...exerciseData, gymPlanId },
    });
  }

  async updateExercise(
    exerciseId: number,
    userId: string,
    updateData: Partial<Omit<Exercise, "id" | "gymPlanId">>
  ): Promise<Exercise | null> {
    const exercise = await this.prisma.exercise.findUnique({
      where: { id: exerciseId },
      include: { gymPlan: true },
    });
    if (!exercise || exercise.gymPlan.userId !== userId) {
      return null;
    }
    return this.prisma.exercise.update({
      where: { id: exerciseId },
      data: updateData,
    });
  }

  async removeExercise(exerciseId: number, userId: string): Promise<boolean> {
    const exercise = await this.prisma.exercise.findUnique({
      where: { id: exerciseId },
      include: { gymPlan: true },
    });
    if (!exercise || exercise.gymPlan.userId !== userId) {
      return false;
    }
    await this.prisma.exercise.delete({ where: { id: exerciseId } });
    return true;
  }

  async completeExercise(
    exerciseId: number,
    userId: string,
    completedData: Omit<CompletedExercise, "id" | "exerciseId">
  ): Promise<CompletedExercise | null> {
    const exercise = await this.prisma.exercise.findUnique({
      where: { id: exerciseId },
      include: { gymPlan: true },
    });
    if (!exercise || exercise.gymPlan.userId !== userId) {
      return null;
    }
    return this.prisma.completedExercise.create({
      data: { ...completedData, exerciseId },
    });
  }
}
