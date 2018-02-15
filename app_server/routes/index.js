const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlPlaces = require('../controllers/ctrlPlaces');
const ctrlTime = require('../controllers/ctrlTime');

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/places', ctrlPlaces.placelist);
router.get('/time', ctrlTime.timelist);

module.exports = router;
