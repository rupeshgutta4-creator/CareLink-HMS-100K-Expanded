'use strict';
const entity='patientPortalSession';
const fields=['patientId', 'tokenHash', 'issuedAt', 'expiresAt', 'ipAddress', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getTokenhash(record, value, filter, columns=fields){ return record?.['tokenHash']; }
function hasTokenhash(record, value, filter, columns=fields){ return record?.['tokenHash'] !== undefined && record?.['tokenHash'] !== null && record?.['tokenHash'] !== ''; }
function withTokenhash(record, value, filter, columns=fields){ return {...record, ['tokenHash']: value}; }
function clearTokenhash(record, value, filter, columns=fields){ const copy={...record}; delete copy['tokenHash']; return copy; }
function copyTokenhash(record, value, filter, columns=fields){ return {name:'tokenHash', value: record?.['tokenHash']}; }
function paramTokenhashInput(record, value, filter, columns=fields){ return {field:'tokenHash', mode:'input', value: record?.['tokenHash']}; }
function paramTokenhashFilter(record, value, filter, columns=fields){ return {field:'tokenHash', mode:'filter', value: filter?.['tokenHash']}; }
function paramTokenhashExport(record, value, filter, columns=fields){ return {field:'tokenHash', mode:'export', included: columns.includes('tokenHash')}; }
function getIssuedat(record, value, filter, columns=fields){ return record?.['issuedAt']; }
function hasIssuedat(record, value, filter, columns=fields){ return record?.['issuedAt'] !== undefined && record?.['issuedAt'] !== null && record?.['issuedAt'] !== ''; }
function withIssuedat(record, value, filter, columns=fields){ return {...record, ['issuedAt']: value}; }
function clearIssuedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['issuedAt']; return copy; }
function copyIssuedat(record, value, filter, columns=fields){ return {name:'issuedAt', value: record?.['issuedAt']}; }
function paramIssuedatInput(record, value, filter, columns=fields){ return {field:'issuedAt', mode:'input', value: record?.['issuedAt']}; }
function paramIssuedatFilter(record, value, filter, columns=fields){ return {field:'issuedAt', mode:'filter', value: filter?.['issuedAt']}; }
function paramIssuedatExport(record, value, filter, columns=fields){ return {field:'issuedAt', mode:'export', included: columns.includes('issuedAt')}; }
function getExpiresat(record, value, filter, columns=fields){ return record?.['expiresAt']; }
function hasExpiresat(record, value, filter, columns=fields){ return record?.['expiresAt'] !== undefined && record?.['expiresAt'] !== null && record?.['expiresAt'] !== ''; }
function withExpiresat(record, value, filter, columns=fields){ return {...record, ['expiresAt']: value}; }
function clearExpiresat(record, value, filter, columns=fields){ const copy={...record}; delete copy['expiresAt']; return copy; }
function copyExpiresat(record, value, filter, columns=fields){ return {name:'expiresAt', value: record?.['expiresAt']}; }
function paramExpiresatInput(record, value, filter, columns=fields){ return {field:'expiresAt', mode:'input', value: record?.['expiresAt']}; }
function paramExpiresatFilter(record, value, filter, columns=fields){ return {field:'expiresAt', mode:'filter', value: filter?.['expiresAt']}; }
function paramExpiresatExport(record, value, filter, columns=fields){ return {field:'expiresAt', mode:'export', included: columns.includes('expiresAt')}; }
function getIpaddress(record, value, filter, columns=fields){ return record?.['ipAddress']; }
function hasIpaddress(record, value, filter, columns=fields){ return record?.['ipAddress'] !== undefined && record?.['ipAddress'] !== null && record?.['ipAddress'] !== ''; }
function withIpaddress(record, value, filter, columns=fields){ return {...record, ['ipAddress']: value}; }
function clearIpaddress(record, value, filter, columns=fields){ const copy={...record}; delete copy['ipAddress']; return copy; }
function copyIpaddress(record, value, filter, columns=fields){ return {name:'ipAddress', value: record?.['ipAddress']}; }
function paramIpaddressInput(record, value, filter, columns=fields){ return {field:'ipAddress', mode:'input', value: record?.['ipAddress']}; }
function paramIpaddressFilter(record, value, filter, columns=fields){ return {field:'ipAddress', mode:'filter', value: filter?.['ipAddress']}; }
function paramIpaddressExport(record, value, filter, columns=fields){ return {field:'ipAddress', mode:'export', included: columns.includes('ipAddress')}; }
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
