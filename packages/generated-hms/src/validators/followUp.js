'use strict';
const entity = require('../entities/followUp');
function validateFollowup(payload) { return entity.validate(payload); }
module.exports = { validateFollowup };
