'use strict';
const entity = require('../entities/healthMetric');
function validateHealthmetric(payload) { return entity.validate(payload); }
module.exports = { validateHealthmetric };
