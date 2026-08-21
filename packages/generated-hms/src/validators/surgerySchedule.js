'use strict';
const entity = require('../entities/surgerySchedule');
function validateSurgeryschedule(payload) { return entity.validate(payload); }
module.exports = { validateSurgeryschedule };
