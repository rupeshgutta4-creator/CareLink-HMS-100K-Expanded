'use strict';
const entity = require('../entities/auditLog');
function validateAuditlog(payload) { return entity.validate(payload); }
module.exports = { validateAuditlog };
