'use strict';
const entity = require('../entities/carePlan');
function validateCareplan(payload) { return entity.validate(payload); }
module.exports = { validateCareplan };
