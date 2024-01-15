const banneds = require('../controllers/banned.controller');
const express = require('express');

const router = express.Router();

router.get('/', banneds.getAll);
router.get('/:id', banneds.findById);
router.post('/', banneds.create);
router.post('/update', banneds.update);
router.delete('/', banneds.removeAll);
router.delete('/:id', banneds.removeById);


module.exports = router;