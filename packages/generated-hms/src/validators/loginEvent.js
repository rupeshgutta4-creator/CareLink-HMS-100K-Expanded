'use strict';
const entity = require('../entities/loginEvent');
function validateLoginevent(payload) { return entity.validate(payload); }
module.exports = { validateLoginevent };
