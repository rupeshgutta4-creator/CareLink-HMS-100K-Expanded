'use strict';
const entity = require('../entities/calendarBlock');
function validateCalendarblock(payload) { return entity.validate(payload); }
module.exports = { validateCalendarblock };
