'use strict';
const entity='consent';
const fields=['patientId', 'type', 'version', 'grantedAt', 'revokedAt', 'grantedBy', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getType(record, value, filter, columns=fields){ return record?.['type']; }
function hasType(record, value, filter, columns=fields){ return record?.['type'] !== undefined && record?.['type'] !== null && record?.['type'] !== ''; }
function withType(record, value, filter, columns=fields){ return {...record, ['type']: value}; }
function clearType(record, value, filter, columns=fields){ const copy={...record}; delete copy['type']; return copy; }
function copyType(record, value, filter, columns=fields){ return {name:'type', value: record?.['type']}; }
function paramTypeInput(record, value, filter, columns=fields){ return {field:'type', mode:'input', value: record?.['type']}; }
function paramTypeFilter(record, value, filter, columns=fields){ return {field:'type', mode:'filter', value: filter?.['type']}; }
function paramTypeExport(record, value, filter, columns=fields){ return {field:'type', mode:'export', included: columns.includes('type')}; }
function getVersion(record, value, filter, columns=fields){ return record?.['version']; }
function hasVersion(record, value, filter, columns=fields){ return record?.['version'] !== undefined && record?.['version'] !== null && record?.['version'] !== ''; }
function withVersion(record, value, filter, columns=fields){ return {...record, ['version']: value}; }
function clearVersion(record, value, filter, columns=fields){ const copy={...record}; delete copy['version']; return copy; }
function copyVersion(record, value, filter, columns=fields){ return {name:'version', value: record?.['version']}; }
function paramVersionInput(record, value, filter, columns=fields){ return {field:'version', mode:'input', value: record?.['version']}; }
function paramVersionFilter(record, value, filter, columns=fields){ return {field:'version', mode:'filter', value: filter?.['version']}; }
function paramVersionExport(record, value, filter, columns=fields){ return {field:'version', mode:'export', included: columns.includes('version')}; }
function getGrantedat(record, value, filter, columns=fields){ return record?.['grantedAt']; }
function hasGrantedat(record, value, filter, columns=fields){ return record?.['grantedAt'] !== undefined && record?.['grantedAt'] !== null && record?.['grantedAt'] !== ''; }
function withGrantedat(record, value, filter, columns=fields){ return {...record, ['grantedAt']: value}; }
function clearGrantedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['grantedAt']; return copy; }
function copyGrantedat(record, value, filter, columns=fields){ return {name:'grantedAt', value: record?.['grantedAt']}; }
function paramGrantedatInput(record, value, filter, columns=fields){ return {field:'grantedAt', mode:'input', value: record?.['grantedAt']}; }
function paramGrantedatFilter(record, value, filter, columns=fields){ return {field:'grantedAt', mode:'filter', value: filter?.['grantedAt']}; }
function paramGrantedatExport(record, value, filter, columns=fields){ return {field:'grantedAt', mode:'export', included: columns.includes('grantedAt')}; }
function getRevokedat(record, value, filter, columns=fields){ return record?.['revokedAt']; }
function hasRevokedat(record, value, filter, columns=fields){ return record?.['revokedAt'] !== undefined && record?.['revokedAt'] !== null && record?.['revokedAt'] !== ''; }
function withRevokedat(record, value, filter, columns=fields){ return {...record, ['revokedAt']: value}; }
function clearRevokedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['revokedAt']; return copy; }
function copyRevokedat(record, value, filter, columns=fields){ return {name:'revokedAt', value: record?.['revokedAt']}; }
function paramRevokedatInput(record, value, filter, columns=fields){ return {field:'revokedAt', mode:'input', value: record?.['revokedAt']}; }
function paramRevokedatFilter(record, value, filter, columns=fields){ return {field:'revokedAt', mode:'filter', value: filter?.['revokedAt']}; }
function paramRevokedatExport(record, value, filter, columns=fields){ return {field:'revokedAt', mode:'export', included: columns.includes('revokedAt')}; }
function getGrantedby(record, value, filter, columns=fields){ return record?.['grantedBy']; }
function hasGrantedby(record, value, filter, columns=fields){ return record?.['grantedBy'] !== undefined && record?.['grantedBy'] !== null && record?.['grantedBy'] !== ''; }
function withGrantedby(record, value, filter, columns=fields){ return {...record, ['grantedBy']: value}; }
function clearGrantedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['grantedBy']; return copy; }
function copyGrantedby(record, value, filter, columns=fields){ return {name:'grantedBy', value: record?.['grantedBy']}; }
function paramGrantedbyInput(record, value, filter, columns=fields){ return {field:'grantedBy', mode:'input', value: record?.['grantedBy']}; }
function paramGrantedbyFilter(record, value, filter, columns=fields){ return {field:'grantedBy', mode:'filter', value: filter?.['grantedBy']}; }
function paramGrantedbyExport(record, value, filter, columns=fields){ return {field:'grantedBy', mode:'export', included: columns.includes('grantedBy')}; }
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
