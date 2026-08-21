'use strict';

const ENTITY = 'medicine';
const VERSION = '1.0.0';

const fields = {
  sku: { type: 'string', required: true },
  name: { type: 'string', required: true },
  genericName: { type: 'string', required: true },
  category: { type: 'string', required: false },
  manufacturer: { type: 'string', required: false },
  batchNumber: { type: 'string', required: false },
  expiryDate: { type: 'string', required: false },
  quantity: { type: 'number', required: false },
  reorderLevel: { type: 'string', required: false },
  unitPrice: { type: 'number', required: false },
  taxRate: { type: 'number', required: false },
  status: { type: 'string', required: false },
};

const defaults = {
  id: null,
  createdAt: null,
  updatedAt: null,
  version: 1,
  status: 'active',
};

function create(input = {}) {
  const value = { ...defaults, ...input };
  const errors = validate(value);
  if (errors.length) throw Object.assign(new Error('Validation failed'), { code: 'VALIDATION_ERROR', errors });
  return value;
}

function validate(value) {
  const errors = [];
  for (const [key, rule] of Object.entries(fields)) {
    if (rule.required && (value[key] === undefined || value[key] === null || value[key] === '')) errors.push({ field: key, message: 'Required field' });
    if (value[key] !== undefined && value[key] !== null && typeof value[key] !== rule.type) errors.push({ field: key, message: `Expected ${rule.type}` });
  }
  return errors;
}

function update(current, patch = {}) {
  const next = { ...current, ...patch, updatedAt: new Date().toISOString(), version: Number(current.version || 1) + 1 };
  const errors = validate(next);
  if (errors.length) throw Object.assign(new Error('Validation failed'), { code: 'VALIDATION_ERROR', errors });
  return next;
}

function parameterSchema() { return { entity: ENTITY, version: VERSION, fields, defaults }; }

module.exports = { ENTITY, VERSION, fields, defaults, create, validate, update, parameterSchema };
