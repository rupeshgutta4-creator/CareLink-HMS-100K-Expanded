'use strict';
const entity = require('../entities/nursingTask');
function validateNursingtask(payload) { return entity.validate(payload); }
module.exports = { validateNursingtask };
