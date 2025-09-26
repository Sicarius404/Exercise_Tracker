import { Test, TestingModule } from "@nestjs/testing";
import { GymPlansService, GymPlanWithExercises } from "./gym-plans.service";
import { PrismaService } from "src/database/prisma.service";
import { CompletedExercise, Exercise, GymPlan } from "@prisma/client";

describe("GymPlansService", () => {
  let service: GymPlansService;
  let prismaMock: {
    gymPlan: {
      create: jest.Mock;
      findMany: jest.Mock;
      findUnique: jest.Mock;
      update: jest.Mock;
      delete: jest.Mock;
    };
    exercise: {
      create: jest.Mock;
      findUnique: jest.Mock;
      update: jest.Mock;
      delete: jest.Mock;
    };
    completedExercise: {
      create: jest.Mock;
    };
  };

  const buildExercise = (overrides?: Partial<Exercise>): Exercise => ({
    id: 1,
    name: "Back Squat",
    sets: 5,
    reps: 5,
    weight: 100,
    gymPlanId: 1,
    ...overrides,
  });

  const buildCompletedExercise = (
    overrides?: Partial<CompletedExercise>
  ): CompletedExercise => ({
    id: 1,
    exerciseId: 1,
    actualSets: 5,
    actualReps: 5,
    actualWeight: 120,
    notes: null,
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
    ...overrides,
  });

  beforeEach(async () => {
    prismaMock = {
      gymPlan: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
      exercise: {
        create: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
      completedExercise: {
        create: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GymPlansService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<GymPlansService>(GymPlansService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("create", () => {
    it("should create a gym plan with exercises", async () => {
      const gymPlanData = {
        week: 1,
        day: 1,
        muscleGroup: "Legs",
        exercises: [
          {
            name: "Back Squat",
            sets: 5,
            reps: 5,
            weight: 100,
          },
        ],
        userId: 4,
      };
      const created: GymPlan = {
        id: 99,
        week: 1,
        day: 1,
        muscleGroup: "Legs",
        userId: 4,
      };
      prismaMock.gymPlan.create.mockResolvedValueOnce(created);
      const actual = await service.create(gymPlanData);
      expect(prismaMock.gymPlan.create).toHaveBeenCalledWith({
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
      expect(actual).toEqual(created);
    });
  });

  describe("findAll", () => {
    it("should return all gym plans for a user", async () => {
      const plans: GymPlanWithExercises[] = [
        {
          id: 1,
          week: 1,
          day: 1,
          muscleGroup: "Legs",
          userId: 7,
          exercises: [],
        },
      ];
      prismaMock.gymPlan.findMany.mockResolvedValueOnce(plans);
      const actual = await service.findAll(7);
      expect(actual).toEqual(plans);
      expect(prismaMock.gymPlan.findMany).toHaveBeenCalledWith({
        where: { userId: 7 },
        include: { exercises: { include: { completed: true } } },
      });
    });
  });

  describe("findOne", () => {
    it("should return a gym plan when found", async () => {
      const plan: GymPlanWithExercises = {
        id: 2,
        week: 2,
        day: 3,
        muscleGroup: "Push",
        userId: 8,
        exercises: [],
      };
      prismaMock.gymPlan.findUnique.mockResolvedValueOnce(plan);
      const actual = await service.findOne(2, 8);
      expect(actual).toEqual(plan);
      expect(prismaMock.gymPlan.findUnique).toHaveBeenCalledWith({
        where: { id: 2, userId: 8 },
        include: { exercises: { include: { completed: true } } },
      });
    });

    it("should return null when plan is missing", async () => {
      prismaMock.gymPlan.findUnique.mockResolvedValueOnce(null);
      const actual = await service.findOne(2, 8);
      expect(actual).toBeNull();
    });
  });

  describe("update", () => {
    it("should update an existing gym plan", async () => {
      const existing: GymPlan = {
        id: 3,
        week: 3,
        day: 4,
        muscleGroup: "Pull",
        userId: 9,
      };
      const updated: GymPlan = { ...existing, muscleGroup: "Legs" };
      prismaMock.gymPlan.findUnique.mockResolvedValueOnce(existing);
      prismaMock.gymPlan.update.mockResolvedValueOnce(updated);
      const actual = await service.update(3, 9, { muscleGroup: "Legs" });
      expect(actual).toEqual(updated);
      expect(prismaMock.gymPlan.update).toHaveBeenCalledWith({
        where: { id: 3 },
        data: { muscleGroup: "Legs" },
      });
    });

    it("should return null when plan is not found", async () => {
      prismaMock.gymPlan.findUnique.mockResolvedValueOnce(null);
      const actual = await service.update(3, 9, { muscleGroup: "Legs" });
      expect(actual).toBeNull();
      expect(prismaMock.gymPlan.update).not.toHaveBeenCalled();
    });
  });

  describe("remove", () => {
    it("should delete an existing gym plan", async () => {
      const existing: GymPlan = {
        id: 11,
        week: 1,
        day: 2,
        muscleGroup: "Legs",
        userId: 5,
      };
      prismaMock.gymPlan.findUnique.mockResolvedValueOnce(existing);
      prismaMock.gymPlan.delete.mockResolvedValueOnce(existing);
      const actual = await service.remove(11, 5);
      expect(actual).toBe(true);
      expect(prismaMock.gymPlan.delete).toHaveBeenCalledWith({
        where: { id: 11 },
      });
    });

    it("should return false when plan is not found", async () => {
      prismaMock.gymPlan.findUnique.mockResolvedValueOnce(null);
      const actual = await service.remove(11, 5);
      expect(actual).toBe(false);
      expect(prismaMock.gymPlan.delete).not.toHaveBeenCalled();
    });
  });

  describe("addExercise", () => {
    it("should add exercise when plan belongs to user", async () => {
      const plan: GymPlan = {
        id: 10,
        week: 1,
        day: 2,
        muscleGroup: "Legs",
        userId: 6,
      };
      const createdExercise = buildExercise({ id: 6, gymPlanId: 10 });
      prismaMock.gymPlan.findUnique.mockResolvedValueOnce(plan);
      prismaMock.exercise.create.mockResolvedValueOnce(createdExercise);
      const actual = await service.addExercise(10, 6, {
        name: createdExercise.name,
        sets: createdExercise.sets,
        reps: createdExercise.reps,
        weight: createdExercise.weight,
      });
      expect(actual).toEqual(createdExercise);
      expect(prismaMock.exercise.create).toHaveBeenCalledWith({
        data: {
          name: createdExercise.name,
          sets: createdExercise.sets,
          reps: createdExercise.reps,
          weight: createdExercise.weight,
          gymPlanId: 10,
        },
      });
    });

    it("should return null when plan does not belong to user", async () => {
      prismaMock.gymPlan.findUnique.mockResolvedValueOnce(null);
      const actual = await service.addExercise(10, 6, {
        name: "Bench Press",
        sets: 3,
        reps: 10,
        weight: 60,
      });
      expect(actual).toBeNull();
      expect(prismaMock.exercise.create).not.toHaveBeenCalled();
    });
  });

  describe("updateExercise", () => {
    it("should update exercise when user owns plan", async () => {
      const exerciseWithPlan = {
        ...buildExercise({ id: 5 }),
        gymPlan: {
          id: 10,
          userId: 3,
          week: 1,
          day: 2,
          muscleGroup: "Legs",
        },
      } as Exercise & { gymPlan: GymPlan };
      const updatedExercise = buildExercise({ id: 5, weight: 110 });
      prismaMock.exercise.findUnique.mockResolvedValueOnce(exerciseWithPlan);
      prismaMock.exercise.update.mockResolvedValueOnce(updatedExercise);
      const actual = await service.updateExercise(5, 3, { weight: 110 });
      expect(actual).toEqual(updatedExercise);
      expect(prismaMock.exercise.update).toHaveBeenCalledWith({
        where: { id: 5 },
        data: { weight: 110 },
      });
    });

    it("should return null when exercise is not found", async () => {
      prismaMock.exercise.findUnique.mockResolvedValueOnce(null);
      const actual = await service.updateExercise(5, 3, { weight: 110 });
      expect(actual).toBeNull();
      expect(prismaMock.exercise.update).not.toHaveBeenCalled();
    });

    it("should return null when exercise does not belong to user", async () => {
      const exerciseWithPlan = {
        ...buildExercise({ id: 5 }),
        gymPlan: {
          id: 10,
          userId: 9,
          week: 1,
          day: 2,
          muscleGroup: "Legs",
        },
      } as Exercise & { gymPlan: GymPlan };
      prismaMock.exercise.findUnique.mockResolvedValueOnce(exerciseWithPlan);
      const actual = await service.updateExercise(5, 3, { weight: 110 });
      expect(actual).toBeNull();
      expect(prismaMock.exercise.update).not.toHaveBeenCalled();
    });
  });

  describe("removeExercise", () => {
    it("should delete exercise when user owns plan", async () => {
      const exerciseWithPlan = {
        ...buildExercise({ id: 5 }),
        gymPlan: {
          id: 10,
          userId: 7,
          week: 1,
          day: 2,
          muscleGroup: "Legs",
        },
      } as Exercise & { gymPlan: GymPlan };
      prismaMock.exercise.findUnique.mockResolvedValueOnce(exerciseWithPlan);
      prismaMock.exercise.delete.mockResolvedValueOnce(
        buildExercise({ id: 5 })
      );
      const actual = await service.removeExercise(5, 7);
      expect(actual).toBe(true);
      expect(prismaMock.exercise.delete).toHaveBeenCalledWith({
        where: { id: 5 },
      });
    });

    it("should return false when exercise is not found", async () => {
      prismaMock.exercise.findUnique.mockResolvedValueOnce(null);
      const actual = await service.removeExercise(5, 7);
      expect(actual).toBe(false);
      expect(prismaMock.exercise.delete).not.toHaveBeenCalled();
    });

    it("should return false when user does not own exercise", async () => {
      const exerciseWithPlan = {
        ...buildExercise({ id: 5 }),
        gymPlan: {
          id: 10,
          userId: 4,
          week: 1,
          day: 2,
          muscleGroup: "Legs",
        },
      } as Exercise & { gymPlan: GymPlan };
      prismaMock.exercise.findUnique.mockResolvedValueOnce(exerciseWithPlan);
      const actual = await service.removeExercise(5, 7);
      expect(actual).toBe(false);
      expect(prismaMock.exercise.delete).not.toHaveBeenCalled();
    });
  });

  describe("completeExercise", () => {
    it("should create a completed exercise entry", async () => {
      const completed = buildCompletedExercise();
      const exerciseWithPlan = {
        ...buildExercise({ id: 5 }),
        gymPlan: {
          id: 10,
          userId: 2,
          week: 1,
          day: 2,
          muscleGroup: "Legs",
        },
      } as Exercise & { gymPlan: GymPlan };
      prismaMock.exercise.findUnique.mockResolvedValueOnce(exerciseWithPlan);
      prismaMock.completedExercise.create.mockResolvedValueOnce(completed);
      const actual = await service.completeExercise(5, 2, {
        actualReps: completed.actualReps,
        actualSets: completed.actualSets,
        actualWeight: completed.actualWeight,
        notes: completed.notes,
        createdAt: completed.createdAt,
      });
      expect(actual).toEqual(completed);
      expect(prismaMock.completedExercise.create).toHaveBeenCalledWith({
        data: {
          actualReps: completed.actualReps,
          actualSets: completed.actualSets,
          actualWeight: completed.actualWeight,
          notes: completed.notes,
          createdAt: completed.createdAt,
          exerciseId: 5,
        },
      });
    });

    it("should return null when exercise is not owned by user", async () => {
      const exerciseWithPlan = {
        ...buildExercise({ id: 5 }),
        gymPlan: {
          id: 10,
          userId: 9,
          week: 1,
          day: 2,
          muscleGroup: "Legs",
        },
      } as Exercise & { gymPlan: GymPlan };
      prismaMock.exercise.findUnique.mockResolvedValueOnce(exerciseWithPlan);
      const actual = await service.completeExercise(5, 2, {
        actualReps: 5,
        actualSets: 5,
        actualWeight: 120,
        notes: null,
        createdAt: new Date("2024-01-01T00:00:00.000Z"),
      });
      expect(actual).toBeNull();
      expect(prismaMock.completedExercise.create).not.toHaveBeenCalled();
    });
  });
});
