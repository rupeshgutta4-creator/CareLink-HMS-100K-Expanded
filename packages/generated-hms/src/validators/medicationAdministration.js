'use strict';
const entity = require('../entities/medicationAdministration');
function validateMedicationadministration(payload) { return entity.validate(payload); }
module.exports = { validateMedicationadministration };
