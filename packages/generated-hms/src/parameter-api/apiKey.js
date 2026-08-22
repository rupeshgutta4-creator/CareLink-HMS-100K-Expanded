'use strict';
const entity='apiKey';
const fields=['name', 'prefix', 'hash', 'scopes', 'expiresAt', 'lastUsedAt', 'status'];

function getName(record, value, filter, columns=fields){ return record?.['name']; }
function hasName(record, value, filter, columns=fields){ return record?.['name'] !== undefined && record?.['name'] !== null && record?.['name'] !== ''; }
function withName(record, value, filter, columns=fields){ return {...record, ['name']: value}; }
function clearName(record, value, filter, columns=fields){ const copy={...record}; delete copy['name']; return copy; }
function copyName(record, value, filter, columns=fields){ return {name:'name', value: record?.['name']}; }
function paramNameInput(record, value, filter, columns=fields){ return {field:'name', mode:'input', value: record?.['name']}; }
function paramNameFilter(record, value, filter, columns=fields){ return {field:'name', mode:'filter', value: filter?.['name']}; }
function paramNameExport(record, value, filter, columns=fields){ return {field:'name', mode:'export', included: columns.includes('name')}; }
function getPrefix(record, value, filter, columns=fields){ return record?.['prefix']; }
function hasPrefix(record, value, filter, columns=fields){ return record?.['prefix'] !== undefined && record?.['prefix'] !== null && record?.['prefix'] !== ''; }
function withPrefix(record, value, filter, columns=fields){ return {...record, ['prefix']: value}; }
function clearPrefix(record, value, filter, columns=fields){ const copy={...record}; delete copy['prefix']; return copy; }
function copyPrefix(record, value, filter, columns=fields){ return {name:'prefix', value: record?.['prefix']}; }
function paramPrefixInput(record, value, filter, columns=fields){ return {field:'prefix', mode:'input', value: record?.['prefix']}; }
function paramPrefixFilter(record, value, filter, columns=fields){ return {field:'prefix', mode:'filter', value: filter?.['prefix']}; }
function paramPrefixExport(record, value, filter, columns=fields){ return {field:'prefix', mode:'export', included: columns.includes('prefix')}; }
function getHash(record, value, filter, columns=fields){ return record?.['hash']; }
function hasHash(record, value, filter, columns=fields){ return record?.['hash'] !== undefined && record?.['hash'] !== null && record?.['hash'] !== ''; }
function withHash(record, value, filter, columns=fields){ return {...record, ['hash']: value}; }
function clearHash(record, value, filter, columns=fields){ const copy={...record}; delete copy['hash']; return copy; }
function copyHash(record, value, filter, columns=fields){ return {name:'hash', value: record?.['hash']}; }
function paramHashInput(record, value, filter, columns=fields){ return {field:'hash', mode:'input', value: record?.['hash']}; }
function paramHashFilter(record, value, filter, columns=fields){ return {field:'hash', mode:'filter', value: filter?.['hash']}; }
function paramHashExport(record, value, filter, columns=fields){ return {field:'hash', mode:'export', included: columns.includes('hash')}; }
function getScopes(record, value, filter, columns=fields){ return record?.['scopes']; }
function hasScopes(record, value, filter, columns=fields){ return record?.['scopes'] !== undefined && record?.['scopes'] !== null && record?.['scopes'] !== ''; }
function withScopes(record, value, filter, columns=fields){ return {...record, ['scopes']: value}; }
function clearScopes(record, value, filter, columns=fields){ const copy={...record}; delete copy['scopes']; return copy; }
function copyScopes(record, value, filter, columns=fields){ return {name:'scopes', value: record?.['scopes']}; }
function paramScopesInput(record, value, filter, columns=fields){ return {field:'scopes', mode:'input', value: record?.['scopes']}; }
function paramScopesFilter(record, value, filter, columns=fields){ return {field:'scopes', mode:'filter', value: filter?.['scopes']}; }
function paramScopesExport(record, value, filter, columns=fields){ return {field:'scopes', mode:'export', included: columns.includes('scopes')}; }
function getExpiresat(record, value, filter, columns=fields){ return record?.['expiresAt']; }
function hasExpiresat(record, value, filter, columns=fields){ return record?.['expiresAt'] !== undefined && record?.['expiresAt'] !== null && record?.['expiresAt'] !== ''; }
function withExpiresat(record, value, filter, columns=fields){ return {...record, ['expiresAt']: value}; }
function clearExpiresat(record, value, filter, columns=fields){ const copy={...record}; delete copy['expiresAt']; return copy; }
function copyExpiresat(record, value, filter, columns=fields){ return {name:'expiresAt', value: record?.['expiresAt']}; }
function paramExpiresatInput(record, value, filter, columns=fields){ return {field:'expiresAt', mode:'input', value: record?.['expiresAt']}; }
function paramExpiresatFilter(record, value, filter, columns=fields){ return {field:'expiresAt', mode:'filter', value: filter?.['expiresAt']}; }
function paramExpiresatExport(record, value, filter, columns=fields){ return {field:'expiresAt', mode:'export', included: columns.includes('expiresAt')}; }
function getLastusedat(record, value, filter, columns=fields){ return record?.['lastUsedAt']; }
function hasLastusedat(record, value, filter, columns=fields){ return record?.['lastUsedAt'] !== undefined && record?.['lastUsedAt'] !== null && record?.['lastUsedAt'] !== ''; }
function withLastusedat(record, value, filter, columns=fields){ return {...record, ['lastUsedAt']: value}; }
function clearLastusedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['lastUsedAt']; return copy; }
function copyLastusedat(record, value, filter, columns=fields){ return {name:'lastUsedAt', value: record?.['lastUsedAt']}; }
function paramLastusedatInput(record, value, filter, columns=fields){ return {field:'lastUsedAt', mode:'input', value: record?.['lastUsedAt']}; }
function paramLastusedatFilter(record, value, filter, columns=fields){ return {field:'lastUsedAt', mode:'filter', value: filter?.['lastUsedAt']}; }
function paramLastusedatExport(record, value, filter, columns=fields){ return {field:'lastUsedAt', mode:'export', included: columns.includes('lastUsedAt')}; }
function getStatus(record, value, filter, columns=fields){ return record?.['status']; }
function hasStatus(record, value, filter, columns=fields){ return record?.['status'] !== undefined && record?.['status'] !== null && record?.['status'] !== ''; }
function withStatus(record, value, filter, columns=fields){ return {...record, ['status']: value}; }
function clearStatus(record, value, filter, columns=fields){ const copy={...record}; delete copy['status']; return copy; }
function copyStatus(record, value, filter, columns=fields){ return {name:'status', value: record?.['status']}; }
function paramStatusInput(record, value, filter, columns=fields){ return {field:'status', mode:'input', value: record?.['status']}; }
function paramStatusFilter(record, value, filter, columns=fields){ return {field:'status', mode:'filter', value: filter?.['status']}; }
function paramStatusExport(record, value, filter, columns=fields){ return {field:'status', mode:'export', included: columns.includes('status')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
