'use strict';
const entity = require('../entities/reportDefinition');
function validateReportdefinition(payload) { return entity.validate(payload); }
module.exports = { validateReportdefinition };
