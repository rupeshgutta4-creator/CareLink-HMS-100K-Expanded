'use strict';
const entity = require('../entities/user');
function validateUser(payload) { return entity.validate(payload); }
module.exports = { validateUser };
