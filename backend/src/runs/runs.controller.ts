import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { RunsService } from "./runs.service";
import { AuthGuard } from "@thallesp/nestjs-better-auth";
import { CreateRunDto, UpdateRunDto } from "./dto/run.dto";

@Controller("runs")
@UseGuards(AuthGuard)
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @Post()
  async create(@Body() createRunDto: CreateRunDto, @Request() req: any) {
    const userId = req.user.id;
    const runData = {
      ...createRunDto,
      date: new Date(createRunDto.date),
      userId,
    };
    return this.runsService.create(runData);
  }

  @Get()
  async findAll(@Request() req: any) {
    const userId = req.user.id;
    return this.runsService.findAll(userId);
  }

  @Get(":id")
  async findOne(@Param("id") id: string, @Request() req: any) {
    const userId = req.user.id;
    return this.runsService.findOne(parseInt(id), userId);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateRunDto: UpdateRunDto,
    @Request() req: any
  ) {
    const userId = req.user.id;
    const updateData: Partial<{
      stravaId?: string;
      date?: Date;
      distance?: number;
      duration?: number;
      pace?: number;
      notes?: string;
    }> = {};

    if (updateRunDto.stravaId !== undefined) {
      updateData.stravaId = updateRunDto.stravaId;
    }
    if (updateRunDto.date !== undefined) {
      updateData.date = new Date(updateRunDto.date);
    }
    if (updateRunDto.distance !== undefined) {
      updateData.distance = updateRunDto.distance;
    }
    if (updateRunDto.duration !== undefined) {
      updateData.duration = updateRunDto.duration;
    }
    if (updateRunDto.pace !== undefined) {
      updateData.pace = updateRunDto.pace;
    }
    if (updateRunDto.notes !== undefined) {
      updateData.notes = updateRunDto.notes;
    }

    return this.runsService.update(parseInt(id), userId, updateData);
  }

  @Delete(":id")
  async remove(@Param("id") id: string, @Request() req: any) {
    const userId = req.user.id;
    return this.runsService.remove(parseInt(id), userId);
  }

  @Get("strava/:stravaId")
  async findByStravaId(@Param("stravaId") stravaId: string) {
    return this.runsService.findByStravaId(stravaId);
  }
}
