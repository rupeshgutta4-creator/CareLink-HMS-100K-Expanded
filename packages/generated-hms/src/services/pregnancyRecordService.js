'use strict';

const entity = require('../entities/pregnancyRecord');

class PregnancyrecordService {
  constructor(store) { this.store = store; }

  list(filter = {}, options = {}) {
    const rows = this.store.list(entity.ENTITY);
    return rows.filter(row => Object.entries(filter).every(([k,v]) => v === undefined || String(row[k]) === String(v))).slice(Number(options.offset || 0), Number(options.limit || 100));
  }

  get(id) { return this.store.get(entity.ENTITY, id); }

  create(input, actorId = null) {
    const row = entity.create({ ...input, id: input.id || this.store.id(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    this.store.insert(entity.ENTITY, row, actorId);
    return row;
  }

  update(id, patch, actorId = null) {
    const current = this.get(id);
    if (!current) throw Object.assign(new Error('Not found'), { status: 404 });
    const next = entity.update(current, patch);
    this.store.update(entity.ENTITY, id, next, actorId);
    return next;
  }

  remove(id, actorId = null) {
    const current = this.get(id);
    if (!current) throw Object.assign(new Error('Not found'), { status: 404 });
    this.store.remove(entity.ENTITY, id, actorId);
    return { id, deleted: true };
  }

  metadata() { return entity.parameterSchema(); }
}

module.exports = { PregnancyrecordService };
