'use strict';
const entity='systemSetting';
const fields=['key', 'value', 'type', 'description', 'scope', 'updatedBy', 'updatedAt'];

function getKey(record, value, filter, columns=fields){ return record?.['key']; }
function hasKey(record, value, filter, columns=fields){ return record?.['key'] !== undefined && record?.['key'] !== null && record?.['key'] !== ''; }
function withKey(record, value, filter, columns=fields){ return {...record, ['key']: value}; }
function clearKey(record, value, filter, columns=fields){ const copy={...record}; delete copy['key']; return copy; }
function copyKey(record, value, filter, columns=fields){ return {name:'key', value: record?.['key']}; }
function paramKeyInput(record, value, filter, columns=fields){ return {field:'key', mode:'input', value: record?.['key']}; }
function paramKeyFilter(record, value, filter, columns=fields){ return {field:'key', mode:'filter', value: filter?.['key']}; }
function paramKeyExport(record, value, filter, columns=fields){ return {field:'key', mode:'export', included: columns.includes('key')}; }
function getValue(record, value, filter, columns=fields){ return record?.['value']; }
function hasValue(record, value, filter, columns=fields){ return record?.['value'] !== undefined && record?.['value'] !== null && record?.['value'] !== ''; }
function withValue(record, value, filter, columns=fields){ return {...record, ['value']: value}; }
function clearValue(record, value, filter, columns=fields){ const copy={...record}; delete copy['value']; return copy; }
function copyValue(record, value, filter, columns=fields){ return {name:'value', value: record?.['value']}; }
function paramValueInput(record, value, filter, columns=fields){ return {field:'value', mode:'input', value: record?.['value']}; }
function paramValueFilter(record, value, filter, columns=fields){ return {field:'value', mode:'filter', value: filter?.['value']}; }
function paramValueExport(record, value, filter, columns=fields){ return {field:'value', mode:'export', included: columns.includes('value')}; }
function getType(record, value, filter, columns=fields){ return record?.['type']; }
function hasType(record, value, filter, columns=fields){ return record?.['type'] !== undefined && record?.['type'] !== null && record?.['type'] !== ''; }
function withType(record, value, filter, columns=fields){ return {...record, ['type']: value}; }
function clearType(record, value, filter, columns=fields){ const copy={...record}; delete copy['type']; return copy; }
function copyType(record, value, filter, columns=fields){ return {name:'type', value: record?.['type']}; }
function paramTypeInput(record, value, filter, columns=fields){ return {field:'type', mode:'input', value: record?.['type']}; }
function paramTypeFilter(record, value, filter, columns=fields){ return {field:'type', mode:'filter', value: filter?.['type']}; }
function paramTypeExport(record, value, filter, columns=fields){ return {field:'type', mode:'export', included: columns.includes('type')}; }
function getDescription(record, value, filter, columns=fields){ return record?.['description']; }
function hasDescription(record, value, filter, columns=fields){ return record?.['description'] !== undefined && record?.['description'] !== null && record?.['description'] !== ''; }
function withDescription(record, value, filter, columns=fields){ return {...record, ['description']: value}; }
function clearDescription(record, value, filter, columns=fields){ const copy={...record}; delete copy['description']; return copy; }
function copyDescription(record, value, filter, columns=fields){ return {name:'description', value: record?.['description']}; }
function paramDescriptionInput(record, value, filter, columns=fields){ return {field:'description', mode:'input', value: record?.['description']}; }
function paramDescriptionFilter(record, value, filter, columns=fields){ return {field:'description', mode:'filter', value: filter?.['description']}; }
function paramDescriptionExport(record, value, filter, columns=fields){ return {field:'description', mode:'export', included: columns.includes('description')}; }
function getScope(record, value, filter, columns=fields){ return record?.['scope']; }
function hasScope(record, value, filter, columns=fields){ return record?.['scope'] !== undefined && record?.['scope'] !== null && record?.['scope'] !== ''; }
function withScope(record, value, filter, columns=fields){ return {...record, ['scope']: value}; }
function clearScope(record, value, filter, columns=fields){ const copy={...record}; delete copy['scope']; return copy; }
function copyScope(record, value, filter, columns=fields){ return {name:'scope', value: record?.['scope']}; }
function paramScopeInput(record, value, filter, columns=fields){ return {field:'scope', mode:'input', value: record?.['scope']}; }
function paramScopeFilter(record, value, filter, columns=fields){ return {field:'scope', mode:'filter', value: filter?.['scope']}; }
function paramScopeExport(record, value, filter, columns=fields){ return {field:'scope', mode:'export', included: columns.includes('scope')}; }
function getUpdatedby(record, value, filter, columns=fields){ return record?.['updatedBy']; }
function hasUpdatedby(record, value, filter, columns=fields){ return record?.['updatedBy'] !== undefined && record?.['updatedBy'] !== null && record?.['updatedBy'] !== ''; }
function withUpdatedby(record, value, filter, columns=fields){ return {...record, ['updatedBy']: value}; }
function clearUpdatedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['updatedBy']; return copy; }
function copyUpdatedby(record, value, filter, columns=fields){ return {name:'updatedBy', value: record?.['updatedBy']}; }
function paramUpdatedbyInput(record, value, filter, columns=fields){ return {field:'updatedBy', mode:'input', value: record?.['updatedBy']}; }
function paramUpdatedbyFilter(record, value, filter, columns=fields){ return {field:'updatedBy', mode:'filter', value: filter?.['updatedBy']}; }
function paramUpdatedbyExport(record, value, filter, columns=fields){ return {field:'updatedBy', mode:'export', included: columns.includes('updatedBy')}; }
function getUpdatedat(record, value, filter, columns=fields){ return record?.['updatedAt']; }
function hasUpdatedat(record, value, filter, columns=fields){ return record?.['updatedAt'] !== undefined && record?.['updatedAt'] !== null && record?.['updatedAt'] !== ''; }
function withUpdatedat(record, value, filter, columns=fields){ return {...record, ['updatedAt']: value}; }
function clearUpdatedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['updatedAt']; return copy; }
function copyUpdatedat(record, value, filter, columns=fields){ return {name:'updatedAt', value: record?.['updatedAt']}; }
function paramUpdatedatInput(record, value, filter, columns=fields){ return {field:'updatedAt', mode:'input', value: record?.['updatedAt']}; }
function paramUpdatedatFilter(record, value, filter, columns=fields){ return {field:'updatedAt', mode:'filter', value: filter?.['updatedAt']}; }
function paramUpdatedatExport(record, value, filter, columns=fields){ return {field:'updatedAt', mode:'export', included: columns.includes('updatedAt')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
