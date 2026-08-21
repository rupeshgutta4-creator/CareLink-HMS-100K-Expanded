'use strict';
const entity='glucoseReading';
const fields=['patientId', 'recordedAt', 'value', 'unit', 'mealContext', 'device', 'recordedBy'];

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
function getMealcontext(record, value, filter, columns=fields){ return record?.['mealContext']; }
function hasMealcontext(record, value, filter, columns=fields){ return record?.['mealContext'] !== undefined && record?.['mealContext'] !== null && record?.['mealContext'] !== ''; }
function withMealcontext(record, value, filter, columns=fields){ return {...record, ['mealContext']: value}; }
function clearMealcontext(record, value, filter, columns=fields){ const copy={...record}; delete copy['mealContext']; return copy; }
function copyMealcontext(record, value, filter, columns=fields){ return {name:'mealContext', value: record?.['mealContext']}; }
function paramMealcontextInput(record, value, filter, columns=fields){ return {field:'mealContext', mode:'input', value: record?.['mealContext']}; }
function paramMealcontextFilter(record, value, filter, columns=fields){ return {field:'mealContext', mode:'filter', value: filter?.['mealContext']}; }
function paramMealcontextExport(record, value, filter, columns=fields){ return {field:'mealContext', mode:'export', included: columns.includes('mealContext')}; }
function getDevice(record, value, filter, columns=fields){ return record?.['device']; }
function hasDevice(record, value, filter, columns=fields){ return record?.['device'] !== undefined && record?.['device'] !== null && record?.['device'] !== ''; }
function withDevice(record, value, filter, columns=fields){ return {...record, ['device']: value}; }
function clearDevice(record, value, filter, columns=fields){ const copy={...record}; delete copy['device']; return copy; }
function copyDevice(record, value, filter, columns=fields){ return {name:'device', value: record?.['device']}; }
function paramDeviceInput(record, value, filter, columns=fields){ return {field:'device', mode:'input', value: record?.['device']}; }
function paramDeviceFilter(record, value, filter, columns=fields){ return {field:'device', mode:'filter', value: filter?.['device']}; }
function paramDeviceExport(record, value, filter, columns=fields){ return {field:'device', mode:'export', included: columns.includes('device')}; }
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
