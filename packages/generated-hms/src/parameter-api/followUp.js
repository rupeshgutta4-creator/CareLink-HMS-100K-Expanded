'use strict';
const entity='followUp';
const fields=['patientId', 'doctorId', 'visitId', 'dueDate', 'reason', 'instructions', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getDoctorid(record, value, filter, columns=fields){ return record?.['doctorId']; }
function hasDoctorid(record, value, filter, columns=fields){ return record?.['doctorId'] !== undefined && record?.['doctorId'] !== null && record?.['doctorId'] !== ''; }
function withDoctorid(record, value, filter, columns=fields){ return {...record, ['doctorId']: value}; }
function clearDoctorid(record, value, filter, columns=fields){ const copy={...record}; delete copy['doctorId']; return copy; }
function copyDoctorid(record, value, filter, columns=fields){ return {name:'doctorId', value: record?.['doctorId']}; }
function paramDoctoridInput(record, value, filter, columns=fields){ return {field:'doctorId', mode:'input', value: record?.['doctorId']}; }
function paramDoctoridFilter(record, value, filter, columns=fields){ return {field:'doctorId', mode:'filter', value: filter?.['doctorId']}; }
function paramDoctoridExport(record, value, filter, columns=fields){ return {field:'doctorId', mode:'export', included: columns.includes('doctorId')}; }
function getVisitid(record, value, filter, columns=fields){ return record?.['visitId']; }
function hasVisitid(record, value, filter, columns=fields){ return record?.['visitId'] !== undefined && record?.['visitId'] !== null && record?.['visitId'] !== ''; }
function withVisitid(record, value, filter, columns=fields){ return {...record, ['visitId']: value}; }
function clearVisitid(record, value, filter, columns=fields){ const copy={...record}; delete copy['visitId']; return copy; }
function copyVisitid(record, value, filter, columns=fields){ return {name:'visitId', value: record?.['visitId']}; }
function paramVisitidInput(record, value, filter, columns=fields){ return {field:'visitId', mode:'input', value: record?.['visitId']}; }
function paramVisitidFilter(record, value, filter, columns=fields){ return {field:'visitId', mode:'filter', value: filter?.['visitId']}; }
function paramVisitidExport(record, value, filter, columns=fields){ return {field:'visitId', mode:'export', included: columns.includes('visitId')}; }
function getDuedate(record, value, filter, columns=fields){ return record?.['dueDate']; }
function hasDuedate(record, value, filter, columns=fields){ return record?.['dueDate'] !== undefined && record?.['dueDate'] !== null && record?.['dueDate'] !== ''; }
function withDuedate(record, value, filter, columns=fields){ return {...record, ['dueDate']: value}; }
function clearDuedate(record, value, filter, columns=fields){ const copy={...record}; delete copy['dueDate']; return copy; }
function copyDuedate(record, value, filter, columns=fields){ return {name:'dueDate', value: record?.['dueDate']}; }
function paramDuedateInput(record, value, filter, columns=fields){ return {field:'dueDate', mode:'input', value: record?.['dueDate']}; }
function paramDuedateFilter(record, value, filter, columns=fields){ return {field:'dueDate', mode:'filter', value: filter?.['dueDate']}; }
function paramDuedateExport(record, value, filter, columns=fields){ return {field:'dueDate', mode:'export', included: columns.includes('dueDate')}; }
function getReason(record, value, filter, columns=fields){ return record?.['reason']; }
function hasReason(record, value, filter, columns=fields){ return record?.['reason'] !== undefined && record?.['reason'] !== null && record?.['reason'] !== ''; }
function withReason(record, value, filter, columns=fields){ return {...record, ['reason']: value}; }
function clearReason(record, value, filter, columns=fields){ const copy={...record}; delete copy['reason']; return copy; }
function copyReason(record, value, filter, columns=fields){ return {name:'reason', value: record?.['reason']}; }
function paramReasonInput(record, value, filter, columns=fields){ return {field:'reason', mode:'input', value: record?.['reason']}; }
function paramReasonFilter(record, value, filter, columns=fields){ return {field:'reason', mode:'filter', value: filter?.['reason']}; }
function paramReasonExport(record, value, filter, columns=fields){ return {field:'reason', mode:'export', included: columns.includes('reason')}; }
function getInstructions(record, value, filter, columns=fields){ return record?.['instructions']; }
function hasInstructions(record, value, filter, columns=fields){ return record?.['instructions'] !== undefined && record?.['instructions'] !== null && record?.['instructions'] !== ''; }
function withInstructions(record, value, filter, columns=fields){ return {...record, ['instructions']: value}; }
function clearInstructions(record, value, filter, columns=fields){ const copy={...record}; delete copy['instructions']; return copy; }
function copyInstructions(record, value, filter, columns=fields){ return {name:'instructions', value: record?.['instructions']}; }
function paramInstructionsInput(record, value, filter, columns=fields){ return {field:'instructions', mode:'input', value: record?.['instructions']}; }
function paramInstructionsFilter(record, value, filter, columns=fields){ return {field:'instructions', mode:'filter', value: filter?.['instructions']}; }
function paramInstructionsExport(record, value, filter, columns=fields){ return {field:'instructions', mode:'export', included: columns.includes('instructions')}; }
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
