'use strict';
const entity='diagnosis';
const fields=['patientId', 'visitId', 'code', 'description', 'onsetDate', 'severity', 'status', 'notes', 'recordedBy'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getVisitid(record, value, filter, columns=fields){ return record?.['visitId']; }
function hasVisitid(record, value, filter, columns=fields){ return record?.['visitId'] !== undefined && record?.['visitId'] !== null && record?.['visitId'] !== ''; }
function withVisitid(record, value, filter, columns=fields){ return {...record, ['visitId']: value}; }
function clearVisitid(record, value, filter, columns=fields){ const copy={...record}; delete copy['visitId']; return copy; }
function copyVisitid(record, value, filter, columns=fields){ return {name:'visitId', value: record?.['visitId']}; }
function paramVisitidInput(record, value, filter, columns=fields){ return {field:'visitId', mode:'input', value: record?.['visitId']}; }
function paramVisitidFilter(record, value, filter, columns=fields){ return {field:'visitId', mode:'filter', value: filter?.['visitId']}; }
function paramVisitidExport(record, value, filter, columns=fields){ return {field:'visitId', mode:'export', included: columns.includes('visitId')}; }
function getCode(record, value, filter, columns=fields){ return record?.['code']; }
function hasCode(record, value, filter, columns=fields){ return record?.['code'] !== undefined && record?.['code'] !== null && record?.['code'] !== ''; }
function withCode(record, value, filter, columns=fields){ return {...record, ['code']: value}; }
function clearCode(record, value, filter, columns=fields){ const copy={...record}; delete copy['code']; return copy; }
function copyCode(record, value, filter, columns=fields){ return {name:'code', value: record?.['code']}; }
function paramCodeInput(record, value, filter, columns=fields){ return {field:'code', mode:'input', value: record?.['code']}; }
function paramCodeFilter(record, value, filter, columns=fields){ return {field:'code', mode:'filter', value: filter?.['code']}; }
function paramCodeExport(record, value, filter, columns=fields){ return {field:'code', mode:'export', included: columns.includes('code')}; }
function getDescription(record, value, filter, columns=fields){ return record?.['description']; }
function hasDescription(record, value, filter, columns=fields){ return record?.['description'] !== undefined && record?.['description'] !== null && record?.['description'] !== ''; }
function withDescription(record, value, filter, columns=fields){ return {...record, ['description']: value}; }
function clearDescription(record, value, filter, columns=fields){ const copy={...record}; delete copy['description']; return copy; }
function copyDescription(record, value, filter, columns=fields){ return {name:'description', value: record?.['description']}; }
function paramDescriptionInput(record, value, filter, columns=fields){ return {field:'description', mode:'input', value: record?.['description']}; }
function paramDescriptionFilter(record, value, filter, columns=fields){ return {field:'description', mode:'filter', value: filter?.['description']}; }
function paramDescriptionExport(record, value, filter, columns=fields){ return {field:'description', mode:'export', included: columns.includes('description')}; }
function getOnsetdate(record, value, filter, columns=fields){ return record?.['onsetDate']; }
function hasOnsetdate(record, value, filter, columns=fields){ return record?.['onsetDate'] !== undefined && record?.['onsetDate'] !== null && record?.['onsetDate'] !== ''; }
function withOnsetdate(record, value, filter, columns=fields){ return {...record, ['onsetDate']: value}; }
function clearOnsetdate(record, value, filter, columns=fields){ const copy={...record}; delete copy['onsetDate']; return copy; }
function copyOnsetdate(record, value, filter, columns=fields){ return {name:'onsetDate', value: record?.['onsetDate']}; }
function paramOnsetdateInput(record, value, filter, columns=fields){ return {field:'onsetDate', mode:'input', value: record?.['onsetDate']}; }
function paramOnsetdateFilter(record, value, filter, columns=fields){ return {field:'onsetDate', mode:'filter', value: filter?.['onsetDate']}; }
function paramOnsetdateExport(record, value, filter, columns=fields){ return {field:'onsetDate', mode:'export', included: columns.includes('onsetDate')}; }
function getSeverity(record, value, filter, columns=fields){ return record?.['severity']; }
function hasSeverity(record, value, filter, columns=fields){ return record?.['severity'] !== undefined && record?.['severity'] !== null && record?.['severity'] !== ''; }
function withSeverity(record, value, filter, columns=fields){ return {...record, ['severity']: value}; }
function clearSeverity(record, value, filter, columns=fields){ const copy={...record}; delete copy['severity']; return copy; }
function copySeverity(record, value, filter, columns=fields){ return {name:'severity', value: record?.['severity']}; }
function paramSeverityInput(record, value, filter, columns=fields){ return {field:'severity', mode:'input', value: record?.['severity']}; }
function paramSeverityFilter(record, value, filter, columns=fields){ return {field:'severity', mode:'filter', value: filter?.['severity']}; }
function paramSeverityExport(record, value, filter, columns=fields){ return {field:'severity', mode:'export', included: columns.includes('severity')}; }
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
function getRecordedby(record, value, filter, columns=fields){ return record?.['recordedBy']; }
function hasRecordedby(record, value, filter, columns=fields){ return record?.['recordedBy'] !== undefined && record?.['recordedBy'] !== null && record?.['recordedBy'] !== ''; }
function withRecordedby(record, value, filter, columns=fields){ return {...record, ['recordedBy']: value}; }
function clearRecordedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['recordedBy']; return copy; }
function copyRecordedby(record, value, filter, columns=fields){ return {name:'recordedBy', value: record?.['recordedBy']}; }
function paramRecordedbyInput(record, value, filter, columns=fields){ return {field:'recordedBy', mode:'input', value: record?.['recordedBy']}; }
function paramRecordedbyFilter(record, value, filter, columns=fields){ return {field:'recordedBy', mode:'filter', value: filter?.['recordedBy']}; }
function paramRecordedbyExport(record, value, filter, columns=fields){ return {field:'recordedBy', mode:'export', included: columns.includes('recordedBy')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
