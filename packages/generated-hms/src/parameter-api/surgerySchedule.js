'use strict';
const entity='surgerySchedule';
const fields=['patientId', 'doctorId', 'operatingRoomId', 'procedureId', 'scheduledAt', 'durationMinutes', 'status'];

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
function getOperatingroomid(record, value, filter, columns=fields){ return record?.['operatingRoomId']; }
function hasOperatingroomid(record, value, filter, columns=fields){ return record?.['operatingRoomId'] !== undefined && record?.['operatingRoomId'] !== null && record?.['operatingRoomId'] !== ''; }
function withOperatingroomid(record, value, filter, columns=fields){ return {...record, ['operatingRoomId']: value}; }
function clearOperatingroomid(record, value, filter, columns=fields){ const copy={...record}; delete copy['operatingRoomId']; return copy; }
function copyOperatingroomid(record, value, filter, columns=fields){ return {name:'operatingRoomId', value: record?.['operatingRoomId']}; }
function paramOperatingroomidInput(record, value, filter, columns=fields){ return {field:'operatingRoomId', mode:'input', value: record?.['operatingRoomId']}; }
function paramOperatingroomidFilter(record, value, filter, columns=fields){ return {field:'operatingRoomId', mode:'filter', value: filter?.['operatingRoomId']}; }
function paramOperatingroomidExport(record, value, filter, columns=fields){ return {field:'operatingRoomId', mode:'export', included: columns.includes('operatingRoomId')}; }
function getProcedureid(record, value, filter, columns=fields){ return record?.['procedureId']; }
function hasProcedureid(record, value, filter, columns=fields){ return record?.['procedureId'] !== undefined && record?.['procedureId'] !== null && record?.['procedureId'] !== ''; }
function withProcedureid(record, value, filter, columns=fields){ return {...record, ['procedureId']: value}; }
function clearProcedureid(record, value, filter, columns=fields){ const copy={...record}; delete copy['procedureId']; return copy; }
function copyProcedureid(record, value, filter, columns=fields){ return {name:'procedureId', value: record?.['procedureId']}; }
function paramProcedureidInput(record, value, filter, columns=fields){ return {field:'procedureId', mode:'input', value: record?.['procedureId']}; }
function paramProcedureidFilter(record, value, filter, columns=fields){ return {field:'procedureId', mode:'filter', value: filter?.['procedureId']}; }
function paramProcedureidExport(record, value, filter, columns=fields){ return {field:'procedureId', mode:'export', included: columns.includes('procedureId')}; }
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
