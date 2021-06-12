const { dbConfig } = require('../config')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Patient = require('./patient')(sequelize,Sequelize)
db.Tutor = require('./tutor')(sequelize,Sequelize)
db.Hospital = require('./hospital')(sequelize,Sequelize)

db.hospitalInfo = require('./hospitalInfo')(sequelize,Sequelize)
db.tutorInfo = require('./tutorInfo')(sequelize,Sequelize)

module.exports = db