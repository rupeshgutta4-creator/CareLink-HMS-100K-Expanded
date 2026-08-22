'use strict';
const entity='notification';
const fields=['recipientId', 'channel', 'subject', 'message', 'priority', 'scheduledAt', 'sentAt', 'readAt', 'status'];

function getRecipientid(record, value, filter, columns=fields){ return record?.['recipientId']; }
function hasRecipientid(record, value, filter, columns=fields){ return record?.['recipientId'] !== undefined && record?.['recipientId'] !== null && record?.['recipientId'] !== ''; }
function withRecipientid(record, value, filter, columns=fields){ return {...record, ['recipientId']: value}; }
function clearRecipientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['recipientId']; return copy; }
function copyRecipientid(record, value, filter, columns=fields){ return {name:'recipientId', value: record?.['recipientId']}; }
function paramRecipientidInput(record, value, filter, columns=fields){ return {field:'recipientId', mode:'input', value: record?.['recipientId']}; }
function paramRecipientidFilter(record, value, filter, columns=fields){ return {field:'recipientId', mode:'filter', value: filter?.['recipientId']}; }
function paramRecipientidExport(record, value, filter, columns=fields){ return {field:'recipientId', mode:'export', included: columns.includes('recipientId')}; }
function getChannel(record, value, filter, columns=fields){ return record?.['channel']; }
function hasChannel(record, value, filter, columns=fields){ return record?.['channel'] !== undefined && record?.['channel'] !== null && record?.['channel'] !== ''; }
function withChannel(record, value, filter, columns=fields){ return {...record, ['channel']: value}; }
function clearChannel(record, value, filter, columns=fields){ const copy={...record}; delete copy['channel']; return copy; }
function copyChannel(record, value, filter, columns=fields){ return {name:'channel', value: record?.['channel']}; }
function paramChannelInput(record, value, filter, columns=fields){ return {field:'channel', mode:'input', value: record?.['channel']}; }
function paramChannelFilter(record, value, filter, columns=fields){ return {field:'channel', mode:'filter', value: filter?.['channel']}; }
function paramChannelExport(record, value, filter, columns=fields){ return {field:'channel', mode:'export', included: columns.includes('channel')}; }
function getSubject(record, value, filter, columns=fields){ return record?.['subject']; }
function hasSubject(record, value, filter, columns=fields){ return record?.['subject'] !== undefined && record?.['subject'] !== null && record?.['subject'] !== ''; }
function withSubject(record, value, filter, columns=fields){ return {...record, ['subject']: value}; }
function clearSubject(record, value, filter, columns=fields){ const copy={...record}; delete copy['subject']; return copy; }
function copySubject(record, value, filter, columns=fields){ return {name:'subject', value: record?.['subject']}; }
function paramSubjectInput(record, value, filter, columns=fields){ return {field:'subject', mode:'input', value: record?.['subject']}; }
function paramSubjectFilter(record, value, filter, columns=fields){ return {field:'subject', mode:'filter', value: filter?.['subject']}; }
function paramSubjectExport(record, value, filter, columns=fields){ return {field:'subject', mode:'export', included: columns.includes('subject')}; }
function getMessage(record, value, filter, columns=fields){ return record?.['message']; }
function hasMessage(record, value, filter, columns=fields){ return record?.['message'] !== undefined && record?.['message'] !== null && record?.['message'] !== ''; }
function withMessage(record, value, filter, columns=fields){ return {...record, ['message']: value}; }
function clearMessage(record, value, filter, columns=fields){ const copy={...record}; delete copy['message']; return copy; }
function copyMessage(record, value, filter, columns=fields){ return {name:'message', value: record?.['message']}; }
function paramMessageInput(record, value, filter, columns=fields){ return {field:'message', mode:'input', value: record?.['message']}; }
function paramMessageFilter(record, value, filter, columns=fields){ return {field:'message', mode:'filter', value: filter?.['message']}; }
function paramMessageExport(record, value, filter, columns=fields){ return {field:'message', mode:'export', included: columns.includes('message')}; }
function getPriority(record, value, filter, columns=fields){ return record?.['priority']; }
function hasPriority(record, value, filter, columns=fields){ return record?.['priority'] !== undefined && record?.['priority'] !== null && record?.['priority'] !== ''; }
function withPriority(record, value, filter, columns=fields){ return {...record, ['priority']: value}; }
function clearPriority(record, value, filter, columns=fields){ const copy={...record}; delete copy['priority']; return copy; }
function copyPriority(record, value, filter, columns=fields){ return {name:'priority', value: record?.['priority']}; }
function paramPriorityInput(record, value, filter, columns=fields){ return {field:'priority', mode:'input', value: record?.['priority']}; }
function paramPriorityFilter(record, value, filter, columns=fields){ return {field:'priority', mode:'filter', value: filter?.['priority']}; }
function paramPriorityExport(record, value, filter, columns=fields){ return {field:'priority', mode:'export', included: columns.includes('priority')}; }
function getScheduledat(record, value, filter, columns=fields){ return record?.['scheduledAt']; }
function hasScheduledat(record, value, filter, columns=fields){ return record?.['scheduledAt'] !== undefined && record?.['scheduledAt'] !== null && record?.['scheduledAt'] !== ''; }
function withScheduledat(record, value, filter, columns=fields){ return {...record, ['scheduledAt']: value}; }
function clearScheduledat(record, value, filter, columns=fields){ const copy={...record}; delete copy['scheduledAt']; return copy; }
function copyScheduledat(record, value, filter, columns=fields){ return {name:'scheduledAt', value: record?.['scheduledAt']}; }
function paramScheduledatInput(record, value, filter, columns=fields){ return {field:'scheduledAt', mode:'input', value: record?.['scheduledAt']}; }
function paramScheduledatFilter(record, value, filter, columns=fields){ return {field:'scheduledAt', mode:'filter', value: filter?.['scheduledAt']}; }
function paramScheduledatExport(record, value, filter, columns=fields){ return {field:'scheduledAt', mode:'export', included: columns.includes('scheduledAt')}; }
function getSentat(record, value, filter, columns=fields){ return record?.['sentAt']; }
function hasSentat(record, value, filter, columns=fields){ return record?.['sentAt'] !== undefined && record?.['sentAt'] !== null && record?.['sentAt'] !== ''; }
function withSentat(record, value, filter, columns=fields){ return {...record, ['sentAt']: value}; }
function clearSentat(record, value, filter, columns=fields){ const copy={...record}; delete copy['sentAt']; return copy; }
function copySentat(record, value, filter, columns=fields){ return {name:'sentAt', value: record?.['sentAt']}; }
function paramSentatInput(record, value, filter, columns=fields){ return {field:'sentAt', mode:'input', value: record?.['sentAt']}; }
function paramSentatFilter(record, value, filter, columns=fields){ return {field:'sentAt', mode:'filter', value: filter?.['sentAt']}; }
function paramSentatExport(record, value, filter, columns=fields){ return {field:'sentAt', mode:'export', included: columns.includes('sentAt')}; }
function getReadat(record, value, filter, columns=fields){ return record?.['readAt']; }
function hasReadat(record, value, filter, columns=fields){ return record?.['readAt'] !== undefined && record?.['readAt'] !== null && record?.['readAt'] !== ''; }
function withReadat(record, value, filter, columns=fields){ return {...record, ['readAt']: value}; }
function clearReadat(record, value, filter, columns=fields){ const copy={...record}; delete copy['readAt']; return copy; }
function copyReadat(record, value, filter, columns=fields){ return {name:'readAt', value: record?.['readAt']}; }
function paramReadatInput(record, value, filter, columns=fields){ return {field:'readAt', mode:'input', value: record?.['readAt']}; }
function paramReadatFilter(record, value, filter, columns=fields){ return {field:'readAt', mode:'filter', value: filter?.['readAt']}; }
function paramReadatExport(record, value, filter, columns=fields){ return {field:'readAt', mode:'export', included: columns.includes('readAt')}; }
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
