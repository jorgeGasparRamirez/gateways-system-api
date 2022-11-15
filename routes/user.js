const router =require('express').Router();

const getAllUsers  = require('../controller/user.controller');

router.get('/',getAllUsers);

module.exports = router;