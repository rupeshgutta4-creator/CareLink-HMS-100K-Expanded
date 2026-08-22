'use strict';
const entity='fluidBalance';
const fields=['patientId', 'recordedAt', 'intakeMl', 'outputMl', 'balanceMl', 'recordedBy', 'notes'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getRecordedat(record, value, filter, columns=fields){ return record?.['recordedAt']; }
function hasRecordedat(record, value, filter, columns=fields){ return record?.['recordedAt'] !== undefined && record?.['recordedAt'] !== null && record?.['recordedAt'] !== ''; }
function withRecordedat(record, value, filter, columns=fields){ return {...record, ['recordedAt']: value}; }
function clearRecordedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['recordedAt']; return copy; }
function copyRecordedat(record, value, filter, columns=fields){ return {name:'recordedAt', value: record?.['recordedAt']}; }
function paramRecordedatInput(record, value, filter, columns=fields){ return {field:'recordedAt', mode:'input', value: record?.['recordedAt']}; }
function paramRecordedatFilter(record, value, filter, columns=fields){ return {field:'recordedAt', mode:'filter', value: filter?.['recordedAt']}; }
function paramRecordedatExport(record, value, filter, columns=fields){ return {field:'recordedAt', mode:'export', included: columns.includes('recordedAt')}; }
function getIntakeml(record, value, filter, columns=fields){ return record?.['intakeMl']; }
function hasIntakeml(record, value, filter, columns=fields){ return record?.['intakeMl'] !== undefined && record?.['intakeMl'] !== null && record?.['intakeMl'] !== ''; }
function withIntakeml(record, value, filter, columns=fields){ return {...record, ['intakeMl']: value}; }
function clearIntakeml(record, value, filter, columns=fields){ const copy={...record}; delete copy['intakeMl']; return copy; }
function copyIntakeml(record, value, filter, columns=fields){ return {name:'intakeMl', value: record?.['intakeMl']}; }
function paramIntakemlInput(record, value, filter, columns=fields){ return {field:'intakeMl', mode:'input', value: record?.['intakeMl']}; }
function paramIntakemlFilter(record, value, filter, columns=fields){ return {field:'intakeMl', mode:'filter', value: filter?.['intakeMl']}; }
function paramIntakemlExport(record, value, filter, columns=fields){ return {field:'intakeMl', mode:'export', included: columns.includes('intakeMl')}; }
function getOutputml(record, value, filter, columns=fields){ return record?.['outputMl']; }
function hasOutputml(record, value, filter, columns=fields){ return record?.['outputMl'] !== undefined && record?.['outputMl'] !== null && record?.['outputMl'] !== ''; }
function withOutputml(record, value, filter, columns=fields){ return {...record, ['outputMl']: value}; }
function clearOutputml(record, value, filter, columns=fields){ const copy={...record}; delete copy['outputMl']; return copy; }
function copyOutputml(record, value, filter, columns=fields){ return {name:'outputMl', value: record?.['outputMl']}; }
function paramOutputmlInput(record, value, filter, columns=fields){ return {field:'outputMl', mode:'input', value: record?.['outputMl']}; }
function paramOutputmlFilter(record, value, filter, columns=fields){ return {field:'outputMl', mode:'filter', value: filter?.['outputMl']}; }
function paramOutputmlExport(record, value, filter, columns=fields){ return {field:'outputMl', mode:'export', included: columns.includes('outputMl')}; }
function getBalanceml(record, value, filter, columns=fields){ return record?.['balanceMl']; }
function hasBalanceml(record, value, filter, columns=fields){ return record?.['balanceMl'] !== undefined && record?.['balanceMl'] !== null && record?.['balanceMl'] !== ''; }
function withBalanceml(record, value, filter, columns=fields){ return {...record, ['balanceMl']: value}; }
function clearBalanceml(record, value, filter, columns=fields){ const copy={...record}; delete copy['balanceMl']; return copy; }
function copyBalanceml(record, value, filter, columns=fields){ return {name:'balanceMl', value: record?.['balanceMl']}; }
function paramBalancemlInput(record, value, filter, columns=fields){ return {field:'balanceMl', mode:'input', value: record?.['balanceMl']}; }
function paramBalancemlFilter(record, value, filter, columns=fields){ return {field:'balanceMl', mode:'filter', value: filter?.['balanceMl']}; }
function paramBalancemlExport(record, value, filter, columns=fields){ return {field:'balanceMl', mode:'export', included: columns.includes('balanceMl')}; }
function getRecordedby(record, value, filter, columns=fields){ return record?.['recordedBy']; }
function hasRecordedby(record, value, filter, columns=fields){ return record?.['recordedBy'] !== undefined && record?.['recordedBy'] !== null && record?.['recordedBy'] !== ''; }
function withRecordedby(record, value, filter, columns=fields){ return {...record, ['recordedBy']: value}; }
function clearRecordedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['recordedBy']; return copy; }
function copyRecordedby(record, value, filter, columns=fields){ return {name:'recordedBy', value: record?.['recordedBy']}; }
function paramRecordedbyInput(record, value, filter, columns=fields){ return {field:'recordedBy', mode:'input', value: record?.['recordedBy']}; }
function paramRecordedbyFilter(record, value, filter, columns=fields){ return {field:'recordedBy', mode:'filter', value: filter?.['recordedBy']}; }
function paramRecordedbyExport(record, value, filter, columns=fields){ return {field:'recordedBy', mode:'export', included: columns.includes('recordedBy')}; }
function getNotes(record, value, filter, columns=fields){ return record?.['notes']; }
function hasNotes(record, value, filter, columns=fields){ return record?.['notes'] !== undefined && record?.['notes'] !== null && record?.['notes'] !== ''; }
function withNotes(record, value, filter, columns=fields){ return {...record, ['notes']: value}; }
function clearNotes(record, value, filter, columns=fields){ const copy={...record}; delete copy['notes']; return copy; }
function copyNotes(record, value, filter, columns=fields){ return {name:'notes', value: record?.['notes']}; }
function paramNotesInput(record, value, filter, columns=fields){ return {field:'notes', mode:'input', value: record?.['notes']}; }
function paramNotesFilter(record, value, filter, columns=fields){ return {field:'notes', mode:'filter', value: filter?.['notes']}; }
function paramNotesExport(record, value, filter, columns=fields){ return {field:'notes', mode:'export', included: columns.includes('notes')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
