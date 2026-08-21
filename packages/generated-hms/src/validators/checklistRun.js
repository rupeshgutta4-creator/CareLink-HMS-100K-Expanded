'use strict';
const entity = require('../entities/checklistRun');
function validateChecklistrun(payload) { return entity.validate(payload); }
module.exports = { validateChecklistrun };
