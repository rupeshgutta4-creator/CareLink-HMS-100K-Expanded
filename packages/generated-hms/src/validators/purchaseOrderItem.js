'use strict';
const entity = require('../entities/purchaseOrderItem');
function validatePurchaseorderitem(payload) { return entity.validate(payload); }
module.exports = { validatePurchaseorderitem };
