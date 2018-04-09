const express = require('express')

const router = express.Router();

const cansJSON = require('../assests/cans.json')



// BASIC GET ROUTE TO SERVE JSON FILE
router.get('/cans', function(req, res, next) {
  res.json(cansJSON);
});


module.exports = router;
