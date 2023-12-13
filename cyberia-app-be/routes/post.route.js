var express = require('express');
var router = express.Router();

const posts = require('../controllers/post.controller');


router.post('/', posts.create);
router.get('/', posts.getAll);
router.get('/:id', posts.findById);
router.post('/update', posts.update);
router.delete('/:id', posts.remove);
router.delete('/', posts.removeAll);


module.exports = router;