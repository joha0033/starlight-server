const express = require('express')

const router = express.Router();

const cansJSON = require('../assests/cans.json')

const distance = require('google-distance-matrix');

let travel = {}


// BASIC GET ROUTE TO SERVE JSON FILE
router.get('/cans', function(req, res, next) {
  res.json(cansJSON)
});


/////////////////////////////////////////
// DISTANCE DATA
router.get('/distance/origin/:oLat/:oLng/destination/:dLat/:dLng', function(req, res, next) {
  
  let origins = [req.params.oLat + ',' + req.params.oLng]
  
  let destinations = [req.params.dLat + ',' + req.params.dLng]
  
  let distanceText, durationText;

  distance.key(process.env.GOOGLE_MAPS_KEY)

  distance.units('imperial')

  distance.matrix(origins, destinations, function (err, distances) {

    distanceText = distances.rows[0].elements[0].distance.text

    durationText = distances.rows[0].elements[0].duration.text

    travel = {

          distance: distanceText,
          duration: durationText

        }

        res.json(travel)
  })

})



module.exports = router;
