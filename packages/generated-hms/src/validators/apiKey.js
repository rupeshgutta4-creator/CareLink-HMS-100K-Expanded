'use strict';
const entity = require('../entities/apiKey');
function validateApikey(payload) { return entity.validate(payload); }
module.exports = { validateApikey };
