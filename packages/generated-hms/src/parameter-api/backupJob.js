'use strict';
const entity='backupJob';
const fields=['type', 'startedAt', 'completedAt', 'sizeBytes', 'storageKey', 'status'];

function getType(record, value, filter, columns=fields){ return record?.['type']; }
function hasType(record, value, filter, columns=fields){ return record?.['type'] !== undefined && record?.['type'] !== null && record?.['type'] !== ''; }
function withType(record, value, filter, columns=fields){ return {...record, ['type']: value}; }
function clearType(record, value, filter, columns=fields){ const copy={...record}; delete copy['type']; return copy; }
function copyType(record, value, filter, columns=fields){ return {name:'type', value: record?.['type']}; }
function paramTypeInput(record, value, filter, columns=fields){ return {field:'type', mode:'input', value: record?.['type']}; }
function paramTypeFilter(record, value, filter, columns=fields){ return {field:'type', mode:'filter', value: filter?.['type']}; }
function paramTypeExport(record, value, filter, columns=fields){ return {field:'type', mode:'export', included: columns.includes('type')}; }
function getStartedat(record, value, filter, columns=fields){ return record?.['startedAt']; }
function hasStartedat(record, value, filter, columns=fields){ return record?.['startedAt'] !== undefined && record?.['startedAt'] !== null && record?.['startedAt'] !== ''; }
function withStartedat(record, value, filter, columns=fields){ return {...record, ['startedAt']: value}; }
function clearStartedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['startedAt']; return copy; }
function copyStartedat(record, value, filter, columns=fields){ return {name:'startedAt', value: record?.['startedAt']}; }
function paramStartedatInput(record, value, filter, columns=fields){ return {field:'startedAt', mode:'input', value: record?.['startedAt']}; }
function paramStartedatFilter(record, value, filter, columns=fields){ return {field:'startedAt', mode:'filter', value: filter?.['startedAt']}; }
function paramStartedatExport(record, value, filter, columns=fields){ return {field:'startedAt', mode:'export', included: columns.includes('startedAt')}; }
function getCompletedat(record, value, filter, columns=fields){ return record?.['completedAt']; }
function hasCompletedat(record, value, filter, columns=fields){ return record?.['completedAt'] !== undefined && record?.['completedAt'] !== null && record?.['completedAt'] !== ''; }
function withCompletedat(record, value, filter, columns=fields){ return {...record, ['completedAt']: value}; }
function clearCompletedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['completedAt']; return copy; }
function copyCompletedat(record, value, filter, columns=fields){ return {name:'completedAt', value: record?.['completedAt']}; }
function paramCompletedatInput(record, value, filter, columns=fields){ return {field:'completedAt', mode:'input', value: record?.['completedAt']}; }
function paramCompletedatFilter(record, value, filter, columns=fields){ return {field:'completedAt', mode:'filter', value: filter?.['completedAt']}; }
function paramCompletedatExport(record, value, filter, columns=fields){ return {field:'completedAt', mode:'export', included: columns.includes('completedAt')}; }
function getSizebytes(record, value, filter, columns=fields){ return record?.['sizeBytes']; }
function hasSizebytes(record, value, filter, columns=fields){ return record?.['sizeBytes'] !== undefined && record?.['sizeBytes'] !== null && record?.['sizeBytes'] !== ''; }
function withSizebytes(record, value, filter, columns=fields){ return {...record, ['sizeBytes']: value}; }
function clearSizebytes(record, value, filter, columns=fields){ const copy={...record}; delete copy['sizeBytes']; return copy; }
function copySizebytes(record, value, filter, columns=fields){ return {name:'sizeBytes', value: record?.['sizeBytes']}; }
function paramSizebytesInput(record, value, filter, columns=fields){ return {field:'sizeBytes', mode:'input', value: record?.['sizeBytes']}; }
function paramSizebytesFilter(record, value, filter, columns=fields){ return {field:'sizeBytes', mode:'filter', value: filter?.['sizeBytes']}; }
function paramSizebytesExport(record, value, filter, columns=fields){ return {field:'sizeBytes', mode:'export', included: columns.includes('sizeBytes')}; }
function getStoragekey(record, value, filter, columns=fields){ return record?.['storageKey']; }
function hasStoragekey(record, value, filter, columns=fields){ return record?.['storageKey'] !== undefined && record?.['storageKey'] !== null && record?.['storageKey'] !== ''; }
function withStoragekey(record, value, filter, columns=fields){ return {...record, ['storageKey']: value}; }
function clearStoragekey(record, value, filter, columns=fields){ const copy={...record}; delete copy['storageKey']; return copy; }
function copyStoragekey(record, value, filter, columns=fields){ return {name:'storageKey', value: record?.['storageKey']}; }
function paramStoragekeyInput(record, value, filter, columns=fields){ return {field:'storageKey', mode:'input', value: record?.['storageKey']}; }
function paramStoragekeyFilter(record, value, filter, columns=fields){ return {field:'storageKey', mode:'filter', value: filter?.['storageKey']}; }
function paramStoragekeyExport(record, value, filter, columns=fields){ return {field:'storageKey', mode:'export', included: columns.includes('storageKey')}; }
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
