'use strict';
const entity = require('../entities/pharmacyOrder');
function validatePharmacyorder(payload) { return entity.validate(payload); }
module.exports = { validatePharmacyorder };
