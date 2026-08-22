'use strict';
const entity = require('../entities/webhookDelivery');
function validateWebhookdelivery(payload) { return entity.validate(payload); }
module.exports = { validateWebhookdelivery };
