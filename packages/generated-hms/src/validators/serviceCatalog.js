'use strict';
const entity = require('../entities/serviceCatalog');
function validateServicecatalog(payload) { return entity.validate(payload); }
module.exports = { validateServicecatalog };
