const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.PGDATABASE || test,
    process.env.PGUSER || postgres,
    process.env.PGPASSWORD || jorge,
    {
        host: process.env.PGHOST || db,
        dialect:'postgres',
        logging:false
    }
)

module.exports = sequelize;