'use strict';
const entity = require('../entities/bloodUnit');
function validateBloodunit(payload) { return entity.validate(payload); }
module.exports = { validateBloodunit };
