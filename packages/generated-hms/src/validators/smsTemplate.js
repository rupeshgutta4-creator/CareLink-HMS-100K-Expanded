'use strict';
const entity = require('../entities/smsTemplate');
function validateSmstemplate(payload) { return entity.validate(payload); }
module.exports = { validateSmstemplate };
