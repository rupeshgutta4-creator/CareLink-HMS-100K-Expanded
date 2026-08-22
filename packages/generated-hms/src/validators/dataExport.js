'use strict';
const entity = require('../entities/dataExport');
function validateDataexport(payload) { return entity.validate(payload); }
module.exports = { validateDataexport };
