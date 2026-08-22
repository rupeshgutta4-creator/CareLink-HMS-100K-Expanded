'use strict';
const entity = require('../entities/queueTicket');
function validateQueueticket(payload) { return entity.validate(payload); }
module.exports = { validateQueueticket };
