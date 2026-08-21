'use strict';
const entity = require('../entities/vaccinationSchedule');
function validateVaccinationschedule(payload) { return entity.validate(payload); }
module.exports = { validateVaccinationschedule };
