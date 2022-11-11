const { Sequelize, DataTypes } = require('sequelize');
const settingDB = require('../database/database');


const User = settingDB.define('User',{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
    email: {
        type: DataTypes.STRING(100),
        allownull: false
    },
    password: {
        type: DataTypes.STRING(100),
        allownull: false
    }
},{
    timestamps: false,
    tableName: 'app_users'
  }

)

module.exports = User;