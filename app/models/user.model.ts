import { BaseModel, BaseModelAttributes } from "./base.model";
import {
    DataTypes, Model, Sequelize, Optional, Association, BelongsToGetAssociationMixin
} from 'sequelize'
import Role from './role.model'

interface UserModelAttributes extends BaseModelAttributes {
    username: string;
    password: string;
}

interface UserCreationAttributes {
    username: string;
    password: string;
    role_id: number;
}

class User extends BaseModel<UserModelAttributes, UserCreationAttributes> implements UserModelAttributes {
    public username!: string;
    public password!: string;
    public readonly role?: Role

    public getRole!: BelongsToGetAssociationMixin<Role>
    public static associations: {
        role: Association<User, Role>
    }
    public static initialize(sequelize: Sequelize) {
        let defaultField = this.baseInit()

        this.init({
            ...defaultField,
            username: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.TEXT
            }


        }, { sequelize: sequelize })

    }
}

export default User