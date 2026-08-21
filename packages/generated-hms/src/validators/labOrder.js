'use strict';
const entity = require('../entities/labOrder');
function validateLaborder(payload) { return entity.validate(payload); }
module.exports = { validateLaborder };
