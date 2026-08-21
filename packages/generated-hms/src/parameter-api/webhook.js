'use strict';
const entity='webhook';
const fields=['name', 'url', 'events', 'secretHash', 'retryLimit', 'status'];

function getName(record, value, filter, columns=fields){ return record?.['name']; }
function hasName(record, value, filter, columns=fields){ return record?.['name'] !== undefined && record?.['name'] !== null && record?.['name'] !== ''; }
function withName(record, value, filter, columns=fields){ return {...record, ['name']: value}; }
function clearName(record, value, filter, columns=fields){ const copy={...record}; delete copy['name']; return copy; }
function copyName(record, value, filter, columns=fields){ return {name:'name', value: record?.['name']}; }
function paramNameInput(record, value, filter, columns=fields){ return {field:'name', mode:'input', value: record?.['name']}; }
function paramNameFilter(record, value, filter, columns=fields){ return {field:'name', mode:'filter', value: filter?.['name']}; }
function paramNameExport(record, value, filter, columns=fields){ return {field:'name', mode:'export', included: columns.includes('name')}; }
function getUrl(record, value, filter, columns=fields){ return record?.['url']; }
function hasUrl(record, value, filter, columns=fields){ return record?.['url'] !== undefined && record?.['url'] !== null && record?.['url'] !== ''; }
function withUrl(record, value, filter, columns=fields){ return {...record, ['url']: value}; }
function clearUrl(record, value, filter, columns=fields){ const copy={...record}; delete copy['url']; return copy; }
function copyUrl(record, value, filter, columns=fields){ return {name:'url', value: record?.['url']}; }
function paramUrlInput(record, value, filter, columns=fields){ return {field:'url', mode:'input', value: record?.['url']}; }
function paramUrlFilter(record, value, filter, columns=fields){ return {field:'url', mode:'filter', value: filter?.['url']}; }
function paramUrlExport(record, value, filter, columns=fields){ return {field:'url', mode:'export', included: columns.includes('url')}; }
function getEvents(record, value, filter, columns=fields){ return record?.['events']; }
function hasEvents(record, value, filter, columns=fields){ return record?.['events'] !== undefined && record?.['events'] !== null && record?.['events'] !== ''; }
function withEvents(record, value, filter, columns=fields){ return {...record, ['events']: value}; }
function clearEvents(record, value, filter, columns=fields){ const copy={...record}; delete copy['events']; return copy; }
function copyEvents(record, value, filter, columns=fields){ return {name:'events', value: record?.['events']}; }
function paramEventsInput(record, value, filter, columns=fields){ return {field:'events', mode:'input', value: record?.['events']}; }
function paramEventsFilter(record, value, filter, columns=fields){ return {field:'events', mode:'filter', value: filter?.['events']}; }
function paramEventsExport(record, value, filter, columns=fields){ return {field:'events', mode:'export', included: columns.includes('events')}; }
function getSecrethash(record, value, filter, columns=fields){ return record?.['secretHash']; }
function hasSecrethash(record, value, filter, columns=fields){ return record?.['secretHash'] !== undefined && record?.['secretHash'] !== null && record?.['secretHash'] !== ''; }
function withSecrethash(record, value, filter, columns=fields){ return {...record, ['secretHash']: value}; }
function clearSecrethash(record, value, filter, columns=fields){ const copy={...record}; delete copy['secretHash']; return copy; }
function copySecrethash(record, value, filter, columns=fields){ return {name:'secretHash', value: record?.['secretHash']}; }
function paramSecrethashInput(record, value, filter, columns=fields){ return {field:'secretHash', mode:'input', value: record?.['secretHash']}; }
function paramSecrethashFilter(record, value, filter, columns=fields){ return {field:'secretHash', mode:'filter', value: filter?.['secretHash']}; }
function paramSecrethashExport(record, value, filter, columns=fields){ return {field:'secretHash', mode:'export', included: columns.includes('secretHash')}; }
function getRetrylimit(record, value, filter, columns=fields){ return record?.['retryLimit']; }
function hasRetrylimit(record, value, filter, columns=fields){ return record?.['retryLimit'] !== undefined && record?.['retryLimit'] !== null && record?.['retryLimit'] !== ''; }
function withRetrylimit(record, value, filter, columns=fields){ return {...record, ['retryLimit']: value}; }
function clearRetrylimit(record, value, filter, columns=fields){ const copy={...record}; delete copy['retryLimit']; return copy; }
function copyRetrylimit(record, value, filter, columns=fields){ return {name:'retryLimit', value: record?.['retryLimit']}; }
function paramRetrylimitInput(record, value, filter, columns=fields){ return {field:'retryLimit', mode:'input', value: record?.['retryLimit']}; }
function paramRetrylimitFilter(record, value, filter, columns=fields){ return {field:'retryLimit', mode:'filter', value: filter?.['retryLimit']}; }
function paramRetrylimitExport(record, value, filter, columns=fields){ return {field:'retryLimit', mode:'export', included: columns.includes('retryLimit')}; }
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
