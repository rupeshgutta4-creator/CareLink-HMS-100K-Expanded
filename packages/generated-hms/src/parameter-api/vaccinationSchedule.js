'use strict';
const entity='vaccinationSchedule';
const fields=['patientId', 'vaccineCode', 'dueDate', 'doseNumber', 'status', 'reminderSentAt'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getVaccinecode(record, value, filter, columns=fields){ return record?.['vaccineCode']; }
function hasVaccinecode(record, value, filter, columns=fields){ return record?.['vaccineCode'] !== undefined && record?.['vaccineCode'] !== null && record?.['vaccineCode'] !== ''; }
function withVaccinecode(record, value, filter, columns=fields){ return {...record, ['vaccineCode']: value}; }
function clearVaccinecode(record, value, filter, columns=fields){ const copy={...record}; delete copy['vaccineCode']; return copy; }
function copyVaccinecode(record, value, filter, columns=fields){ return {name:'vaccineCode', value: record?.['vaccineCode']}; }
function paramVaccinecodeInput(record, value, filter, columns=fields){ return {field:'vaccineCode', mode:'input', value: record?.['vaccineCode']}; }
function paramVaccinecodeFilter(record, value, filter, columns=fields){ return {field:'vaccineCode', mode:'filter', value: filter?.['vaccineCode']}; }
function paramVaccinecodeExport(record, value, filter, columns=fields){ return {field:'vaccineCode', mode:'export', included: columns.includes('vaccineCode')}; }
function getDuedate(record, value, filter, columns=fields){ return record?.['dueDate']; }
function hasDuedate(record, value, filter, columns=fields){ return record?.['dueDate'] !== undefined && record?.['dueDate'] !== null && record?.['dueDate'] !== ''; }
function withDuedate(record, value, filter, columns=fields){ return {...record, ['dueDate']: value}; }
function clearDuedate(record, value, filter, columns=fields){ const copy={...record}; delete copy['dueDate']; return copy; }
function copyDuedate(record, value, filter, columns=fields){ return {name:'dueDate', value: record?.['dueDate']}; }
function paramDuedateInput(record, value, filter, columns=fields){ return {field:'dueDate', mode:'input', value: record?.['dueDate']}; }
function paramDuedateFilter(record, value, filter, columns=fields){ return {field:'dueDate', mode:'filter', value: filter?.['dueDate']}; }
function paramDuedateExport(record, value, filter, columns=fields){ return {field:'dueDate', mode:'export', included: columns.includes('dueDate')}; }
function getDosenumber(record, value, filter, columns=fields){ return record?.['doseNumber']; }
function hasDosenumber(record, value, filter, columns=fields){ return record?.['doseNumber'] !== undefined && record?.['doseNumber'] !== null && record?.['doseNumber'] !== ''; }
function withDosenumber(record, value, filter, columns=fields){ return {...record, ['doseNumber']: value}; }
function clearDosenumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['doseNumber']; return copy; }
function copyDosenumber(record, value, filter, columns=fields){ return {name:'doseNumber', value: record?.['doseNumber']}; }
function paramDosenumberInput(record, value, filter, columns=fields){ return {field:'doseNumber', mode:'input', value: record?.['doseNumber']}; }
function paramDosenumberFilter(record, value, filter, columns=fields){ return {field:'doseNumber', mode:'filter', value: filter?.['doseNumber']}; }
function paramDosenumberExport(record, value, filter, columns=fields){ return {field:'doseNumber', mode:'export', included: columns.includes('doseNumber')}; }
function getStatus(record, value, filter, columns=fields){ return record?.['status']; }
function hasStatus(record, value, filter, columns=fields){ return record?.['status'] !== undefined && record?.['status'] !== null && record?.['status'] !== ''; }
function withStatus(record, value, filter, columns=fields){ return {...record, ['status']: value}; }
function clearStatus(record, value, filter, columns=fields){ const copy={...record}; delete copy['status']; return copy; }
function copyStatus(record, value, filter, columns=fields){ return {name:'status', value: record?.['status']}; }
function paramStatusInput(record, value, filter, columns=fields){ return {field:'status', mode:'input', value: record?.['status']}; }
function paramStatusFilter(record, value, filter, columns=fields){ return {field:'status', mode:'filter', value: filter?.['status']}; }
function paramStatusExport(record, value, filter, columns=fields){ return {field:'status', mode:'export', included: columns.includes('status')}; }
function getRemindersentat(record, value, filter, columns=fields){ return record?.['reminderSentAt']; }
function hasRemindersentat(record, value, filter, columns=fields){ return record?.['reminderSentAt'] !== undefined && record?.['reminderSentAt'] !== null && record?.['reminderSentAt'] !== ''; }
function withRemindersentat(record, value, filter, columns=fields){ return {...record, ['reminderSentAt']: value}; }
function clearRemindersentat(record, value, filter, columns=fields){ const copy={...record}; delete copy['reminderSentAt']; return copy; }
function copyRemindersentat(record, value, filter, columns=fields){ return {name:'reminderSentAt', value: record?.['reminderSentAt']}; }
function paramRemindersentatInput(record, value, filter, columns=fields){ return {field:'reminderSentAt', mode:'input', value: record?.['reminderSentAt']}; }
function paramRemindersentatFilter(record, value, filter, columns=fields){ return {field:'reminderSentAt', mode:'filter', value: filter?.['reminderSentAt']}; }
function paramRemindersentatExport(record, value, filter, columns=fields){ return {field:'reminderSentAt', mode:'export', included: columns.includes('reminderSentAt')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
