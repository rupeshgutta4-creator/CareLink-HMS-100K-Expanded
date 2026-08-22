'use strict';
const entity = require('../entities/facility');
function validateFacility(payload) { return entity.validate(payload); }
module.exports = { validateFacility };
