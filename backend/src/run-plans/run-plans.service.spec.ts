import { Test, TestingModule } from "@nestjs/testing";
import { RunPlansService } from "./run-plans.service";
import { PrismaService } from "src/database/prisma.service";
import { RunPlan } from "@prisma/client";

describe("RunPlansService", () => {
  let service: RunPlansService;
  let prismaMock: {
    runPlan: {
      create: jest.Mock;
      findMany: jest.Mock;
      findUnique: jest.Mock;
      update: jest.Mock;
      delete: jest.Mock;
    };
  };

  const buildRunPlan = (overrides?: Partial<RunPlan>): RunPlan => ({
    id: 1,
    week: 1,
    day: 1,
    type: "Tempo",
    plannedTime: 45,
    plannedDistance: 8,
    completedRunId: null,
    userId: 1,
    ...overrides,
  });

  beforeEach(async () => {
    prismaMock = {
      runPlan: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RunPlansService,
        {
          provide: PrismaService,
          useValue: prismaMock as unknown as PrismaService,
        },
      ],
    }).compile();

    service = module.get<RunPlansService>(RunPlansService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("create", () => {
    it("should create a run plan", async () => {
      const runPlanData = {
        week: 1,
        day: 1,
        type: "Tempo",
        plannedTime: 45,
        plannedDistance: 8,
        userId: 1,
      };
      const created = buildRunPlan();
      prismaMock.runPlan.create.mockResolvedValueOnce(created);
      const actual = await service.create(runPlanData);
      expect(actual).toEqual(created);
      expect(prismaMock.runPlan.create).toHaveBeenCalledWith({
        data: runPlanData,
      });
    });
  });

  describe("findAll", () => {
    it("should return run plans for user", async () => {
      const plans: RunPlan[] = [buildRunPlan({ id: 2, userId: 2, day: 2 })];
      prismaMock.runPlan.findMany.mockResolvedValueOnce(plans);
      const actual = await service.findAll(2);
      expect(actual).toEqual(plans);
      expect(prismaMock.runPlan.findMany).toHaveBeenCalledWith({
        where: { userId: 2 },
      });
    });
  });

  describe("findOne", () => {
    it("should return a specific run plan", async () => {
      const plan = buildRunPlan({
        id: 4,
        userId: 8,
        week: 2,
        day: 3,
        type: "Recovery",
        plannedTime: 30,
        plannedDistance: 5,
      });
      prismaMock.runPlan.findUnique.mockResolvedValueOnce(plan);
      const actual = await service.findOne(4, 8);
      expect(actual).toEqual(plan);
      expect(prismaMock.runPlan.findUnique).toHaveBeenCalledWith({
        where: { id: 4, userId: 8 },
      });
    });

    it("should return null when not found", async () => {
      prismaMock.runPlan.findUnique.mockResolvedValueOnce(null);
      const actual = await service.findOne(4, 8);
      expect(actual).toBeNull();
    });
  });

  describe("update", () => {
    it("should update an existing run plan", async () => {
      const existing = buildRunPlan({
        id: 5,
        userId: 9,
        week: 3,
        day: 1,
        type: "Long Run",
        plannedTime: 90,
        plannedDistance: 18,
      });
      const updated = { ...existing, plannedDistance: 20 };
      prismaMock.runPlan.findUnique.mockResolvedValueOnce(existing);
      prismaMock.runPlan.update.mockResolvedValueOnce(updated);
      const actual = await service.update(5, 9, { plannedDistance: 20 });
      expect(actual).toEqual(updated);
      expect(prismaMock.runPlan.update).toHaveBeenCalledWith({
        where: { id: 5 },
        data: { plannedDistance: 20 },
      });
    });

    it("should return null when run plan does not exist", async () => {
      prismaMock.runPlan.findUnique.mockResolvedValueOnce(null);
      const actual = await service.update(5, 9, { plannedDistance: 20 });
      expect(actual).toBeNull();
      expect(prismaMock.runPlan.update).not.toHaveBeenCalled();
    });
  });

  describe("remove", () => {
    it("should delete run plan when exists", async () => {
      const existing = buildRunPlan({
        id: 6,
        userId: 4,
        week: 2,
        day: 5,
        type: "Intervals",
        plannedTime: 60,
        plannedDistance: 10,
      });
      prismaMock.runPlan.findUnique.mockResolvedValueOnce(existing);
      prismaMock.runPlan.delete.mockResolvedValueOnce(existing);
      const actual = await service.remove(6, 4);
      expect(actual).toBe(true);
      expect(prismaMock.runPlan.delete).toHaveBeenCalledWith({
        where: { id: 6 },
      });
    });

    it("should return false when run plan not found", async () => {
      prismaMock.runPlan.findUnique.mockResolvedValueOnce(null);
      const actual = await service.remove(6, 4);
      expect(actual).toBe(false);
      expect(prismaMock.runPlan.delete).not.toHaveBeenCalled();
    });
  });
});
