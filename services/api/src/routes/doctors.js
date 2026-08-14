'use strict';

const express = require('express');
const { db, id, now, audit } = require('../utils/store');
const { authenticate, requireRoles } = require('../middleware/auth');
const { createError } = require('../middleware/errorHandler');

const doctorsRouter = express.Router();

doctorsRouter.use(authenticate);

doctorsRouter.get('/', (req, res) => {
  const specialty = req.query.specialty;
  let list = db.doctors.filter(d => d.active !== false);
  if (specialty) list = list.filter(d => d.specialty.toLowerCase().includes(String(specialty).toLowerCase()));
  res.json({ data: list, total: list.length });
});

doctorsRouter.get('/:id', (req, res, next) => {
  const d = db.doctors.find(x => x.id === req.params.id);
  if (!d) return next(createError(404, 'Doctor not found', 'NOT_FOUND'));
  res.json(d);
});

doctorsRouter.post('/', requireRoles('admin'), (req, res, next) => {
  try {
    const { name, specialty, department, licenseNo, consultationFee, userId } = req.body || {};
    if (!name || !specialty) throw createError(400, 'name and specialty required', 'VALIDATION');
    const doctor = {
      id: id(),
      userId: userId || null,
      name,
      specialty,
      department: department || 'General',
      licenseNo: licenseNo || null,
      consultationFee: Number(consultationFee) || 0,
      active: true,
      createdAt: now()
    };
    db.doctors.push(doctor);
    audit(req.user.sub, 'create', 'doctor', doctor.id);
    res.status(201).json(doctor);
  } catch (err) {
    next(err);
  }
});

module.exports = { doctorsRouter };
