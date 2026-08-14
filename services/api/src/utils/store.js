'use strict';

/**
 * In-memory store for CareLink demo / MVP.
 * Replace with PostgreSQL repositories in production.
 */

const { v4: uuid } = require('uuid');

const db = {
  users: [],
  patients: [],
  doctors: [],
  appointments: [],
  visits: [],
  prescriptions: [],
  labOrders: [],
  medicines: [],
  invoices: [],
  audit: []
};

function id() {
  return uuid();
}

function now() {
  return new Date().toISOString();
}

function audit(actorId, action, entity, entityId, meta) {
  db.audit.push({
    id: id(),
    actorId,
    action,
    entity,
    entityId,
    meta: meta || null,
    at: now()
  });
}

module.exports = { db, id, now, audit };
