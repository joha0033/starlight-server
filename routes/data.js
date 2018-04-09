const express = require('express')

const router = express.Router();

const cansJSON = require('../assests/cans.json')



//
router.get('/cans', function(req, res, next) {
  res.json(cansJSON);
});


module.exports = router;
