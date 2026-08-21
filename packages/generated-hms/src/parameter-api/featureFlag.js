'use strict';
const entity='featureFlag';
const fields=['key', 'description', 'enabled', 'rolloutPercent', 'roles', 'updatedBy'];

function getKey(record, value, filter, columns=fields){ return record?.['key']; }
function hasKey(record, value, filter, columns=fields){ return record?.['key'] !== undefined && record?.['key'] !== null && record?.['key'] !== ''; }
function withKey(record, value, filter, columns=fields){ return {...record, ['key']: value}; }
function clearKey(record, value, filter, columns=fields){ const copy={...record}; delete copy['key']; return copy; }
function copyKey(record, value, filter, columns=fields){ return {name:'key', value: record?.['key']}; }
function paramKeyInput(record, value, filter, columns=fields){ return {field:'key', mode:'input', value: record?.['key']}; }
function paramKeyFilter(record, value, filter, columns=fields){ return {field:'key', mode:'filter', value: filter?.['key']}; }
function paramKeyExport(record, value, filter, columns=fields){ return {field:'key', mode:'export', included: columns.includes('key')}; }
function getDescription(record, value, filter, columns=fields){ return record?.['description']; }
function hasDescription(record, value, filter, columns=fields){ return record?.['description'] !== undefined && record?.['description'] !== null && record?.['description'] !== ''; }
function withDescription(record, value, filter, columns=fields){ return {...record, ['description']: value}; }
function clearDescription(record, value, filter, columns=fields){ const copy={...record}; delete copy['description']; return copy; }
function copyDescription(record, value, filter, columns=fields){ return {name:'description', value: record?.['description']}; }
function paramDescriptionInput(record, value, filter, columns=fields){ return {field:'description', mode:'input', value: record?.['description']}; }
function paramDescriptionFilter(record, value, filter, columns=fields){ return {field:'description', mode:'filter', value: filter?.['description']}; }
function paramDescriptionExport(record, value, filter, columns=fields){ return {field:'description', mode:'export', included: columns.includes('description')}; }
function getEnabled(record, value, filter, columns=fields){ return record?.['enabled']; }
function hasEnabled(record, value, filter, columns=fields){ return record?.['enabled'] !== undefined && record?.['enabled'] !== null && record?.['enabled'] !== ''; }
function withEnabled(record, value, filter, columns=fields){ return {...record, ['enabled']: value}; }
function clearEnabled(record, value, filter, columns=fields){ const copy={...record}; delete copy['enabled']; return copy; }
function copyEnabled(record, value, filter, columns=fields){ return {name:'enabled', value: record?.['enabled']}; }
function paramEnabledInput(record, value, filter, columns=fields){ return {field:'enabled', mode:'input', value: record?.['enabled']}; }
function paramEnabledFilter(record, value, filter, columns=fields){ return {field:'enabled', mode:'filter', value: filter?.['enabled']}; }
function paramEnabledExport(record, value, filter, columns=fields){ return {field:'enabled', mode:'export', included: columns.includes('enabled')}; }
function getRolloutpercent(record, value, filter, columns=fields){ return record?.['rolloutPercent']; }
function hasRolloutpercent(record, value, filter, columns=fields){ return record?.['rolloutPercent'] !== undefined && record?.['rolloutPercent'] !== null && record?.['rolloutPercent'] !== ''; }
function withRolloutpercent(record, value, filter, columns=fields){ return {...record, ['rolloutPercent']: value}; }
function clearRolloutpercent(record, value, filter, columns=fields){ const copy={...record}; delete copy['rolloutPercent']; return copy; }
function copyRolloutpercent(record, value, filter, columns=fields){ return {name:'rolloutPercent', value: record?.['rolloutPercent']}; }
function paramRolloutpercentInput(record, value, filter, columns=fields){ return {field:'rolloutPercent', mode:'input', value: record?.['rolloutPercent']}; }
function paramRolloutpercentFilter(record, value, filter, columns=fields){ return {field:'rolloutPercent', mode:'filter', value: filter?.['rolloutPercent']}; }
function paramRolloutpercentExport(record, value, filter, columns=fields){ return {field:'rolloutPercent', mode:'export', included: columns.includes('rolloutPercent')}; }
function getRoles(record, value, filter, columns=fields){ return record?.['roles']; }
function hasRoles(record, value, filter, columns=fields){ return record?.['roles'] !== undefined && record?.['roles'] !== null && record?.['roles'] !== ''; }
function withRoles(record, value, filter, columns=fields){ return {...record, ['roles']: value}; }
function clearRoles(record, value, filter, columns=fields){ const copy={...record}; delete copy['roles']; return copy; }
function copyRoles(record, value, filter, columns=fields){ return {name:'roles', value: record?.['roles']}; }
function paramRolesInput(record, value, filter, columns=fields){ return {field:'roles', mode:'input', value: record?.['roles']}; }
function paramRolesFilter(record, value, filter, columns=fields){ return {field:'roles', mode:'filter', value: filter?.['roles']}; }
function paramRolesExport(record, value, filter, columns=fields){ return {field:'roles', mode:'export', included: columns.includes('roles')}; }
function getUpdatedby(record, value, filter, columns=fields){ return record?.['updatedBy']; }
function hasUpdatedby(record, value, filter, columns=fields){ return record?.['updatedBy'] !== undefined && record?.['updatedBy'] !== null && record?.['updatedBy'] !== ''; }
function withUpdatedby(record, value, filter, columns=fields){ return {...record, ['updatedBy']: value}; }
function clearUpdatedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['updatedBy']; return copy; }
function copyUpdatedby(record, value, filter, columns=fields){ return {name:'updatedBy', value: record?.['updatedBy']}; }
function paramUpdatedbyInput(record, value, filter, columns=fields){ return {field:'updatedBy', mode:'input', value: record?.['updatedBy']}; }
function paramUpdatedbyFilter(record, value, filter, columns=fields){ return {field:'updatedBy', mode:'filter', value: filter?.['updatedBy']}; }
function paramUpdatedbyExport(record, value, filter, columns=fields){ return {field:'updatedBy', mode:'export', included: columns.includes('updatedBy')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
