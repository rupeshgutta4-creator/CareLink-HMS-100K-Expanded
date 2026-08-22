'use strict';
const entity = require('../entities/appointmentReminder');
function validateAppointmentreminder(payload) { return entity.validate(payload); }
module.exports = { validateAppointmentreminder };
