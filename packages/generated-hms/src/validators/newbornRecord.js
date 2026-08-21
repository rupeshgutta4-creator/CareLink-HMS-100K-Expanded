'use strict';
const entity = require('../entities/newbornRecord');
function validateNewbornrecord(payload) { return entity.validate(payload); }
module.exports = { validateNewbornrecord };
