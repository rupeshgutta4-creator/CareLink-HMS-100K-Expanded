'use strict';
const entity = require('../entities/occupationalHealth');
function validateOccupationalhealth(payload) { return entity.validate(payload); }
module.exports = { validateOccupationalhealth };
