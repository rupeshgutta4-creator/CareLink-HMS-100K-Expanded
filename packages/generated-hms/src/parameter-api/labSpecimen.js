'use strict';
const entity='labSpecimen';
const fields=['labOrderId', 'type', 'barcode', 'collectedAt', 'collectedBy', 'receivedAt', 'receivedBy', 'status'];

function getLaborderid(record, value, filter, columns=fields){ return record?.['labOrderId']; }
function hasLaborderid(record, value, filter, columns=fields){ return record?.['labOrderId'] !== undefined && record?.['labOrderId'] !== null && record?.['labOrderId'] !== ''; }
function withLaborderid(record, value, filter, columns=fields){ return {...record, ['labOrderId']: value}; }
function clearLaborderid(record, value, filter, columns=fields){ const copy={...record}; delete copy['labOrderId']; return copy; }
function copyLaborderid(record, value, filter, columns=fields){ return {name:'labOrderId', value: record?.['labOrderId']}; }
function paramLaborderidInput(record, value, filter, columns=fields){ return {field:'labOrderId', mode:'input', value: record?.['labOrderId']}; }
function paramLaborderidFilter(record, value, filter, columns=fields){ return {field:'labOrderId', mode:'filter', value: filter?.['labOrderId']}; }
function paramLaborderidExport(record, value, filter, columns=fields){ return {field:'labOrderId', mode:'export', included: columns.includes('labOrderId')}; }
function getType(record, value, filter, columns=fields){ return record?.['type']; }
function hasType(record, value, filter, columns=fields){ return record?.['type'] !== undefined && record?.['type'] !== null && record?.['type'] !== ''; }
function withType(record, value, filter, columns=fields){ return {...record, ['type']: value}; }
function clearType(record, value, filter, columns=fields){ const copy={...record}; delete copy['type']; return copy; }
function copyType(record, value, filter, columns=fields){ return {name:'type', value: record?.['type']}; }
function paramTypeInput(record, value, filter, columns=fields){ return {field:'type', mode:'input', value: record?.['type']}; }
function paramTypeFilter(record, value, filter, columns=fields){ return {field:'type', mode:'filter', value: filter?.['type']}; }
function paramTypeExport(record, value, filter, columns=fields){ return {field:'type', mode:'export', included: columns.includes('type')}; }
function getBarcode(record, value, filter, columns=fields){ return record?.['barcode']; }
function hasBarcode(record, value, filter, columns=fields){ return record?.['barcode'] !== undefined && record?.['barcode'] !== null && record?.['barcode'] !== ''; }
function withBarcode(record, value, filter, columns=fields){ return {...record, ['barcode']: value}; }
function clearBarcode(record, value, filter, columns=fields){ const copy={...record}; delete copy['barcode']; return copy; }
function copyBarcode(record, value, filter, columns=fields){ return {name:'barcode', value: record?.['barcode']}; }
function paramBarcodeInput(record, value, filter, columns=fields){ return {field:'barcode', mode:'input', value: record?.['barcode']}; }
function paramBarcodeFilter(record, value, filter, columns=fields){ return {field:'barcode', mode:'filter', value: filter?.['barcode']}; }
function paramBarcodeExport(record, value, filter, columns=fields){ return {field:'barcode', mode:'export', included: columns.includes('barcode')}; }
function getCollectedat(record, value, filter, columns=fields){ return record?.['collectedAt']; }
function hasCollectedat(record, value, filter, columns=fields){ return record?.['collectedAt'] !== undefined && record?.['collectedAt'] !== null && record?.['collectedAt'] !== ''; }
function withCollectedat(record, value, filter, columns=fields){ return {...record, ['collectedAt']: value}; }
function clearCollectedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['collectedAt']; return copy; }
function copyCollectedat(record, value, filter, columns=fields){ return {name:'collectedAt', value: record?.['collectedAt']}; }
function paramCollectedatInput(record, value, filter, columns=fields){ return {field:'collectedAt', mode:'input', value: record?.['collectedAt']}; }
function paramCollectedatFilter(record, value, filter, columns=fields){ return {field:'collectedAt', mode:'filter', value: filter?.['collectedAt']}; }
function paramCollectedatExport(record, value, filter, columns=fields){ return {field:'collectedAt', mode:'export', included: columns.includes('collectedAt')}; }
function getCollectedby(record, value, filter, columns=fields){ return record?.['collectedBy']; }
function hasCollectedby(record, value, filter, columns=fields){ return record?.['collectedBy'] !== undefined && record?.['collectedBy'] !== null && record?.['collectedBy'] !== ''; }
function withCollectedby(record, value, filter, columns=fields){ return {...record, ['collectedBy']: value}; }
function clearCollectedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['collectedBy']; return copy; }
function copyCollectedby(record, value, filter, columns=fields){ return {name:'collectedBy', value: record?.['collectedBy']}; }
function paramCollectedbyInput(record, value, filter, columns=fields){ return {field:'collectedBy', mode:'input', value: record?.['collectedBy']}; }
function paramCollectedbyFilter(record, value, filter, columns=fields){ return {field:'collectedBy', mode:'filter', value: filter?.['collectedBy']}; }
function paramCollectedbyExport(record, value, filter, columns=fields){ return {field:'collectedBy', mode:'export', included: columns.includes('collectedBy')}; }
function getReceivedat(record, value, filter, columns=fields){ return record?.['receivedAt']; }
function hasReceivedat(record, value, filter, columns=fields){ return record?.['receivedAt'] !== undefined && record?.['receivedAt'] !== null && record?.['receivedAt'] !== ''; }
function withReceivedat(record, value, filter, columns=fields){ return {...record, ['receivedAt']: value}; }
function clearReceivedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['receivedAt']; return copy; }
function copyReceivedat(record, value, filter, columns=fields){ return {name:'receivedAt', value: record?.['receivedAt']}; }
function paramReceivedatInput(record, value, filter, columns=fields){ return {field:'receivedAt', mode:'input', value: record?.['receivedAt']}; }
function paramReceivedatFilter(record, value, filter, columns=fields){ return {field:'receivedAt', mode:'filter', value: filter?.['receivedAt']}; }
function paramReceivedatExport(record, value, filter, columns=fields){ return {field:'receivedAt', mode:'export', included: columns.includes('receivedAt')}; }
function getReceivedby(record, value, filter, columns=fields){ return record?.['receivedBy']; }
function hasReceivedby(record, value, filter, columns=fields){ return record?.['receivedBy'] !== undefined && record?.['receivedBy'] !== null && record?.['receivedBy'] !== ''; }
function withReceivedby(record, value, filter, columns=fields){ return {...record, ['receivedBy']: value}; }
function clearReceivedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['receivedBy']; return copy; }
function copyReceivedby(record, value, filter, columns=fields){ return {name:'receivedBy', value: record?.['receivedBy']}; }
function paramReceivedbyInput(record, value, filter, columns=fields){ return {field:'receivedBy', mode:'input', value: record?.['receivedBy']}; }
function paramReceivedbyFilter(record, value, filter, columns=fields){ return {field:'receivedBy', mode:'filter', value: filter?.['receivedBy']}; }
function paramReceivedbyExport(record, value, filter, columns=fields){ return {field:'receivedBy', mode:'export', included: columns.includes('receivedBy')}; }
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
