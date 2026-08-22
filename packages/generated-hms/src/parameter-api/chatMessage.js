'use strict';
const entity='chatMessage';
const fields=['conversationId', 'senderId', 'recipientId', 'message', 'sentAt', 'readAt', 'status'];

function getConversationid(record, value, filter, columns=fields){ return record?.['conversationId']; }
function hasConversationid(record, value, filter, columns=fields){ return record?.['conversationId'] !== undefined && record?.['conversationId'] !== null && record?.['conversationId'] !== ''; }
function withConversationid(record, value, filter, columns=fields){ return {...record, ['conversationId']: value}; }
function clearConversationid(record, value, filter, columns=fields){ const copy={...record}; delete copy['conversationId']; return copy; }
function copyConversationid(record, value, filter, columns=fields){ return {name:'conversationId', value: record?.['conversationId']}; }
function paramConversationidInput(record, value, filter, columns=fields){ return {field:'conversationId', mode:'input', value: record?.['conversationId']}; }
function paramConversationidFilter(record, value, filter, columns=fields){ return {field:'conversationId', mode:'filter', value: filter?.['conversationId']}; }
function paramConversationidExport(record, value, filter, columns=fields){ return {field:'conversationId', mode:'export', included: columns.includes('conversationId')}; }
function getSenderid(record, value, filter, columns=fields){ return record?.['senderId']; }
function hasSenderid(record, value, filter, columns=fields){ return record?.['senderId'] !== undefined && record?.['senderId'] !== null && record?.['senderId'] !== ''; }
function withSenderid(record, value, filter, columns=fields){ return {...record, ['senderId']: value}; }
function clearSenderid(record, value, filter, columns=fields){ const copy={...record}; delete copy['senderId']; return copy; }
function copySenderid(record, value, filter, columns=fields){ return {name:'senderId', value: record?.['senderId']}; }
function paramSenderidInput(record, value, filter, columns=fields){ return {field:'senderId', mode:'input', value: record?.['senderId']}; }
function paramSenderidFilter(record, value, filter, columns=fields){ return {field:'senderId', mode:'filter', value: filter?.['senderId']}; }
function paramSenderidExport(record, value, filter, columns=fields){ return {field:'senderId', mode:'export', included: columns.includes('senderId')}; }
function getRecipientid(record, value, filter, columns=fields){ return record?.['recipientId']; }
function hasRecipientid(record, value, filter, columns=fields){ return record?.['recipientId'] !== undefined && record?.['recipientId'] !== null && record?.['recipientId'] !== ''; }
function withRecipientid(record, value, filter, columns=fields){ return {...record, ['recipientId']: value}; }
function clearRecipientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['recipientId']; return copy; }
function copyRecipientid(record, value, filter, columns=fields){ return {name:'recipientId', value: record?.['recipientId']}; }
function paramRecipientidInput(record, value, filter, columns=fields){ return {field:'recipientId', mode:'input', value: record?.['recipientId']}; }
function paramRecipientidFilter(record, value, filter, columns=fields){ return {field:'recipientId', mode:'filter', value: filter?.['recipientId']}; }
function paramRecipientidExport(record, value, filter, columns=fields){ return {field:'recipientId', mode:'export', included: columns.includes('recipientId')}; }
function getMessage(record, value, filter, columns=fields){ return record?.['message']; }
function hasMessage(record, value, filter, columns=fields){ return record?.['message'] !== undefined && record?.['message'] !== null && record?.['message'] !== ''; }
function withMessage(record, value, filter, columns=fields){ return {...record, ['message']: value}; }
function clearMessage(record, value, filter, columns=fields){ const copy={...record}; delete copy['message']; return copy; }
function copyMessage(record, value, filter, columns=fields){ return {name:'message', value: record?.['message']}; }
function paramMessageInput(record, value, filter, columns=fields){ return {field:'message', mode:'input', value: record?.['message']}; }
function paramMessageFilter(record, value, filter, columns=fields){ return {field:'message', mode:'filter', value: filter?.['message']}; }
function paramMessageExport(record, value, filter, columns=fields){ return {field:'message', mode:'export', included: columns.includes('message')}; }
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
