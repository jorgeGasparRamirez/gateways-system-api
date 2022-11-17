const jwt= require('jsonwebtoken');
const { secret }= require('../config/auth');
module.exports = (req,res,next)=>{
    if(!req.headers.authorization){
        res.status(401).json({msg:"Access denied"})
    } else {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,secret,(err,decoded)=>{
            if(err){
                res.status(500).json({msg:"There was a problem triyng to decode the token",err})
            } else {
                next();
            }
        })
       
    }
  
}