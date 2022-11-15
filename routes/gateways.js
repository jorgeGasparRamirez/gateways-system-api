const router= require('express').Router();
const { getAll, getById, create}  = require('../controller/gateway.controller');

router.post('/',create);
router.get('/',getAll);
router.get('/:id',getById);



module.exports = router;