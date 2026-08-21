'use strict';
const entity = require('../entities/employeeAttendance');
function validateEmployeeattendance(payload) { return entity.validate(payload); }
module.exports = { validateEmployeeattendance };
