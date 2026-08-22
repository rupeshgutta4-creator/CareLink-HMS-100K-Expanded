'use strict';
const entity = require('../entities/webhook');
function validateWebhook(payload) { return entity.validate(payload); }
module.exports = { validateWebhook };
