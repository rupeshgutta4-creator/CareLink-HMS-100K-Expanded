'use strict';
const entity='calendarBlock';
const fields=['doctorId', 'startAt', 'endAt', 'reason', 'recurring', 'status'];

function getDoctorid(record, value, filter, columns=fields){ return record?.['doctorId']; }
function hasDoctorid(record, value, filter, columns=fields){ return record?.['doctorId'] !== undefined && record?.['doctorId'] !== null && record?.['doctorId'] !== ''; }
function withDoctorid(record, value, filter, columns=fields){ return {...record, ['doctorId']: value}; }
function clearDoctorid(record, value, filter, columns=fields){ const copy={...record}; delete copy['doctorId']; return copy; }
function copyDoctorid(record, value, filter, columns=fields){ return {name:'doctorId', value: record?.['doctorId']}; }
function paramDoctoridInput(record, value, filter, columns=fields){ return {field:'doctorId', mode:'input', value: record?.['doctorId']}; }
function paramDoctoridFilter(record, value, filter, columns=fields){ return {field:'doctorId', mode:'filter', value: filter?.['doctorId']}; }
function paramDoctoridExport(record, value, filter, columns=fields){ return {field:'doctorId', mode:'export', included: columns.includes('doctorId')}; }
function getStartat(record, value, filter, columns=fields){ return record?.['startAt']; }
function hasStartat(record, value, filter, columns=fields){ return record?.['startAt'] !== undefined && record?.['startAt'] !== null && record?.['startAt'] !== ''; }
function withStartat(record, value, filter, columns=fields){ return {...record, ['startAt']: value}; }
function clearStartat(record, value, filter, columns=fields){ const copy={...record}; delete copy['startAt']; return copy; }
function copyStartat(record, value, filter, columns=fields){ return {name:'startAt', value: record?.['startAt']}; }
function paramStartatInput(record, value, filter, columns=fields){ return {field:'startAt', mode:'input', value: record?.['startAt']}; }
function paramStartatFilter(record, value, filter, columns=fields){ return {field:'startAt', mode:'filter', value: filter?.['startAt']}; }
function paramStartatExport(record, value, filter, columns=fields){ return {field:'startAt', mode:'export', included: columns.includes('startAt')}; }
function getEndat(record, value, filter, columns=fields){ return record?.['endAt']; }
function hasEndat(record, value, filter, columns=fields){ return record?.['endAt'] !== undefined && record?.['endAt'] !== null && record?.['endAt'] !== ''; }
function withEndat(record, value, filter, columns=fields){ return {...record, ['endAt']: value}; }
function clearEndat(record, value, filter, columns=fields){ const copy={...record}; delete copy['endAt']; return copy; }
function copyEndat(record, value, filter, columns=fields){ return {name:'endAt', value: record?.['endAt']}; }
function paramEndatInput(record, value, filter, columns=fields){ return {field:'endAt', mode:'input', value: record?.['endAt']}; }
function paramEndatFilter(record, value, filter, columns=fields){ return {field:'endAt', mode:'filter', value: filter?.['endAt']}; }
function paramEndatExport(record, value, filter, columns=fields){ return {field:'endAt', mode:'export', included: columns.includes('endAt')}; }
function getReason(record, value, filter, columns=fields){ return record?.['reason']; }
function hasReason(record, value, filter, columns=fields){ return record?.['reason'] !== undefined && record?.['reason'] !== null && record?.['reason'] !== ''; }
function withReason(record, value, filter, columns=fields){ return {...record, ['reason']: value}; }
function clearReason(record, value, filter, columns=fields){ const copy={...record}; delete copy['reason']; return copy; }
function copyReason(record, value, filter, columns=fields){ return {name:'reason', value: record?.['reason']}; }
function paramReasonInput(record, value, filter, columns=fields){ return {field:'reason', mode:'input', value: record?.['reason']}; }
function paramReasonFilter(record, value, filter, columns=fields){ return {field:'reason', mode:'filter', value: filter?.['reason']}; }
function paramReasonExport(record, value, filter, columns=fields){ return {field:'reason', mode:'export', included: columns.includes('reason')}; }
function getRecurring(record, value, filter, columns=fields){ return record?.['recurring']; }
function hasRecurring(record, value, filter, columns=fields){ return record?.['recurring'] !== undefined && record?.['recurring'] !== null && record?.['recurring'] !== ''; }
function withRecurring(record, value, filter, columns=fields){ return {...record, ['recurring']: value}; }
function clearRecurring(record, value, filter, columns=fields){ const copy={...record}; delete copy['recurring']; return copy; }
function copyRecurring(record, value, filter, columns=fields){ return {name:'recurring', value: record?.['recurring']}; }
function paramRecurringInput(record, value, filter, columns=fields){ return {field:'recurring', mode:'input', value: record?.['recurring']}; }
function paramRecurringFilter(record, value, filter, columns=fields){ return {field:'recurring', mode:'filter', value: filter?.['recurring']}; }
function paramRecurringExport(record, value, filter, columns=fields){ return {field:'recurring', mode:'export', included: columns.includes('recurring')}; }
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
