'use strict';
const entity = require('../entities/checklist');
function validateChecklist(payload) { return entity.validate(payload); }
module.exports = { validateChecklist };
