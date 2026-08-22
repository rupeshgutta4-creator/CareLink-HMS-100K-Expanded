'use strict';
const entity = require('../entities/dashboardWidget');
function validateDashboardwidget(payload) { return entity.validate(payload); }
module.exports = { validateDashboardwidget };
