'use strict';
const entity = require('../entities/ledgerEntry');
function validateLedgerentry(payload) { return entity.validate(payload); }
module.exports = { validateLedgerentry };
