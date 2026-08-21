'use strict';
const entity = require('../entities/costCenter');
function validateCostcenter(payload) { return entity.validate(payload); }
module.exports = { validateCostcenter };
