import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { DeleteAllUsersDto } from "src/auth/dto/delete-all-users.dto";
import { DeleteAllUsersResponse } from "src/auth/models/delete-all-users-response";
import { AuthService } from "src/auth/auth.service";
import { DevGuard } from "src/common/guards/dev.guard";

@Controller("dev/auth")
@UseGuards(DevGuard)
export class DevAuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("delete-users")
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async deleteAllUsers(
    @Body() input: DeleteAllUsersDto
  ): Promise<DeleteAllUsersResponse> {
    if (!input.confirm) {
      return { deletedUsers: 0 };
    }

    const deletedUsers = await this.authService.deleteAllUsers();
    return { deletedUsers };
  }
}
