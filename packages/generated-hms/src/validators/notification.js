'use strict';
const entity = require('../entities/notification');
function validateNotification(payload) { return entity.validate(payload); }
module.exports = { validateNotification };
