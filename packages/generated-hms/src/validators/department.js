'use strict';
const entity = require('../entities/department');
function validateDepartment(payload) { return entity.validate(payload); }
module.exports = { validateDepartment };
