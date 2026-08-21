'use strict';
const entity = require('../entities/fluidBalance');
function validateFluidbalance(payload) { return entity.validate(payload); }
module.exports = { validateFluidbalance };
