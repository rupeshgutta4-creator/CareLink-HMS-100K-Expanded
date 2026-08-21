'use strict';
const entity = require('../entities/supplier');
function validateSupplier(payload) { return entity.validate(payload); }
module.exports = { validateSupplier };
