'use strict';
const entity = require('../entities/pharmacyTransaction');
function validatePharmacytransaction(payload) { return entity.validate(payload); }
module.exports = { validatePharmacytransaction };
