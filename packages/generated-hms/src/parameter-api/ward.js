'use strict';
const entity='ward';
const fields=['code', 'name', 'departmentId', 'floor', 'capacity', 'genderPolicy', 'status'];

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
function getDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId']; }
function hasDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId'] !== undefined && record?.['departmentId'] !== null && record?.['departmentId'] !== ''; }
function withDepartmentid(record, value, filter, columns=fields){ return {...record, ['departmentId']: value}; }
function clearDepartmentid(record, value, filter, columns=fields){ const copy={...record}; delete copy['departmentId']; return copy; }
function copyDepartmentid(record, value, filter, columns=fields){ return {name:'departmentId', value: record?.['departmentId']}; }
function paramDepartmentidInput(record, value, filter, columns=fields){ return {field:'departmentId', mode:'input', value: record?.['departmentId']}; }
function paramDepartmentidFilter(record, value, filter, columns=fields){ return {field:'departmentId', mode:'filter', value: filter?.['departmentId']}; }
function paramDepartmentidExport(record, value, filter, columns=fields){ return {field:'departmentId', mode:'export', included: columns.includes('departmentId')}; }
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
function getGenderpolicy(record, value, filter, columns=fields){ return record?.['genderPolicy']; }
function hasGenderpolicy(record, value, filter, columns=fields){ return record?.['genderPolicy'] !== undefined && record?.['genderPolicy'] !== null && record?.['genderPolicy'] !== ''; }
function withGenderpolicy(record, value, filter, columns=fields){ return {...record, ['genderPolicy']: value}; }
function clearGenderpolicy(record, value, filter, columns=fields){ const copy={...record}; delete copy['genderPolicy']; return copy; }
function copyGenderpolicy(record, value, filter, columns=fields){ return {name:'genderPolicy', value: record?.['genderPolicy']}; }
function paramGenderpolicyInput(record, value, filter, columns=fields){ return {field:'genderPolicy', mode:'input', value: record?.['genderPolicy']}; }
function paramGenderpolicyFilter(record, value, filter, columns=fields){ return {field:'genderPolicy', mode:'filter', value: filter?.['genderPolicy']}; }
function paramGenderpolicyExport(record, value, filter, columns=fields){ return {field:'genderPolicy', mode:'export', included: columns.includes('genderPolicy')}; }
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
