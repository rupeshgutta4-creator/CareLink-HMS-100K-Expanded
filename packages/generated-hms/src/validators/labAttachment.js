'use strict';
const entity = require('../entities/labAttachment');
function validateLabattachment(payload) { return entity.validate(payload); }
module.exports = { validateLabattachment };
