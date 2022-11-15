const Gateway = require('../models/gateway');
const Device = require('../models/device');


async function getAll(req, res, next) {
    try {
      const allInfo = await Gateway.findAll({ include: [Device]});
      return res.status(200).json(allInfo)
    } catch (error) {
      return res.status(500).json({"error": error.message})
    }
}

async function getById(req,res,next) {
    try {
      const gateway = await Gateway.findByPk(req.params.id,{include: [Device]})
      if(!gateway) {
        return res.status(404).json({response: "Gateway not found"})
      }
      else{
        return res.status(200).json(gateway)
      }
    } catch (error) {
      return res.status(500).json({"error": error.message})
    }
}

async function create(req,res, next) {
  try {
    const gateway=  await Gateway.create({
      name: req.body.name,
      ip: req.body.ip,
    })
    console.log(gateway)
     if(gateway){
       const device=  await Device.create({vendor: req.body.vendor, date: req.body.date, status: req.body.status, gatewayId: gateway.id})
        if(device) {
         res.status(200).json({data: {
                                        gateway,
                                        devices:[
                                          { "uid": device.uid,
                                          "vendor": device.vendor,
                                          "date": device.date,
                                          "status": device.status,
                                          "gatewayId": device.gatewayId
                                          }
                                        ]
                                      }
                              })
        }
    }
  } catch (error) {
    return res.status(500).json({"error": error.message})
  }
}

async function drop(req,res,next){
  try {
    const gateway = await Gateway.destroy({where:{id: req.params.id}})
    if(gateway) {
      res.status(200).json({ response: "Gateway was deleted successfully"})
    } else {
      res.status(404).json({response: "This gateway doens't exist"})
    }
    
  } catch (error) {
    return res.status(500).json({"error": error.message})
  }
} 

module.exports = { getAll, getById, create, drop };