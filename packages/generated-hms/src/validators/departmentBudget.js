'use strict';
const entity = require('../entities/departmentBudget');
function validateDepartmentbudget(payload) { return entity.validate(payload); }
module.exports = { validateDepartmentbudget };
