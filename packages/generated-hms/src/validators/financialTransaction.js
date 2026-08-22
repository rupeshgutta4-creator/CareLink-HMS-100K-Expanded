'use strict';
const entity = require('../entities/financialTransaction');
function validateFinancialtransaction(payload) { return entity.validate(payload); }
module.exports = { validateFinancialtransaction };
