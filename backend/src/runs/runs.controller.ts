import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { RunsService } from "./runs.service";

interface Run {
  id: number;
  stravaId?: string;
  date: Date;
  distance: number;
  duration: number;
  pace: number;
  notes?: string;
  userId: string;
}

@Controller("runs")
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @Post()
  async create(
    @Body()
    createRunDto: {
      stravaId?: string;
      date: string;
      distance: number;
      duration: number;
      pace: number;
      notes?: string;
      userId: string;
    }
  ): Promise<Run> {
    const runData = {
      ...createRunDto,
      date: new Date(createRunDto.date),
    };
    return this.runsService.create(runData);
  }

  @Get()
  async findAll(@Query("userId") userId: string): Promise<Run[]> {
    return this.runsService.findAll(userId);
  }

  @Get(":id")
  async findOne(
    @Param("id") id: string,
    @Query("userId") userId: string
  ): Promise<Run | undefined> {
    return this.runsService.findOne(parseInt(id), userId);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Query("userId") userId: string,
    @Body()
    updateRunDto: Partial<{
      stravaId: string;
      date: string;
      distance: number;
      duration: number;
      pace: number;
      notes: string;
    }>
  ): Promise<Run | undefined> {
    const updateData = {
      ...updateRunDto,
      ...(updateRunDto.date && { date: new Date(updateRunDto.date) }),
    };
    return this.runsService.update(parseInt(id), userId, updateData);
  }

  @Delete(":id")
  async remove(
    @Param("id") id: string,
    @Query("userId") userId: string
  ): Promise<boolean> {
    return this.runsService.remove(parseInt(id), userId);
  }

  @Get("strava/:stravaId")
  async findByStravaId(
    @Param("stravaId") stravaId: string
  ): Promise<Run | undefined> {
    return this.runsService.findByStravaId(stravaId);
  }
}
