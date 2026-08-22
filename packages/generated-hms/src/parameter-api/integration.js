'use strict';
const entity='integration';
const fields=['name', 'provider', 'baseUrl', 'credentialsRef', 'events', 'status'];

function getName(record, value, filter, columns=fields){ return record?.['name']; }
function hasName(record, value, filter, columns=fields){ return record?.['name'] !== undefined && record?.['name'] !== null && record?.['name'] !== ''; }
function withName(record, value, filter, columns=fields){ return {...record, ['name']: value}; }
function clearName(record, value, filter, columns=fields){ const copy={...record}; delete copy['name']; return copy; }
function copyName(record, value, filter, columns=fields){ return {name:'name', value: record?.['name']}; }
function paramNameInput(record, value, filter, columns=fields){ return {field:'name', mode:'input', value: record?.['name']}; }
function paramNameFilter(record, value, filter, columns=fields){ return {field:'name', mode:'filter', value: filter?.['name']}; }
function paramNameExport(record, value, filter, columns=fields){ return {field:'name', mode:'export', included: columns.includes('name')}; }
function getProvider(record, value, filter, columns=fields){ return record?.['provider']; }
function hasProvider(record, value, filter, columns=fields){ return record?.['provider'] !== undefined && record?.['provider'] !== null && record?.['provider'] !== ''; }
function withProvider(record, value, filter, columns=fields){ return {...record, ['provider']: value}; }
function clearProvider(record, value, filter, columns=fields){ const copy={...record}; delete copy['provider']; return copy; }
function copyProvider(record, value, filter, columns=fields){ return {name:'provider', value: record?.['provider']}; }
function paramProviderInput(record, value, filter, columns=fields){ return {field:'provider', mode:'input', value: record?.['provider']}; }
function paramProviderFilter(record, value, filter, columns=fields){ return {field:'provider', mode:'filter', value: filter?.['provider']}; }
function paramProviderExport(record, value, filter, columns=fields){ return {field:'provider', mode:'export', included: columns.includes('provider')}; }
function getBaseurl(record, value, filter, columns=fields){ return record?.['baseUrl']; }
function hasBaseurl(record, value, filter, columns=fields){ return record?.['baseUrl'] !== undefined && record?.['baseUrl'] !== null && record?.['baseUrl'] !== ''; }
function withBaseurl(record, value, filter, columns=fields){ return {...record, ['baseUrl']: value}; }
function clearBaseurl(record, value, filter, columns=fields){ const copy={...record}; delete copy['baseUrl']; return copy; }
function copyBaseurl(record, value, filter, columns=fields){ return {name:'baseUrl', value: record?.['baseUrl']}; }
function paramBaseurlInput(record, value, filter, columns=fields){ return {field:'baseUrl', mode:'input', value: record?.['baseUrl']}; }
function paramBaseurlFilter(record, value, filter, columns=fields){ return {field:'baseUrl', mode:'filter', value: filter?.['baseUrl']}; }
function paramBaseurlExport(record, value, filter, columns=fields){ return {field:'baseUrl', mode:'export', included: columns.includes('baseUrl')}; }
function getCredentialsref(record, value, filter, columns=fields){ return record?.['credentialsRef']; }
function hasCredentialsref(record, value, filter, columns=fields){ return record?.['credentialsRef'] !== undefined && record?.['credentialsRef'] !== null && record?.['credentialsRef'] !== ''; }
function withCredentialsref(record, value, filter, columns=fields){ return {...record, ['credentialsRef']: value}; }
function clearCredentialsref(record, value, filter, columns=fields){ const copy={...record}; delete copy['credentialsRef']; return copy; }
function copyCredentialsref(record, value, filter, columns=fields){ return {name:'credentialsRef', value: record?.['credentialsRef']}; }
function paramCredentialsrefInput(record, value, filter, columns=fields){ return {field:'credentialsRef', mode:'input', value: record?.['credentialsRef']}; }
function paramCredentialsrefFilter(record, value, filter, columns=fields){ return {field:'credentialsRef', mode:'filter', value: filter?.['credentialsRef']}; }
function paramCredentialsrefExport(record, value, filter, columns=fields){ return {field:'credentialsRef', mode:'export', included: columns.includes('credentialsRef')}; }
function getEvents(record, value, filter, columns=fields){ return record?.['events']; }
function hasEvents(record, value, filter, columns=fields){ return record?.['events'] !== undefined && record?.['events'] !== null && record?.['events'] !== ''; }
function withEvents(record, value, filter, columns=fields){ return {...record, ['events']: value}; }
function clearEvents(record, value, filter, columns=fields){ const copy={...record}; delete copy['events']; return copy; }
function copyEvents(record, value, filter, columns=fields){ return {name:'events', value: record?.['events']}; }
function paramEventsInput(record, value, filter, columns=fields){ return {field:'events', mode:'input', value: record?.['events']}; }
function paramEventsFilter(record, value, filter, columns=fields){ return {field:'events', mode:'filter', value: filter?.['events']}; }
function paramEventsExport(record, value, filter, columns=fields){ return {field:'events', mode:'export', included: columns.includes('events')}; }
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
