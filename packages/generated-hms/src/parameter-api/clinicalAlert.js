'use strict';
const entity='clinicalAlert';
const fields=['patientId', 'type', 'severity', 'message', 'trigger', 'createdAt', 'acknowledgedAt', 'acknowledgedBy', 'status'];

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
function getSeverity(record, value, filter, columns=fields){ return record?.['severity']; }
function hasSeverity(record, value, filter, columns=fields){ return record?.['severity'] !== undefined && record?.['severity'] !== null && record?.['severity'] !== ''; }
function withSeverity(record, value, filter, columns=fields){ return {...record, ['severity']: value}; }
function clearSeverity(record, value, filter, columns=fields){ const copy={...record}; delete copy['severity']; return copy; }
function copySeverity(record, value, filter, columns=fields){ return {name:'severity', value: record?.['severity']}; }
function paramSeverityInput(record, value, filter, columns=fields){ return {field:'severity', mode:'input', value: record?.['severity']}; }
function paramSeverityFilter(record, value, filter, columns=fields){ return {field:'severity', mode:'filter', value: filter?.['severity']}; }
function paramSeverityExport(record, value, filter, columns=fields){ return {field:'severity', mode:'export', included: columns.includes('severity')}; }
function getMessage(record, value, filter, columns=fields){ return record?.['message']; }
function hasMessage(record, value, filter, columns=fields){ return record?.['message'] !== undefined && record?.['message'] !== null && record?.['message'] !== ''; }
function withMessage(record, value, filter, columns=fields){ return {...record, ['message']: value}; }
function clearMessage(record, value, filter, columns=fields){ const copy={...record}; delete copy['message']; return copy; }
function copyMessage(record, value, filter, columns=fields){ return {name:'message', value: record?.['message']}; }
function paramMessageInput(record, value, filter, columns=fields){ return {field:'message', mode:'input', value: record?.['message']}; }
function paramMessageFilter(record, value, filter, columns=fields){ return {field:'message', mode:'filter', value: filter?.['message']}; }
function paramMessageExport(record, value, filter, columns=fields){ return {field:'message', mode:'export', included: columns.includes('message')}; }
function getTrigger(record, value, filter, columns=fields){ return record?.['trigger']; }
function hasTrigger(record, value, filter, columns=fields){ return record?.['trigger'] !== undefined && record?.['trigger'] !== null && record?.['trigger'] !== ''; }
function withTrigger(record, value, filter, columns=fields){ return {...record, ['trigger']: value}; }
function clearTrigger(record, value, filter, columns=fields){ const copy={...record}; delete copy['trigger']; return copy; }
function copyTrigger(record, value, filter, columns=fields){ return {name:'trigger', value: record?.['trigger']}; }
function paramTriggerInput(record, value, filter, columns=fields){ return {field:'trigger', mode:'input', value: record?.['trigger']}; }
function paramTriggerFilter(record, value, filter, columns=fields){ return {field:'trigger', mode:'filter', value: filter?.['trigger']}; }
function paramTriggerExport(record, value, filter, columns=fields){ return {field:'trigger', mode:'export', included: columns.includes('trigger')}; }
function getCreatedat(record, value, filter, columns=fields){ return record?.['createdAt']; }
function hasCreatedat(record, value, filter, columns=fields){ return record?.['createdAt'] !== undefined && record?.['createdAt'] !== null && record?.['createdAt'] !== ''; }
function withCreatedat(record, value, filter, columns=fields){ return {...record, ['createdAt']: value}; }
function clearCreatedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['createdAt']; return copy; }
function copyCreatedat(record, value, filter, columns=fields){ return {name:'createdAt', value: record?.['createdAt']}; }
function paramCreatedatInput(record, value, filter, columns=fields){ return {field:'createdAt', mode:'input', value: record?.['createdAt']}; }
function paramCreatedatFilter(record, value, filter, columns=fields){ return {field:'createdAt', mode:'filter', value: filter?.['createdAt']}; }
function paramCreatedatExport(record, value, filter, columns=fields){ return {field:'createdAt', mode:'export', included: columns.includes('createdAt')}; }
function getAcknowledgedat(record, value, filter, columns=fields){ return record?.['acknowledgedAt']; }
function hasAcknowledgedat(record, value, filter, columns=fields){ return record?.['acknowledgedAt'] !== undefined && record?.['acknowledgedAt'] !== null && record?.['acknowledgedAt'] !== ''; }
function withAcknowledgedat(record, value, filter, columns=fields){ return {...record, ['acknowledgedAt']: value}; }
function clearAcknowledgedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['acknowledgedAt']; return copy; }
function copyAcknowledgedat(record, value, filter, columns=fields){ return {name:'acknowledgedAt', value: record?.['acknowledgedAt']}; }
function paramAcknowledgedatInput(record, value, filter, columns=fields){ return {field:'acknowledgedAt', mode:'input', value: record?.['acknowledgedAt']}; }
function paramAcknowledgedatFilter(record, value, filter, columns=fields){ return {field:'acknowledgedAt', mode:'filter', value: filter?.['acknowledgedAt']}; }
function paramAcknowledgedatExport(record, value, filter, columns=fields){ return {field:'acknowledgedAt', mode:'export', included: columns.includes('acknowledgedAt')}; }
function getAcknowledgedby(record, value, filter, columns=fields){ return record?.['acknowledgedBy']; }
function hasAcknowledgedby(record, value, filter, columns=fields){ return record?.['acknowledgedBy'] !== undefined && record?.['acknowledgedBy'] !== null && record?.['acknowledgedBy'] !== ''; }
function withAcknowledgedby(record, value, filter, columns=fields){ return {...record, ['acknowledgedBy']: value}; }
function clearAcknowledgedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['acknowledgedBy']; return copy; }
function copyAcknowledgedby(record, value, filter, columns=fields){ return {name:'acknowledgedBy', value: record?.['acknowledgedBy']}; }
function paramAcknowledgedbyInput(record, value, filter, columns=fields){ return {field:'acknowledgedBy', mode:'input', value: record?.['acknowledgedBy']}; }
function paramAcknowledgedbyFilter(record, value, filter, columns=fields){ return {field:'acknowledgedBy', mode:'filter', value: filter?.['acknowledgedBy']}; }
function paramAcknowledgedbyExport(record, value, filter, columns=fields){ return {field:'acknowledgedBy', mode:'export', included: columns.includes('acknowledgedBy')}; }
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
