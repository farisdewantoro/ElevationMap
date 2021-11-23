import {
    Association, DataTypes, Model, Sequelize,
    BelongsToManyAddAssociationMixin,
    BelongsToManyAddAssociationsMixin,
    BelongsToManyCountAssociationsMixin,
    BelongsToManyCreateAssociationMixin,
    BelongsToManyGetAssociationsMixin,
    BelongsToManyHasAssociationMixin,
    BelongsToManyHasAssociationsMixin,
    BelongsToManyRemoveAssociationMixin,
    BelongsToManyRemoveAssociationsMixin,
    BelongsToManySetAssociationsMixin,
} from 'sequelize'


class Student extends Model {
    public first!: string
    public last!: string

    // Auto-generated
    public id!: number
    public createdAt!: Date;
    public updatedAt!: Date;



    public static initialize(sequelize: Sequelize) {
        this.init({
            first: DataTypes.STRING,
            last: DataTypes.STRING
        }, { sequelize: sequelize })
    }
}

export default Student