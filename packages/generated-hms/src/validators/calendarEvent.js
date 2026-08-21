'use strict';
const entity = require('../entities/calendarEvent');
function validateCalendarevent(payload) { return entity.validate(payload); }
module.exports = { validateCalendarevent };
