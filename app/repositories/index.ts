import UserRepository from "./user.repository";
import { User } from "../models";

const userRepository = new UserRepository(User)

export{
    userRepository
}