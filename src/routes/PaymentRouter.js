const express = require("express");
const router = express.Router()
const dotenv = require('dotenv');
dotenv.config()


router.get('/config', (req, res) => {
  return res.status(200).json({
    status: 'OK',
    data: 'AfCVOnWRq7DpjBV5_lOWep4ltlQev6KM2aOXwzL_GLhXnLdTNWvOedPZ588zwLK7v8JlpVN4otbRo3-b'
  })
})


module.exports = router