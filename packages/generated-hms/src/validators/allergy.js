'use strict';
const entity = require('../entities/allergy');
function validateAllergy(payload) { return entity.validate(payload); }
module.exports = { validateAllergy };
