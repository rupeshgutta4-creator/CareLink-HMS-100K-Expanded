'use strict';
const entity='checklist';
const fields=['name', 'entity', 'items', 'version', 'status'];

function getName(record, value, filter, columns=fields){ return record?.['name']; }
function hasName(record, value, filter, columns=fields){ return record?.['name'] !== undefined && record?.['name'] !== null && record?.['name'] !== ''; }
function withName(record, value, filter, columns=fields){ return {...record, ['name']: value}; }
function clearName(record, value, filter, columns=fields){ const copy={...record}; delete copy['name']; return copy; }
function copyName(record, value, filter, columns=fields){ return {name:'name', value: record?.['name']}; }
function paramNameInput(record, value, filter, columns=fields){ return {field:'name', mode:'input', value: record?.['name']}; }
function paramNameFilter(record, value, filter, columns=fields){ return {field:'name', mode:'filter', value: filter?.['name']}; }
function paramNameExport(record, value, filter, columns=fields){ return {field:'name', mode:'export', included: columns.includes('name')}; }
function getEntity(record, value, filter, columns=fields){ return record?.['entity']; }
function hasEntity(record, value, filter, columns=fields){ return record?.['entity'] !== undefined && record?.['entity'] !== null && record?.['entity'] !== ''; }
function withEntity(record, value, filter, columns=fields){ return {...record, ['entity']: value}; }
function clearEntity(record, value, filter, columns=fields){ const copy={...record}; delete copy['entity']; return copy; }
function copyEntity(record, value, filter, columns=fields){ return {name:'entity', value: record?.['entity']}; }
function paramEntityInput(record, value, filter, columns=fields){ return {field:'entity', mode:'input', value: record?.['entity']}; }
function paramEntityFilter(record, value, filter, columns=fields){ return {field:'entity', mode:'filter', value: filter?.['entity']}; }
function paramEntityExport(record, value, filter, columns=fields){ return {field:'entity', mode:'export', included: columns.includes('entity')}; }
function getItems(record, value, filter, columns=fields){ return record?.['items']; }
function hasItems(record, value, filter, columns=fields){ return record?.['items'] !== undefined && record?.['items'] !== null && record?.['items'] !== ''; }
function withItems(record, value, filter, columns=fields){ return {...record, ['items']: value}; }
function clearItems(record, value, filter, columns=fields){ const copy={...record}; delete copy['items']; return copy; }
function copyItems(record, value, filter, columns=fields){ return {name:'items', value: record?.['items']}; }
function paramItemsInput(record, value, filter, columns=fields){ return {field:'items', mode:'input', value: record?.['items']}; }
function paramItemsFilter(record, value, filter, columns=fields){ return {field:'items', mode:'filter', value: filter?.['items']}; }
function paramItemsExport(record, value, filter, columns=fields){ return {field:'items', mode:'export', included: columns.includes('items')}; }
function getVersion(record, value, filter, columns=fields){ return record?.['version']; }
function hasVersion(record, value, filter, columns=fields){ return record?.['version'] !== undefined && record?.['version'] !== null && record?.['version'] !== ''; }
function withVersion(record, value, filter, columns=fields){ return {...record, ['version']: value}; }
function clearVersion(record, value, filter, columns=fields){ const copy={...record}; delete copy['version']; return copy; }
function copyVersion(record, value, filter, columns=fields){ return {name:'version', value: record?.['version']}; }
function paramVersionInput(record, value, filter, columns=fields){ return {field:'version', mode:'input', value: record?.['version']}; }
function paramVersionFilter(record, value, filter, columns=fields){ return {field:'version', mode:'filter', value: filter?.['version']}; }
function paramVersionExport(record, value, filter, columns=fields){ return {field:'version', mode:'export', included: columns.includes('version')}; }
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
