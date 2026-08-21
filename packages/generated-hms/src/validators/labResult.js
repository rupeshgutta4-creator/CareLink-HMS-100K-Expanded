'use strict';
const entity = require('../entities/labResult');
function validateLabresult(payload) { return entity.validate(payload); }
module.exports = { validateLabresult };
