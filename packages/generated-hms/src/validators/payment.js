'use strict';
const entity = require('../entities/payment');
function validatePayment(payload) { return entity.validate(payload); }
module.exports = { validatePayment };
