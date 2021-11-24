import {
    DataTypes, Model, Sequelize,Optional
} from 'sequelize'

interface BaseModelAttributes {
    id: number;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  }

interface BaseCreationAttributes extends Optional<BaseModelAttributes, "id"> {}

class BaseModel<TModel,TCreationAttributes> extends Model<TModel,TCreationAttributes>{
    public id!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
    public deletedAt!: Date;

    public static baseInit(){
        return {
            id:{
                type:DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
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
        }
    }
}

export {
    BaseModelAttributes,
    BaseCreationAttributes,
    BaseModel
}