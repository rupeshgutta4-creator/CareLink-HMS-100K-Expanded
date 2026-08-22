'use strict';
const entity = require('../entities/organization');
function validateOrganization(payload) { return entity.validate(payload); }
module.exports = { validateOrganization };
