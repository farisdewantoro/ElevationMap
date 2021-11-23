import UserController from "./user.controller"
import {userService} from "../services"
const userController = new UserController(userService)

export {
    userController
}