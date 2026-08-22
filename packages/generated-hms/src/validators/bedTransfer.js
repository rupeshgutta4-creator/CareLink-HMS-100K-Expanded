'use strict';
const entity = require('../entities/bedTransfer');
function validateBedtransfer(payload) { return entity.validate(payload); }
module.exports = { validateBedtransfer };
