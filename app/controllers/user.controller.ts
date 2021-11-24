import { BaseController } from "./base.controller";
import UserService from "../services/user.service";
import { CreateUserDTO } from "../dtos/create.user.dto";
import customValidation from "../utils/validation.utils";
import { SignInDto } from "../dtos/signin.user.dto";
class UserController extends BaseController {

    private _userService: UserService

    constructor(userService: UserService) {
        super()
        this._userService = userService

    }

    async getUsers(): Promise<any> {
        return this.ok(this.res, await this._userService.getUsers())
    }

    async create(): Promise<any> {
        const request: CreateUserDTO = this.req.body as CreateUserDTO;
        let result = await this._userService.register(request)
        if (!customValidation.isEmpty(result?.errors)) {
            return this.validationError(result?.errors)
        }

        return this.ok(this.res, result?.result)
    }

    async signIn(): Promise<any> {
        const request: SignInDto = this.req.body as SignInDto
        let result = await this._userService.signIn(request)
        console.log(result)
        if (!customValidation.isEmpty(result?.errors)) {
            return this.validationError(result?.errors)
        }
        return this.ok(this.res, result?.result)
    }

}


export default UserController