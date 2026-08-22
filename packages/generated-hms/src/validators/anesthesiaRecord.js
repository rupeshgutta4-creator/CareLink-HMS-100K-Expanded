'use strict';
const entity = require('../entities/anesthesiaRecord');
function validateAnesthesiarecord(payload) { return entity.validate(payload); }
module.exports = { validateAnesthesiarecord };
