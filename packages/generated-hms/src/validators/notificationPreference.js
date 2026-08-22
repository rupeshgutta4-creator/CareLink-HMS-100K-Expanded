'use strict';
const entity = require('../entities/notificationPreference');
function validateNotificationpreference(payload) { return entity.validate(payload); }
module.exports = { validateNotificationpreference };
