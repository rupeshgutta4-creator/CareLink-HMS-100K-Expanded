'use strict';
const entity = require('../entities/qualityIndicator');
function validateQualityindicator(payload) { return entity.validate(payload); }
module.exports = { validateQualityindicator };
