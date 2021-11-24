import { Role, User } from "../models";
import { FindOptions } from "sequelize/dist";
import { CreateUserDTO } from "../dtos/create.user.dto";
class UserRepository {
  private model: any;

  constructor(model: any) {
    this.model = model;
  }

  async findAll(): Promise<User[]> {
    return await this.model.findAll({
      include: 'role'
    })
  }

  async findOne(param: FindOptions): Promise<User> {
    return await this.model.findOne(param)
  }

  async create(param: CreateUserDTO): Promise<User> {
    return await this.model.create(param)
  }

}

export default UserRepository