const express = require('express')

const router = express.Router();

const cansJSON = require('../assests/cans.json')

/////////////////////////////////////////
// DISTANCE DATA
var distance = require('google-distance-matrix');
//
// var origins = ['40.7421,-73.9914'];
// var destinations = ['41.8337329,-87.7321554'];

let travel = {}
/////////////////////////////////////////


// BASIC GET ROUTE TO SERVE JSON FILE
router.get('/cans', function(req, res, next) {
  res.json(cansJSON);
});


/////////////////////////////////////////
// DISTANCE DATA
router.get('/distance/origin/:oLat/:oLng/destination/:dLat/:dLng', function(req, res, next) {
  console.log('body',req.body);
  let origins = [req.params.oLat + ',' + req.params.oLng]
  console.log('origins',origins);
  let destinations = [req.params.dLat + ',' + req.params.dLng]
  console.log('destinations',destinations);
  let distanceText;
  let durationText;

  distance.key(process.env.GOOGLE_MAPS_KEY);
  distance.units('imperial');

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


/////////////////////////////////////////


module.exports = router;
