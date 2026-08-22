'use strict';
const entity = require('../entities/pricingRule');
function validatePricingrule(payload) { return entity.validate(payload); }
module.exports = { validatePricingrule };
