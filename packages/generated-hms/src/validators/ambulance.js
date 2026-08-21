'use strict';
const entity = require('../entities/ambulance');
function validateAmbulance(payload) { return entity.validate(payload); }
module.exports = { validateAmbulance };
