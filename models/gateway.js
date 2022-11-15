const { DataTypes } = require('sequelize');

const settingDB = require('../database/database');
const Device = require('../models/device');

const Gateway = settingDB.define('gateway',{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
        type: DataTypes.STRING(100),
        allownull: false
    },
    ip: {
        type: DataTypes.STRING(15),
        allownull: false
    }
    
},
{
    timestamps:false,
    freezeTableName: true
})


Device.belongsTo(Gateway);
Gateway.hasMany(Device);

module.exports = Gateway;