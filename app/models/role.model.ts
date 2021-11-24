import { BaseModel, BaseModelAttributes } from "./base.model";
import {
    DataTypes, Model, Sequelize, Optional, Association,
} from 'sequelize'
import { User } from ".";

interface RoleModelAttributes extends BaseModelAttributes {
    name: string;
}

interface RoleModelAttributes {
    name: string;
}

class Role extends BaseModel<RoleModelAttributes, RoleModelAttributes> implements RoleModelAttributes {
    public name!: string;
    public readonly users?: User[]
    public static associations: {
        classes: Association<Role, User>
    }
    public static initialize(sequelize: Sequelize) {
        let defaultField = this.baseInit()
        this.init({
            ...defaultField,
            name: {
                type: DataTypes.STRING
            }

        }, { sequelize: sequelize })

    }
}

export default Role