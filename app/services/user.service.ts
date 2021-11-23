import { CreateUserDTO } from "../dtos/create.user.dto"
import { User } from "../models"
import UserRepository from "../repositories/user.repository"
import validator from "validator"
import bcrypt from "bcryptjs"
import customValidation from "../utils/validation.utils"

class UserService{
    private _userRepository:UserRepository
    constructor(userRepo:UserRepository){
        this._userRepository = userRepo
    }

    async getUsers():Promise<User[]>{
        return await this._userRepository.findAll()
    }

    registerValidation(request:CreateUserDTO){
        console.log(request)
        let errors:any = {};
        if (validator.isEmpty(request.username)){
            errors.username = "Username Field is required";
        }
        if (validator.isEmpty(request.password)){
            errors.password = "password Field is required";
        }

        let isValid:boolean = customValidation.isEmpty(errors);
        return {errors,isValid}
    }

    async register(request:CreateUserDTO){
      let {errors,isValid} = this.registerValidation(request)
      let result = {}
      let response = {errors,result}
      if(!isValid){
          return response 
      }

      let isExists = await this._userRepository.findOne({
          where:{username:request.username}
      })

      if (isExists){
        response.errors.username = "Email is already exists"
        return response
      }

      bcrypt.genSalt(10,(err,salt)=>{
          bcrypt.hash(request.password,salt,async (err,hash)=>{
              request.password = hash;
              let user = await this._userRepository.create(request)
              response.result = user
              return response
            })
      })

    }
}

export default UserService