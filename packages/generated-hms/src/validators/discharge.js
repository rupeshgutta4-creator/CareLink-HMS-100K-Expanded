'use strict';
const entity = require('../entities/discharge');
function validateDischarge(payload) { return entity.validate(payload); }
module.exports = { validateDischarge };
