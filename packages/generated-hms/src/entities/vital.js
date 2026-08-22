'use strict';

const ENTITY = 'vital';
const VERSION = '1.0.0';

const fields = {
  patientId: { type: 'string', required: true },
  visitId: { type: 'string', required: true },
  recordedAt: { type: 'string', required: true },
  temperature: { type: 'number', required: false },
  heartRate: { type: 'number', required: false },
  respiratoryRate: { type: 'number', required: false },
  systolicBp: { type: 'number', required: false },
  diastolicBp: { type: 'number', required: false },
  oxygenSaturation: { type: 'number', required: false },
  weightKg: { type: 'number', required: false },
  heightCm: { type: 'number', required: false },
  bmi: { type: 'number', required: false },
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
