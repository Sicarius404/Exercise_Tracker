import { Test, TestingModule } from "@nestjs/testing";
import { GymPlansService } from "./gym-plans.service";
import { PrismaService } from "src/database/prisma.service";

describe("GymPlansService", () => {
  let service: GymPlansService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GymPlansService,
        {
          provide: PrismaService,
          useValue: {
            gymPlan: {
              create: jest.fn().mockResolvedValue({}),
              findMany: jest.fn().mockResolvedValue([]),
            },
          },
        },
      ],
    }).compile();

    service = module.get<GymPlansService>(GymPlansService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("create", () => {
    it("should create a gym plan", async () => {
      const gymPlanData = {
        week: 1,
        day: 1,
        muscleGroup: "Legs",
        exercises: [],
        userId: 1,
      };
      await service.create(gymPlanData);
      expect(prisma.gymPlan.create).toHaveBeenCalled();
    });
  });

  describe("findAll", () => {
    it("should return an array of gym plans", async () => {
      const result = await service.findAll(1);
      expect(result).toEqual([]);
      expect(prisma.gymPlan.findMany).toHaveBeenCalledWith({
        where: { userId: 1 },
        include: { exercises: { include: { completed: true } } },
      });
    });
  });
});
