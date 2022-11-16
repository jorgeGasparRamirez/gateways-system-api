const router= require('express').Router();
const { create, drop } = require('../controller/device.controller');

router.post('/',create);
router.delete('/:idGateway/:idDevice',drop)

module.exports = router;