'use strict';
const entity = require('../entities/insuranceClaim');
function validateInsuranceclaim(payload) { return entity.validate(payload); }
module.exports = { validateInsuranceclaim };
