'use strict';
const entity = require('../entities/prescription');
function validatePrescription(payload) { return entity.validate(payload); }
module.exports = { validatePrescription };
