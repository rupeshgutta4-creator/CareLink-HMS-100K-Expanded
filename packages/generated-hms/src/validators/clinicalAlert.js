'use strict';
const entity = require('../entities/clinicalAlert');
function validateClinicalalert(payload) { return entity.validate(payload); }
module.exports = { validateClinicalalert };
