const dotenv = require('dotenv').config();


const checkAPI = async (req, res) => {
  res.send('hallo there')
}

module.exports = { checkAPI };