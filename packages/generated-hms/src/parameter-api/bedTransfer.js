'use strict';
const entity='bedTransfer';
const fields=['patientId', 'fromBedId', 'toBedId', 'requestedAt', 'completedAt', 'reason', 'approvedBy', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getFrombedid(record, value, filter, columns=fields){ return record?.['fromBedId']; }
function hasFrombedid(record, value, filter, columns=fields){ return record?.['fromBedId'] !== undefined && record?.['fromBedId'] !== null && record?.['fromBedId'] !== ''; }
function withFrombedid(record, value, filter, columns=fields){ return {...record, ['fromBedId']: value}; }
function clearFrombedid(record, value, filter, columns=fields){ const copy={...record}; delete copy['fromBedId']; return copy; }
function copyFrombedid(record, value, filter, columns=fields){ return {name:'fromBedId', value: record?.['fromBedId']}; }
function paramFrombedidInput(record, value, filter, columns=fields){ return {field:'fromBedId', mode:'input', value: record?.['fromBedId']}; }
function paramFrombedidFilter(record, value, filter, columns=fields){ return {field:'fromBedId', mode:'filter', value: filter?.['fromBedId']}; }
function paramFrombedidExport(record, value, filter, columns=fields){ return {field:'fromBedId', mode:'export', included: columns.includes('fromBedId')}; }
function getTobedid(record, value, filter, columns=fields){ return record?.['toBedId']; }
function hasTobedid(record, value, filter, columns=fields){ return record?.['toBedId'] !== undefined && record?.['toBedId'] !== null && record?.['toBedId'] !== ''; }
function withTobedid(record, value, filter, columns=fields){ return {...record, ['toBedId']: value}; }
function clearTobedid(record, value, filter, columns=fields){ const copy={...record}; delete copy['toBedId']; return copy; }
function copyTobedid(record, value, filter, columns=fields){ return {name:'toBedId', value: record?.['toBedId']}; }
function paramTobedidInput(record, value, filter, columns=fields){ return {field:'toBedId', mode:'input', value: record?.['toBedId']}; }
function paramTobedidFilter(record, value, filter, columns=fields){ return {field:'toBedId', mode:'filter', value: filter?.['toBedId']}; }
function paramTobedidExport(record, value, filter, columns=fields){ return {field:'toBedId', mode:'export', included: columns.includes('toBedId')}; }
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
function getReason(record, value, filter, columns=fields){ return record?.['reason']; }
function hasReason(record, value, filter, columns=fields){ return record?.['reason'] !== undefined && record?.['reason'] !== null && record?.['reason'] !== ''; }
function withReason(record, value, filter, columns=fields){ return {...record, ['reason']: value}; }
function clearReason(record, value, filter, columns=fields){ const copy={...record}; delete copy['reason']; return copy; }
function copyReason(record, value, filter, columns=fields){ return {name:'reason', value: record?.['reason']}; }
function paramReasonInput(record, value, filter, columns=fields){ return {field:'reason', mode:'input', value: record?.['reason']}; }
function paramReasonFilter(record, value, filter, columns=fields){ return {field:'reason', mode:'filter', value: filter?.['reason']}; }
function paramReasonExport(record, value, filter, columns=fields){ return {field:'reason', mode:'export', included: columns.includes('reason')}; }
function getApprovedby(record, value, filter, columns=fields){ return record?.['approvedBy']; }
function hasApprovedby(record, value, filter, columns=fields){ return record?.['approvedBy'] !== undefined && record?.['approvedBy'] !== null && record?.['approvedBy'] !== ''; }
function withApprovedby(record, value, filter, columns=fields){ return {...record, ['approvedBy']: value}; }
function clearApprovedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['approvedBy']; return copy; }
function copyApprovedby(record, value, filter, columns=fields){ return {name:'approvedBy', value: record?.['approvedBy']}; }
function paramApprovedbyInput(record, value, filter, columns=fields){ return {field:'approvedBy', mode:'input', value: record?.['approvedBy']}; }
function paramApprovedbyFilter(record, value, filter, columns=fields){ return {field:'approvedBy', mode:'filter', value: filter?.['approvedBy']}; }
function paramApprovedbyExport(record, value, filter, columns=fields){ return {field:'approvedBy', mode:'export', included: columns.includes('approvedBy')}; }
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
