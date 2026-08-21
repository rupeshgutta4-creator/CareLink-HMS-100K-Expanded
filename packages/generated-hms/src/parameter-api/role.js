'use strict';
const entity='role';
const fields=['name', 'description', 'permissions', 'scope', 'status'];

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
function getPermissions(record, value, filter, columns=fields){ return record?.['permissions']; }
function hasPermissions(record, value, filter, columns=fields){ return record?.['permissions'] !== undefined && record?.['permissions'] !== null && record?.['permissions'] !== ''; }
function withPermissions(record, value, filter, columns=fields){ return {...record, ['permissions']: value}; }
function clearPermissions(record, value, filter, columns=fields){ const copy={...record}; delete copy['permissions']; return copy; }
function copyPermissions(record, value, filter, columns=fields){ return {name:'permissions', value: record?.['permissions']}; }
function paramPermissionsInput(record, value, filter, columns=fields){ return {field:'permissions', mode:'input', value: record?.['permissions']}; }
function paramPermissionsFilter(record, value, filter, columns=fields){ return {field:'permissions', mode:'filter', value: filter?.['permissions']}; }
function paramPermissionsExport(record, value, filter, columns=fields){ return {field:'permissions', mode:'export', included: columns.includes('permissions')}; }
function getScope(record, value, filter, columns=fields){ return record?.['scope']; }
function hasScope(record, value, filter, columns=fields){ return record?.['scope'] !== undefined && record?.['scope'] !== null && record?.['scope'] !== ''; }
function withScope(record, value, filter, columns=fields){ return {...record, ['scope']: value}; }
function clearScope(record, value, filter, columns=fields){ const copy={...record}; delete copy['scope']; return copy; }
function copyScope(record, value, filter, columns=fields){ return {name:'scope', value: record?.['scope']}; }
function paramScopeInput(record, value, filter, columns=fields){ return {field:'scope', mode:'input', value: record?.['scope']}; }
function paramScopeFilter(record, value, filter, columns=fields){ return {field:'scope', mode:'filter', value: filter?.['scope']}; }
function paramScopeExport(record, value, filter, columns=fields){ return {field:'scope', mode:'export', included: columns.includes('scope')}; }
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
