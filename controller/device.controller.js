const Device = require('../models/device');
const Gateway = require('../models/gateway');

async function create(req,res,next){
    try {
        const gateway = await Gateway.findByPk(req.body.gatewayId)
        const device= await Device.create({vendor: req.body.vendor, date: req.body.date, status: req.body.status, gatewayId: req.body.gatewayId})
         if(gateway && device){
            res.status(200).json({name: gateway.name, ip: gateway.ip, devices: [{vendor: req.body.vendor, date: req.body.date, status: req.body.status, gatewayId: req.body.gatewayId}]})
         } else {
            res.status(404).json({response: "The gateway's id is wrong"})
         }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
   
}

async function drop(req, res, next){
    try {
      const device=  await Device.destroy({where:{uid: req.params.id}})
      if(device) {
        res.status(200).json({response: "The device was deleted successfully"})
      } else {
        res.status(404).json({response: "UID is wrong"})
      }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = { create, drop };