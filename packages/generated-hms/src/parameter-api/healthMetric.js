'use strict';
const entity='healthMetric';
const fields=['patientId', 'metric', 'value', 'unit', 'recordedAt', 'source', 'notes'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getMetric(record, value, filter, columns=fields){ return record?.['metric']; }
function hasMetric(record, value, filter, columns=fields){ return record?.['metric'] !== undefined && record?.['metric'] !== null && record?.['metric'] !== ''; }
function withMetric(record, value, filter, columns=fields){ return {...record, ['metric']: value}; }
function clearMetric(record, value, filter, columns=fields){ const copy={...record}; delete copy['metric']; return copy; }
function copyMetric(record, value, filter, columns=fields){ return {name:'metric', value: record?.['metric']}; }
function paramMetricInput(record, value, filter, columns=fields){ return {field:'metric', mode:'input', value: record?.['metric']}; }
function paramMetricFilter(record, value, filter, columns=fields){ return {field:'metric', mode:'filter', value: filter?.['metric']}; }
function paramMetricExport(record, value, filter, columns=fields){ return {field:'metric', mode:'export', included: columns.includes('metric')}; }
function getValue(record, value, filter, columns=fields){ return record?.['value']; }
function hasValue(record, value, filter, columns=fields){ return record?.['value'] !== undefined && record?.['value'] !== null && record?.['value'] !== ''; }
function withValue(record, value, filter, columns=fields){ return {...record, ['value']: value}; }
function clearValue(record, value, filter, columns=fields){ const copy={...record}; delete copy['value']; return copy; }
function copyValue(record, value, filter, columns=fields){ return {name:'value', value: record?.['value']}; }
function paramValueInput(record, value, filter, columns=fields){ return {field:'value', mode:'input', value: record?.['value']}; }
function paramValueFilter(record, value, filter, columns=fields){ return {field:'value', mode:'filter', value: filter?.['value']}; }
function paramValueExport(record, value, filter, columns=fields){ return {field:'value', mode:'export', included: columns.includes('value')}; }
function getUnit(record, value, filter, columns=fields){ return record?.['unit']; }
function hasUnit(record, value, filter, columns=fields){ return record?.['unit'] !== undefined && record?.['unit'] !== null && record?.['unit'] !== ''; }
function withUnit(record, value, filter, columns=fields){ return {...record, ['unit']: value}; }
function clearUnit(record, value, filter, columns=fields){ const copy={...record}; delete copy['unit']; return copy; }
function copyUnit(record, value, filter, columns=fields){ return {name:'unit', value: record?.['unit']}; }
function paramUnitInput(record, value, filter, columns=fields){ return {field:'unit', mode:'input', value: record?.['unit']}; }
function paramUnitFilter(record, value, filter, columns=fields){ return {field:'unit', mode:'filter', value: filter?.['unit']}; }
function paramUnitExport(record, value, filter, columns=fields){ return {field:'unit', mode:'export', included: columns.includes('unit')}; }
function getRecordedat(record, value, filter, columns=fields){ return record?.['recordedAt']; }
function hasRecordedat(record, value, filter, columns=fields){ return record?.['recordedAt'] !== undefined && record?.['recordedAt'] !== null && record?.['recordedAt'] !== ''; }
function withRecordedat(record, value, filter, columns=fields){ return {...record, ['recordedAt']: value}; }
function clearRecordedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['recordedAt']; return copy; }
function copyRecordedat(record, value, filter, columns=fields){ return {name:'recordedAt', value: record?.['recordedAt']}; }
function paramRecordedatInput(record, value, filter, columns=fields){ return {field:'recordedAt', mode:'input', value: record?.['recordedAt']}; }
function paramRecordedatFilter(record, value, filter, columns=fields){ return {field:'recordedAt', mode:'filter', value: filter?.['recordedAt']}; }
function paramRecordedatExport(record, value, filter, columns=fields){ return {field:'recordedAt', mode:'export', included: columns.includes('recordedAt')}; }
function getSource(record, value, filter, columns=fields){ return record?.['source']; }
function hasSource(record, value, filter, columns=fields){ return record?.['source'] !== undefined && record?.['source'] !== null && record?.['source'] !== ''; }
function withSource(record, value, filter, columns=fields){ return {...record, ['source']: value}; }
function clearSource(record, value, filter, columns=fields){ const copy={...record}; delete copy['source']; return copy; }
function copySource(record, value, filter, columns=fields){ return {name:'source', value: record?.['source']}; }
function paramSourceInput(record, value, filter, columns=fields){ return {field:'source', mode:'input', value: record?.['source']}; }
function paramSourceFilter(record, value, filter, columns=fields){ return {field:'source', mode:'filter', value: filter?.['source']}; }
function paramSourceExport(record, value, filter, columns=fields){ return {field:'source', mode:'export', included: columns.includes('source')}; }
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
