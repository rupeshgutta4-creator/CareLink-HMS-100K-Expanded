'use strict';

const express = require('express');
const { db, id, now, audit } = require('../utils/store');
const { authenticate, requireRoles } = require('../middleware/auth');
const { createError } = require('../middleware/errorHandler');

const labRouter = express.Router();
labRouter.use(authenticate);

labRouter.get('/orders', requireRoles('admin', 'doctor', 'lab', 'nurse'), (req, res) => {
  let list = [...db.labOrders];
  if (req.query.patientId) list = list.filter(o => o.patientId === req.query.patientId);
  if (req.query.status) list = list.filter(o => o.status === req.query.status);
  res.json({ data: list, total: list.length });
});

labRouter.post('/orders', requireRoles('admin', 'doctor'), (req, res, next) => {
  try {
    const { patientId, visitId, tests } = req.body || {};
    if (!patientId || !Array.isArray(tests) || !tests.length) {
      throw createError(400, 'patientId and tests required', 'VALIDATION');
    }
    const order = {
      id: id(),
      patientId,
      visitId: visitId || null,
      tests: tests.map(t => ({ name: t.name || t, status: 'pending', result: null })),
      status: 'ordered',
      createdAt: now(),
      createdBy: req.user.sub
    };
    db.labOrders.push(order);
    audit(req.user.sub, 'create', 'lab_order', order.id);
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
});

labRouter.patch('/orders/:id/results', requireRoles('admin', 'lab'), (req, res, next) => {
  const order = db.labOrders.find(o => o.id === req.params.id);
  if (!order) return next(createError(404, 'Order not found', 'NOT_FOUND'));
  const results = req.body && req.body.results;
  if (!Array.isArray(results)) return next(createError(400, 'results array required', 'VALIDATION'));
  for (const r of results) {
    const test = order.tests.find(t => t.name === r.name);
    if (test) {
      test.result = r.result;
      test.status = 'completed';
    }
  }
  order.status = order.tests.every(t => t.status === 'completed') ? 'completed' : 'partial';
  order.updatedAt = now();
  audit(req.user.sub, 'update_results', 'lab_order', order.id);
  res.json(order);
});

module.exports = { labRouter };
