'use strict';
const entity = require('../entities/bed');
function validateBed(payload) { return entity.validate(payload); }
module.exports = { validateBed };
