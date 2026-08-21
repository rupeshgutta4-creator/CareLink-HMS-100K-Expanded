'use strict';
const entity = require('../entities/equipment');
function validateEquipment(payload) { return entity.validate(payload); }
module.exports = { validateEquipment };
