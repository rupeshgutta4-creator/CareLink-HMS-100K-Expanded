'use strict';
const entity = require('../entities/visit');
function validateVisit(payload) { return entity.validate(payload); }
module.exports = { validateVisit };
