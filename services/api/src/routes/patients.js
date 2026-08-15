'use strict';

const express = require('express');
const { db, id, now, audit } = require('../utils/store');
const { authenticate, requireRoles } = require('../middleware/auth');
const { createError } = require('../middleware/errorHandler');

const patientsRouter = express.Router();

patientsRouter.use(authenticate);

patientsRouter.get('/', requireRoles('admin', 'reception', 'doctor', 'nurse'), (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  let list = db.patients;
  if (q) {
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.mrn.toLowerCase().includes(q) ||
      (p.phone || '').includes(q)
    );
  }
  res.json({ data: list, total: list.length });
});

patientsRouter.get('/:id', requireRoles('admin', 'reception', 'doctor', 'nurse', 'patient'), (req, res, next) => {
  const p = db.patients.find(x => x.id === req.params.id);
  if (!p) return next(createError(404, 'Patient not found', 'NOT_FOUND'));
  if (req.user.role === 'patient' && p.userId !== req.user.sub) {
    return next(createError(403, 'Forbidden', 'FORBIDDEN'));
  }
  res.json(p);
});

patientsRouter.post('/', requireRoles('admin', 'reception'), (req, res, next) => {
  try {
    const { name, gender, dob, phone, email, bloodGroup, address } = req.body || {};
    if (!name) throw createError(400, 'Name is required', 'VALIDATION');
    const mrn = 'MRN-' + String(1000 + db.patients.length + 1);
    const patient = {
      id: id(),
      userId: null,
      mrn,
      name,
      gender: gender || 'unknown',
      dob: dob || null,
      phone: phone || null,
      email: email || null,
      bloodGroup: bloodGroup || null,
      address: address || null,
      createdAt: now()
    };
    db.patients.push(patient);
    audit(req.user.sub, 'create', 'patient', patient.id);
    res.status(201).json(patient);
  } catch (err) {
    next(err);
  }
});

patientsRouter.patch('/:id', requireRoles('admin', 'reception'), (req, res, next) => {
  const p = db.patients.find(x => x.id === req.params.id);
  if (!p) return next(createError(404, 'Patient not found', 'NOT_FOUND'));
  const fields = ['name', 'gender', 'dob', 'phone', 'email', 'bloodGroup', 'address'];
  for (const f of fields) {
    if (req.body[f] !== undefined) p[f] = req.body[f];
  }
  p.updatedAt = now();
  audit(req.user.sub, 'update', 'patient', p.id);
  res.json(p);
});

module.exports = { patientsRouter };
