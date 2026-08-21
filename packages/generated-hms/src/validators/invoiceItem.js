'use strict';
const entity = require('../entities/invoiceItem');
function validateInvoiceitem(payload) { return entity.validate(payload); }
module.exports = { validateInvoiceitem };
