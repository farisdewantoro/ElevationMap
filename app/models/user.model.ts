import {BaseModelAttributes} from "./base.model";
import {
    DataTypes, Model, Sequelize,Optional,
} from 'sequelize'

interface UserModelAttributes extends BaseModelAttributes {
    id: number;
    createdAt: Date|null;
    updatedAt: Date|null;
    deletedAt: Date|null;
    username:string;
    password:string;
  }

  interface UserCreationAttributes{
    username:string;
    password:string;
  }

class User extends Model<UserModelAttributes,UserCreationAttributes> implements UserModelAttributes{
    public id!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
    public deletedAt!: Date;
    public username!:string;
    public password!:string;

    public static initialize(sequelize: Sequelize) {
        this.init({
            id:{
                type:DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            username:{
                type:DataTypes.STRING
            },
            password:{
                type:DataTypes.TEXT
            },
            createdAt:{
                type:DataTypes.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),

            },
            deletedAt:{
                type:DataTypes.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt:{
                type:DataTypes.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
       
        }, { sequelize: sequelize })
    }
}

export default User