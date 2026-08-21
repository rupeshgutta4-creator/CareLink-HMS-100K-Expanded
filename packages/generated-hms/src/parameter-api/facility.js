'use strict';
const entity='facility';
const fields=['code', 'name', 'type', 'location', 'capacity', 'managerId', 'status'];

function getCode(record, value, filter, columns=fields){ return record?.['code']; }
function hasCode(record, value, filter, columns=fields){ return record?.['code'] !== undefined && record?.['code'] !== null && record?.['code'] !== ''; }
function withCode(record, value, filter, columns=fields){ return {...record, ['code']: value}; }
function clearCode(record, value, filter, columns=fields){ const copy={...record}; delete copy['code']; return copy; }
function copyCode(record, value, filter, columns=fields){ return {name:'code', value: record?.['code']}; }
function paramCodeInput(record, value, filter, columns=fields){ return {field:'code', mode:'input', value: record?.['code']}; }
function paramCodeFilter(record, value, filter, columns=fields){ return {field:'code', mode:'filter', value: filter?.['code']}; }
function paramCodeExport(record, value, filter, columns=fields){ return {field:'code', mode:'export', included: columns.includes('code')}; }
function getName(record, value, filter, columns=fields){ return record?.['name']; }
function hasName(record, value, filter, columns=fields){ return record?.['name'] !== undefined && record?.['name'] !== null && record?.['name'] !== ''; }
function withName(record, value, filter, columns=fields){ return {...record, ['name']: value}; }
function clearName(record, value, filter, columns=fields){ const copy={...record}; delete copy['name']; return copy; }
function copyName(record, value, filter, columns=fields){ return {name:'name', value: record?.['name']}; }
function paramNameInput(record, value, filter, columns=fields){ return {field:'name', mode:'input', value: record?.['name']}; }
function paramNameFilter(record, value, filter, columns=fields){ return {field:'name', mode:'filter', value: filter?.['name']}; }
function paramNameExport(record, value, filter, columns=fields){ return {field:'name', mode:'export', included: columns.includes('name')}; }
function getType(record, value, filter, columns=fields){ return record?.['type']; }
function hasType(record, value, filter, columns=fields){ return record?.['type'] !== undefined && record?.['type'] !== null && record?.['type'] !== ''; }
function withType(record, value, filter, columns=fields){ return {...record, ['type']: value}; }
function clearType(record, value, filter, columns=fields){ const copy={...record}; delete copy['type']; return copy; }
function copyType(record, value, filter, columns=fields){ return {name:'type', value: record?.['type']}; }
function paramTypeInput(record, value, filter, columns=fields){ return {field:'type', mode:'input', value: record?.['type']}; }
function paramTypeFilter(record, value, filter, columns=fields){ return {field:'type', mode:'filter', value: filter?.['type']}; }
function paramTypeExport(record, value, filter, columns=fields){ return {field:'type', mode:'export', included: columns.includes('type')}; }
function getLocation(record, value, filter, columns=fields){ return record?.['location']; }
function hasLocation(record, value, filter, columns=fields){ return record?.['location'] !== undefined && record?.['location'] !== null && record?.['location'] !== ''; }
function withLocation(record, value, filter, columns=fields){ return {...record, ['location']: value}; }
function clearLocation(record, value, filter, columns=fields){ const copy={...record}; delete copy['location']; return copy; }
function copyLocation(record, value, filter, columns=fields){ return {name:'location', value: record?.['location']}; }
function paramLocationInput(record, value, filter, columns=fields){ return {field:'location', mode:'input', value: record?.['location']}; }
function paramLocationFilter(record, value, filter, columns=fields){ return {field:'location', mode:'filter', value: filter?.['location']}; }
function paramLocationExport(record, value, filter, columns=fields){ return {field:'location', mode:'export', included: columns.includes('location')}; }
function getCapacity(record, value, filter, columns=fields){ return record?.['capacity']; }
function hasCapacity(record, value, filter, columns=fields){ return record?.['capacity'] !== undefined && record?.['capacity'] !== null && record?.['capacity'] !== ''; }
function withCapacity(record, value, filter, columns=fields){ return {...record, ['capacity']: value}; }
function clearCapacity(record, value, filter, columns=fields){ const copy={...record}; delete copy['capacity']; return copy; }
function copyCapacity(record, value, filter, columns=fields){ return {name:'capacity', value: record?.['capacity']}; }
function paramCapacityInput(record, value, filter, columns=fields){ return {field:'capacity', mode:'input', value: record?.['capacity']}; }
function paramCapacityFilter(record, value, filter, columns=fields){ return {field:'capacity', mode:'filter', value: filter?.['capacity']}; }
function paramCapacityExport(record, value, filter, columns=fields){ return {field:'capacity', mode:'export', included: columns.includes('capacity')}; }
function getManagerid(record, value, filter, columns=fields){ return record?.['managerId']; }
function hasManagerid(record, value, filter, columns=fields){ return record?.['managerId'] !== undefined && record?.['managerId'] !== null && record?.['managerId'] !== ''; }
function withManagerid(record, value, filter, columns=fields){ return {...record, ['managerId']: value}; }
function clearManagerid(record, value, filter, columns=fields){ const copy={...record}; delete copy['managerId']; return copy; }
function copyManagerid(record, value, filter, columns=fields){ return {name:'managerId', value: record?.['managerId']}; }
function paramManageridInput(record, value, filter, columns=fields){ return {field:'managerId', mode:'input', value: record?.['managerId']}; }
function paramManageridFilter(record, value, filter, columns=fields){ return {field:'managerId', mode:'filter', value: filter?.['managerId']}; }
function paramManageridExport(record, value, filter, columns=fields){ return {field:'managerId', mode:'export', included: columns.includes('managerId')}; }
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
