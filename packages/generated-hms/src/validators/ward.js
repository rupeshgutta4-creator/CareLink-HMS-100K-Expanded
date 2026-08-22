'use strict';
const entity = require('../entities/ward');
function validateWard(payload) { return entity.validate(payload); }
module.exports = { validateWard };
