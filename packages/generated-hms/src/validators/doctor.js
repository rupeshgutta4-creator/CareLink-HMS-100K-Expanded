'use strict';
const entity = require('../entities/doctor');
function validateDoctor(payload) { return entity.validate(payload); }
module.exports = { validateDoctor };
