'use strict';
const entity = require('../entities/staff');
function validateStaff(payload) { return entity.validate(payload); }
module.exports = { validateStaff };
