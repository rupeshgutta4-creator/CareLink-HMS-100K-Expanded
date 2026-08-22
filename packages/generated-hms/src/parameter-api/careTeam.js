'use strict';
const entity='careTeam';
const fields=['patientId', 'staffId', 'role', 'startDate', 'endDate', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getStaffid(record, value, filter, columns=fields){ return record?.['staffId']; }
function hasStaffid(record, value, filter, columns=fields){ return record?.['staffId'] !== undefined && record?.['staffId'] !== null && record?.['staffId'] !== ''; }
function withStaffid(record, value, filter, columns=fields){ return {...record, ['staffId']: value}; }
function clearStaffid(record, value, filter, columns=fields){ const copy={...record}; delete copy['staffId']; return copy; }
function copyStaffid(record, value, filter, columns=fields){ return {name:'staffId', value: record?.['staffId']}; }
function paramStaffidInput(record, value, filter, columns=fields){ return {field:'staffId', mode:'input', value: record?.['staffId']}; }
function paramStaffidFilter(record, value, filter, columns=fields){ return {field:'staffId', mode:'filter', value: filter?.['staffId']}; }
function paramStaffidExport(record, value, filter, columns=fields){ return {field:'staffId', mode:'export', included: columns.includes('staffId')}; }
function getRole(record, value, filter, columns=fields){ return record?.['role']; }
function hasRole(record, value, filter, columns=fields){ return record?.['role'] !== undefined && record?.['role'] !== null && record?.['role'] !== ''; }
function withRole(record, value, filter, columns=fields){ return {...record, ['role']: value}; }
function clearRole(record, value, filter, columns=fields){ const copy={...record}; delete copy['role']; return copy; }
function copyRole(record, value, filter, columns=fields){ return {name:'role', value: record?.['role']}; }
function paramRoleInput(record, value, filter, columns=fields){ return {field:'role', mode:'input', value: record?.['role']}; }
function paramRoleFilter(record, value, filter, columns=fields){ return {field:'role', mode:'filter', value: filter?.['role']}; }
function paramRoleExport(record, value, filter, columns=fields){ return {field:'role', mode:'export', included: columns.includes('role')}; }
function getStartdate(record, value, filter, columns=fields){ return record?.['startDate']; }
function hasStartdate(record, value, filter, columns=fields){ return record?.['startDate'] !== undefined && record?.['startDate'] !== null && record?.['startDate'] !== ''; }
function withStartdate(record, value, filter, columns=fields){ return {...record, ['startDate']: value}; }
function clearStartdate(record, value, filter, columns=fields){ const copy={...record}; delete copy['startDate']; return copy; }
function copyStartdate(record, value, filter, columns=fields){ return {name:'startDate', value: record?.['startDate']}; }
function paramStartdateInput(record, value, filter, columns=fields){ return {field:'startDate', mode:'input', value: record?.['startDate']}; }
function paramStartdateFilter(record, value, filter, columns=fields){ return {field:'startDate', mode:'filter', value: filter?.['startDate']}; }
function paramStartdateExport(record, value, filter, columns=fields){ return {field:'startDate', mode:'export', included: columns.includes('startDate')}; }
function getEnddate(record, value, filter, columns=fields){ return record?.['endDate']; }
function hasEnddate(record, value, filter, columns=fields){ return record?.['endDate'] !== undefined && record?.['endDate'] !== null && record?.['endDate'] !== ''; }
function withEnddate(record, value, filter, columns=fields){ return {...record, ['endDate']: value}; }
function clearEnddate(record, value, filter, columns=fields){ const copy={...record}; delete copy['endDate']; return copy; }
function copyEnddate(record, value, filter, columns=fields){ return {name:'endDate', value: record?.['endDate']}; }
function paramEnddateInput(record, value, filter, columns=fields){ return {field:'endDate', mode:'input', value: record?.['endDate']}; }
function paramEnddateFilter(record, value, filter, columns=fields){ return {field:'endDate', mode:'filter', value: filter?.['endDate']}; }
function paramEnddateExport(record, value, filter, columns=fields){ return {field:'endDate', mode:'export', included: columns.includes('endDate')}; }
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
