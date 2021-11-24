import {BaseModel, BaseModelAttributes} from "./base.model";
import {
    DataTypes, Model, Sequelize,Optional,
} from 'sequelize'

interface UserModelAttributes extends BaseModelAttributes {
    username:string;
    password:string;
  }

  interface UserCreationAttributes{
    username:string;
    password:string;
  }

class User extends BaseModel<UserModelAttributes,UserCreationAttributes> implements UserModelAttributes{
    public username!:string;
    public password!:string;

    public static initialize(sequelize: Sequelize) {
        let defaultField = this.baseInit()

        this.init({
            ...defaultField,
            username:{
                type:DataTypes.STRING
            },
            password:{
                type:DataTypes.TEXT
            },
         
        }, { sequelize: sequelize })
    }
}

export default User