'use strict';
const entity = require('../entities/payroll');
function validatePayroll(payload) { return entity.validate(payload); }
module.exports = { validatePayroll };
