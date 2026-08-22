'use strict';
const entity = require('../entities/glucoseReading');
function validateGlucosereading(payload) { return entity.validate(payload); }
module.exports = { validateGlucosereading };
