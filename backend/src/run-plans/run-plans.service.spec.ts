import { Test, TestingModule } from "@nestjs/testing";
import { RunPlansService } from "./run-plans.service";
import { PrismaService } from "src/database/prisma.service";

describe("RunPlansService", () => {
  let service: RunPlansService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RunPlansService,
        {
          provide: PrismaService,
          useValue: {
            runPlan: {
              create: jest.fn().mockResolvedValue({}),
              findMany: jest.fn().mockResolvedValue([]),
            },
          },
        },
      ],
    }).compile();

    service = module.get<RunPlansService>(RunPlansService);
    prisma = module.get<PrismaService>(PrismaService);
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
        userId: 1,
      };
      await service.create(runPlanData);
      expect(prisma.runPlan.create).toHaveBeenCalled();
    });
  });

  describe("findAll", () => {
    it("should return an array of run plans", async () => {
      const result = await service.findAll(1);
      expect(result).toEqual([]);
      expect(prisma.runPlan.findMany).toHaveBeenCalledWith({
        where: { userId: 1 },
      });
    });
  });
});
