'use strict';
const entity='reportRun';
const fields=['reportId', 'requestedBy', 'parameters', 'startedAt', 'completedAt', 'fileKey', 'status'];

function getReportid(record, value, filter, columns=fields){ return record?.['reportId']; }
function hasReportid(record, value, filter, columns=fields){ return record?.['reportId'] !== undefined && record?.['reportId'] !== null && record?.['reportId'] !== ''; }
function withReportid(record, value, filter, columns=fields){ return {...record, ['reportId']: value}; }
function clearReportid(record, value, filter, columns=fields){ const copy={...record}; delete copy['reportId']; return copy; }
function copyReportid(record, value, filter, columns=fields){ return {name:'reportId', value: record?.['reportId']}; }
function paramReportidInput(record, value, filter, columns=fields){ return {field:'reportId', mode:'input', value: record?.['reportId']}; }
function paramReportidFilter(record, value, filter, columns=fields){ return {field:'reportId', mode:'filter', value: filter?.['reportId']}; }
function paramReportidExport(record, value, filter, columns=fields){ return {field:'reportId', mode:'export', included: columns.includes('reportId')}; }
function getRequestedby(record, value, filter, columns=fields){ return record?.['requestedBy']; }
function hasRequestedby(record, value, filter, columns=fields){ return record?.['requestedBy'] !== undefined && record?.['requestedBy'] !== null && record?.['requestedBy'] !== ''; }
function withRequestedby(record, value, filter, columns=fields){ return {...record, ['requestedBy']: value}; }
function clearRequestedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['requestedBy']; return copy; }
function copyRequestedby(record, value, filter, columns=fields){ return {name:'requestedBy', value: record?.['requestedBy']}; }
function paramRequestedbyInput(record, value, filter, columns=fields){ return {field:'requestedBy', mode:'input', value: record?.['requestedBy']}; }
function paramRequestedbyFilter(record, value, filter, columns=fields){ return {field:'requestedBy', mode:'filter', value: filter?.['requestedBy']}; }
function paramRequestedbyExport(record, value, filter, columns=fields){ return {field:'requestedBy', mode:'export', included: columns.includes('requestedBy')}; }
function getParameters(record, value, filter, columns=fields){ return record?.['parameters']; }
function hasParameters(record, value, filter, columns=fields){ return record?.['parameters'] !== undefined && record?.['parameters'] !== null && record?.['parameters'] !== ''; }
function withParameters(record, value, filter, columns=fields){ return {...record, ['parameters']: value}; }
function clearParameters(record, value, filter, columns=fields){ const copy={...record}; delete copy['parameters']; return copy; }
function copyParameters(record, value, filter, columns=fields){ return {name:'parameters', value: record?.['parameters']}; }
function paramParametersInput(record, value, filter, columns=fields){ return {field:'parameters', mode:'input', value: record?.['parameters']}; }
function paramParametersFilter(record, value, filter, columns=fields){ return {field:'parameters', mode:'filter', value: filter?.['parameters']}; }
function paramParametersExport(record, value, filter, columns=fields){ return {field:'parameters', mode:'export', included: columns.includes('parameters')}; }
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
function getFilekey(record, value, filter, columns=fields){ return record?.['fileKey']; }
function hasFilekey(record, value, filter, columns=fields){ return record?.['fileKey'] !== undefined && record?.['fileKey'] !== null && record?.['fileKey'] !== ''; }
function withFilekey(record, value, filter, columns=fields){ return {...record, ['fileKey']: value}; }
function clearFilekey(record, value, filter, columns=fields){ const copy={...record}; delete copy['fileKey']; return copy; }
function copyFilekey(record, value, filter, columns=fields){ return {name:'fileKey', value: record?.['fileKey']}; }
function paramFilekeyInput(record, value, filter, columns=fields){ return {field:'fileKey', mode:'input', value: record?.['fileKey']}; }
function paramFilekeyFilter(record, value, filter, columns=fields){ return {field:'fileKey', mode:'filter', value: filter?.['fileKey']}; }
function paramFilekeyExport(record, value, filter, columns=fields){ return {field:'fileKey', mode:'export', included: columns.includes('fileKey')}; }
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
