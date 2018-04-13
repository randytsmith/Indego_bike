import * as Station from '../controllers/station.controllers';
const express = require('express');
require('../models/station.model');
require('../models/weather.model');

const router = express.Router();

router.route('/v1/stations').get(Station.getAllStation);
router.route('/v1/stations/:id').get(Station.getOneStation);
// router.route('/v1/station/kioskId/:params').get(Station.getAllTime);

module.exports = router;
