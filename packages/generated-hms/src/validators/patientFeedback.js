'use strict';
const entity = require('../entities/patientFeedback');
function validatePatientfeedback(payload) { return entity.validate(payload); }
module.exports = { validatePatientfeedback };
