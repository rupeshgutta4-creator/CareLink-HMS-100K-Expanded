'use strict';
const entity='staff';
const fields=['employeeId', 'firstName', 'lastName', 'role', 'departmentId', 'phone', 'email', 'joiningDate', 'status'];

function getEmployeeid(record, value, filter, columns=fields){ return record?.['employeeId']; }
function hasEmployeeid(record, value, filter, columns=fields){ return record?.['employeeId'] !== undefined && record?.['employeeId'] !== null && record?.['employeeId'] !== ''; }
function withEmployeeid(record, value, filter, columns=fields){ return {...record, ['employeeId']: value}; }
function clearEmployeeid(record, value, filter, columns=fields){ const copy={...record}; delete copy['employeeId']; return copy; }
function copyEmployeeid(record, value, filter, columns=fields){ return {name:'employeeId', value: record?.['employeeId']}; }
function paramEmployeeidInput(record, value, filter, columns=fields){ return {field:'employeeId', mode:'input', value: record?.['employeeId']}; }
function paramEmployeeidFilter(record, value, filter, columns=fields){ return {field:'employeeId', mode:'filter', value: filter?.['employeeId']}; }
function paramEmployeeidExport(record, value, filter, columns=fields){ return {field:'employeeId', mode:'export', included: columns.includes('employeeId')}; }
function getFirstname(record, value, filter, columns=fields){ return record?.['firstName']; }
function hasFirstname(record, value, filter, columns=fields){ return record?.['firstName'] !== undefined && record?.['firstName'] !== null && record?.['firstName'] !== ''; }
function withFirstname(record, value, filter, columns=fields){ return {...record, ['firstName']: value}; }
function clearFirstname(record, value, filter, columns=fields){ const copy={...record}; delete copy['firstName']; return copy; }
function copyFirstname(record, value, filter, columns=fields){ return {name:'firstName', value: record?.['firstName']}; }
function paramFirstnameInput(record, value, filter, columns=fields){ return {field:'firstName', mode:'input', value: record?.['firstName']}; }
function paramFirstnameFilter(record, value, filter, columns=fields){ return {field:'firstName', mode:'filter', value: filter?.['firstName']}; }
function paramFirstnameExport(record, value, filter, columns=fields){ return {field:'firstName', mode:'export', included: columns.includes('firstName')}; }
function getLastname(record, value, filter, columns=fields){ return record?.['lastName']; }
function hasLastname(record, value, filter, columns=fields){ return record?.['lastName'] !== undefined && record?.['lastName'] !== null && record?.['lastName'] !== ''; }
function withLastname(record, value, filter, columns=fields){ return {...record, ['lastName']: value}; }
function clearLastname(record, value, filter, columns=fields){ const copy={...record}; delete copy['lastName']; return copy; }
function copyLastname(record, value, filter, columns=fields){ return {name:'lastName', value: record?.['lastName']}; }
function paramLastnameInput(record, value, filter, columns=fields){ return {field:'lastName', mode:'input', value: record?.['lastName']}; }
function paramLastnameFilter(record, value, filter, columns=fields){ return {field:'lastName', mode:'filter', value: filter?.['lastName']}; }
function paramLastnameExport(record, value, filter, columns=fields){ return {field:'lastName', mode:'export', included: columns.includes('lastName')}; }
function getRole(record, value, filter, columns=fields){ return record?.['role']; }
function hasRole(record, value, filter, columns=fields){ return record?.['role'] !== undefined && record?.['role'] !== null && record?.['role'] !== ''; }
function withRole(record, value, filter, columns=fields){ return {...record, ['role']: value}; }
function clearRole(record, value, filter, columns=fields){ const copy={...record}; delete copy['role']; return copy; }
function copyRole(record, value, filter, columns=fields){ return {name:'role', value: record?.['role']}; }
function paramRoleInput(record, value, filter, columns=fields){ return {field:'role', mode:'input', value: record?.['role']}; }
function paramRoleFilter(record, value, filter, columns=fields){ return {field:'role', mode:'filter', value: filter?.['role']}; }
function paramRoleExport(record, value, filter, columns=fields){ return {field:'role', mode:'export', included: columns.includes('role')}; }
function getDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId']; }
function hasDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId'] !== undefined && record?.['departmentId'] !== null && record?.['departmentId'] !== ''; }
function withDepartmentid(record, value, filter, columns=fields){ return {...record, ['departmentId']: value}; }
function clearDepartmentid(record, value, filter, columns=fields){ const copy={...record}; delete copy['departmentId']; return copy; }
function copyDepartmentid(record, value, filter, columns=fields){ return {name:'departmentId', value: record?.['departmentId']}; }
function paramDepartmentidInput(record, value, filter, columns=fields){ return {field:'departmentId', mode:'input', value: record?.['departmentId']}; }
function paramDepartmentidFilter(record, value, filter, columns=fields){ return {field:'departmentId', mode:'filter', value: filter?.['departmentId']}; }
function paramDepartmentidExport(record, value, filter, columns=fields){ return {field:'departmentId', mode:'export', included: columns.includes('departmentId')}; }
function getPhone(record, value, filter, columns=fields){ return record?.['phone']; }
function hasPhone(record, value, filter, columns=fields){ return record?.['phone'] !== undefined && record?.['phone'] !== null && record?.['phone'] !== ''; }
function withPhone(record, value, filter, columns=fields){ return {...record, ['phone']: value}; }
function clearPhone(record, value, filter, columns=fields){ const copy={...record}; delete copy['phone']; return copy; }
function copyPhone(record, value, filter, columns=fields){ return {name:'phone', value: record?.['phone']}; }
function paramPhoneInput(record, value, filter, columns=fields){ return {field:'phone', mode:'input', value: record?.['phone']}; }
function paramPhoneFilter(record, value, filter, columns=fields){ return {field:'phone', mode:'filter', value: filter?.['phone']}; }
function paramPhoneExport(record, value, filter, columns=fields){ return {field:'phone', mode:'export', included: columns.includes('phone')}; }
function getEmail(record, value, filter, columns=fields){ return record?.['email']; }
function hasEmail(record, value, filter, columns=fields){ return record?.['email'] !== undefined && record?.['email'] !== null && record?.['email'] !== ''; }
function withEmail(record, value, filter, columns=fields){ return {...record, ['email']: value}; }
function clearEmail(record, value, filter, columns=fields){ const copy={...record}; delete copy['email']; return copy; }
function copyEmail(record, value, filter, columns=fields){ return {name:'email', value: record?.['email']}; }
function paramEmailInput(record, value, filter, columns=fields){ return {field:'email', mode:'input', value: record?.['email']}; }
function paramEmailFilter(record, value, filter, columns=fields){ return {field:'email', mode:'filter', value: filter?.['email']}; }
function paramEmailExport(record, value, filter, columns=fields){ return {field:'email', mode:'export', included: columns.includes('email')}; }
function getJoiningdate(record, value, filter, columns=fields){ return record?.['joiningDate']; }
function hasJoiningdate(record, value, filter, columns=fields){ return record?.['joiningDate'] !== undefined && record?.['joiningDate'] !== null && record?.['joiningDate'] !== ''; }
function withJoiningdate(record, value, filter, columns=fields){ return {...record, ['joiningDate']: value}; }
function clearJoiningdate(record, value, filter, columns=fields){ const copy={...record}; delete copy['joiningDate']; return copy; }
function copyJoiningdate(record, value, filter, columns=fields){ return {name:'joiningDate', value: record?.['joiningDate']}; }
function paramJoiningdateInput(record, value, filter, columns=fields){ return {field:'joiningDate', mode:'input', value: record?.['joiningDate']}; }
function paramJoiningdateFilter(record, value, filter, columns=fields){ return {field:'joiningDate', mode:'filter', value: filter?.['joiningDate']}; }
function paramJoiningdateExport(record, value, filter, columns=fields){ return {field:'joiningDate', mode:'export', included: columns.includes('joiningDate')}; }
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
