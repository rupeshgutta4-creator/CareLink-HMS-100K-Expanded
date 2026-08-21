'use strict';
const entity = require('../entities/problem');
function validateProblem(payload) { return entity.validate(payload); }
module.exports = { validateProblem };
