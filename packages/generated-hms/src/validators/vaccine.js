'use strict';
const entity = require('../entities/vaccine');
function validateVaccine(payload) { return entity.validate(payload); }
module.exports = { validateVaccine };
