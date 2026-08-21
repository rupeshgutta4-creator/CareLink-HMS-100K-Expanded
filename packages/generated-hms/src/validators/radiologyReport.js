'use strict';
const entity = require('../entities/radiologyReport');
function validateRadiologyreport(payload) { return entity.validate(payload); }
module.exports = { validateRadiologyreport };
