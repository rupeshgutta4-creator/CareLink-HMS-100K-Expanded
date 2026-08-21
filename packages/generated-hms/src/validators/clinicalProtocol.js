'use strict';
const entity = require('../entities/clinicalProtocol');
function validateClinicalprotocol(payload) { return entity.validate(payload); }
module.exports = { validateClinicalprotocol };
