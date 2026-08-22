'use strict';
const entity='webhookDelivery';
const fields=['webhookId', 'event', 'payload', 'attempt', 'nextRetryAt', 'deliveredAt', 'status'];

function getWebhookid(record, value, filter, columns=fields){ return record?.['webhookId']; }
function hasWebhookid(record, value, filter, columns=fields){ return record?.['webhookId'] !== undefined && record?.['webhookId'] !== null && record?.['webhookId'] !== ''; }
function withWebhookid(record, value, filter, columns=fields){ return {...record, ['webhookId']: value}; }
function clearWebhookid(record, value, filter, columns=fields){ const copy={...record}; delete copy['webhookId']; return copy; }
function copyWebhookid(record, value, filter, columns=fields){ return {name:'webhookId', value: record?.['webhookId']}; }
function paramWebhookidInput(record, value, filter, columns=fields){ return {field:'webhookId', mode:'input', value: record?.['webhookId']}; }
function paramWebhookidFilter(record, value, filter, columns=fields){ return {field:'webhookId', mode:'filter', value: filter?.['webhookId']}; }
function paramWebhookidExport(record, value, filter, columns=fields){ return {field:'webhookId', mode:'export', included: columns.includes('webhookId')}; }
function getEvent(record, value, filter, columns=fields){ return record?.['event']; }
function hasEvent(record, value, filter, columns=fields){ return record?.['event'] !== undefined && record?.['event'] !== null && record?.['event'] !== ''; }
function withEvent(record, value, filter, columns=fields){ return {...record, ['event']: value}; }
function clearEvent(record, value, filter, columns=fields){ const copy={...record}; delete copy['event']; return copy; }
function copyEvent(record, value, filter, columns=fields){ return {name:'event', value: record?.['event']}; }
function paramEventInput(record, value, filter, columns=fields){ return {field:'event', mode:'input', value: record?.['event']}; }
function paramEventFilter(record, value, filter, columns=fields){ return {field:'event', mode:'filter', value: filter?.['event']}; }
function paramEventExport(record, value, filter, columns=fields){ return {field:'event', mode:'export', included: columns.includes('event')}; }
function getPayload(record, value, filter, columns=fields){ return record?.['payload']; }
function hasPayload(record, value, filter, columns=fields){ return record?.['payload'] !== undefined && record?.['payload'] !== null && record?.['payload'] !== ''; }
function withPayload(record, value, filter, columns=fields){ return {...record, ['payload']: value}; }
function clearPayload(record, value, filter, columns=fields){ const copy={...record}; delete copy['payload']; return copy; }
function copyPayload(record, value, filter, columns=fields){ return {name:'payload', value: record?.['payload']}; }
function paramPayloadInput(record, value, filter, columns=fields){ return {field:'payload', mode:'input', value: record?.['payload']}; }
function paramPayloadFilter(record, value, filter, columns=fields){ return {field:'payload', mode:'filter', value: filter?.['payload']}; }
function paramPayloadExport(record, value, filter, columns=fields){ return {field:'payload', mode:'export', included: columns.includes('payload')}; }
function getAttempt(record, value, filter, columns=fields){ return record?.['attempt']; }
function hasAttempt(record, value, filter, columns=fields){ return record?.['attempt'] !== undefined && record?.['attempt'] !== null && record?.['attempt'] !== ''; }
function withAttempt(record, value, filter, columns=fields){ return {...record, ['attempt']: value}; }
function clearAttempt(record, value, filter, columns=fields){ const copy={...record}; delete copy['attempt']; return copy; }
function copyAttempt(record, value, filter, columns=fields){ return {name:'attempt', value: record?.['attempt']}; }
function paramAttemptInput(record, value, filter, columns=fields){ return {field:'attempt', mode:'input', value: record?.['attempt']}; }
function paramAttemptFilter(record, value, filter, columns=fields){ return {field:'attempt', mode:'filter', value: filter?.['attempt']}; }
function paramAttemptExport(record, value, filter, columns=fields){ return {field:'attempt', mode:'export', included: columns.includes('attempt')}; }
function getNextretryat(record, value, filter, columns=fields){ return record?.['nextRetryAt']; }
function hasNextretryat(record, value, filter, columns=fields){ return record?.['nextRetryAt'] !== undefined && record?.['nextRetryAt'] !== null && record?.['nextRetryAt'] !== ''; }
function withNextretryat(record, value, filter, columns=fields){ return {...record, ['nextRetryAt']: value}; }
function clearNextretryat(record, value, filter, columns=fields){ const copy={...record}; delete copy['nextRetryAt']; return copy; }
function copyNextretryat(record, value, filter, columns=fields){ return {name:'nextRetryAt', value: record?.['nextRetryAt']}; }
function paramNextretryatInput(record, value, filter, columns=fields){ return {field:'nextRetryAt', mode:'input', value: record?.['nextRetryAt']}; }
function paramNextretryatFilter(record, value, filter, columns=fields){ return {field:'nextRetryAt', mode:'filter', value: filter?.['nextRetryAt']}; }
function paramNextretryatExport(record, value, filter, columns=fields){ return {field:'nextRetryAt', mode:'export', included: columns.includes('nextRetryAt')}; }
function getDeliveredat(record, value, filter, columns=fields){ return record?.['deliveredAt']; }
function hasDeliveredat(record, value, filter, columns=fields){ return record?.['deliveredAt'] !== undefined && record?.['deliveredAt'] !== null && record?.['deliveredAt'] !== ''; }
function withDeliveredat(record, value, filter, columns=fields){ return {...record, ['deliveredAt']: value}; }
function clearDeliveredat(record, value, filter, columns=fields){ const copy={...record}; delete copy['deliveredAt']; return copy; }
function copyDeliveredat(record, value, filter, columns=fields){ return {name:'deliveredAt', value: record?.['deliveredAt']}; }
function paramDeliveredatInput(record, value, filter, columns=fields){ return {field:'deliveredAt', mode:'input', value: record?.['deliveredAt']}; }
function paramDeliveredatFilter(record, value, filter, columns=fields){ return {field:'deliveredAt', mode:'filter', value: filter?.['deliveredAt']}; }
function paramDeliveredatExport(record, value, filter, columns=fields){ return {field:'deliveredAt', mode:'export', included: columns.includes('deliveredAt')}; }
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
