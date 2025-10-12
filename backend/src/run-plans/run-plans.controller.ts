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
import { RunPlansService } from "./run-plans.service";
import { AuthGuard } from "@thallesp/nestjs-better-auth";
import { CreateRunPlanDto, UpdateRunPlanDto } from "./dto/run-plan.dto";

@Controller("run-plans")
@UseGuards(AuthGuard)
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class RunPlansController {
  constructor(private readonly runPlansService: RunPlansService) {}

  @Post()
  create(@Body() createRunPlanDto: CreateRunPlanDto, @Request() req: any) {
    const userId = req.user.id;
    return this.runPlansService.create({ ...createRunPlanDto, userId });
  }

  @Get()
  findAll(@Request() req: any) {
    const userId = req.user.id;
    return this.runPlansService.findAll(userId);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Request() req: any) {
    const userId = req.user.id;
    return this.runPlansService.findOne(+id, userId);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateRunPlanDto: UpdateRunPlanDto,
    @Request() req: any
  ) {
    const userId = req.user.id;
    return this.runPlansService.update(+id, userId, updateRunPlanDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Request() req: any) {
    const userId = req.user.id;
    return this.runPlansService.remove(+id, userId);
  }
}
