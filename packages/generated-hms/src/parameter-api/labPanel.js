'use strict';
const entity='labPanel';
const fields=['code', 'name', 'description', 'department', 'turnaroundHours', 'price', 'status'];

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
function getDescription(record, value, filter, columns=fields){ return record?.['description']; }
function hasDescription(record, value, filter, columns=fields){ return record?.['description'] !== undefined && record?.['description'] !== null && record?.['description'] !== ''; }
function withDescription(record, value, filter, columns=fields){ return {...record, ['description']: value}; }
function clearDescription(record, value, filter, columns=fields){ const copy={...record}; delete copy['description']; return copy; }
function copyDescription(record, value, filter, columns=fields){ return {name:'description', value: record?.['description']}; }
function paramDescriptionInput(record, value, filter, columns=fields){ return {field:'description', mode:'input', value: record?.['description']}; }
function paramDescriptionFilter(record, value, filter, columns=fields){ return {field:'description', mode:'filter', value: filter?.['description']}; }
function paramDescriptionExport(record, value, filter, columns=fields){ return {field:'description', mode:'export', included: columns.includes('description')}; }
function getDepartment(record, value, filter, columns=fields){ return record?.['department']; }
function hasDepartment(record, value, filter, columns=fields){ return record?.['department'] !== undefined && record?.['department'] !== null && record?.['department'] !== ''; }
function withDepartment(record, value, filter, columns=fields){ return {...record, ['department']: value}; }
function clearDepartment(record, value, filter, columns=fields){ const copy={...record}; delete copy['department']; return copy; }
function copyDepartment(record, value, filter, columns=fields){ return {name:'department', value: record?.['department']}; }
function paramDepartmentInput(record, value, filter, columns=fields){ return {field:'department', mode:'input', value: record?.['department']}; }
function paramDepartmentFilter(record, value, filter, columns=fields){ return {field:'department', mode:'filter', value: filter?.['department']}; }
function paramDepartmentExport(record, value, filter, columns=fields){ return {field:'department', mode:'export', included: columns.includes('department')}; }
function getTurnaroundhours(record, value, filter, columns=fields){ return record?.['turnaroundHours']; }
function hasTurnaroundhours(record, value, filter, columns=fields){ return record?.['turnaroundHours'] !== undefined && record?.['turnaroundHours'] !== null && record?.['turnaroundHours'] !== ''; }
function withTurnaroundhours(record, value, filter, columns=fields){ return {...record, ['turnaroundHours']: value}; }
function clearTurnaroundhours(record, value, filter, columns=fields){ const copy={...record}; delete copy['turnaroundHours']; return copy; }
function copyTurnaroundhours(record, value, filter, columns=fields){ return {name:'turnaroundHours', value: record?.['turnaroundHours']}; }
function paramTurnaroundhoursInput(record, value, filter, columns=fields){ return {field:'turnaroundHours', mode:'input', value: record?.['turnaroundHours']}; }
function paramTurnaroundhoursFilter(record, value, filter, columns=fields){ return {field:'turnaroundHours', mode:'filter', value: filter?.['turnaroundHours']}; }
function paramTurnaroundhoursExport(record, value, filter, columns=fields){ return {field:'turnaroundHours', mode:'export', included: columns.includes('turnaroundHours')}; }
function getPrice(record, value, filter, columns=fields){ return record?.['price']; }
function hasPrice(record, value, filter, columns=fields){ return record?.['price'] !== undefined && record?.['price'] !== null && record?.['price'] !== ''; }
function withPrice(record, value, filter, columns=fields){ return {...record, ['price']: value}; }
function clearPrice(record, value, filter, columns=fields){ const copy={...record}; delete copy['price']; return copy; }
function copyPrice(record, value, filter, columns=fields){ return {name:'price', value: record?.['price']}; }
function paramPriceInput(record, value, filter, columns=fields){ return {field:'price', mode:'input', value: record?.['price']}; }
function paramPriceFilter(record, value, filter, columns=fields){ return {field:'price', mode:'filter', value: filter?.['price']}; }
function paramPriceExport(record, value, filter, columns=fields){ return {field:'price', mode:'export', included: columns.includes('price')}; }
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
