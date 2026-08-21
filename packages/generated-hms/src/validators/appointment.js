'use strict';
const entity = require('../entities/appointment');
function validateAppointment(payload) { return entity.validate(payload); }
module.exports = { validateAppointment };
