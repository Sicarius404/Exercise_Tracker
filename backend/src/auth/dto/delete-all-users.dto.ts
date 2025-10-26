import { IsBoolean } from "class-validator";

export class DeleteAllUsersDto {
  @IsBoolean()
  confirm!: boolean;
}
