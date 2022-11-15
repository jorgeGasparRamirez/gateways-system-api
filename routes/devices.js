const router= require('express').Router();
const { create, drop } = require('../controller/device.controller');

router.post('/',create);
router.delete('/:id',drop)

module.exports = router;