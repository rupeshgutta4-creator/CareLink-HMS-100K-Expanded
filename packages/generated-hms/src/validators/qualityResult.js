'use strict';
const entity = require('../entities/qualityResult');
function validateQualityresult(payload) { return entity.validate(payload); }
module.exports = { validateQualityresult };
