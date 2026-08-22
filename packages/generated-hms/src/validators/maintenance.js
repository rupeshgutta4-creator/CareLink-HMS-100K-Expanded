'use strict';
const entity = require('../entities/maintenance');
function validateMaintenance(payload) { return entity.validate(payload); }
module.exports = { validateMaintenance };
