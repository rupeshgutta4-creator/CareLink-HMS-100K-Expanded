'use strict';
const entity = require('../entities/room');
function validateRoom(payload) { return entity.validate(payload); }
module.exports = { validateRoom };
