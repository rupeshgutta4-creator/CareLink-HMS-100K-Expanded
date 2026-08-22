'use strict';
const entity = require('../entities/radiologyOrder');
function validateRadiologyorder(payload) { return entity.validate(payload); }
module.exports = { validateRadiologyorder };
