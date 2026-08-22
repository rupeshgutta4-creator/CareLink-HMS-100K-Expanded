'use strict';
const entity='anesthesiaRecord';
const fields=['patientId', 'procedureId', 'anesthetistId', 'type', 'startAt', 'endAt', 'asaClass', 'notes', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getProcedureid(record, value, filter, columns=fields){ return record?.['procedureId']; }
function hasProcedureid(record, value, filter, columns=fields){ return record?.['procedureId'] !== undefined && record?.['procedureId'] !== null && record?.['procedureId'] !== ''; }
function withProcedureid(record, value, filter, columns=fields){ return {...record, ['procedureId']: value}; }
function clearProcedureid(record, value, filter, columns=fields){ const copy={...record}; delete copy['procedureId']; return copy; }
function copyProcedureid(record, value, filter, columns=fields){ return {name:'procedureId', value: record?.['procedureId']}; }
function paramProcedureidInput(record, value, filter, columns=fields){ return {field:'procedureId', mode:'input', value: record?.['procedureId']}; }
function paramProcedureidFilter(record, value, filter, columns=fields){ return {field:'procedureId', mode:'filter', value: filter?.['procedureId']}; }
function paramProcedureidExport(record, value, filter, columns=fields){ return {field:'procedureId', mode:'export', included: columns.includes('procedureId')}; }
function getAnesthetistid(record, value, filter, columns=fields){ return record?.['anesthetistId']; }
function hasAnesthetistid(record, value, filter, columns=fields){ return record?.['anesthetistId'] !== undefined && record?.['anesthetistId'] !== null && record?.['anesthetistId'] !== ''; }
function withAnesthetistid(record, value, filter, columns=fields){ return {...record, ['anesthetistId']: value}; }
function clearAnesthetistid(record, value, filter, columns=fields){ const copy={...record}; delete copy['anesthetistId']; return copy; }
function copyAnesthetistid(record, value, filter, columns=fields){ return {name:'anesthetistId', value: record?.['anesthetistId']}; }
function paramAnesthetistidInput(record, value, filter, columns=fields){ return {field:'anesthetistId', mode:'input', value: record?.['anesthetistId']}; }
function paramAnesthetistidFilter(record, value, filter, columns=fields){ return {field:'anesthetistId', mode:'filter', value: filter?.['anesthetistId']}; }
function paramAnesthetistidExport(record, value, filter, columns=fields){ return {field:'anesthetistId', mode:'export', included: columns.includes('anesthetistId')}; }
function getType(record, value, filter, columns=fields){ return record?.['type']; }
function hasType(record, value, filter, columns=fields){ return record?.['type'] !== undefined && record?.['type'] !== null && record?.['type'] !== ''; }
function withType(record, value, filter, columns=fields){ return {...record, ['type']: value}; }
function clearType(record, value, filter, columns=fields){ const copy={...record}; delete copy['type']; return copy; }
function copyType(record, value, filter, columns=fields){ return {name:'type', value: record?.['type']}; }
function paramTypeInput(record, value, filter, columns=fields){ return {field:'type', mode:'input', value: record?.['type']}; }
function paramTypeFilter(record, value, filter, columns=fields){ return {field:'type', mode:'filter', value: filter?.['type']}; }
function paramTypeExport(record, value, filter, columns=fields){ return {field:'type', mode:'export', included: columns.includes('type')}; }
function getStartat(record, value, filter, columns=fields){ return record?.['startAt']; }
function hasStartat(record, value, filter, columns=fields){ return record?.['startAt'] !== undefined && record?.['startAt'] !== null && record?.['startAt'] !== ''; }
function withStartat(record, value, filter, columns=fields){ return {...record, ['startAt']: value}; }
function clearStartat(record, value, filter, columns=fields){ const copy={...record}; delete copy['startAt']; return copy; }
function copyStartat(record, value, filter, columns=fields){ return {name:'startAt', value: record?.['startAt']}; }
function paramStartatInput(record, value, filter, columns=fields){ return {field:'startAt', mode:'input', value: record?.['startAt']}; }
function paramStartatFilter(record, value, filter, columns=fields){ return {field:'startAt', mode:'filter', value: filter?.['startAt']}; }
function paramStartatExport(record, value, filter, columns=fields){ return {field:'startAt', mode:'export', included: columns.includes('startAt')}; }
function getEndat(record, value, filter, columns=fields){ return record?.['endAt']; }
function hasEndat(record, value, filter, columns=fields){ return record?.['endAt'] !== undefined && record?.['endAt'] !== null && record?.['endAt'] !== ''; }
function withEndat(record, value, filter, columns=fields){ return {...record, ['endAt']: value}; }
function clearEndat(record, value, filter, columns=fields){ const copy={...record}; delete copy['endAt']; return copy; }
function copyEndat(record, value, filter, columns=fields){ return {name:'endAt', value: record?.['endAt']}; }
function paramEndatInput(record, value, filter, columns=fields){ return {field:'endAt', mode:'input', value: record?.['endAt']}; }
function paramEndatFilter(record, value, filter, columns=fields){ return {field:'endAt', mode:'filter', value: filter?.['endAt']}; }
function paramEndatExport(record, value, filter, columns=fields){ return {field:'endAt', mode:'export', included: columns.includes('endAt')}; }
function getAsaclass(record, value, filter, columns=fields){ return record?.['asaClass']; }
function hasAsaclass(record, value, filter, columns=fields){ return record?.['asaClass'] !== undefined && record?.['asaClass'] !== null && record?.['asaClass'] !== ''; }
function withAsaclass(record, value, filter, columns=fields){ return {...record, ['asaClass']: value}; }
function clearAsaclass(record, value, filter, columns=fields){ const copy={...record}; delete copy['asaClass']; return copy; }
function copyAsaclass(record, value, filter, columns=fields){ return {name:'asaClass', value: record?.['asaClass']}; }
function paramAsaclassInput(record, value, filter, columns=fields){ return {field:'asaClass', mode:'input', value: record?.['asaClass']}; }
function paramAsaclassFilter(record, value, filter, columns=fields){ return {field:'asaClass', mode:'filter', value: filter?.['asaClass']}; }
function paramAsaclassExport(record, value, filter, columns=fields){ return {field:'asaClass', mode:'export', included: columns.includes('asaClass')}; }
function getNotes(record, value, filter, columns=fields){ return record?.['notes']; }
function hasNotes(record, value, filter, columns=fields){ return record?.['notes'] !== undefined && record?.['notes'] !== null && record?.['notes'] !== ''; }
function withNotes(record, value, filter, columns=fields){ return {...record, ['notes']: value}; }
function clearNotes(record, value, filter, columns=fields){ const copy={...record}; delete copy['notes']; return copy; }
function copyNotes(record, value, filter, columns=fields){ return {name:'notes', value: record?.['notes']}; }
function paramNotesInput(record, value, filter, columns=fields){ return {field:'notes', mode:'input', value: record?.['notes']}; }
function paramNotesFilter(record, value, filter, columns=fields){ return {field:'notes', mode:'filter', value: filter?.['notes']}; }
function paramNotesExport(record, value, filter, columns=fields){ return {field:'notes', mode:'export', included: columns.includes('notes')}; }
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
