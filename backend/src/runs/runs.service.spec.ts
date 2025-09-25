import { Test, TestingModule } from "@nestjs/testing";
import { RunsService } from "./runs.service";
import { PrismaService } from "src/database/prisma.service";

describe("RunsService", () => {
  let service: RunsService;
  let prisma: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RunsService,
        {
          provide: PrismaService,
          useValue: {
            run: {
              create: jest.fn().mockResolvedValue({}),
              findMany: jest.fn().mockResolvedValue([]),
              findUnique: jest.fn().mockResolvedValue(null),
              update: jest.fn().mockResolvedValue({}),
              delete: jest.fn().mockResolvedValue({}),
            },
          },
        },
      ],
    }).compile();

    service = module.get<RunsService>(RunsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("create", () => {
    it("should create a run", async () => {
      const runData = {
        date: new Date(),
        distance: 5,
        duration: 25,
        pace: 5,
        userId: 1,
      };
      await service.create(runData);
      expect(prisma.run.create).toHaveBeenCalledWith({ data: runData });
    });
  });

  describe("findAll", () => {
    it("should return an array of runs", async () => {
      const result = await service.findAll(1);
      expect(result).toEqual([]);
      expect(prisma.run.findMany).toHaveBeenCalledWith({
        where: { userId: 1 },
      });
    });
  });
});
