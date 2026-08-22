'use strict';
const entity = require('../entities/pregnancyRecord');
function validatePregnancyrecord(payload) { return entity.validate(payload); }
module.exports = { validatePregnancyrecord };
