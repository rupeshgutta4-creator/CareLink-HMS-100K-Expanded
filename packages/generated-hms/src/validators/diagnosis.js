'use strict';
const entity = require('../entities/diagnosis');
function validateDiagnosis(payload) { return entity.validate(payload); }
module.exports = { validateDiagnosis };
