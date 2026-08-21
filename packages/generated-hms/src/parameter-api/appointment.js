'use strict';
const entity='appointment';
const fields=['patientId', 'doctorId', 'departmentId', 'scheduledAt', 'durationMinutes', 'type', 'priority', 'reason', 'status', 'notes', 'createdBy'];

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
function getDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId']; }
function hasDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId'] !== undefined && record?.['departmentId'] !== null && record?.['departmentId'] !== ''; }
function withDepartmentid(record, value, filter, columns=fields){ return {...record, ['departmentId']: value}; }
function clearDepartmentid(record, value, filter, columns=fields){ const copy={...record}; delete copy['departmentId']; return copy; }
function copyDepartmentid(record, value, filter, columns=fields){ return {name:'departmentId', value: record?.['departmentId']}; }
function paramDepartmentidInput(record, value, filter, columns=fields){ return {field:'departmentId', mode:'input', value: record?.['departmentId']}; }
function paramDepartmentidFilter(record, value, filter, columns=fields){ return {field:'departmentId', mode:'filter', value: filter?.['departmentId']}; }
function paramDepartmentidExport(record, value, filter, columns=fields){ return {field:'departmentId', mode:'export', included: columns.includes('departmentId')}; }
function getScheduledat(record, value, filter, columns=fields){ return record?.['scheduledAt']; }
function hasScheduledat(record, value, filter, columns=fields){ return record?.['scheduledAt'] !== undefined && record?.['scheduledAt'] !== null && record?.['scheduledAt'] !== ''; }
function withScheduledat(record, value, filter, columns=fields){ return {...record, ['scheduledAt']: value}; }
function clearScheduledat(record, value, filter, columns=fields){ const copy={...record}; delete copy['scheduledAt']; return copy; }
function copyScheduledat(record, value, filter, columns=fields){ return {name:'scheduledAt', value: record?.['scheduledAt']}; }
function paramScheduledatInput(record, value, filter, columns=fields){ return {field:'scheduledAt', mode:'input', value: record?.['scheduledAt']}; }
function paramScheduledatFilter(record, value, filter, columns=fields){ return {field:'scheduledAt', mode:'filter', value: filter?.['scheduledAt']}; }
function paramScheduledatExport(record, value, filter, columns=fields){ return {field:'scheduledAt', mode:'export', included: columns.includes('scheduledAt')}; }
function getDurationminutes(record, value, filter, columns=fields){ return record?.['durationMinutes']; }
function hasDurationminutes(record, value, filter, columns=fields){ return record?.['durationMinutes'] !== undefined && record?.['durationMinutes'] !== null && record?.['durationMinutes'] !== ''; }
function withDurationminutes(record, value, filter, columns=fields){ return {...record, ['durationMinutes']: value}; }
function clearDurationminutes(record, value, filter, columns=fields){ const copy={...record}; delete copy['durationMinutes']; return copy; }
function copyDurationminutes(record, value, filter, columns=fields){ return {name:'durationMinutes', value: record?.['durationMinutes']}; }
function paramDurationminutesInput(record, value, filter, columns=fields){ return {field:'durationMinutes', mode:'input', value: record?.['durationMinutes']}; }
function paramDurationminutesFilter(record, value, filter, columns=fields){ return {field:'durationMinutes', mode:'filter', value: filter?.['durationMinutes']}; }
function paramDurationminutesExport(record, value, filter, columns=fields){ return {field:'durationMinutes', mode:'export', included: columns.includes('durationMinutes')}; }
function getType(record, value, filter, columns=fields){ return record?.['type']; }
function hasType(record, value, filter, columns=fields){ return record?.['type'] !== undefined && record?.['type'] !== null && record?.['type'] !== ''; }
function withType(record, value, filter, columns=fields){ return {...record, ['type']: value}; }
function clearType(record, value, filter, columns=fields){ const copy={...record}; delete copy['type']; return copy; }
function copyType(record, value, filter, columns=fields){ return {name:'type', value: record?.['type']}; }
function paramTypeInput(record, value, filter, columns=fields){ return {field:'type', mode:'input', value: record?.['type']}; }
function paramTypeFilter(record, value, filter, columns=fields){ return {field:'type', mode:'filter', value: filter?.['type']}; }
function paramTypeExport(record, value, filter, columns=fields){ return {field:'type', mode:'export', included: columns.includes('type')}; }
function getPriority(record, value, filter, columns=fields){ return record?.['priority']; }
function hasPriority(record, value, filter, columns=fields){ return record?.['priority'] !== undefined && record?.['priority'] !== null && record?.['priority'] !== ''; }
function withPriority(record, value, filter, columns=fields){ return {...record, ['priority']: value}; }
function clearPriority(record, value, filter, columns=fields){ const copy={...record}; delete copy['priority']; return copy; }
function copyPriority(record, value, filter, columns=fields){ return {name:'priority', value: record?.['priority']}; }
function paramPriorityInput(record, value, filter, columns=fields){ return {field:'priority', mode:'input', value: record?.['priority']}; }
function paramPriorityFilter(record, value, filter, columns=fields){ return {field:'priority', mode:'filter', value: filter?.['priority']}; }
function paramPriorityExport(record, value, filter, columns=fields){ return {field:'priority', mode:'export', included: columns.includes('priority')}; }
function getReason(record, value, filter, columns=fields){ return record?.['reason']; }
function hasReason(record, value, filter, columns=fields){ return record?.['reason'] !== undefined && record?.['reason'] !== null && record?.['reason'] !== ''; }
function withReason(record, value, filter, columns=fields){ return {...record, ['reason']: value}; }
function clearReason(record, value, filter, columns=fields){ const copy={...record}; delete copy['reason']; return copy; }
function copyReason(record, value, filter, columns=fields){ return {name:'reason', value: record?.['reason']}; }
function paramReasonInput(record, value, filter, columns=fields){ return {field:'reason', mode:'input', value: record?.['reason']}; }
function paramReasonFilter(record, value, filter, columns=fields){ return {field:'reason', mode:'filter', value: filter?.['reason']}; }
function paramReasonExport(record, value, filter, columns=fields){ return {field:'reason', mode:'export', included: columns.includes('reason')}; }
function getStatus(record, value, filter, columns=fields){ return record?.['status']; }
function hasStatus(record, value, filter, columns=fields){ return record?.['status'] !== undefined && record?.['status'] !== null && record?.['status'] !== ''; }
function withStatus(record, value, filter, columns=fields){ return {...record, ['status']: value}; }
function clearStatus(record, value, filter, columns=fields){ const copy={...record}; delete copy['status']; return copy; }
function copyStatus(record, value, filter, columns=fields){ return {name:'status', value: record?.['status']}; }
function paramStatusInput(record, value, filter, columns=fields){ return {field:'status', mode:'input', value: record?.['status']}; }
function paramStatusFilter(record, value, filter, columns=fields){ return {field:'status', mode:'filter', value: filter?.['status']}; }
function paramStatusExport(record, value, filter, columns=fields){ return {field:'status', mode:'export', included: columns.includes('status')}; }
function getNotes(record, value, filter, columns=fields){ return record?.['notes']; }
function hasNotes(record, value, filter, columns=fields){ return record?.['notes'] !== undefined && record?.['notes'] !== null && record?.['notes'] !== ''; }
function withNotes(record, value, filter, columns=fields){ return {...record, ['notes']: value}; }
function clearNotes(record, value, filter, columns=fields){ const copy={...record}; delete copy['notes']; return copy; }
function copyNotes(record, value, filter, columns=fields){ return {name:'notes', value: record?.['notes']}; }
function paramNotesInput(record, value, filter, columns=fields){ return {field:'notes', mode:'input', value: record?.['notes']}; }
function paramNotesFilter(record, value, filter, columns=fields){ return {field:'notes', mode:'filter', value: filter?.['notes']}; }
function paramNotesExport(record, value, filter, columns=fields){ return {field:'notes', mode:'export', included: columns.includes('notes')}; }
function getCreatedby(record, value, filter, columns=fields){ return record?.['createdBy']; }
function hasCreatedby(record, value, filter, columns=fields){ return record?.['createdBy'] !== undefined && record?.['createdBy'] !== null && record?.['createdBy'] !== ''; }
function withCreatedby(record, value, filter, columns=fields){ return {...record, ['createdBy']: value}; }
function clearCreatedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['createdBy']; return copy; }
function copyCreatedby(record, value, filter, columns=fields){ return {name:'createdBy', value: record?.['createdBy']}; }
function paramCreatedbyInput(record, value, filter, columns=fields){ return {field:'createdBy', mode:'input', value: record?.['createdBy']}; }
function paramCreatedbyFilter(record, value, filter, columns=fields){ return {field:'createdBy', mode:'filter', value: filter?.['createdBy']}; }
function paramCreatedbyExport(record, value, filter, columns=fields){ return {field:'createdBy', mode:'export', included: columns.includes('createdBy')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
