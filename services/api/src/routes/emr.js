'use strict';

const express = require('express');
const { db, id, now, audit } = require('../utils/store');
const { authenticate, requireRoles } = require('../middleware/auth');
const { createError } = require('../middleware/errorHandler');

const emrRouter = express.Router();
emrRouter.use(authenticate);

emrRouter.get('/visits', requireRoles('admin', 'doctor', 'nurse'), (req, res) => {
  let list = [...db.visits];
  if (req.query.patientId) list = list.filter(v => v.patientId === req.query.patientId);
  if (req.query.doctorId) list = list.filter(v => v.doctorId === req.query.doctorId);
  res.json({ data: list, total: list.length });
});

emrRouter.post('/visits', requireRoles('admin', 'doctor'), (req, res, next) => {
  try {
    const { patientId, doctorId, appointmentId, chiefComplaint, diagnosis, notes, vitals } = req.body || {};
    if (!patientId || !doctorId) throw createError(400, 'patientId and doctorId required', 'VALIDATION');
    const visit = {
      id: id(),
      patientId,
      doctorId,
      appointmentId: appointmentId || null,
      chiefComplaint: chiefComplaint || null,
      diagnosis: diagnosis || null,
      notes: notes || null,
      vitals: vitals || null,
      createdAt: now(),
      createdBy: req.user.sub
    };
    db.visits.push(visit);
    audit(req.user.sub, 'create', 'visit', visit.id);
    res.status(201).json(visit);
  } catch (err) {
    next(err);
  }
});

emrRouter.post('/prescriptions', requireRoles('admin', 'doctor'), (req, res, next) => {
  try {
    const { visitId, patientId, items } = req.body || {};
    if (!patientId || !Array.isArray(items) || !items.length) {
      throw createError(400, 'patientId and items required', 'VALIDATION');
    }
    const rx = {
      id: id(),
      visitId: visitId || null,
      patientId,
      items,
      status: 'active',
      createdAt: now(),
      createdBy: req.user.sub
    };
    db.prescriptions.push(rx);
    audit(req.user.sub, 'create', 'prescription', rx.id);
    res.status(201).json(rx);
  } catch (err) {
    next(err);
  }
});

emrRouter.get('/prescriptions', requireRoles('admin', 'doctor', 'pharmacy', 'patient'), (req, res) => {
  let list = [...db.prescriptions];
  if (req.query.patientId) list = list.filter(p => p.patientId === req.query.patientId);
  res.json({ data: list, total: list.length });
});

module.exports = { emrRouter };
