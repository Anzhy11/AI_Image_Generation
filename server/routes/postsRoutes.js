const express = require('express');
const router = express.Router();

const { getAllPosts, createPost } = require('../controllers/postController')


router.route('/').get(getAllPosts);
router.route('/').post(createPost);



module.exports = router;

