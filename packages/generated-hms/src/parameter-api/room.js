'use strict';
const entity='room';
const fields=['wardId', 'code', 'type', 'floor', 'capacity', 'rate', 'status'];

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
function getType(record, value, filter, columns=fields){ return record?.['type']; }
function hasType(record, value, filter, columns=fields){ return record?.['type'] !== undefined && record?.['type'] !== null && record?.['type'] !== ''; }
function withType(record, value, filter, columns=fields){ return {...record, ['type']: value}; }
function clearType(record, value, filter, columns=fields){ const copy={...record}; delete copy['type']; return copy; }
function copyType(record, value, filter, columns=fields){ return {name:'type', value: record?.['type']}; }
function paramTypeInput(record, value, filter, columns=fields){ return {field:'type', mode:'input', value: record?.['type']}; }
function paramTypeFilter(record, value, filter, columns=fields){ return {field:'type', mode:'filter', value: filter?.['type']}; }
function paramTypeExport(record, value, filter, columns=fields){ return {field:'type', mode:'export', included: columns.includes('type')}; }
function getFloor(record, value, filter, columns=fields){ return record?.['floor']; }
function hasFloor(record, value, filter, columns=fields){ return record?.['floor'] !== undefined && record?.['floor'] !== null && record?.['floor'] !== ''; }
function withFloor(record, value, filter, columns=fields){ return {...record, ['floor']: value}; }
function clearFloor(record, value, filter, columns=fields){ const copy={...record}; delete copy['floor']; return copy; }
function copyFloor(record, value, filter, columns=fields){ return {name:'floor', value: record?.['floor']}; }
function paramFloorInput(record, value, filter, columns=fields){ return {field:'floor', mode:'input', value: record?.['floor']}; }
function paramFloorFilter(record, value, filter, columns=fields){ return {field:'floor', mode:'filter', value: filter?.['floor']}; }
function paramFloorExport(record, value, filter, columns=fields){ return {field:'floor', mode:'export', included: columns.includes('floor')}; }
function getCapacity(record, value, filter, columns=fields){ return record?.['capacity']; }
function hasCapacity(record, value, filter, columns=fields){ return record?.['capacity'] !== undefined && record?.['capacity'] !== null && record?.['capacity'] !== ''; }
function withCapacity(record, value, filter, columns=fields){ return {...record, ['capacity']: value}; }
function clearCapacity(record, value, filter, columns=fields){ const copy={...record}; delete copy['capacity']; return copy; }
function copyCapacity(record, value, filter, columns=fields){ return {name:'capacity', value: record?.['capacity']}; }
function paramCapacityInput(record, value, filter, columns=fields){ return {field:'capacity', mode:'input', value: record?.['capacity']}; }
function paramCapacityFilter(record, value, filter, columns=fields){ return {field:'capacity', mode:'filter', value: filter?.['capacity']}; }
function paramCapacityExport(record, value, filter, columns=fields){ return {field:'capacity', mode:'export', included: columns.includes('capacity')}; }
function getRate(record, value, filter, columns=fields){ return record?.['rate']; }
function hasRate(record, value, filter, columns=fields){ return record?.['rate'] !== undefined && record?.['rate'] !== null && record?.['rate'] !== ''; }
function withRate(record, value, filter, columns=fields){ return {...record, ['rate']: value}; }
function clearRate(record, value, filter, columns=fields){ const copy={...record}; delete copy['rate']; return copy; }
function copyRate(record, value, filter, columns=fields){ return {name:'rate', value: record?.['rate']}; }
function paramRateInput(record, value, filter, columns=fields){ return {field:'rate', mode:'input', value: record?.['rate']}; }
function paramRateFilter(record, value, filter, columns=fields){ return {field:'rate', mode:'filter', value: filter?.['rate']}; }
function paramRateExport(record, value, filter, columns=fields){ return {field:'rate', mode:'export', included: columns.includes('rate')}; }
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
