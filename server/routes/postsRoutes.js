const express = require('express');
const router = express.Router();

const { checkAPI } = require('../controllers/postController')

router.route('/').get(checkAPI);


module.exports = router;

