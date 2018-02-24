var express = require('express');
var router = express.Router();
var service = require('../services/carros');

router.get('/',service.find);

router.get('/new',service.new);
router.post('/',service.create);

router.get('/edit/:id',service.edit);
router.put('/:id',service.update);

router.delete('/:id',service.remove);


module.exports = router;