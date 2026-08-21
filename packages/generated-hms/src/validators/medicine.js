'use strict';
const entity = require('../entities/medicine');
function validateMedicine(payload) { return entity.validate(payload); }
module.exports = { validateMedicine };
