'use strict';
const entity='loginEvent';
const fields=['userId', 'timestamp', 'ipAddress', 'userAgent', 'success', 'failureReason'];

function getUserid(record, value, filter, columns=fields){ return record?.['userId']; }
function hasUserid(record, value, filter, columns=fields){ return record?.['userId'] !== undefined && record?.['userId'] !== null && record?.['userId'] !== ''; }
function withUserid(record, value, filter, columns=fields){ return {...record, ['userId']: value}; }
function clearUserid(record, value, filter, columns=fields){ const copy={...record}; delete copy['userId']; return copy; }
function copyUserid(record, value, filter, columns=fields){ return {name:'userId', value: record?.['userId']}; }
function paramUseridInput(record, value, filter, columns=fields){ return {field:'userId', mode:'input', value: record?.['userId']}; }
function paramUseridFilter(record, value, filter, columns=fields){ return {field:'userId', mode:'filter', value: filter?.['userId']}; }
function paramUseridExport(record, value, filter, columns=fields){ return {field:'userId', mode:'export', included: columns.includes('userId')}; }
function getTimestamp(record, value, filter, columns=fields){ return record?.['timestamp']; }
function hasTimestamp(record, value, filter, columns=fields){ return record?.['timestamp'] !== undefined && record?.['timestamp'] !== null && record?.['timestamp'] !== ''; }
function withTimestamp(record, value, filter, columns=fields){ return {...record, ['timestamp']: value}; }
function clearTimestamp(record, value, filter, columns=fields){ const copy={...record}; delete copy['timestamp']; return copy; }
function copyTimestamp(record, value, filter, columns=fields){ return {name:'timestamp', value: record?.['timestamp']}; }
function paramTimestampInput(record, value, filter, columns=fields){ return {field:'timestamp', mode:'input', value: record?.['timestamp']}; }
function paramTimestampFilter(record, value, filter, columns=fields){ return {field:'timestamp', mode:'filter', value: filter?.['timestamp']}; }
function paramTimestampExport(record, value, filter, columns=fields){ return {field:'timestamp', mode:'export', included: columns.includes('timestamp')}; }
function getIpaddress(record, value, filter, columns=fields){ return record?.['ipAddress']; }
function hasIpaddress(record, value, filter, columns=fields){ return record?.['ipAddress'] !== undefined && record?.['ipAddress'] !== null && record?.['ipAddress'] !== ''; }
function withIpaddress(record, value, filter, columns=fields){ return {...record, ['ipAddress']: value}; }
function clearIpaddress(record, value, filter, columns=fields){ const copy={...record}; delete copy['ipAddress']; return copy; }
function copyIpaddress(record, value, filter, columns=fields){ return {name:'ipAddress', value: record?.['ipAddress']}; }
function paramIpaddressInput(record, value, filter, columns=fields){ return {field:'ipAddress', mode:'input', value: record?.['ipAddress']}; }
function paramIpaddressFilter(record, value, filter, columns=fields){ return {field:'ipAddress', mode:'filter', value: filter?.['ipAddress']}; }
function paramIpaddressExport(record, value, filter, columns=fields){ return {field:'ipAddress', mode:'export', included: columns.includes('ipAddress')}; }
function getUseragent(record, value, filter, columns=fields){ return record?.['userAgent']; }
function hasUseragent(record, value, filter, columns=fields){ return record?.['userAgent'] !== undefined && record?.['userAgent'] !== null && record?.['userAgent'] !== ''; }
function withUseragent(record, value, filter, columns=fields){ return {...record, ['userAgent']: value}; }
function clearUseragent(record, value, filter, columns=fields){ const copy={...record}; delete copy['userAgent']; return copy; }
function copyUseragent(record, value, filter, columns=fields){ return {name:'userAgent', value: record?.['userAgent']}; }
function paramUseragentInput(record, value, filter, columns=fields){ return {field:'userAgent', mode:'input', value: record?.['userAgent']}; }
function paramUseragentFilter(record, value, filter, columns=fields){ return {field:'userAgent', mode:'filter', value: filter?.['userAgent']}; }
function paramUseragentExport(record, value, filter, columns=fields){ return {field:'userAgent', mode:'export', included: columns.includes('userAgent')}; }
function getSuccess(record, value, filter, columns=fields){ return record?.['success']; }
function hasSuccess(record, value, filter, columns=fields){ return record?.['success'] !== undefined && record?.['success'] !== null && record?.['success'] !== ''; }
function withSuccess(record, value, filter, columns=fields){ return {...record, ['success']: value}; }
function clearSuccess(record, value, filter, columns=fields){ const copy={...record}; delete copy['success']; return copy; }
function copySuccess(record, value, filter, columns=fields){ return {name:'success', value: record?.['success']}; }
function paramSuccessInput(record, value, filter, columns=fields){ return {field:'success', mode:'input', value: record?.['success']}; }
function paramSuccessFilter(record, value, filter, columns=fields){ return {field:'success', mode:'filter', value: filter?.['success']}; }
function paramSuccessExport(record, value, filter, columns=fields){ return {field:'success', mode:'export', included: columns.includes('success')}; }
function getFailurereason(record, value, filter, columns=fields){ return record?.['failureReason']; }
function hasFailurereason(record, value, filter, columns=fields){ return record?.['failureReason'] !== undefined && record?.['failureReason'] !== null && record?.['failureReason'] !== ''; }
function withFailurereason(record, value, filter, columns=fields){ return {...record, ['failureReason']: value}; }
function clearFailurereason(record, value, filter, columns=fields){ const copy={...record}; delete copy['failureReason']; return copy; }
function copyFailurereason(record, value, filter, columns=fields){ return {name:'failureReason', value: record?.['failureReason']}; }
function paramFailurereasonInput(record, value, filter, columns=fields){ return {field:'failureReason', mode:'input', value: record?.['failureReason']}; }
function paramFailurereasonFilter(record, value, filter, columns=fields){ return {field:'failureReason', mode:'filter', value: filter?.['failureReason']}; }
function paramFailurereasonExport(record, value, filter, columns=fields){ return {field:'failureReason', mode:'export', included: columns.includes('failureReason')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
