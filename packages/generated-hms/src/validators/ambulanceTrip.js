'use strict';
const entity = require('../entities/ambulanceTrip');
function validateAmbulancetrip(payload) { return entity.validate(payload); }
module.exports = { validateAmbulancetrip };
