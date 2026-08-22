'use strict';
const entity = require('../entities/consentForm');
function validateConsentform(payload) { return entity.validate(payload); }
module.exports = { validateConsentform };
