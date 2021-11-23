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

export {
    BaseModelAttributes,
    BaseCreationAttributes
}