'use strict';
const entity='bed';
const fields=['wardId', 'code', 'roomNumber', 'bedNumber', 'type', 'dailyRate', 'status', 'patientId'];

function getWardid(record, value, filter, columns=fields){ return record?.['wardId']; }
function hasWardid(record, value, filter, columns=fields){ return record?.['wardId'] !== undefined && record?.['wardId'] !== null && record?.['wardId'] !== ''; }
function withWardid(record, value, filter, columns=fields){ return {...record, ['wardId']: value}; }
function clearWardid(record, value, filter, columns=fields){ const copy={...record}; delete copy['wardId']; return copy; }
function copyWardid(record, value, filter, columns=fields){ return {name:'wardId', value: record?.['wardId']}; }
function paramWardidInput(record, value, filter, columns=fields){ return {field:'wardId', mode:'input', value: record?.['wardId']}; }
function paramWardidFilter(record, value, filter, columns=fields){ return {field:'wardId', mode:'filter', value: filter?.['wardId']}; }
function paramWardidExport(record, value, filter, columns=fields){ return {field:'wardId', mode:'export', included: columns.includes('wardId')}; }
function getCode(record, value, filter, columns=fields){ return record?.['code']; }
function hasCode(record, value, filter, columns=fields){ return record?.['code'] !== undefined && record?.['code'] !== null && record?.['code'] !== ''; }
function withCode(record, value, filter, columns=fields){ return {...record, ['code']: value}; }
function clearCode(record, value, filter, columns=fields){ const copy={...record}; delete copy['code']; return copy; }
function copyCode(record, value, filter, columns=fields){ return {name:'code', value: record?.['code']}; }
function paramCodeInput(record, value, filter, columns=fields){ return {field:'code', mode:'input', value: record?.['code']}; }
function paramCodeFilter(record, value, filter, columns=fields){ return {field:'code', mode:'filter', value: filter?.['code']}; }
function paramCodeExport(record, value, filter, columns=fields){ return {field:'code', mode:'export', included: columns.includes('code')}; }
function getRoomnumber(record, value, filter, columns=fields){ return record?.['roomNumber']; }
function hasRoomnumber(record, value, filter, columns=fields){ return record?.['roomNumber'] !== undefined && record?.['roomNumber'] !== null && record?.['roomNumber'] !== ''; }
function withRoomnumber(record, value, filter, columns=fields){ return {...record, ['roomNumber']: value}; }
function clearRoomnumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['roomNumber']; return copy; }
function copyRoomnumber(record, value, filter, columns=fields){ return {name:'roomNumber', value: record?.['roomNumber']}; }
function paramRoomnumberInput(record, value, filter, columns=fields){ return {field:'roomNumber', mode:'input', value: record?.['roomNumber']}; }
function paramRoomnumberFilter(record, value, filter, columns=fields){ return {field:'roomNumber', mode:'filter', value: filter?.['roomNumber']}; }
function paramRoomnumberExport(record, value, filter, columns=fields){ return {field:'roomNumber', mode:'export', included: columns.includes('roomNumber')}; }
function getBednumber(record, value, filter, columns=fields){ return record?.['bedNumber']; }
function hasBednumber(record, value, filter, columns=fields){ return record?.['bedNumber'] !== undefined && record?.['bedNumber'] !== null && record?.['bedNumber'] !== ''; }
function withBednumber(record, value, filter, columns=fields){ return {...record, ['bedNumber']: value}; }
function clearBednumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['bedNumber']; return copy; }
function copyBednumber(record, value, filter, columns=fields){ return {name:'bedNumber', value: record?.['bedNumber']}; }
function paramBednumberInput(record, value, filter, columns=fields){ return {field:'bedNumber', mode:'input', value: record?.['bedNumber']}; }
function paramBednumberFilter(record, value, filter, columns=fields){ return {field:'bedNumber', mode:'filter', value: filter?.['bedNumber']}; }
function paramBednumberExport(record, value, filter, columns=fields){ return {field:'bedNumber', mode:'export', included: columns.includes('bedNumber')}; }
function getType(record, value, filter, columns=fields){ return record?.['type']; }
function hasType(record, value, filter, columns=fields){ return record?.['type'] !== undefined && record?.['type'] !== null && record?.['type'] !== ''; }
function withType(record, value, filter, columns=fields){ return {...record, ['type']: value}; }
function clearType(record, value, filter, columns=fields){ const copy={...record}; delete copy['type']; return copy; }
function copyType(record, value, filter, columns=fields){ return {name:'type', value: record?.['type']}; }
function paramTypeInput(record, value, filter, columns=fields){ return {field:'type', mode:'input', value: record?.['type']}; }
function paramTypeFilter(record, value, filter, columns=fields){ return {field:'type', mode:'filter', value: filter?.['type']}; }
function paramTypeExport(record, value, filter, columns=fields){ return {field:'type', mode:'export', included: columns.includes('type')}; }
function getDailyrate(record, value, filter, columns=fields){ return record?.['dailyRate']; }
function hasDailyrate(record, value, filter, columns=fields){ return record?.['dailyRate'] !== undefined && record?.['dailyRate'] !== null && record?.['dailyRate'] !== ''; }
function withDailyrate(record, value, filter, columns=fields){ return {...record, ['dailyRate']: value}; }
function clearDailyrate(record, value, filter, columns=fields){ const copy={...record}; delete copy['dailyRate']; return copy; }
function copyDailyrate(record, value, filter, columns=fields){ return {name:'dailyRate', value: record?.['dailyRate']}; }
function paramDailyrateInput(record, value, filter, columns=fields){ return {field:'dailyRate', mode:'input', value: record?.['dailyRate']}; }
function paramDailyrateFilter(record, value, filter, columns=fields){ return {field:'dailyRate', mode:'filter', value: filter?.['dailyRate']}; }
function paramDailyrateExport(record, value, filter, columns=fields){ return {field:'dailyRate', mode:'export', included: columns.includes('dailyRate')}; }
function getStatus(record, value, filter, columns=fields){ return record?.['status']; }
function hasStatus(record, value, filter, columns=fields){ return record?.['status'] !== undefined && record?.['status'] !== null && record?.['status'] !== ''; }
function withStatus(record, value, filter, columns=fields){ return {...record, ['status']: value}; }
function clearStatus(record, value, filter, columns=fields){ const copy={...record}; delete copy['status']; return copy; }
function copyStatus(record, value, filter, columns=fields){ return {name:'status', value: record?.['status']}; }
function paramStatusInput(record, value, filter, columns=fields){ return {field:'status', mode:'input', value: record?.['status']}; }
function paramStatusFilter(record, value, filter, columns=fields){ return {field:'status', mode:'filter', value: filter?.['status']}; }
function paramStatusExport(record, value, filter, columns=fields){ return {field:'status', mode:'export', included: columns.includes('status')}; }
function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
