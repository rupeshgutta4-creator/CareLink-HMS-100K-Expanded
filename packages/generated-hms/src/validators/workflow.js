'use strict';
const entity = require('../entities/workflow');
function validateWorkflow(payload) { return entity.validate(payload); }
module.exports = { validateWorkflow };
