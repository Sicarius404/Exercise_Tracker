import { Test, TestingModule } from "@nestjs/testing";
import { StatsService } from "./stats.service";
import { RunsService } from "src/runs/runs.service";
import { GymPlansService } from "src/gym-plans/gym-plans.service";
import { PrismaService } from "src/database/prisma.service";
import { CompletedExercise, Exercise, GymPlan, Run } from "@prisma/client";

describe("StatsService", () => {
  let service: StatsService;
  let runsService: { findAll: jest.Mock };
  let gymPlansService: { findAll: jest.Mock };
  let prismaServiceMock: { runPlan: { findMany: jest.Mock } };
  const baseDate = new Date("2024-01-01T00:00:00.000Z");

  const buildRun = (overrides?: Partial<Run>): Run => ({
    id: 1,
    userId: 1,
    date: baseDate,
    distance: 10,
    duration: 50,
    pace: 5,
    stravaId: null,
    notes: null,
    ...overrides,
  });

  const buildCompletedExercise = (
    overrides?: Partial<CompletedExercise>
  ): CompletedExercise => ({
    id: 1,
    exerciseId: 1,
    actualSets: 3,
    actualReps: 5,
    actualWeight: 100,
    notes: null,
    createdAt: baseDate,
    ...overrides,
  });

  const buildExercise = (
    overrides?: Partial<Exercise> & { completed?: CompletedExercise[] }
  ): Exercise & { completed: CompletedExercise[] } => {
    const baseExercise: Exercise = {
      id: 1,
      name: "Back Squat",
      sets: 3,
      reps: 5,
      weight: 100,
      gymPlanId: 1,
    } as Exercise;

    const completed = overrides?.completed ?? [];
    const exerciseOverrides = { ...overrides };
    delete (exerciseOverrides as { completed?: CompletedExercise[] }).completed;

    return {
      ...baseExercise,
      ...exerciseOverrides,
      completed,
    } as Exercise & { completed: CompletedExercise[] };
  };

  const buildGymPlan = (
    overrides?: Partial<GymPlan> & {
      exercises?: (Exercise & { completed: CompletedExercise[] })[];
    }
  ): GymPlan & {
    exercises: (Exercise & { completed: CompletedExercise[] })[];
  } => {
    const basePlan: GymPlan = {
      id: 1,
      userId: 1,
      week: 1,
      day: 1,
      muscleGroup: "Legs",
    } as GymPlan;

    const exercises = overrides?.exercises ?? [];
    const planOverrides = { ...overrides };
    delete (
      planOverrides as {
        exercises?: (Exercise & { completed: CompletedExercise[] })[];
      }
    ).exercises;

    return {
      ...basePlan,
      ...planOverrides,
      exercises,
    } as GymPlan & {
      exercises: (Exercise & { completed: CompletedExercise[] })[];
    };
  };

  beforeEach(async () => {
    runsService = { findAll: jest.fn() };
    gymPlansService = { findAll: jest.fn() };
    prismaServiceMock = {
      runPlan: {
        findMany: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StatsService,
        {
          provide: RunsService,
          useValue: runsService,
        },
        {
          provide: GymPlansService,
          useValue: gymPlansService,
        },
        {
          provide: PrismaService,
          useValue: prismaServiceMock,
        },
      ],
    }).compile();

    service = module.get<StatsService>(StatsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("getWeeklyStats", () => {
    it("should aggregate weekly stats", async () => {
      const runs: Run[] = [
        buildRun(),
        buildRun({
          id: 2,
          distance: 5,
          duration: 25,
          date: new Date(baseDate.getTime() + 2 * 24 * 60 * 60 * 1000),
        }),
      ];
      const completed = buildCompletedExercise();
      const exercises = [buildExercise({ completed: [completed] })];
      const gymPlans = [buildGymPlan({ exercises })];
      runsService.findAll.mockResolvedValueOnce(runs);
      gymPlansService.findAll.mockResolvedValueOnce(gymPlans);
      prismaServiceMock.runPlan.findMany.mockResolvedValueOnce([]);

      const actual = await service.getWeeklyStats(1, baseDate);
      expect(actual).toEqual({
        totalMileage: 15,
        averagePace: 37.5,
        totalWeightLifted: 300,
        runCount: 2,
        completedExercises: 1,
      });
    });

    it("should handle missing data gracefully", async () => {
      runsService.findAll.mockResolvedValueOnce([]);
      gymPlansService.findAll.mockResolvedValueOnce([]);
      prismaServiceMock.runPlan.findMany.mockResolvedValueOnce([]);
      const actual = await service.getWeeklyStats(1, baseDate);
      expect(actual).toEqual({
        totalMileage: 0,
        averagePace: 0,
        totalWeightLifted: 0,
        runCount: 0,
        completedExercises: 0,
      });
    });
  });

  describe("getPersonalRecords", () => {
    it("should calculate running PRs and heaviest lifts", async () => {
      const runs: Run[] = [
        buildRun({ id: 1, distance: 5, duration: 24 }),
        buildRun({ id: 2, distance: 10, duration: 55 }),
        buildRun({ id: 3, distance: 42.2, duration: 200 }),
      ];
      const squatExercise = buildExercise({
        id: 1,
        name: "Back Squat",
        completed: [buildCompletedExercise({ actualWeight: 150 })],
      });
      const benchExercise = buildExercise({
        id: 2,
        name: "Bench Press",
        completed: [buildCompletedExercise({ id: 2, actualWeight: 110 })],
      });
      const deadliftExercise = buildExercise({
        id: 3,
        name: "Deadlift",
        completed: [buildCompletedExercise({ id: 3, actualWeight: 200 })],
      });
      const gymPlans = [
        buildGymPlan({
          exercises: [squatExercise, benchExercise, deadliftExercise],
        }),
      ];
      runsService.findAll.mockResolvedValueOnce(runs);
      gymPlansService.findAll.mockResolvedValueOnce(gymPlans);
      prismaServiceMock.runPlan.findMany.mockResolvedValueOnce([]);

      const actual = await service.getPersonalRecords(1);
      expect(actual).toEqual({
        fastest5k: 24,
        fastest10k: 55,
        fastestMarathon: 200,
        heaviestSquat: 150,
        heaviestBench: 110,
        heaviestDeadlift: 200,
      });
    });

    it("should return nulls when no records exist", async () => {
      runsService.findAll.mockResolvedValueOnce([]);
      gymPlansService.findAll.mockResolvedValueOnce([]);
      prismaServiceMock.runPlan.findMany.mockResolvedValueOnce([]);
      const actual = await service.getPersonalRecords(1);
      expect(actual).toEqual({
        fastest5k: null,
        fastest10k: null,
        fastestMarathon: null,
        heaviestSquat: null,
        heaviestBench: null,
        heaviestDeadlift: null,
      });
    });
  });

  describe("getCalendarView", () => {
    it("should build planned and completed workouts", async () => {
      const userId = 1;
      const month = 0;
      const year = 2024;
      const runs: Run[] = [
        buildRun({
          id: 1,
          date: new Date("2024-01-05T00:00:00.000Z"),
          distance: 10,
          duration: 50,
        }),
      ];
      const completedExercise = buildCompletedExercise({
        id: 1,
        actualSets: 3,
        actualReps: 8,
        actualWeight: 80,
        createdAt: new Date("2024-01-02T00:00:00.000Z"),
      });
      const gymPlans = [
        buildGymPlan({
          day: 2,
          muscleGroup: "Upper",
          exercises: [
            buildExercise({
              id: 1,
              name: "Bench Press",
              sets: 3,
              reps: 8,
              weight: 80,
              completed: [completedExercise],
            }),
          ],
        }),
      ];
      runsService.findAll.mockResolvedValueOnce(runs);
      gymPlansService.findAll.mockResolvedValueOnce(gymPlans);
      prismaServiceMock.runPlan.findMany.mockResolvedValueOnce([
        {
          id: 10,
          userId,
          week: 1,
          day: 5,
          type: "Tempo",
          plannedTime: 45,
          plannedDistance: 8,
          completedRunId: null,
        },
      ]);

      const actual = await service.getCalendarView(userId, month, year);
      expect(actual.plannedWorkouts).toHaveLength(2);
      expect(actual.completedWorkouts).toHaveLength(2);
      expect(actual.completedWorkouts[0]).toMatchObject({
        type: "run",
        completed: true,
      });
    });
  });

  describe("getMonthlySummary", () => {
    it("should aggregate monthly summary", async () => {
      const month = 0;
      const year = 2024;
      const runs: Run[] = [
        buildRun({
          id: 1,
          date: new Date("2024-01-05T00:00:00.000Z"),
          distance: 12,
          duration: 60,
        }),
      ];
      const completedExercise = buildCompletedExercise({
        id: 1,
        actualSets: 4,
        actualReps: 6,
        actualWeight: 90,
        createdAt: new Date("2024-01-05T00:00:00.000Z"),
      });
      const gymPlans = [
        buildGymPlan({
          day: 3,
          muscleGroup: "Legs",
          exercises: [
            buildExercise({
              id: 1,
              name: "Squat",
              sets: 4,
              reps: 6,
              weight: 90,
              completed: [completedExercise],
            }),
          ],
        }),
      ];
      runsService.findAll.mockResolvedValueOnce(runs);
      gymPlansService.findAll.mockResolvedValueOnce(gymPlans);
      prismaServiceMock.runPlan.findMany.mockResolvedValueOnce([]);

      const actual = await service.getMonthlySummary(1, month, year);
      expect(actual).toEqual({
        totalRuns: 1,
        totalDistance: 12,
        totalGymSessions: 1,
        totalWeightLifted: 360,
        averagePace: 60,
      });
    });
  });
});
