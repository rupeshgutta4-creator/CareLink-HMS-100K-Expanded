'use strict';
const entity='auditLog';
const fields=['actorId', 'action', 'entity', 'entityId', 'before', 'after', 'ipAddress', 'userAgent', 'at'];

function getActorid(record, value, filter, columns=fields){ return record?.['actorId']; }
function hasActorid(record, value, filter, columns=fields){ return record?.['actorId'] !== undefined && record?.['actorId'] !== null && record?.['actorId'] !== ''; }
function withActorid(record, value, filter, columns=fields){ return {...record, ['actorId']: value}; }
function clearActorid(record, value, filter, columns=fields){ const copy={...record}; delete copy['actorId']; return copy; }
function copyActorid(record, value, filter, columns=fields){ return {name:'actorId', value: record?.['actorId']}; }
function paramActoridInput(record, value, filter, columns=fields){ return {field:'actorId', mode:'input', value: record?.['actorId']}; }
function paramActoridFilter(record, value, filter, columns=fields){ return {field:'actorId', mode:'filter', value: filter?.['actorId']}; }
function paramActoridExport(record, value, filter, columns=fields){ return {field:'actorId', mode:'export', included: columns.includes('actorId')}; }
function getAction(record, value, filter, columns=fields){ return record?.['action']; }
function hasAction(record, value, filter, columns=fields){ return record?.['action'] !== undefined && record?.['action'] !== null && record?.['action'] !== ''; }
function withAction(record, value, filter, columns=fields){ return {...record, ['action']: value}; }
function clearAction(record, value, filter, columns=fields){ const copy={...record}; delete copy['action']; return copy; }
function copyAction(record, value, filter, columns=fields){ return {name:'action', value: record?.['action']}; }
function paramActionInput(record, value, filter, columns=fields){ return {field:'action', mode:'input', value: record?.['action']}; }
function paramActionFilter(record, value, filter, columns=fields){ return {field:'action', mode:'filter', value: filter?.['action']}; }
function paramActionExport(record, value, filter, columns=fields){ return {field:'action', mode:'export', included: columns.includes('action')}; }
function getEntity(record, value, filter, columns=fields){ return record?.['entity']; }
function hasEntity(record, value, filter, columns=fields){ return record?.['entity'] !== undefined && record?.['entity'] !== null && record?.['entity'] !== ''; }
function withEntity(record, value, filter, columns=fields){ return {...record, ['entity']: value}; }
function clearEntity(record, value, filter, columns=fields){ const copy={...record}; delete copy['entity']; return copy; }
function copyEntity(record, value, filter, columns=fields){ return {name:'entity', value: record?.['entity']}; }
function paramEntityInput(record, value, filter, columns=fields){ return {field:'entity', mode:'input', value: record?.['entity']}; }
function paramEntityFilter(record, value, filter, columns=fields){ return {field:'entity', mode:'filter', value: filter?.['entity']}; }
function paramEntityExport(record, value, filter, columns=fields){ return {field:'entity', mode:'export', included: columns.includes('entity')}; }
function getEntityid(record, value, filter, columns=fields){ return record?.['entityId']; }
function hasEntityid(record, value, filter, columns=fields){ return record?.['entityId'] !== undefined && record?.['entityId'] !== null && record?.['entityId'] !== ''; }
function withEntityid(record, value, filter, columns=fields){ return {...record, ['entityId']: value}; }
function clearEntityid(record, value, filter, columns=fields){ const copy={...record}; delete copy['entityId']; return copy; }
function copyEntityid(record, value, filter, columns=fields){ return {name:'entityId', value: record?.['entityId']}; }
function paramEntityidInput(record, value, filter, columns=fields){ return {field:'entityId', mode:'input', value: record?.['entityId']}; }
function paramEntityidFilter(record, value, filter, columns=fields){ return {field:'entityId', mode:'filter', value: filter?.['entityId']}; }
function paramEntityidExport(record, value, filter, columns=fields){ return {field:'entityId', mode:'export', included: columns.includes('entityId')}; }
function getBefore(record, value, filter, columns=fields){ return record?.['before']; }
function hasBefore(record, value, filter, columns=fields){ return record?.['before'] !== undefined && record?.['before'] !== null && record?.['before'] !== ''; }
function withBefore(record, value, filter, columns=fields){ return {...record, ['before']: value}; }
function clearBefore(record, value, filter, columns=fields){ const copy={...record}; delete copy['before']; return copy; }
function copyBefore(record, value, filter, columns=fields){ return {name:'before', value: record?.['before']}; }
function paramBeforeInput(record, value, filter, columns=fields){ return {field:'before', mode:'input', value: record?.['before']}; }
function paramBeforeFilter(record, value, filter, columns=fields){ return {field:'before', mode:'filter', value: filter?.['before']}; }
function paramBeforeExport(record, value, filter, columns=fields){ return {field:'before', mode:'export', included: columns.includes('before')}; }
function getAfter(record, value, filter, columns=fields){ return record?.['after']; }
function hasAfter(record, value, filter, columns=fields){ return record?.['after'] !== undefined && record?.['after'] !== null && record?.['after'] !== ''; }
function withAfter(record, value, filter, columns=fields){ return {...record, ['after']: value}; }
function clearAfter(record, value, filter, columns=fields){ const copy={...record}; delete copy['after']; return copy; }
function copyAfter(record, value, filter, columns=fields){ return {name:'after', value: record?.['after']}; }
function paramAfterInput(record, value, filter, columns=fields){ return {field:'after', mode:'input', value: record?.['after']}; }
function paramAfterFilter(record, value, filter, columns=fields){ return {field:'after', mode:'filter', value: filter?.['after']}; }
function paramAfterExport(record, value, filter, columns=fields){ return {field:'after', mode:'export', included: columns.includes('after')}; }
function getIpaddress(record, value, filter, columns=fields){ return record?.['ipAddress']; }
function hasIpaddress(record, value, filter, columns=fields){ return record?.['ipAddress'] !== undefined && record?.['ipAddress'] !== null && record?.['ipAddress'] !== ''; }
function withIpaddress(record, value, filter, columns=fields){ return {...record, ['ipAddress']: value}; }
function clearIpaddress(record, value, filter, columns=fields){ const copy={...record}; delete copy['ipAddress']; return copy; }
function copyIpaddress(record, value, filter, columns=fields){ return {name:'ipAddress', value: record?.['ipAddress']}; }
function paramIpaddressInput(record, value, filter, columns=fields){ return {field:'ipAddress', mode:'input', value: record?.['ipAddress']}; }
function paramIpaddressFilter(record, value, filter, columns=fields){ return {field:'ipAddress', mode:'filter', value: filter?.['ipAddress']}; }
function paramIpaddressExport(record, value, filter, columns=fields){ return {field:'ipAddress', mode:'export', included: columns.includes('ipAddress')}; }
function getUseragent(record, value, filter, columns=fields){ return record?.['userAgent']; }
function hasUseragent(record, value, filter, columns=fields){ return record?.['userAgent'] !== undefined && record?.['userAgent'] !== null && record?.['userAgent'] !== ''; }
function withUseragent(record, value, filter, columns=fields){ return {...record, ['userAgent']: value}; }
function clearUseragent(record, value, filter, columns=fields){ const copy={...record}; delete copy['userAgent']; return copy; }
function copyUseragent(record, value, filter, columns=fields){ return {name:'userAgent', value: record?.['userAgent']}; }
function paramUseragentInput(record, value, filter, columns=fields){ return {field:'userAgent', mode:'input', value: record?.['userAgent']}; }
function paramUseragentFilter(record, value, filter, columns=fields){ return {field:'userAgent', mode:'filter', value: filter?.['userAgent']}; }
function paramUseragentExport(record, value, filter, columns=fields){ return {field:'userAgent', mode:'export', included: columns.includes('userAgent')}; }
function getAt(record, value, filter, columns=fields){ return record?.['at']; }
function hasAt(record, value, filter, columns=fields){ return record?.['at'] !== undefined && record?.['at'] !== null && record?.['at'] !== ''; }
function withAt(record, value, filter, columns=fields){ return {...record, ['at']: value}; }
function clearAt(record, value, filter, columns=fields){ const copy={...record}; delete copy['at']; return copy; }
function copyAt(record, value, filter, columns=fields){ return {name:'at', value: record?.['at']}; }
function paramAtInput(record, value, filter, columns=fields){ return {field:'at', mode:'input', value: record?.['at']}; }
function paramAtFilter(record, value, filter, columns=fields){ return {field:'at', mode:'filter', value: filter?.['at']}; }
function paramAtExport(record, value, filter, columns=fields){ return {field:'at', mode:'export', included: columns.includes('at')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
