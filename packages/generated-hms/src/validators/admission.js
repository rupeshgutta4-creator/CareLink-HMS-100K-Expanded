'use strict';
const entity = require('../entities/admission');
function validateAdmission(payload) { return entity.validate(payload); }
module.exports = { validateAdmission };
