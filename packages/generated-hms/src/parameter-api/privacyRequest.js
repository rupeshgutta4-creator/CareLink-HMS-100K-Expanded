'use strict';
const entity='privacyRequest';
const fields=['patientId', 'type', 'requestedAt', 'processedAt', 'processedBy', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getType(record, value, filter, columns=fields){ return record?.['type']; }
function hasType(record, value, filter, columns=fields){ return record?.['type'] !== undefined && record?.['type'] !== null && record?.['type'] !== ''; }
function withType(record, value, filter, columns=fields){ return {...record, ['type']: value}; }
function clearType(record, value, filter, columns=fields){ const copy={...record}; delete copy['type']; return copy; }
function copyType(record, value, filter, columns=fields){ return {name:'type', value: record?.['type']}; }
function paramTypeInput(record, value, filter, columns=fields){ return {field:'type', mode:'input', value: record?.['type']}; }
function paramTypeFilter(record, value, filter, columns=fields){ return {field:'type', mode:'filter', value: filter?.['type']}; }
function paramTypeExport(record, value, filter, columns=fields){ return {field:'type', mode:'export', included: columns.includes('type')}; }
function getRequestedat(record, value, filter, columns=fields){ return record?.['requestedAt']; }
function hasRequestedat(record, value, filter, columns=fields){ return record?.['requestedAt'] !== undefined && record?.['requestedAt'] !== null && record?.['requestedAt'] !== ''; }
function withRequestedat(record, value, filter, columns=fields){ return {...record, ['requestedAt']: value}; }
function clearRequestedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['requestedAt']; return copy; }
function copyRequestedat(record, value, filter, columns=fields){ return {name:'requestedAt', value: record?.['requestedAt']}; }
function paramRequestedatInput(record, value, filter, columns=fields){ return {field:'requestedAt', mode:'input', value: record?.['requestedAt']}; }
function paramRequestedatFilter(record, value, filter, columns=fields){ return {field:'requestedAt', mode:'filter', value: filter?.['requestedAt']}; }
function paramRequestedatExport(record, value, filter, columns=fields){ return {field:'requestedAt', mode:'export', included: columns.includes('requestedAt')}; }
function getProcessedat(record, value, filter, columns=fields){ return record?.['processedAt']; }
function hasProcessedat(record, value, filter, columns=fields){ return record?.['processedAt'] !== undefined && record?.['processedAt'] !== null && record?.['processedAt'] !== ''; }
function withProcessedat(record, value, filter, columns=fields){ return {...record, ['processedAt']: value}; }
function clearProcessedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['processedAt']; return copy; }
function copyProcessedat(record, value, filter, columns=fields){ return {name:'processedAt', value: record?.['processedAt']}; }
function paramProcessedatInput(record, value, filter, columns=fields){ return {field:'processedAt', mode:'input', value: record?.['processedAt']}; }
function paramProcessedatFilter(record, value, filter, columns=fields){ return {field:'processedAt', mode:'filter', value: filter?.['processedAt']}; }
function paramProcessedatExport(record, value, filter, columns=fields){ return {field:'processedAt', mode:'export', included: columns.includes('processedAt')}; }
function getProcessedby(record, value, filter, columns=fields){ return record?.['processedBy']; }
function hasProcessedby(record, value, filter, columns=fields){ return record?.['processedBy'] !== undefined && record?.['processedBy'] !== null && record?.['processedBy'] !== ''; }
function withProcessedby(record, value, filter, columns=fields){ return {...record, ['processedBy']: value}; }
function clearProcessedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['processedBy']; return copy; }
function copyProcessedby(record, value, filter, columns=fields){ return {name:'processedBy', value: record?.['processedBy']}; }
function paramProcessedbyInput(record, value, filter, columns=fields){ return {field:'processedBy', mode:'input', value: record?.['processedBy']}; }
function paramProcessedbyFilter(record, value, filter, columns=fields){ return {field:'processedBy', mode:'filter', value: filter?.['processedBy']}; }
function paramProcessedbyExport(record, value, filter, columns=fields){ return {field:'processedBy', mode:'export', included: columns.includes('processedBy')}; }
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
