const express = require('express');
const router = express.Router();

const { getImage, intro } = require('../controllers/dalleController')

router.route('/').get(intro);
router.route('/').post(getImage);


module.exports = router;