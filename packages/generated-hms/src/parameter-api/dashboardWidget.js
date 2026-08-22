'use strict';
const entity='dashboardWidget';
const fields=['code', 'name', 'type', 'query', 'refreshSeconds', 'roles', 'status'];

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
function getQuery(record, value, filter, columns=fields){ return record?.['query']; }
function hasQuery(record, value, filter, columns=fields){ return record?.['query'] !== undefined && record?.['query'] !== null && record?.['query'] !== ''; }
function withQuery(record, value, filter, columns=fields){ return {...record, ['query']: value}; }
function clearQuery(record, value, filter, columns=fields){ const copy={...record}; delete copy['query']; return copy; }
function copyQuery(record, value, filter, columns=fields){ return {name:'query', value: record?.['query']}; }
function paramQueryInput(record, value, filter, columns=fields){ return {field:'query', mode:'input', value: record?.['query']}; }
function paramQueryFilter(record, value, filter, columns=fields){ return {field:'query', mode:'filter', value: filter?.['query']}; }
function paramQueryExport(record, value, filter, columns=fields){ return {field:'query', mode:'export', included: columns.includes('query')}; }
function getRefreshseconds(record, value, filter, columns=fields){ return record?.['refreshSeconds']; }
function hasRefreshseconds(record, value, filter, columns=fields){ return record?.['refreshSeconds'] !== undefined && record?.['refreshSeconds'] !== null && record?.['refreshSeconds'] !== ''; }
function withRefreshseconds(record, value, filter, columns=fields){ return {...record, ['refreshSeconds']: value}; }
function clearRefreshseconds(record, value, filter, columns=fields){ const copy={...record}; delete copy['refreshSeconds']; return copy; }
function copyRefreshseconds(record, value, filter, columns=fields){ return {name:'refreshSeconds', value: record?.['refreshSeconds']}; }
function paramRefreshsecondsInput(record, value, filter, columns=fields){ return {field:'refreshSeconds', mode:'input', value: record?.['refreshSeconds']}; }
function paramRefreshsecondsFilter(record, value, filter, columns=fields){ return {field:'refreshSeconds', mode:'filter', value: filter?.['refreshSeconds']}; }
function paramRefreshsecondsExport(record, value, filter, columns=fields){ return {field:'refreshSeconds', mode:'export', included: columns.includes('refreshSeconds')}; }
function getRoles(record, value, filter, columns=fields){ return record?.['roles']; }
function hasRoles(record, value, filter, columns=fields){ return record?.['roles'] !== undefined && record?.['roles'] !== null && record?.['roles'] !== ''; }
function withRoles(record, value, filter, columns=fields){ return {...record, ['roles']: value}; }
function clearRoles(record, value, filter, columns=fields){ const copy={...record}; delete copy['roles']; return copy; }
function copyRoles(record, value, filter, columns=fields){ return {name:'roles', value: record?.['roles']}; }
function paramRolesInput(record, value, filter, columns=fields){ return {field:'roles', mode:'input', value: record?.['roles']}; }
function paramRolesFilter(record, value, filter, columns=fields){ return {field:'roles', mode:'filter', value: filter?.['roles']}; }
function paramRolesExport(record, value, filter, columns=fields){ return {field:'roles', mode:'export', included: columns.includes('roles')}; }
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
