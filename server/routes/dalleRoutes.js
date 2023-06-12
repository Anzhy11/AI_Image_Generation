const express = require('express');
const router = express.Router();

const { getImage } = require('../controllers/dalleController')

router.route('/').get(getImage);


module.exports = router;