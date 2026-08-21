'use strict';
const entity = require('../entities/labSpecimen');
function validateLabspecimen(payload) { return entity.validate(payload); }
module.exports = { validateLabspecimen };
