'use strict';
const entity = require('../entities/procedure');
function validateProcedure(payload) { return entity.validate(payload); }
module.exports = { validateProcedure };
