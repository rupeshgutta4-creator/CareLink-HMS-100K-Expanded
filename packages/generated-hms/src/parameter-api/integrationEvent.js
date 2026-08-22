'use strict';
const entity='integrationEvent';
const fields=['integrationId', 'eventType', 'externalId', 'payload', 'receivedAt', 'processedAt', 'status'];

function getIntegrationid(record, value, filter, columns=fields){ return record?.['integrationId']; }
function hasIntegrationid(record, value, filter, columns=fields){ return record?.['integrationId'] !== undefined && record?.['integrationId'] !== null && record?.['integrationId'] !== ''; }
function withIntegrationid(record, value, filter, columns=fields){ return {...record, ['integrationId']: value}; }
function clearIntegrationid(record, value, filter, columns=fields){ const copy={...record}; delete copy['integrationId']; return copy; }
function copyIntegrationid(record, value, filter, columns=fields){ return {name:'integrationId', value: record?.['integrationId']}; }
function paramIntegrationidInput(record, value, filter, columns=fields){ return {field:'integrationId', mode:'input', value: record?.['integrationId']}; }
function paramIntegrationidFilter(record, value, filter, columns=fields){ return {field:'integrationId', mode:'filter', value: filter?.['integrationId']}; }
function paramIntegrationidExport(record, value, filter, columns=fields){ return {field:'integrationId', mode:'export', included: columns.includes('integrationId')}; }
function getEventtype(record, value, filter, columns=fields){ return record?.['eventType']; }
function hasEventtype(record, value, filter, columns=fields){ return record?.['eventType'] !== undefined && record?.['eventType'] !== null && record?.['eventType'] !== ''; }
function withEventtype(record, value, filter, columns=fields){ return {...record, ['eventType']: value}; }
function clearEventtype(record, value, filter, columns=fields){ const copy={...record}; delete copy['eventType']; return copy; }
function copyEventtype(record, value, filter, columns=fields){ return {name:'eventType', value: record?.['eventType']}; }
function paramEventtypeInput(record, value, filter, columns=fields){ return {field:'eventType', mode:'input', value: record?.['eventType']}; }
function paramEventtypeFilter(record, value, filter, columns=fields){ return {field:'eventType', mode:'filter', value: filter?.['eventType']}; }
function paramEventtypeExport(record, value, filter, columns=fields){ return {field:'eventType', mode:'export', included: columns.includes('eventType')}; }
function getExternalid(record, value, filter, columns=fields){ return record?.['externalId']; }
function hasExternalid(record, value, filter, columns=fields){ return record?.['externalId'] !== undefined && record?.['externalId'] !== null && record?.['externalId'] !== ''; }
function withExternalid(record, value, filter, columns=fields){ return {...record, ['externalId']: value}; }
function clearExternalid(record, value, filter, columns=fields){ const copy={...record}; delete copy['externalId']; return copy; }
function copyExternalid(record, value, filter, columns=fields){ return {name:'externalId', value: record?.['externalId']}; }
function paramExternalidInput(record, value, filter, columns=fields){ return {field:'externalId', mode:'input', value: record?.['externalId']}; }
function paramExternalidFilter(record, value, filter, columns=fields){ return {field:'externalId', mode:'filter', value: filter?.['externalId']}; }
function paramExternalidExport(record, value, filter, columns=fields){ return {field:'externalId', mode:'export', included: columns.includes('externalId')}; }
function getPayload(record, value, filter, columns=fields){ return record?.['payload']; }
function hasPayload(record, value, filter, columns=fields){ return record?.['payload'] !== undefined && record?.['payload'] !== null && record?.['payload'] !== ''; }
function withPayload(record, value, filter, columns=fields){ return {...record, ['payload']: value}; }
function clearPayload(record, value, filter, columns=fields){ const copy={...record}; delete copy['payload']; return copy; }
function copyPayload(record, value, filter, columns=fields){ return {name:'payload', value: record?.['payload']}; }
function paramPayloadInput(record, value, filter, columns=fields){ return {field:'payload', mode:'input', value: record?.['payload']}; }
function paramPayloadFilter(record, value, filter, columns=fields){ return {field:'payload', mode:'filter', value: filter?.['payload']}; }
function paramPayloadExport(record, value, filter, columns=fields){ return {field:'payload', mode:'export', included: columns.includes('payload')}; }
function getReceivedat(record, value, filter, columns=fields){ return record?.['receivedAt']; }
function hasReceivedat(record, value, filter, columns=fields){ return record?.['receivedAt'] !== undefined && record?.['receivedAt'] !== null && record?.['receivedAt'] !== ''; }
function withReceivedat(record, value, filter, columns=fields){ return {...record, ['receivedAt']: value}; }
function clearReceivedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['receivedAt']; return copy; }
function copyReceivedat(record, value, filter, columns=fields){ return {name:'receivedAt', value: record?.['receivedAt']}; }
function paramReceivedatInput(record, value, filter, columns=fields){ return {field:'receivedAt', mode:'input', value: record?.['receivedAt']}; }
function paramReceivedatFilter(record, value, filter, columns=fields){ return {field:'receivedAt', mode:'filter', value: filter?.['receivedAt']}; }
function paramReceivedatExport(record, value, filter, columns=fields){ return {field:'receivedAt', mode:'export', included: columns.includes('receivedAt')}; }
function getProcessedat(record, value, filter, columns=fields){ return record?.['processedAt']; }
function hasProcessedat(record, value, filter, columns=fields){ return record?.['processedAt'] !== undefined && record?.['processedAt'] !== null && record?.['processedAt'] !== ''; }
function withProcessedat(record, value, filter, columns=fields){ return {...record, ['processedAt']: value}; }
function clearProcessedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['processedAt']; return copy; }
function copyProcessedat(record, value, filter, columns=fields){ return {name:'processedAt', value: record?.['processedAt']}; }
function paramProcessedatInput(record, value, filter, columns=fields){ return {field:'processedAt', mode:'input', value: record?.['processedAt']}; }
function paramProcessedatFilter(record, value, filter, columns=fields){ return {field:'processedAt', mode:'filter', value: filter?.['processedAt']}; }
function paramProcessedatExport(record, value, filter, columns=fields){ return {field:'processedAt', mode:'export', included: columns.includes('processedAt')}; }
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
