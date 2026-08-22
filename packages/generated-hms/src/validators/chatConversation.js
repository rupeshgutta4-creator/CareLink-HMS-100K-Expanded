'use strict';
const entity = require('../entities/chatConversation');
function validateChatconversation(payload) { return entity.validate(payload); }
module.exports = { validateChatconversation };
