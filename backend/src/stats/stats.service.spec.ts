import { Test, TestingModule } from "@nestjs/testing";
import { StatsService } from "./stats.service";
import { RunsService } from "src/runs/runs.service";
import { GymPlansService } from "src/gym-plans/gym-plans.service";
import { PrismaService } from "src/database/prisma.service";

describe("StatsService", () => {
  let service: StatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StatsService,
        {
          provide: RunsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
          },
        },
        {
          provide: GymPlansService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
          },
        },
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<StatsService>(StatsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("getWeeklyStats", () => {
    it("should return correct weekly stats", async () => {
      const result = await service.getWeeklyStats(1, new Date());
      expect(result).toEqual({
        totalMileage: 0,
        averagePace: 0,
        totalWeightLifted: 0,
        runCount: 0,
        completedExercises: 0,
      });
    });
  });

  describe("getPersonalRecords", () => {
    it("should return correct personal records", async () => {
      const result = await service.getPersonalRecords(1);
      expect(result).toEqual({
        fastest5k: null,
        fastest10k: null,
        fastestMarathon: null,
        heaviestSquat: null,
        heaviestBench: null,
        heaviestDeadlift: null,
      });
    });
  });
});
