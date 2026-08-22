'use strict';
const entity='smsTemplate';
const fields=['code', 'name', 'body', 'variables', 'language', 'status'];

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
function getBody(record, value, filter, columns=fields){ return record?.['body']; }
function hasBody(record, value, filter, columns=fields){ return record?.['body'] !== undefined && record?.['body'] !== null && record?.['body'] !== ''; }
function withBody(record, value, filter, columns=fields){ return {...record, ['body']: value}; }
function clearBody(record, value, filter, columns=fields){ const copy={...record}; delete copy['body']; return copy; }
function copyBody(record, value, filter, columns=fields){ return {name:'body', value: record?.['body']}; }
function paramBodyInput(record, value, filter, columns=fields){ return {field:'body', mode:'input', value: record?.['body']}; }
function paramBodyFilter(record, value, filter, columns=fields){ return {field:'body', mode:'filter', value: filter?.['body']}; }
function paramBodyExport(record, value, filter, columns=fields){ return {field:'body', mode:'export', included: columns.includes('body')}; }
function getVariables(record, value, filter, columns=fields){ return record?.['variables']; }
function hasVariables(record, value, filter, columns=fields){ return record?.['variables'] !== undefined && record?.['variables'] !== null && record?.['variables'] !== ''; }
function withVariables(record, value, filter, columns=fields){ return {...record, ['variables']: value}; }
function clearVariables(record, value, filter, columns=fields){ const copy={...record}; delete copy['variables']; return copy; }
function copyVariables(record, value, filter, columns=fields){ return {name:'variables', value: record?.['variables']}; }
function paramVariablesInput(record, value, filter, columns=fields){ return {field:'variables', mode:'input', value: record?.['variables']}; }
function paramVariablesFilter(record, value, filter, columns=fields){ return {field:'variables', mode:'filter', value: filter?.['variables']}; }
function paramVariablesExport(record, value, filter, columns=fields){ return {field:'variables', mode:'export', included: columns.includes('variables')}; }
function getLanguage(record, value, filter, columns=fields){ return record?.['language']; }
function hasLanguage(record, value, filter, columns=fields){ return record?.['language'] !== undefined && record?.['language'] !== null && record?.['language'] !== ''; }
function withLanguage(record, value, filter, columns=fields){ return {...record, ['language']: value}; }
function clearLanguage(record, value, filter, columns=fields){ const copy={...record}; delete copy['language']; return copy; }
function copyLanguage(record, value, filter, columns=fields){ return {name:'language', value: record?.['language']}; }
function paramLanguageInput(record, value, filter, columns=fields){ return {field:'language', mode:'input', value: record?.['language']}; }
function paramLanguageFilter(record, value, filter, columns=fields){ return {field:'language', mode:'filter', value: filter?.['language']}; }
function paramLanguageExport(record, value, filter, columns=fields){ return {field:'language', mode:'export', included: columns.includes('language')}; }
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
