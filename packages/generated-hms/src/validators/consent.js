'use strict';
const entity = require('../entities/consent');
function validateConsent(payload) { return entity.validate(payload); }
module.exports = { validateConsent };
