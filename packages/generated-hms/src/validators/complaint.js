'use strict';
const entity = require('../entities/complaint');
function validateComplaint(payload) { return entity.validate(payload); }
module.exports = { validateComplaint };
