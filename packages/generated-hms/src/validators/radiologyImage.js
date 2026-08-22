'use strict';
const entity = require('../entities/radiologyImage');
function validateRadiologyimage(payload) { return entity.validate(payload); }
module.exports = { validateRadiologyimage };
