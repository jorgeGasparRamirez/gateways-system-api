const User = require('../models/user');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const { secret } = require('../config/auth')

async function login(req,res,next) {
    try {
        const user= await User.findOne({where:{email:req.body.email}});
         if(user){
            const password_valid = await bcrypt.compare(req.body.password,user.password);
            
              if(password_valid) {
                token = jwt.sign({ "email" : user.email },secret);
                res.status(200).json({ email: user.email,token : token });
              } else {
                res.status(400).json({ code:"2021", error : "Password Incorrect" });
              }
         } else {
            res.status(404).json({ code:"2022", error : "Email does not exist" });
          }

      
    } catch (error) {
        return res.status(500).json(error)
    }
    
}

module.exports = login;
