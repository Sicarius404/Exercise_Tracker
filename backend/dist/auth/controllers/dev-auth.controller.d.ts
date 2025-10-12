import { DeleteAllUsersDto } from "src/auth/dto/delete-all-users.dto";
import { DeleteAllUsersResponse } from "src/auth/models/delete-all-users-response";
import { AuthService } from "src/auth/auth.service";
export declare class DevAuthController {
    private readonly authService;
    constructor(authService: AuthService);
    deleteAllUsers(input: DeleteAllUsersDto): Promise<DeleteAllUsersResponse>;
}
