'use strict';
const entity = require('../entities/branch');
function validateBranch(payload) { return entity.validate(payload); }
module.exports = { validateBranch };
