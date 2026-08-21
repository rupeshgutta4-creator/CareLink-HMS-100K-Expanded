'use strict';
const entity = require('../entities/reportRun');
function validateReportrun(payload) { return entity.validate(payload); }
module.exports = { validateReportrun };
