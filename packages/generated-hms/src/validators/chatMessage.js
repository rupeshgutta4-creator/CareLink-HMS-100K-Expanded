'use strict';
const entity = require('../entities/chatMessage');
function validateChatmessage(payload) { return entity.validate(payload); }
module.exports = { validateChatmessage };
