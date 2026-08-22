'use strict';
const entity = require('../entities/patientPortalSession');
function validatePatientportalsession(payload) { return entity.validate(payload); }
module.exports = { validatePatientportalsession };
