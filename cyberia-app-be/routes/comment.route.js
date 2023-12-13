const comments = require('../controllers/comment.controller');
var express = require('express');

const router = express.Router();

router.post('/', comments.create);
router.get('/', comments.getAll);
router.get('/:id', comments.findById);
router.post('/update', comments.update);
router.delete('/:id', comments.removeById);
router.delete('/', comments.remove);

module.exports = router;