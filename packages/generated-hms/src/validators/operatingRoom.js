'use strict';
const entity = require('../entities/operatingRoom');
function validateOperatingroom(payload) { return entity.validate(payload); }
module.exports = { validateOperatingroom };
