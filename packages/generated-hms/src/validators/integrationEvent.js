'use strict';
const entity = require('../entities/integrationEvent');
function validateIntegrationevent(payload) { return entity.validate(payload); }
module.exports = { validateIntegrationevent };
