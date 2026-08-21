'use strict';
const entity = require('../entities/systemSetting');
function validateSystemsetting(payload) { return entity.validate(payload); }
module.exports = { validateSystemsetting };
