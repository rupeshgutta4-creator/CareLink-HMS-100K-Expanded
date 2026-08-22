'use strict';
const entity = require('../entities/workflowTask');
function validateWorkflowtask(payload) { return entity.validate(payload); }
module.exports = { validateWorkflowtask };
