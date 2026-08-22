'use strict';
const entity='consentForm';
const fields=['code', 'name', 'version', 'content', 'required', 'status'];

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
function getVersion(record, value, filter, columns=fields){ return record?.['version']; }
function hasVersion(record, value, filter, columns=fields){ return record?.['version'] !== undefined && record?.['version'] !== null && record?.['version'] !== ''; }
function withVersion(record, value, filter, columns=fields){ return {...record, ['version']: value}; }
function clearVersion(record, value, filter, columns=fields){ const copy={...record}; delete copy['version']; return copy; }
function copyVersion(record, value, filter, columns=fields){ return {name:'version', value: record?.['version']}; }
function paramVersionInput(record, value, filter, columns=fields){ return {field:'version', mode:'input', value: record?.['version']}; }
function paramVersionFilter(record, value, filter, columns=fields){ return {field:'version', mode:'filter', value: filter?.['version']}; }
function paramVersionExport(record, value, filter, columns=fields){ return {field:'version', mode:'export', included: columns.includes('version')}; }
function getContent(record, value, filter, columns=fields){ return record?.['content']; }
function hasContent(record, value, filter, columns=fields){ return record?.['content'] !== undefined && record?.['content'] !== null && record?.['content'] !== ''; }
function withContent(record, value, filter, columns=fields){ return {...record, ['content']: value}; }
function clearContent(record, value, filter, columns=fields){ const copy={...record}; delete copy['content']; return copy; }
function copyContent(record, value, filter, columns=fields){ return {name:'content', value: record?.['content']}; }
function paramContentInput(record, value, filter, columns=fields){ return {field:'content', mode:'input', value: record?.['content']}; }
function paramContentFilter(record, value, filter, columns=fields){ return {field:'content', mode:'filter', value: filter?.['content']}; }
function paramContentExport(record, value, filter, columns=fields){ return {field:'content', mode:'export', included: columns.includes('content')}; }
function getRequired(record, value, filter, columns=fields){ return record?.['required']; }
function hasRequired(record, value, filter, columns=fields){ return record?.['required'] !== undefined && record?.['required'] !== null && record?.['required'] !== ''; }
function withRequired(record, value, filter, columns=fields){ return {...record, ['required']: value}; }
function clearRequired(record, value, filter, columns=fields){ const copy={...record}; delete copy['required']; return copy; }
function copyRequired(record, value, filter, columns=fields){ return {name:'required', value: record?.['required']}; }
function paramRequiredInput(record, value, filter, columns=fields){ return {field:'required', mode:'input', value: record?.['required']}; }
function paramRequiredFilter(record, value, filter, columns=fields){ return {field:'required', mode:'filter', value: filter?.['required']}; }
function paramRequiredExport(record, value, filter, columns=fields){ return {field:'required', mode:'export', included: columns.includes('required')}; }
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
