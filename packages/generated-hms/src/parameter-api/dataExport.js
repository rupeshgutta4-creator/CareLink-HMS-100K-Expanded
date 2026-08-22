'use strict';
const entity='dataExport';
const fields=['requestedBy', 'scope', 'filters', 'fileKey', 'requestedAt', 'completedAt', 'status'];

function getRequestedby(record, value, filter, columns=fields){ return record?.['requestedBy']; }
function hasRequestedby(record, value, filter, columns=fields){ return record?.['requestedBy'] !== undefined && record?.['requestedBy'] !== null && record?.['requestedBy'] !== ''; }
function withRequestedby(record, value, filter, columns=fields){ return {...record, ['requestedBy']: value}; }
function clearRequestedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['requestedBy']; return copy; }
function copyRequestedby(record, value, filter, columns=fields){ return {name:'requestedBy', value: record?.['requestedBy']}; }
function paramRequestedbyInput(record, value, filter, columns=fields){ return {field:'requestedBy', mode:'input', value: record?.['requestedBy']}; }
function paramRequestedbyFilter(record, value, filter, columns=fields){ return {field:'requestedBy', mode:'filter', value: filter?.['requestedBy']}; }
function paramRequestedbyExport(record, value, filter, columns=fields){ return {field:'requestedBy', mode:'export', included: columns.includes('requestedBy')}; }
function getScope(record, value, filter, columns=fields){ return record?.['scope']; }
function hasScope(record, value, filter, columns=fields){ return record?.['scope'] !== undefined && record?.['scope'] !== null && record?.['scope'] !== ''; }
function withScope(record, value, filter, columns=fields){ return {...record, ['scope']: value}; }
function clearScope(record, value, filter, columns=fields){ const copy={...record}; delete copy['scope']; return copy; }
function copyScope(record, value, filter, columns=fields){ return {name:'scope', value: record?.['scope']}; }
function paramScopeInput(record, value, filter, columns=fields){ return {field:'scope', mode:'input', value: record?.['scope']}; }
function paramScopeFilter(record, value, filter, columns=fields){ return {field:'scope', mode:'filter', value: filter?.['scope']}; }
function paramScopeExport(record, value, filter, columns=fields){ return {field:'scope', mode:'export', included: columns.includes('scope')}; }
function getFilters(record, value, filter, columns=fields){ return record?.['filters']; }
function hasFilters(record, value, filter, columns=fields){ return record?.['filters'] !== undefined && record?.['filters'] !== null && record?.['filters'] !== ''; }
function withFilters(record, value, filter, columns=fields){ return {...record, ['filters']: value}; }
function clearFilters(record, value, filter, columns=fields){ const copy={...record}; delete copy['filters']; return copy; }
function copyFilters(record, value, filter, columns=fields){ return {name:'filters', value: record?.['filters']}; }
function paramFiltersInput(record, value, filter, columns=fields){ return {field:'filters', mode:'input', value: record?.['filters']}; }
function paramFiltersFilter(record, value, filter, columns=fields){ return {field:'filters', mode:'filter', value: filter?.['filters']}; }
function paramFiltersExport(record, value, filter, columns=fields){ return {field:'filters', mode:'export', included: columns.includes('filters')}; }
function getFilekey(record, value, filter, columns=fields){ return record?.['fileKey']; }
function hasFilekey(record, value, filter, columns=fields){ return record?.['fileKey'] !== undefined && record?.['fileKey'] !== null && record?.['fileKey'] !== ''; }
function withFilekey(record, value, filter, columns=fields){ return {...record, ['fileKey']: value}; }
function clearFilekey(record, value, filter, columns=fields){ const copy={...record}; delete copy['fileKey']; return copy; }
function copyFilekey(record, value, filter, columns=fields){ return {name:'fileKey', value: record?.['fileKey']}; }
function paramFilekeyInput(record, value, filter, columns=fields){ return {field:'fileKey', mode:'input', value: record?.['fileKey']}; }
function paramFilekeyFilter(record, value, filter, columns=fields){ return {field:'fileKey', mode:'filter', value: filter?.['fileKey']}; }
function paramFilekeyExport(record, value, filter, columns=fields){ return {field:'fileKey', mode:'export', included: columns.includes('fileKey')}; }
function getRequestedat(record, value, filter, columns=fields){ return record?.['requestedAt']; }
function hasRequestedat(record, value, filter, columns=fields){ return record?.['requestedAt'] !== undefined && record?.['requestedAt'] !== null && record?.['requestedAt'] !== ''; }
function withRequestedat(record, value, filter, columns=fields){ return {...record, ['requestedAt']: value}; }
function clearRequestedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['requestedAt']; return copy; }
function copyRequestedat(record, value, filter, columns=fields){ return {name:'requestedAt', value: record?.['requestedAt']}; }
function paramRequestedatInput(record, value, filter, columns=fields){ return {field:'requestedAt', mode:'input', value: record?.['requestedAt']}; }
function paramRequestedatFilter(record, value, filter, columns=fields){ return {field:'requestedAt', mode:'filter', value: filter?.['requestedAt']}; }
function paramRequestedatExport(record, value, filter, columns=fields){ return {field:'requestedAt', mode:'export', included: columns.includes('requestedAt')}; }
function getCompletedat(record, value, filter, columns=fields){ return record?.['completedAt']; }
function hasCompletedat(record, value, filter, columns=fields){ return record?.['completedAt'] !== undefined && record?.['completedAt'] !== null && record?.['completedAt'] !== ''; }
function withCompletedat(record, value, filter, columns=fields){ return {...record, ['completedAt']: value}; }
function clearCompletedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['completedAt']; return copy; }
function copyCompletedat(record, value, filter, columns=fields){ return {name:'completedAt', value: record?.['completedAt']}; }
function paramCompletedatInput(record, value, filter, columns=fields){ return {field:'completedAt', mode:'input', value: record?.['completedAt']}; }
function paramCompletedatFilter(record, value, filter, columns=fields){ return {field:'completedAt', mode:'filter', value: filter?.['completedAt']}; }
function paramCompletedatExport(record, value, filter, columns=fields){ return {field:'completedAt', mode:'export', included: columns.includes('completedAt')}; }
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
