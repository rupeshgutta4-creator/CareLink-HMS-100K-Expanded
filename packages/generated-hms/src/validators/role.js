'use strict';
const entity = require('../entities/role');
function validateRole(payload) { return entity.validate(payload); }
module.exports = { validateRole };
