'use strict';
const entity='passwordReset';
const fields=['userId', 'tokenHash', 'expiresAt', 'usedAt', 'status'];

function getUserid(record, value, filter, columns=fields){ return record?.['userId']; }
function hasUserid(record, value, filter, columns=fields){ return record?.['userId'] !== undefined && record?.['userId'] !== null && record?.['userId'] !== ''; }
function withUserid(record, value, filter, columns=fields){ return {...record, ['userId']: value}; }
function clearUserid(record, value, filter, columns=fields){ const copy={...record}; delete copy['userId']; return copy; }
function copyUserid(record, value, filter, columns=fields){ return {name:'userId', value: record?.['userId']}; }
function paramUseridInput(record, value, filter, columns=fields){ return {field:'userId', mode:'input', value: record?.['userId']}; }
function paramUseridFilter(record, value, filter, columns=fields){ return {field:'userId', mode:'filter', value: filter?.['userId']}; }
function paramUseridExport(record, value, filter, columns=fields){ return {field:'userId', mode:'export', included: columns.includes('userId')}; }
function getTokenhash(record, value, filter, columns=fields){ return record?.['tokenHash']; }
function hasTokenhash(record, value, filter, columns=fields){ return record?.['tokenHash'] !== undefined && record?.['tokenHash'] !== null && record?.['tokenHash'] !== ''; }
function withTokenhash(record, value, filter, columns=fields){ return {...record, ['tokenHash']: value}; }
function clearTokenhash(record, value, filter, columns=fields){ const copy={...record}; delete copy['tokenHash']; return copy; }
function copyTokenhash(record, value, filter, columns=fields){ return {name:'tokenHash', value: record?.['tokenHash']}; }
function paramTokenhashInput(record, value, filter, columns=fields){ return {field:'tokenHash', mode:'input', value: record?.['tokenHash']}; }
function paramTokenhashFilter(record, value, filter, columns=fields){ return {field:'tokenHash', mode:'filter', value: filter?.['tokenHash']}; }
function paramTokenhashExport(record, value, filter, columns=fields){ return {field:'tokenHash', mode:'export', included: columns.includes('tokenHash')}; }
function getExpiresat(record, value, filter, columns=fields){ return record?.['expiresAt']; }
function hasExpiresat(record, value, filter, columns=fields){ return record?.['expiresAt'] !== undefined && record?.['expiresAt'] !== null && record?.['expiresAt'] !== ''; }
function withExpiresat(record, value, filter, columns=fields){ return {...record, ['expiresAt']: value}; }
function clearExpiresat(record, value, filter, columns=fields){ const copy={...record}; delete copy['expiresAt']; return copy; }
function copyExpiresat(record, value, filter, columns=fields){ return {name:'expiresAt', value: record?.['expiresAt']}; }
function paramExpiresatInput(record, value, filter, columns=fields){ return {field:'expiresAt', mode:'input', value: record?.['expiresAt']}; }
function paramExpiresatFilter(record, value, filter, columns=fields){ return {field:'expiresAt', mode:'filter', value: filter?.['expiresAt']}; }
function paramExpiresatExport(record, value, filter, columns=fields){ return {field:'expiresAt', mode:'export', included: columns.includes('expiresAt')}; }
function getUsedat(record, value, filter, columns=fields){ return record?.['usedAt']; }
function hasUsedat(record, value, filter, columns=fields){ return record?.['usedAt'] !== undefined && record?.['usedAt'] !== null && record?.['usedAt'] !== ''; }
function withUsedat(record, value, filter, columns=fields){ return {...record, ['usedAt']: value}; }
function clearUsedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['usedAt']; return copy; }
function copyUsedat(record, value, filter, columns=fields){ return {name:'usedAt', value: record?.['usedAt']}; }
function paramUsedatInput(record, value, filter, columns=fields){ return {field:'usedAt', mode:'input', value: record?.['usedAt']}; }
function paramUsedatFilter(record, value, filter, columns=fields){ return {field:'usedAt', mode:'filter', value: filter?.['usedAt']}; }
function paramUsedatExport(record, value, filter, columns=fields){ return {field:'usedAt', mode:'export', included: columns.includes('usedAt')}; }
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
