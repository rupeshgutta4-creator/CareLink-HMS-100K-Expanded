'use strict';
const entity = require('../entities/featureFlag');
function validateFeatureflag(payload) { return entity.validate(payload); }
module.exports = { validateFeatureflag };
