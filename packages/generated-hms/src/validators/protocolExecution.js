'use strict';
const entity = require('../entities/protocolExecution');
function validateProtocolexecution(payload) { return entity.validate(payload); }
module.exports = { validateProtocolexecution };
