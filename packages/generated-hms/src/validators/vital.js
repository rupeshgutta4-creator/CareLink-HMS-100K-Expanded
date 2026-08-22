'use strict';
const entity = require('../entities/vital');
function validateVital(payload) { return entity.validate(payload); }
module.exports = { validateVital };
