'use strict';
const entity = require('../entities/purchaseOrder');
function validatePurchaseorder(payload) { return entity.validate(payload); }
module.exports = { validatePurchaseorder };
