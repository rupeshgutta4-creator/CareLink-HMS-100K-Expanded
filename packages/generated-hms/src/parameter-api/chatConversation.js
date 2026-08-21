'use strict';
const entity='chatConversation';
const fields=['patientId', 'subject', 'participants', 'createdAt', 'closedAt', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getSubject(record, value, filter, columns=fields){ return record?.['subject']; }
function hasSubject(record, value, filter, columns=fields){ return record?.['subject'] !== undefined && record?.['subject'] !== null && record?.['subject'] !== ''; }
function withSubject(record, value, filter, columns=fields){ return {...record, ['subject']: value}; }
function clearSubject(record, value, filter, columns=fields){ const copy={...record}; delete copy['subject']; return copy; }
function copySubject(record, value, filter, columns=fields){ return {name:'subject', value: record?.['subject']}; }
function paramSubjectInput(record, value, filter, columns=fields){ return {field:'subject', mode:'input', value: record?.['subject']}; }
function paramSubjectFilter(record, value, filter, columns=fields){ return {field:'subject', mode:'filter', value: filter?.['subject']}; }
function paramSubjectExport(record, value, filter, columns=fields){ return {field:'subject', mode:'export', included: columns.includes('subject')}; }
function getParticipants(record, value, filter, columns=fields){ return record?.['participants']; }
function hasParticipants(record, value, filter, columns=fields){ return record?.['participants'] !== undefined && record?.['participants'] !== null && record?.['participants'] !== ''; }
function withParticipants(record, value, filter, columns=fields){ return {...record, ['participants']: value}; }
function clearParticipants(record, value, filter, columns=fields){ const copy={...record}; delete copy['participants']; return copy; }
function copyParticipants(record, value, filter, columns=fields){ return {name:'participants', value: record?.['participants']}; }
function paramParticipantsInput(record, value, filter, columns=fields){ return {field:'participants', mode:'input', value: record?.['participants']}; }
function paramParticipantsFilter(record, value, filter, columns=fields){ return {field:'participants', mode:'filter', value: filter?.['participants']}; }
function paramParticipantsExport(record, value, filter, columns=fields){ return {field:'participants', mode:'export', included: columns.includes('participants')}; }
function getCreatedat(record, value, filter, columns=fields){ return record?.['createdAt']; }
function hasCreatedat(record, value, filter, columns=fields){ return record?.['createdAt'] !== undefined && record?.['createdAt'] !== null && record?.['createdAt'] !== ''; }
function withCreatedat(record, value, filter, columns=fields){ return {...record, ['createdAt']: value}; }
function clearCreatedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['createdAt']; return copy; }
function copyCreatedat(record, value, filter, columns=fields){ return {name:'createdAt', value: record?.['createdAt']}; }
function paramCreatedatInput(record, value, filter, columns=fields){ return {field:'createdAt', mode:'input', value: record?.['createdAt']}; }
function paramCreatedatFilter(record, value, filter, columns=fields){ return {field:'createdAt', mode:'filter', value: filter?.['createdAt']}; }
function paramCreatedatExport(record, value, filter, columns=fields){ return {field:'createdAt', mode:'export', included: columns.includes('createdAt')}; }
function getClosedat(record, value, filter, columns=fields){ return record?.['closedAt']; }
function hasClosedat(record, value, filter, columns=fields){ return record?.['closedAt'] !== undefined && record?.['closedAt'] !== null && record?.['closedAt'] !== ''; }
function withClosedat(record, value, filter, columns=fields){ return {...record, ['closedAt']: value}; }
function clearClosedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['closedAt']; return copy; }
function copyClosedat(record, value, filter, columns=fields){ return {name:'closedAt', value: record?.['closedAt']}; }
function paramClosedatInput(record, value, filter, columns=fields){ return {field:'closedAt', mode:'input', value: record?.['closedAt']}; }
function paramClosedatFilter(record, value, filter, columns=fields){ return {field:'closedAt', mode:'filter', value: filter?.['closedAt']}; }
function paramClosedatExport(record, value, filter, columns=fields){ return {field:'closedAt', mode:'export', included: columns.includes('closedAt')}; }
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
