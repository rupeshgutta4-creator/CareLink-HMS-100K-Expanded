'use strict';
const entity = require('../entities/nursingNote');
function validateNursingnote(payload) { return entity.validate(payload); }
module.exports = { validateNursingnote };
