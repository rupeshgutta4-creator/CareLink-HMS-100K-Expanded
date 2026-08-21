'use strict';
const entity = require('../entities/shift');
function validateShift(payload) { return entity.validate(payload); }
module.exports = { validateShift };
