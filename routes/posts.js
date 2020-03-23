const express = require('express');

const router = express.Router();

const posts = require('../controllers/posts_controller');

router.get('/profile',posts.posts);

module.exports = router;

