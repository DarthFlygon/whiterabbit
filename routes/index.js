var express = require('express');
var router = express.Router();

var post_controller = require('../controllers/postController');

const { postValidator } = require('../middlewares/postValidator')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD' });
});

// GET request for list of all Posts.
router.get('/posts', post_controller.post_get);

// Post request for creating posts.
router.post('/create', post_controller.post_create);

// Post request for deleting posts.
router.post('/delete', post_controller.delete_post);

module.exports = router;
