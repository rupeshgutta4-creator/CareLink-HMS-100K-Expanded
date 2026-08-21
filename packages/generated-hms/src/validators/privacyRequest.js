'use strict';
const entity = require('../entities/privacyRequest');
function validatePrivacyrequest(payload) { return entity.validate(payload); }
module.exports = { validatePrivacyrequest };
