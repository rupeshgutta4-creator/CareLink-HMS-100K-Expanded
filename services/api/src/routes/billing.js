'use strict';

const express = require('express');
const { db, id, now, audit } = require('../utils/store');
const { authenticate, requireRoles } = require('../middleware/auth');
const { createError } = require('../middleware/errorHandler');

const billingRouter = express.Router();
billingRouter.use(authenticate);

billingRouter.get('/invoices', requireRoles('admin', 'reception'), (req, res) => {
  let list = [...db.invoices];
  if (req.query.patientId) list = list.filter(i => i.patientId === req.query.patientId);
  if (req.query.status) list = list.filter(i => i.status === req.query.status);
  res.json({ data: list, total: list.length });
});

billingRouter.post('/invoices', requireRoles('admin', 'reception'), (req, res, next) => {
  try {
    const { patientId, lines, notes } = req.body || {};
    if (!patientId || !Array.isArray(lines) || !lines.length) {
      throw createError(400, 'patientId and lines required', 'VALIDATION');
    }
    const normalized = lines.map(l => ({
      description: l.description || 'Item',
      amount: Number(l.amount) || 0,
      quantity: Number(l.quantity) || 1
    }));
    const subtotal = normalized.reduce((s, l) => s + l.amount * l.quantity, 0);
    const invoice = {
      id: id(),
      number: 'INV-' + String(10000 + db.invoices.length + 1),
      patientId,
      lines: normalized,
      subtotal,
      tax: Math.round(subtotal * 0.05),
      total: 0,
      status: 'unpaid',
      notes: notes || null,
      createdAt: now(),
      createdBy: req.user.sub
    };
    invoice.total = invoice.subtotal + invoice.tax;
    db.invoices.push(invoice);
    audit(req.user.sub, 'create', 'invoice', invoice.id);
    res.status(201).json(invoice);
  } catch (err) {
    next(err);
  }
});

billingRouter.post('/invoices/:id/pay', requireRoles('admin', 'reception'), (req, res, next) => {
  const inv = db.invoices.find(i => i.id === req.params.id);
  if (!inv) return next(createError(404, 'Invoice not found', 'NOT_FOUND'));
  if (inv.status === 'paid') return next(createError(400, 'Already paid', 'INVALID_STATE'));
  inv.status = 'paid';
  inv.paidAt = now();
  inv.paymentMethod = (req.body && req.body.method) || 'cash';
  audit(req.user.sub, 'pay', 'invoice', inv.id);
  res.json(inv);
});

module.exports = { billingRouter };
