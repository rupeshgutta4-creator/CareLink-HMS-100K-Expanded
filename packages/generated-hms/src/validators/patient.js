'use strict';
const entity = require('../entities/patient');
function validatePatient(payload) { return entity.validate(payload); }
module.exports = { validatePatient };
