'use strict';
const entity = require('../entities/integration');
function validateIntegration(payload) { return entity.validate(payload); }
module.exports = { validateIntegration };
