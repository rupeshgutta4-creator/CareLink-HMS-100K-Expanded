'use strict';

const ENTITY = 'ambulanceTrip';
const VERSION = '1.0.0';

const fields = {
  ambulanceId: { type: 'string', required: true },
  patientId: { type: 'string', required: true },
  pickupLocation: { type: 'string', required: true },
  destination: { type: 'string', required: false },
  requestedAt: { type: 'string', required: false },
  departedAt: { type: 'string', required: false },
  arrivedAt: { type: 'string', required: false },
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
