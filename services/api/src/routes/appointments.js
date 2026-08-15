'use strict';

const express = require('express');
const { db, id, now, audit } = require('../utils/store');
const { authenticate, requireRoles } = require('../middleware/auth');
const { createError } = require('../middleware/errorHandler');

const appointmentsRouter = express.Router();

const STATUSES = ['scheduled', 'checked_in', 'in_progress', 'completed', 'cancelled', 'no_show'];

appointmentsRouter.use(authenticate);

appointmentsRouter.get('/', (req, res) => {
  let list = [...db.appointments];
  if (req.query.doctorId) list = list.filter(a => a.doctorId === req.query.doctorId);
  if (req.query.patientId) list = list.filter(a => a.patientId === req.query.patientId);
  if (req.query.status) list = list.filter(a => a.status === req.query.status);
  if (req.query.date) list = list.filter(a => (a.scheduledAt || '').startsWith(req.query.date));
  list.sort((a, b) => String(a.scheduledAt).localeCompare(String(b.scheduledAt)));
  res.json({ data: list, total: list.length });
});

appointmentsRouter.post('/', requireRoles('admin', 'reception', 'patient'), (req, res, next) => {
  try {
    const { patientId, doctorId, scheduledAt, reason, type } = req.body || {};
    if (!patientId || !doctorId || !scheduledAt) {
      throw createError(400, 'patientId, doctorId, scheduledAt required', 'VALIDATION');
    }
    if (!db.patients.find(p => p.id === patientId)) throw createError(404, 'Patient not found', 'NOT_FOUND');
    if (!db.doctors.find(d => d.id === doctorId)) throw createError(404, 'Doctor not found', 'NOT_FOUND');
    const appt = {
      id: id(),
      patientId,
      doctorId,
      scheduledAt,
      reason: reason || null,
      type: type || 'opd',
      status: 'scheduled',
      createdAt: now(),
      createdBy: req.user.sub
    };
    db.appointments.push(appt);
    audit(req.user.sub, 'create', 'appointment', appt.id);
    res.status(201).json(appt);
  } catch (err) {
    next(err);
  }
});

appointmentsRouter.patch('/:id/status', requireRoles('admin', 'reception', 'doctor', 'nurse'), (req, res, next) => {
  const appt = db.appointments.find(a => a.id === req.params.id);
  if (!appt) return next(createError(404, 'Appointment not found', 'NOT_FOUND'));
  const { status } = req.body || {};
  if (!STATUSES.includes(status)) return next(createError(400, 'Invalid status', 'VALIDATION'));
  appt.status = status;
  appt.updatedAt = now();
  audit(req.user.sub, 'status_change', 'appointment', appt.id, { status });
  res.json(appt);
});

module.exports = { appointmentsRouter };
