import {BaseModel, BaseModelAttributes} from "./base.model";
import {
    DataTypes, Model, Sequelize,Optional,
} from 'sequelize'

interface RoleModelAttributes extends BaseModelAttributes {
    name:string;
  }

  interface UserCreationAttributes{
    username:string;
    password:string;
  }

class Role extends BaseModel<RoleModelAttributes,UserCreationAttributes> implements RoleModelAttributes{
    public name!:string;

    public static initialize(sequelize: Sequelize) {
        let defaultField = this.baseInit()
        this.init({
            ...defaultField,
            name:{
                type:DataTypes.STRING
            }
       
        }, { sequelize: sequelize })
    }
}

export default Role