import {Options,Sequelize } from 'sequelize'
import {DATABASE_MYSQL} from '../env/env.config'
import Student from './student'
import User from './user.model'
const sequelize = new Sequelize(
    DATABASE_MYSQL.database,
    DATABASE_MYSQL.username,
    DATABASE_MYSQL.password,
    <Options> DATABASE_MYSQL
)

let models = [  Student,User ]
models.forEach(model => model.initialize(sequelize))
sequelize.sync()

export {
    sequelize as Database,
    Student,User
}