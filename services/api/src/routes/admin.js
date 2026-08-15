'use strict';

const express = require('express');
const { db } = require('../utils/store');
const { authenticate, requireRoles } = require('../middleware/auth');

const adminRouter = express.Router();
adminRouter.use(authenticate);
adminRouter.use(requireRoles('admin'));

adminRouter.get('/dashboard', (_req, res) => {
  const unpaid = db.invoices.filter(i => i.status === 'unpaid');
  res.json({
    patients: db.patients.length,
    doctors: db.doctors.length,
    appointmentsToday: db.appointments.filter(a => (a.scheduledAt || '').startsWith(new Date().toISOString().slice(0, 10))).length,
    openAppointments: db.appointments.filter(a => ['scheduled', 'checked_in', 'in_progress'].includes(a.status)).length,
    visits: db.visits.length,
    labOrders: db.labOrders.length,
    invoicesUnpaid: unpaid.length,
    revenuePaid: db.invoices.filter(i => i.status === 'paid').reduce((s, i) => s + (i.total || 0), 0),
    medicines: db.medicines.length,
    auditEvents: db.audit.length
  });
});

adminRouter.get('/audit', (req, res) => {
  const limit = Math.min(Number(req.query.limit) || 50, 200);
  const rows = db.audit.slice(-limit).reverse();
  res.json({ data: rows, total: db.audit.length });
});

adminRouter.get('/users', (_req, res) => {
  res.json({
    data: db.users.map(u => ({ id: u.id, email: u.email, name: u.name, role: u.role, createdAt: u.createdAt })),
    total: db.users.length
  });
});

module.exports = { adminRouter };
