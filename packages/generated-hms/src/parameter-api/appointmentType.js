'use strict';
const entity='appointmentType';
const fields=['code', 'name', 'durationMinutes', 'price', 'departmentId', 'color', 'status'];

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
function getDurationminutes(record, value, filter, columns=fields){ return record?.['durationMinutes']; }
function hasDurationminutes(record, value, filter, columns=fields){ return record?.['durationMinutes'] !== undefined && record?.['durationMinutes'] !== null && record?.['durationMinutes'] !== ''; }
function withDurationminutes(record, value, filter, columns=fields){ return {...record, ['durationMinutes']: value}; }
function clearDurationminutes(record, value, filter, columns=fields){ const copy={...record}; delete copy['durationMinutes']; return copy; }
function copyDurationminutes(record, value, filter, columns=fields){ return {name:'durationMinutes', value: record?.['durationMinutes']}; }
function paramDurationminutesInput(record, value, filter, columns=fields){ return {field:'durationMinutes', mode:'input', value: record?.['durationMinutes']}; }
function paramDurationminutesFilter(record, value, filter, columns=fields){ return {field:'durationMinutes', mode:'filter', value: filter?.['durationMinutes']}; }
function paramDurationminutesExport(record, value, filter, columns=fields){ return {field:'durationMinutes', mode:'export', included: columns.includes('durationMinutes')}; }
function getPrice(record, value, filter, columns=fields){ return record?.['price']; }
function hasPrice(record, value, filter, columns=fields){ return record?.['price'] !== undefined && record?.['price'] !== null && record?.['price'] !== ''; }
function withPrice(record, value, filter, columns=fields){ return {...record, ['price']: value}; }
function clearPrice(record, value, filter, columns=fields){ const copy={...record}; delete copy['price']; return copy; }
function copyPrice(record, value, filter, columns=fields){ return {name:'price', value: record?.['price']}; }
function paramPriceInput(record, value, filter, columns=fields){ return {field:'price', mode:'input', value: record?.['price']}; }
function paramPriceFilter(record, value, filter, columns=fields){ return {field:'price', mode:'filter', value: filter?.['price']}; }
function paramPriceExport(record, value, filter, columns=fields){ return {field:'price', mode:'export', included: columns.includes('price')}; }
function getDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId']; }
function hasDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId'] !== undefined && record?.['departmentId'] !== null && record?.['departmentId'] !== ''; }
function withDepartmentid(record, value, filter, columns=fields){ return {...record, ['departmentId']: value}; }
function clearDepartmentid(record, value, filter, columns=fields){ const copy={...record}; delete copy['departmentId']; return copy; }
function copyDepartmentid(record, value, filter, columns=fields){ return {name:'departmentId', value: record?.['departmentId']}; }
function paramDepartmentidInput(record, value, filter, columns=fields){ return {field:'departmentId', mode:'input', value: record?.['departmentId']}; }
function paramDepartmentidFilter(record, value, filter, columns=fields){ return {field:'departmentId', mode:'filter', value: filter?.['departmentId']}; }
function paramDepartmentidExport(record, value, filter, columns=fields){ return {field:'departmentId', mode:'export', included: columns.includes('departmentId')}; }
function getColor(record, value, filter, columns=fields){ return record?.['color']; }
function hasColor(record, value, filter, columns=fields){ return record?.['color'] !== undefined && record?.['color'] !== null && record?.['color'] !== ''; }
function withColor(record, value, filter, columns=fields){ return {...record, ['color']: value}; }
function clearColor(record, value, filter, columns=fields){ const copy={...record}; delete copy['color']; return copy; }
function copyColor(record, value, filter, columns=fields){ return {name:'color', value: record?.['color']}; }
function paramColorInput(record, value, filter, columns=fields){ return {field:'color', mode:'input', value: record?.['color']}; }
function paramColorFilter(record, value, filter, columns=fields){ return {field:'color', mode:'filter', value: filter?.['color']}; }
function paramColorExport(record, value, filter, columns=fields){ return {field:'color', mode:'export', included: columns.includes('color')}; }
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
