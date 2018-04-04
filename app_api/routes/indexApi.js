const express = require('express');
const router = express.Router();

const ctrlApiPlaces = require('../controllers/ctrlApiPlaces');
const ctrlApiTime = require('../controllers/ctrlApiTime');

router
    .route('/place')
    .get(ctrlApiPlaces.placeList)
    .post(ctrlApiPlaces.addPlace);

router
    .route('/time')
    .get(ctrlApiTime.timeList)
    .post(ctrlApiTime.addTime);

module.exports = router;