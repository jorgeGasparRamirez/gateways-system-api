const User = require('../models/user');

async function getAllUsers(req,res,next) {
    try {
        const users= await User.findAll();
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(error)
    }
    
}

module.exports = getAllUsers;
