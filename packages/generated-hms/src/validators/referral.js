'use strict';
const entity = require('../entities/referral');
function validateReferral(payload) { return entity.validate(payload); }
module.exports = { validateReferral };
