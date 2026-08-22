'use strict';
const entity = require('../entities/bloodIssue');
function validateBloodissue(payload) { return entity.validate(payload); }
module.exports = { validateBloodissue };
