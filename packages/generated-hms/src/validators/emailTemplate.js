'use strict';
const entity = require('../entities/emailTemplate');
function validateEmailtemplate(payload) { return entity.validate(payload); }
module.exports = { validateEmailtemplate };
