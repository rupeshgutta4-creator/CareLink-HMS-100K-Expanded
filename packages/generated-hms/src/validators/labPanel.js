'use strict';
const entity = require('../entities/labPanel');
function validateLabpanel(payload) { return entity.validate(payload); }
module.exports = { validateLabpanel };
