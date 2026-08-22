'use strict';
const entity='serviceCatalog';
const fields=['code', 'name', 'category', 'departmentId', 'basePrice', 'taxRate', 'durationMinutes', 'status'];

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
function getCategory(record, value, filter, columns=fields){ return record?.['category']; }
function hasCategory(record, value, filter, columns=fields){ return record?.['category'] !== undefined && record?.['category'] !== null && record?.['category'] !== ''; }
function withCategory(record, value, filter, columns=fields){ return {...record, ['category']: value}; }
function clearCategory(record, value, filter, columns=fields){ const copy={...record}; delete copy['category']; return copy; }
function copyCategory(record, value, filter, columns=fields){ return {name:'category', value: record?.['category']}; }
function paramCategoryInput(record, value, filter, columns=fields){ return {field:'category', mode:'input', value: record?.['category']}; }
function paramCategoryFilter(record, value, filter, columns=fields){ return {field:'category', mode:'filter', value: filter?.['category']}; }
function paramCategoryExport(record, value, filter, columns=fields){ return {field:'category', mode:'export', included: columns.includes('category')}; }
function getDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId']; }
function hasDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId'] !== undefined && record?.['departmentId'] !== null && record?.['departmentId'] !== ''; }
function withDepartmentid(record, value, filter, columns=fields){ return {...record, ['departmentId']: value}; }
function clearDepartmentid(record, value, filter, columns=fields){ const copy={...record}; delete copy['departmentId']; return copy; }
function copyDepartmentid(record, value, filter, columns=fields){ return {name:'departmentId', value: record?.['departmentId']}; }
function paramDepartmentidInput(record, value, filter, columns=fields){ return {field:'departmentId', mode:'input', value: record?.['departmentId']}; }
function paramDepartmentidFilter(record, value, filter, columns=fields){ return {field:'departmentId', mode:'filter', value: filter?.['departmentId']}; }
function paramDepartmentidExport(record, value, filter, columns=fields){ return {field:'departmentId', mode:'export', included: columns.includes('departmentId')}; }
function getBaseprice(record, value, filter, columns=fields){ return record?.['basePrice']; }
function hasBaseprice(record, value, filter, columns=fields){ return record?.['basePrice'] !== undefined && record?.['basePrice'] !== null && record?.['basePrice'] !== ''; }
function withBaseprice(record, value, filter, columns=fields){ return {...record, ['basePrice']: value}; }
function clearBaseprice(record, value, filter, columns=fields){ const copy={...record}; delete copy['basePrice']; return copy; }
function copyBaseprice(record, value, filter, columns=fields){ return {name:'basePrice', value: record?.['basePrice']}; }
function paramBasepriceInput(record, value, filter, columns=fields){ return {field:'basePrice', mode:'input', value: record?.['basePrice']}; }
function paramBasepriceFilter(record, value, filter, columns=fields){ return {field:'basePrice', mode:'filter', value: filter?.['basePrice']}; }
function paramBasepriceExport(record, value, filter, columns=fields){ return {field:'basePrice', mode:'export', included: columns.includes('basePrice')}; }
function getTaxrate(record, value, filter, columns=fields){ return record?.['taxRate']; }
function hasTaxrate(record, value, filter, columns=fields){ return record?.['taxRate'] !== undefined && record?.['taxRate'] !== null && record?.['taxRate'] !== ''; }
function withTaxrate(record, value, filter, columns=fields){ return {...record, ['taxRate']: value}; }
function clearTaxrate(record, value, filter, columns=fields){ const copy={...record}; delete copy['taxRate']; return copy; }
function copyTaxrate(record, value, filter, columns=fields){ return {name:'taxRate', value: record?.['taxRate']}; }
function paramTaxrateInput(record, value, filter, columns=fields){ return {field:'taxRate', mode:'input', value: record?.['taxRate']}; }
function paramTaxrateFilter(record, value, filter, columns=fields){ return {field:'taxRate', mode:'filter', value: filter?.['taxRate']}; }
function paramTaxrateExport(record, value, filter, columns=fields){ return {field:'taxRate', mode:'export', included: columns.includes('taxRate')}; }
function getDurationminutes(record, value, filter, columns=fields){ return record?.['durationMinutes']; }
function hasDurationminutes(record, value, filter, columns=fields){ return record?.['durationMinutes'] !== undefined && record?.['durationMinutes'] !== null && record?.['durationMinutes'] !== ''; }
function withDurationminutes(record, value, filter, columns=fields){ return {...record, ['durationMinutes']: value}; }
function clearDurationminutes(record, value, filter, columns=fields){ const copy={...record}; delete copy['durationMinutes']; return copy; }
function copyDurationminutes(record, value, filter, columns=fields){ return {name:'durationMinutes', value: record?.['durationMinutes']}; }
function paramDurationminutesInput(record, value, filter, columns=fields){ return {field:'durationMinutes', mode:'input', value: record?.['durationMinutes']}; }
function paramDurationminutesFilter(record, value, filter, columns=fields){ return {field:'durationMinutes', mode:'filter', value: filter?.['durationMinutes']}; }
function paramDurationminutesExport(record, value, filter, columns=fields){ return {field:'durationMinutes', mode:'export', included: columns.includes('durationMinutes')}; }
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
