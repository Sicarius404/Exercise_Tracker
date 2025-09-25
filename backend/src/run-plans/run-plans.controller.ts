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
} from "@nestjs/common";
import { RunPlansService } from "./run-plans.service";
import { AuthGuard } from "@thallesp/nestjs-better-auth";

@Controller("run-plans")
@UseGuards(AuthGuard)
export class RunPlansController {
  constructor(private readonly runPlansService: RunPlansService) {}

  @Post()
  create(@Body() createRunPlanDto: any, @Request() req: any) {
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
    @Body() updateRunPlanDto: any,
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
