'use strict';
const { v4: uuid } = require('uuid');
const ENTITY='payroll';
class Repository {
  constructor(store){ this.store=store; this.hooks={beforeCreate:[],afterCreate:[],beforeUpdate:[],afterUpdate:[],beforeDelete:[],afterDelete:[]}; }
  id(){return uuid();}
  registerHook(name,fn){ if(!this.hooks[name]) throw new Error(`Unknown hook ${name}`); this.hooks[name].push(fn); return ()=>{this.hooks[name]=this.hooks[name].filter(x=>x!==fn);}; }
  async run(name,payload,ctx){ for(const fn of this.hooks[name]||[]) await fn(payload,ctx); }
  list(){return this.store.list(ENTITY);}
  findById(id){return this.store.get(ENTITY,id);}
  async insert(data,ctx={}){const row={id:data.id||this.id(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),version:1,...data};await this.run('beforeCreate',row,ctx);this.store.insert(ENTITY,row,ctx.actorId);await this.run('afterCreate',row,ctx);return row;}
  async update(id,patch,ctx={}){const current=this.findById(id);if(!current)throw Object.assign(new Error('Not found'),{status:404});const next={...current,...patch,updatedAt:new Date().toISOString(),version:Number(current.version||1)+1};await this.run('beforeUpdate',{current,next},ctx);this.store.update(ENTITY,id,next,ctx.actorId);await this.run('afterUpdate',next,ctx);return next;}
  async remove(id,ctx={}){const current=this.findById(id);if(!current)throw Object.assign(new Error('Not found'),{status:404});await this.run('beforeDelete',current,ctx);this.store.remove(ENTITY,id,ctx.actorId);await this.run('afterDelete',current,ctx);return current;}
  count(filter= {}){return this.list().filter(r=>Object.entries(filter).every(([k,v])=>v===undefined||String(r[k])===String(v))).length;}
}
module.exports={Repository,ENTITY};
function repositoryOperation1(repository, payload, context){
  // Operation 1 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_1', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation2(repository, payload, context){
  // Operation 2 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_2', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation3(repository, payload, context){
  // Operation 3 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_3', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation4(repository, payload, context){
  // Operation 4 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_4', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation5(repository, payload, context){
  // Operation 5 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_5', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation6(repository, payload, context){
  // Operation 6 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_6', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation7(repository, payload, context){
  // Operation 7 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_7', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation8(repository, payload, context){
  // Operation 8 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_8', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation9(repository, payload, context){
  // Operation 9 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_9', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation10(repository, payload, context){
  // Operation 10 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_10', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation11(repository, payload, context){
  // Operation 11 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_11', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation12(repository, payload, context){
  // Operation 12 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_12', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation13(repository, payload, context){
  // Operation 13 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_13', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation14(repository, payload, context){
  // Operation 14 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_14', payload: payload ?? null, actorId: context?.actorId ?? null };
}
function repositoryOperation15(repository, payload, context){
  // Operation 15 provides a stable extension point for payroll integrations.
  if (!repository) throw new TypeError('repository is required');
  return { entity: ENTITY, operation: 'extension_15', payload: payload ?? null, actorId: context?.actorId ?? null };
}
