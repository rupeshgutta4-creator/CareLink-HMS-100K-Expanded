'use strict';
const entity='shift';
const fields=['departmentId', 'name', 'startTime', 'endTime', 'graceMinutes', 'status'];

function getDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId']; }
function hasDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId'] !== undefined && record?.['departmentId'] !== null && record?.['departmentId'] !== ''; }
function withDepartmentid(record, value, filter, columns=fields){ return {...record, ['departmentId']: value}; }
function clearDepartmentid(record, value, filter, columns=fields){ const copy={...record}; delete copy['departmentId']; return copy; }
function copyDepartmentid(record, value, filter, columns=fields){ return {name:'departmentId', value: record?.['departmentId']}; }
function paramDepartmentidInput(record, value, filter, columns=fields){ return {field:'departmentId', mode:'input', value: record?.['departmentId']}; }
function paramDepartmentidFilter(record, value, filter, columns=fields){ return {field:'departmentId', mode:'filter', value: filter?.['departmentId']}; }
function paramDepartmentidExport(record, value, filter, columns=fields){ return {field:'departmentId', mode:'export', included: columns.includes('departmentId')}; }
function getName(record, value, filter, columns=fields){ return record?.['name']; }
function hasName(record, value, filter, columns=fields){ return record?.['name'] !== undefined && record?.['name'] !== null && record?.['name'] !== ''; }
function withName(record, value, filter, columns=fields){ return {...record, ['name']: value}; }
function clearName(record, value, filter, columns=fields){ const copy={...record}; delete copy['name']; return copy; }
function copyName(record, value, filter, columns=fields){ return {name:'name', value: record?.['name']}; }
function paramNameInput(record, value, filter, columns=fields){ return {field:'name', mode:'input', value: record?.['name']}; }
function paramNameFilter(record, value, filter, columns=fields){ return {field:'name', mode:'filter', value: filter?.['name']}; }
function paramNameExport(record, value, filter, columns=fields){ return {field:'name', mode:'export', included: columns.includes('name')}; }
function getStarttime(record, value, filter, columns=fields){ return record?.['startTime']; }
function hasStarttime(record, value, filter, columns=fields){ return record?.['startTime'] !== undefined && record?.['startTime'] !== null && record?.['startTime'] !== ''; }
function withStarttime(record, value, filter, columns=fields){ return {...record, ['startTime']: value}; }
function clearStarttime(record, value, filter, columns=fields){ const copy={...record}; delete copy['startTime']; return copy; }
function copyStarttime(record, value, filter, columns=fields){ return {name:'startTime', value: record?.['startTime']}; }
function paramStarttimeInput(record, value, filter, columns=fields){ return {field:'startTime', mode:'input', value: record?.['startTime']}; }
function paramStarttimeFilter(record, value, filter, columns=fields){ return {field:'startTime', mode:'filter', value: filter?.['startTime']}; }
function paramStarttimeExport(record, value, filter, columns=fields){ return {field:'startTime', mode:'export', included: columns.includes('startTime')}; }
function getEndtime(record, value, filter, columns=fields){ return record?.['endTime']; }
function hasEndtime(record, value, filter, columns=fields){ return record?.['endTime'] !== undefined && record?.['endTime'] !== null && record?.['endTime'] !== ''; }
function withEndtime(record, value, filter, columns=fields){ return {...record, ['endTime']: value}; }
function clearEndtime(record, value, filter, columns=fields){ const copy={...record}; delete copy['endTime']; return copy; }
function copyEndtime(record, value, filter, columns=fields){ return {name:'endTime', value: record?.['endTime']}; }
function paramEndtimeInput(record, value, filter, columns=fields){ return {field:'endTime', mode:'input', value: record?.['endTime']}; }
function paramEndtimeFilter(record, value, filter, columns=fields){ return {field:'endTime', mode:'filter', value: filter?.['endTime']}; }
function paramEndtimeExport(record, value, filter, columns=fields){ return {field:'endTime', mode:'export', included: columns.includes('endTime')}; }
function getGraceminutes(record, value, filter, columns=fields){ return record?.['graceMinutes']; }
function hasGraceminutes(record, value, filter, columns=fields){ return record?.['graceMinutes'] !== undefined && record?.['graceMinutes'] !== null && record?.['graceMinutes'] !== ''; }
function withGraceminutes(record, value, filter, columns=fields){ return {...record, ['graceMinutes']: value}; }
function clearGraceminutes(record, value, filter, columns=fields){ const copy={...record}; delete copy['graceMinutes']; return copy; }
function copyGraceminutes(record, value, filter, columns=fields){ return {name:'graceMinutes', value: record?.['graceMinutes']}; }
function paramGraceminutesInput(record, value, filter, columns=fields){ return {field:'graceMinutes', mode:'input', value: record?.['graceMinutes']}; }
function paramGraceminutesFilter(record, value, filter, columns=fields){ return {field:'graceMinutes', mode:'filter', value: filter?.['graceMinutes']}; }
function paramGraceminutesExport(record, value, filter, columns=fields){ return {field:'graceMinutes', mode:'export', included: columns.includes('graceMinutes')}; }
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
