 // routes/analyticsRoutes.js
const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

// Define the routes and link to controller functions
router.get('/locations', analyticsController.getLocations);
router.get('/demographics', analyticsController.getDemographics);
router.get('/trials-per-city', analyticsController.getTrialsPerCity);
router.get('/officials_list', analyticsController.getOfficialsList);


module.exports = router;
