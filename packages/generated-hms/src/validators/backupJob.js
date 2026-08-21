'use strict';
const entity = require('../entities/backupJob');
function validateBackupjob(payload) { return entity.validate(payload); }
module.exports = { validateBackupjob };
