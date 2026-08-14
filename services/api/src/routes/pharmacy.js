'use strict';

const express = require('express');
const { db, id, now, audit } = require('../utils/store');
const { authenticate, requireRoles } = require('../middleware/auth');
const { createError } = require('../middleware/errorHandler');

const pharmacyRouter = express.Router();
pharmacyRouter.use(authenticate);

pharmacyRouter.get('/medicines', requireRoles('admin', 'pharmacy', 'doctor'), (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  let list = db.medicines;
  if (q) list = list.filter(m => m.name.toLowerCase().includes(q) || m.code.toLowerCase().includes(q));
  res.json({ data: list, total: list.length });
});

pharmacyRouter.post('/medicines', requireRoles('admin', 'pharmacy'), (req, res, next) => {
  try {
    const { code, name, unit, stock, unitPrice } = req.body || {};
    if (!code || !name) throw createError(400, 'code and name required', 'VALIDATION');
    if (db.medicines.some(m => m.code === code)) throw createError(409, 'Code exists', 'DUPLICATE');
    const med = {
      id: id(),
      code,
      name,
      unit: unit || 'unit',
      stock: Number(stock) || 0,
      unitPrice: Number(unitPrice) || 0,
      createdAt: now()
    };
    db.medicines.push(med);
    audit(req.user.sub, 'create', 'medicine', med.id);
    res.status(201).json(med);
  } catch (err) {
    next(err);
  }
});

pharmacyRouter.post('/dispense', requireRoles('admin', 'pharmacy'), (req, res, next) => {
  try {
    const { prescriptionId, items } = req.body || {};
    if (!Array.isArray(items) || !items.length) throw createError(400, 'items required', 'VALIDATION');
    const dispensed = [];
    for (const item of items) {
      const med = db.medicines.find(m => m.id === item.medicineId || m.code === item.code);
      if (!med) throw createError(404, 'Medicine not found: ' + (item.code || item.medicineId), 'NOT_FOUND');
      const qty = Number(item.quantity) || 1;
      if (med.stock < qty) throw createError(400, 'Insufficient stock for ' + med.name, 'STOCK');
      med.stock -= qty;
      dispensed.push({ medicineId: med.id, code: med.code, name: med.name, quantity: qty, unitPrice: med.unitPrice });
    }
    const record = {
      id: id(),
      prescriptionId: prescriptionId || null,
      items: dispensed,
      total: dispensed.reduce((s, i) => s + i.quantity * i.unitPrice, 0),
      createdAt: now(),
      createdBy: req.user.sub
    };
    audit(req.user.sub, 'dispense', 'pharmacy', record.id, { count: dispensed.length });
    res.status(201).json(record);
  } catch (err) {
    next(err);
  }
});

module.exports = { pharmacyRouter };
