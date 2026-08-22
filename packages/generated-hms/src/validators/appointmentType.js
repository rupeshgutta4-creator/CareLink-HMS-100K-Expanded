'use strict';
const entity = require('../entities/appointmentType');
function validateAppointmenttype(payload) { return entity.validate(payload); }
module.exports = { validateAppointmenttype };
