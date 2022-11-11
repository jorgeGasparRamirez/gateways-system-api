const User = require('../models/user');

async function getAllUsers(req,res) {
    const users= await User.findAll();
    res.json({
        data: users
    })
}

module.exports = getAllUsers;
