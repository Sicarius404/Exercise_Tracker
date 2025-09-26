import { Test, TestingModule } from "@nestjs/testing";
import { StravaService } from "./strava.service";
import { RunsService } from "src/runs/runs.service";
import { HttpException, HttpStatus } from "@nestjs/common";

describe("StravaService", () => {
  let service: StravaService;
  let runsService: { findByStravaId: jest.Mock; create: jest.Mock };
  const originalEnv = process.env;

  beforeEach(async () => {
    jest.resetModules();
    process.env = {
      ...originalEnv,
      STRAVA_CLIENT_ID: "client-id",
      STRAVA_CLIENT_SECRET: "client-secret",
    };
    runsService = {
      findByStravaId: jest.fn(),
      create: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StravaService,
        {
          provide: RunsService,
          useValue: runsService,
        },
      ],
    }).compile();

    service = module.get<StravaService>(StravaService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
    process.env = originalEnv;
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("exchangeCodeForToken", () => {
    it("should exchange code for token", async () => {
      const responseMock = {
        ok: true,
        json: jest.fn().mockResolvedValue({ access_token: "token" }),
      } as unknown as Response;
      jest.spyOn(global, "fetch").mockResolvedValueOnce(responseMock);
      const actual = await service.exchangeCodeForToken("code");
      expect(actual).toEqual({ access_token: "token" });
    });

    it("should throw when response is not ok", async () => {
      const errorResponse = {
        ok: false,
      } as unknown as Response;
      jest.spyOn(global, "fetch").mockResolvedValueOnce(errorResponse);
      await expect(service.exchangeCodeForToken("code")).rejects.toThrow(
        new HttpException(
          "Strava authentication failed",
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
    });
  });

  describe("refreshToken", () => {
    it("should refresh token", async () => {
      const responseMock = {
        ok: true,
        json: jest.fn().mockResolvedValue({ access_token: "new-token" }),
      } as unknown as Response;
      jest.spyOn(global, "fetch").mockResolvedValueOnce(responseMock);
      const actual = await service.refreshToken("refresh");
      expect(actual).toEqual({ access_token: "new-token" });
    });

    it("should throw when refresh fails", async () => {
      const errorResponse = {
        ok: false,
      } as unknown as Response;
      jest.spyOn(global, "fetch").mockResolvedValueOnce(errorResponse);
      await expect(service.refreshToken("refresh")).rejects.toThrow(
        new HttpException(
          "Token refresh failed",
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
    });
  });

  describe("getActivities", () => {
    it("should fetch activities", async () => {
      const activities = [{ id: 1 }];
      const responseMock = {
        ok: true,
        json: jest.fn().mockResolvedValue(activities),
      } as unknown as Response;
      jest.spyOn(global, "fetch").mockResolvedValueOnce(responseMock);
      const actual = await service.getActivities("token");
      expect(actual).toEqual(activities);
    });

    it("should throw when fetch fails", async () => {
      const errorResponse = {
        ok: false,
      } as unknown as Response;
      jest.spyOn(global, "fetch").mockResolvedValueOnce(errorResponse);
      await expect(service.getActivities("token")).rejects.toThrow(
        new HttpException(
          "Failed to fetch Strava activities",
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
    });
  });

  describe("getActivity", () => {
    it("should fetch activity", async () => {
      const activity = { id: 1 };
      const responseMock = {
        ok: true,
        json: jest.fn().mockResolvedValue(activity),
      } as unknown as Response;
      jest.spyOn(global, "fetch").mockResolvedValueOnce(responseMock);
      const actual = await service.getActivity("token", "1");
      expect(actual).toEqual(activity);
    });

    it("should throw when activity fetch fails", async () => {
      const errorResponse = {
        ok: false,
      } as unknown as Response;
      jest.spyOn(global, "fetch").mockResolvedValueOnce(errorResponse);
      await expect(service.getActivity("token", "1")).rejects.toThrow(
        new HttpException(
          "Failed to fetch Strava activity",
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
    });
  });

  describe("getAthlete", () => {
    it("should fetch athlete data", async () => {
      const athlete = { id: 1 };
      const responseMock = {
        ok: true,
        json: jest.fn().mockResolvedValue(athlete),
      } as unknown as Response;
      jest.spyOn(global, "fetch").mockResolvedValueOnce(responseMock);
      const actual = await service.getAthlete("token");
      expect(actual).toEqual(athlete);
    });

    it("should throw when athlete fetch fails", async () => {
      const errorResponse = {
        ok: false,
      } as unknown as Response;
      jest.spyOn(global, "fetch").mockResolvedValueOnce(errorResponse);
      await expect(service.getAthlete("token")).rejects.toThrow(
        new HttpException(
          "Failed to fetch Strava athlete data",
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      );
    });
  });

  describe("importStravaActivities", () => {
    it("should create runs for new activities", async () => {
      const activities = [
        {
          id: 1,
          name: "Run",
          distance: 5000,
          moving_time: 1500,
          elapsed_time: 1500,
          type: "Run",
          start_date: "2024-01-01T00:00:00.000Z",
          start_date_local: "2024-01-01T00:00:00",
          average_speed: 3,
          max_speed: 4,
          total_elevation_gain: 0,
        },
      ];
      jest
        .spyOn(service, "getActivities")
        .mockResolvedValueOnce(activities as any);
      runsService.findByStravaId.mockResolvedValueOnce(null);
      runsService.create.mockResolvedValueOnce(undefined as any);
      await service.importStravaActivities(1, "token");
      expect(runsService.create).toHaveBeenCalled();
    });

    it("should skip existing activities", async () => {
      const activities = [
        {
          id: 1,
          name: "Run",
          distance: 5000,
          moving_time: 1500,
          elapsed_time: 1500,
          type: "Run",
          start_date: "2024-01-01T00:00:00.000Z",
          start_date_local: "2024-01-01T00:00:00",
          average_speed: 3,
          max_speed: 4,
          total_elevation_gain: 0,
        },
      ];
      jest
        .spyOn(service, "getActivities")
        .mockResolvedValueOnce(activities as any);
      runsService.findByStravaId.mockResolvedValueOnce({} as any);
      await service.importStravaActivities(1, "token");
      expect(runsService.create).not.toHaveBeenCalled();
    });
  });

  describe("convertStravaActivityToRun", () => {
    it("should convert activity to run data", () => {
      const activity = {
        id: 1,
        name: "Morning Run",
        distance: 10000,
        moving_time: 3000,
        elapsed_time: 3200,
        type: "Run",
        start_date: "2024-01-01T00:00:00.000Z",
        start_date_local: "2024-01-01T00:00:00",
        average_speed: 3,
        max_speed: 4,
        total_elevation_gain: 0,
        description: "Great run",
      };
      const actual = service.convertStravaActivityToRun(activity as any, 1);
      expect(actual).toEqual({
        stravaId: "1",
        date: new Date("2024-01-01T00:00:00.000Z"),
        distance: 10,
        duration: 50,
        pace: 5,
        notes: "Great run",
        userId: 1,
      });
    });
  });

  describe("getAuthorizationUrl", () => {
    it("should build authorization url", () => {
      process.env.STRAVA_REDIRECT_URI = "http://localhost/callback";
      const actual = service.getAuthorizationUrl();
      expect(actual).toContain("client_id=client-id");
      expect(actual).toContain(
        "redirect_uri=http%3A%2F%2Flocalhost%2Fcallback"
      );
    });
  });
});
