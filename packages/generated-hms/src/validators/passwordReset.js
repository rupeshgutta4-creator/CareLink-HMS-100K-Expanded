'use strict';
const entity = require('../entities/passwordReset');
function validatePasswordreset(payload) { return entity.validate(payload); }
module.exports = { validatePasswordreset };
