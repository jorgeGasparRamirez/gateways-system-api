const {  DataTypes} = require('sequelize');
const settingDB = require('../database/database');

const Device = settingDB.define('device',{
    uid: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
    vendor: {
        type: DataTypes.STRING(100),
        allownull: false
    },
    date: {
        type: DataTypes.STRING(20),
        allownull: false
    },
    status: {
        type: DataTypes.STRING(20),
        allownull: false
    }
    
},
{ 
    timestamps:false,
    freezeTableName: true
})

module.exports = Device;