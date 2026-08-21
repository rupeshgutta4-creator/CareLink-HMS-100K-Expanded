'use strict';
const entity = require('../entities/patientDocument');
function validatePatientdocument(payload) { return entity.validate(payload); }
module.exports = { validatePatientdocument };
