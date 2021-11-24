import { Options, Sequelize } from 'sequelize'
import { DATABASE_MYSQL } from '../../config/env.config'
import User from './user.model'
import Role from './role.model'
const sequelize = new Sequelize(
    DATABASE_MYSQL.database,
    DATABASE_MYSQL.username,
    DATABASE_MYSQL.password,
    <Options>DATABASE_MYSQL
)

let models = [User, Role]
models.forEach(model => model.initialize(sequelize))
Role.hasMany(User, { foreignKey: "role_id" })
User.belongsTo(Role, { foreignKey: "role_id", as: "role" })
sequelize.sync()

export {
    sequelize as Database,
    User, Role
}