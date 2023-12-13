var users = require('../controllers/user.controller');
var express = require('express');

var router = express.Router();

router.post('/', users.create);
router.get('/', users.getAll);
router.get('/:id', users.findById);
router.post('/update', users.update);
router.delete('/', users.remove);
router.delete('/:id', users.removeById);


module.exports = router;