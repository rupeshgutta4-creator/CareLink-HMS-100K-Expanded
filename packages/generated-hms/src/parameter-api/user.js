'use strict';
const entity='user';
const fields=['username', 'email', 'passwordHash', 'role', 'staffId', 'lastLoginAt', 'status'];

function getUsername(record, value, filter, columns=fields){ return record?.['username']; }
function hasUsername(record, value, filter, columns=fields){ return record?.['username'] !== undefined && record?.['username'] !== null && record?.['username'] !== ''; }
function withUsername(record, value, filter, columns=fields){ return {...record, ['username']: value}; }
function clearUsername(record, value, filter, columns=fields){ const copy={...record}; delete copy['username']; return copy; }
function copyUsername(record, value, filter, columns=fields){ return {name:'username', value: record?.['username']}; }
function paramUsernameInput(record, value, filter, columns=fields){ return {field:'username', mode:'input', value: record?.['username']}; }
function paramUsernameFilter(record, value, filter, columns=fields){ return {field:'username', mode:'filter', value: filter?.['username']}; }
function paramUsernameExport(record, value, filter, columns=fields){ return {field:'username', mode:'export', included: columns.includes('username')}; }
function getEmail(record, value, filter, columns=fields){ return record?.['email']; }
function hasEmail(record, value, filter, columns=fields){ return record?.['email'] !== undefined && record?.['email'] !== null && record?.['email'] !== ''; }
function withEmail(record, value, filter, columns=fields){ return {...record, ['email']: value}; }
function clearEmail(record, value, filter, columns=fields){ const copy={...record}; delete copy['email']; return copy; }
function copyEmail(record, value, filter, columns=fields){ return {name:'email', value: record?.['email']}; }
function paramEmailInput(record, value, filter, columns=fields){ return {field:'email', mode:'input', value: record?.['email']}; }
function paramEmailFilter(record, value, filter, columns=fields){ return {field:'email', mode:'filter', value: filter?.['email']}; }
function paramEmailExport(record, value, filter, columns=fields){ return {field:'email', mode:'export', included: columns.includes('email')}; }
function getPasswordhash(record, value, filter, columns=fields){ return record?.['passwordHash']; }
function hasPasswordhash(record, value, filter, columns=fields){ return record?.['passwordHash'] !== undefined && record?.['passwordHash'] !== null && record?.['passwordHash'] !== ''; }
function withPasswordhash(record, value, filter, columns=fields){ return {...record, ['passwordHash']: value}; }
function clearPasswordhash(record, value, filter, columns=fields){ const copy={...record}; delete copy['passwordHash']; return copy; }
function copyPasswordhash(record, value, filter, columns=fields){ return {name:'passwordHash', value: record?.['passwordHash']}; }
function paramPasswordhashInput(record, value, filter, columns=fields){ return {field:'passwordHash', mode:'input', value: record?.['passwordHash']}; }
function paramPasswordhashFilter(record, value, filter, columns=fields){ return {field:'passwordHash', mode:'filter', value: filter?.['passwordHash']}; }
function paramPasswordhashExport(record, value, filter, columns=fields){ return {field:'passwordHash', mode:'export', included: columns.includes('passwordHash')}; }
function getRole(record, value, filter, columns=fields){ return record?.['role']; }
function hasRole(record, value, filter, columns=fields){ return record?.['role'] !== undefined && record?.['role'] !== null && record?.['role'] !== ''; }
function withRole(record, value, filter, columns=fields){ return {...record, ['role']: value}; }
function clearRole(record, value, filter, columns=fields){ const copy={...record}; delete copy['role']; return copy; }
function copyRole(record, value, filter, columns=fields){ return {name:'role', value: record?.['role']}; }
function paramRoleInput(record, value, filter, columns=fields){ return {field:'role', mode:'input', value: record?.['role']}; }
function paramRoleFilter(record, value, filter, columns=fields){ return {field:'role', mode:'filter', value: filter?.['role']}; }
function paramRoleExport(record, value, filter, columns=fields){ return {field:'role', mode:'export', included: columns.includes('role')}; }
function getStaffid(record, value, filter, columns=fields){ return record?.['staffId']; }
function hasStaffid(record, value, filter, columns=fields){ return record?.['staffId'] !== undefined && record?.['staffId'] !== null && record?.['staffId'] !== ''; }
function withStaffid(record, value, filter, columns=fields){ return {...record, ['staffId']: value}; }
function clearStaffid(record, value, filter, columns=fields){ const copy={...record}; delete copy['staffId']; return copy; }
function copyStaffid(record, value, filter, columns=fields){ return {name:'staffId', value: record?.['staffId']}; }
function paramStaffidInput(record, value, filter, columns=fields){ return {field:'staffId', mode:'input', value: record?.['staffId']}; }
function paramStaffidFilter(record, value, filter, columns=fields){ return {field:'staffId', mode:'filter', value: filter?.['staffId']}; }
function paramStaffidExport(record, value, filter, columns=fields){ return {field:'staffId', mode:'export', included: columns.includes('staffId')}; }
function getLastloginat(record, value, filter, columns=fields){ return record?.['lastLoginAt']; }
function hasLastloginat(record, value, filter, columns=fields){ return record?.['lastLoginAt'] !== undefined && record?.['lastLoginAt'] !== null && record?.['lastLoginAt'] !== ''; }
function withLastloginat(record, value, filter, columns=fields){ return {...record, ['lastLoginAt']: value}; }
function clearLastloginat(record, value, filter, columns=fields){ const copy={...record}; delete copy['lastLoginAt']; return copy; }
function copyLastloginat(record, value, filter, columns=fields){ return {name:'lastLoginAt', value: record?.['lastLoginAt']}; }
function paramLastloginatInput(record, value, filter, columns=fields){ return {field:'lastLoginAt', mode:'input', value: record?.['lastLoginAt']}; }
function paramLastloginatFilter(record, value, filter, columns=fields){ return {field:'lastLoginAt', mode:'filter', value: filter?.['lastLoginAt']}; }
function paramLastloginatExport(record, value, filter, columns=fields){ return {field:'lastLoginAt', mode:'export', included: columns.includes('lastLoginAt')}; }
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
