'use strict';
const entity = require('../entities/leaveRequest');
function validateLeaverequest(payload) { return entity.validate(payload); }
module.exports = { validateLeaverequest };
