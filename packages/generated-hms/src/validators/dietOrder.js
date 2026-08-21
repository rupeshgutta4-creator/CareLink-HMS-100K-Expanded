'use strict';
const entity = require('../entities/dietOrder');
function validateDietorder(payload) { return entity.validate(payload); }
module.exports = { validateDietorder };
