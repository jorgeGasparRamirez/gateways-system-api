const router= require('express').Router();
const { getAll, getById, create, update, drop}  = require('../controller/gateway.controller');

router.post('/',create);
router.get('/',getAll);
router.get('/:id',getById);
router.delete('/:id',drop);



module.exports = router;