import Sequelize from 'sequelize'
import config from '../config/database.js'

export const sequelize = new Sequelize(config)