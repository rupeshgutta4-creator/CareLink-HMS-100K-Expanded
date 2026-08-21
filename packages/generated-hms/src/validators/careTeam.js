'use strict';
const entity = require('../entities/careTeam');
function validateCareteam(payload) { return entity.validate(payload); }
module.exports = { validateCareteam };
