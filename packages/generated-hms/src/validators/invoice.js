'use strict';
const entity = require('../entities/invoice');
function validateInvoice(payload) { return entity.validate(payload); }
module.exports = { validateInvoice };
