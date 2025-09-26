import { Test, TestingModule } from "@nestjs/testing";
import { RunsService } from "./runs.service";
import { PrismaService } from "src/database/prisma.service";
import { Run } from "@prisma/client";

describe("RunsService", () => {
  let service: RunsService;
  let prismaMock: {
    run: {
      create: jest.Mock;
      findMany: jest.Mock;
      findUnique: jest.Mock;
      update: jest.Mock;
      delete: jest.Mock;
    };
  };

  const buildRun = (overrides?: Partial<Run>): Run => ({
    id: 1,
    userId: 1,
    date: new Date("2024-01-01T00:00:00.000Z"),
    distance: 5,
    duration: 25,
    pace: 5,
    stravaId: null,
    notes: null,
    ...overrides,
  });

  beforeEach(async () => {
    prismaMock = {
      run: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RunsService,
        {
          provide: PrismaService,
          useValue: prismaMock as unknown as PrismaService,
        },
      ],
    }).compile();

    service = module.get<RunsService>(RunsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("create", () => {
    it("should create a run", async () => {
      const runData = {
        date: new Date("2024-01-01T00:00:00.000Z"),
        distance: 5,
        duration: 25,
        pace: 5,
        stravaId: "123",
        notes: "Tempo run",
        userId: 1,
      };
      const created = buildRun({ id: 9, ...runData });
      prismaMock.run.create.mockResolvedValueOnce(created);
      const actual = await service.create(runData);
      expect(actual).toEqual(created);
      expect(prismaMock.run.create).toHaveBeenCalledWith({ data: runData });
    });
  });

  describe("findAll", () => {
    it("should return all runs for user", async () => {
      const runs: Run[] = [
        buildRun({
          id: 2,
          userId: 2,
          date: new Date("2024-01-02T00:00:00.000Z"),
          distance: 10,
          duration: 50,
        }),
      ];
      prismaMock.run.findMany.mockResolvedValueOnce(runs);
      const actual = await service.findAll(2);
      expect(actual).toEqual(runs);
      expect(prismaMock.run.findMany).toHaveBeenCalledWith({
        where: { userId: 2 },
      });
    });
  });

  describe("findOne", () => {
    it("should return a run when found", async () => {
      const run = buildRun({
        id: 3,
        userId: 4,
        date: new Date("2024-01-03T00:00:00.000Z"),
        distance: 8,
        duration: 40,
      });
      prismaMock.run.findUnique.mockResolvedValueOnce(run);
      const actual = await service.findOne(3, 4);
      expect(actual).toEqual(run);
      expect(prismaMock.run.findUnique).toHaveBeenCalledWith({
        where: { id: 3, userId: 4 },
      });
    });

    it("should return null when run is missing", async () => {
      prismaMock.run.findUnique.mockResolvedValueOnce(null);
      const actual = await service.findOne(3, 4);
      expect(actual).toBeNull();
    });
  });

  describe("update", () => {
    it("should update a run when user owns it", async () => {
      const existing = buildRun({
        id: 4,
        userId: 5,
        distance: 6,
        duration: 32,
        pace: 5.33,
      });
      const updated = { ...existing, notes: "Felt strong" };
      prismaMock.run.findUnique.mockResolvedValueOnce(existing);
      prismaMock.run.update.mockResolvedValueOnce(updated);
      const actual = await service.update(4, 5, { notes: "Felt strong" });
      expect(actual).toEqual(updated);
      expect(prismaMock.run.update).toHaveBeenCalledWith({
        where: { id: 4 },
        data: { notes: "Felt strong" },
      });
    });

    it("should return null when run does not exist", async () => {
      prismaMock.run.findUnique.mockResolvedValueOnce(null);
      const actual = await service.update(4, 5, { notes: "Felt strong" });
      expect(actual).toBeNull();
      expect(prismaMock.run.update).not.toHaveBeenCalled();
    });
  });

  describe("remove", () => {
    it("should delete run when owned by user", async () => {
      const existing = buildRun({
        id: 5,
        userId: 6,
        distance: 12,
        duration: 60,
      });
      prismaMock.run.findUnique.mockResolvedValueOnce(existing);
      prismaMock.run.delete.mockResolvedValueOnce(existing);
      const actual = await service.remove(5, 6);
      expect(actual).toBe(true);
      expect(prismaMock.run.delete).toHaveBeenCalledWith({ where: { id: 5 } });
    });

    it("should return false when run does not exist", async () => {
      prismaMock.run.findUnique.mockResolvedValueOnce(null);
      const actual = await service.remove(5, 6);
      expect(actual).toBe(false);
      expect(prismaMock.run.delete).not.toHaveBeenCalled();
    });
  });

  describe("findByStravaId", () => {
    it("should return run by strava id", async () => {
      const run = buildRun({ id: 6, userId: 7, stravaId: "strava-1" });
      prismaMock.run.findUnique.mockResolvedValueOnce(run);
      const actual = await service.findByStravaId("strava-1");
      expect(actual).toEqual(run);
      expect(prismaMock.run.findUnique).toHaveBeenCalledWith({
        where: { stravaId: "strava-1" },
      });
    });
  });
});
