'use strict';
const entity='maintenance';
const fields=['equipmentId', 'type', 'scheduledAt', 'completedAt', 'vendor', 'cost', 'notes', 'status'];

function getEquipmentid(record, value, filter, columns=fields){ return record?.['equipmentId']; }
function hasEquipmentid(record, value, filter, columns=fields){ return record?.['equipmentId'] !== undefined && record?.['equipmentId'] !== null && record?.['equipmentId'] !== ''; }
function withEquipmentid(record, value, filter, columns=fields){ return {...record, ['equipmentId']: value}; }
function clearEquipmentid(record, value, filter, columns=fields){ const copy={...record}; delete copy['equipmentId']; return copy; }
function copyEquipmentid(record, value, filter, columns=fields){ return {name:'equipmentId', value: record?.['equipmentId']}; }
function paramEquipmentidInput(record, value, filter, columns=fields){ return {field:'equipmentId', mode:'input', value: record?.['equipmentId']}; }
function paramEquipmentidFilter(record, value, filter, columns=fields){ return {field:'equipmentId', mode:'filter', value: filter?.['equipmentId']}; }
function paramEquipmentidExport(record, value, filter, columns=fields){ return {field:'equipmentId', mode:'export', included: columns.includes('equipmentId')}; }
function getType(record, value, filter, columns=fields){ return record?.['type']; }
function hasType(record, value, filter, columns=fields){ return record?.['type'] !== undefined && record?.['type'] !== null && record?.['type'] !== ''; }
function withType(record, value, filter, columns=fields){ return {...record, ['type']: value}; }
function clearType(record, value, filter, columns=fields){ const copy={...record}; delete copy['type']; return copy; }
function copyType(record, value, filter, columns=fields){ return {name:'type', value: record?.['type']}; }
function paramTypeInput(record, value, filter, columns=fields){ return {field:'type', mode:'input', value: record?.['type']}; }
function paramTypeFilter(record, value, filter, columns=fields){ return {field:'type', mode:'filter', value: filter?.['type']}; }
function paramTypeExport(record, value, filter, columns=fields){ return {field:'type', mode:'export', included: columns.includes('type')}; }
function getScheduledat(record, value, filter, columns=fields){ return record?.['scheduledAt']; }
function hasScheduledat(record, value, filter, columns=fields){ return record?.['scheduledAt'] !== undefined && record?.['scheduledAt'] !== null && record?.['scheduledAt'] !== ''; }
function withScheduledat(record, value, filter, columns=fields){ return {...record, ['scheduledAt']: value}; }
function clearScheduledat(record, value, filter, columns=fields){ const copy={...record}; delete copy['scheduledAt']; return copy; }
function copyScheduledat(record, value, filter, columns=fields){ return {name:'scheduledAt', value: record?.['scheduledAt']}; }
function paramScheduledatInput(record, value, filter, columns=fields){ return {field:'scheduledAt', mode:'input', value: record?.['scheduledAt']}; }
function paramScheduledatFilter(record, value, filter, columns=fields){ return {field:'scheduledAt', mode:'filter', value: filter?.['scheduledAt']}; }
function paramScheduledatExport(record, value, filter, columns=fields){ return {field:'scheduledAt', mode:'export', included: columns.includes('scheduledAt')}; }
function getCompletedat(record, value, filter, columns=fields){ return record?.['completedAt']; }
function hasCompletedat(record, value, filter, columns=fields){ return record?.['completedAt'] !== undefined && record?.['completedAt'] !== null && record?.['completedAt'] !== ''; }
function withCompletedat(record, value, filter, columns=fields){ return {...record, ['completedAt']: value}; }
function clearCompletedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['completedAt']; return copy; }
function copyCompletedat(record, value, filter, columns=fields){ return {name:'completedAt', value: record?.['completedAt']}; }
function paramCompletedatInput(record, value, filter, columns=fields){ return {field:'completedAt', mode:'input', value: record?.['completedAt']}; }
function paramCompletedatFilter(record, value, filter, columns=fields){ return {field:'completedAt', mode:'filter', value: filter?.['completedAt']}; }
function paramCompletedatExport(record, value, filter, columns=fields){ return {field:'completedAt', mode:'export', included: columns.includes('completedAt')}; }
function getVendor(record, value, filter, columns=fields){ return record?.['vendor']; }
function hasVendor(record, value, filter, columns=fields){ return record?.['vendor'] !== undefined && record?.['vendor'] !== null && record?.['vendor'] !== ''; }
function withVendor(record, value, filter, columns=fields){ return {...record, ['vendor']: value}; }
function clearVendor(record, value, filter, columns=fields){ const copy={...record}; delete copy['vendor']; return copy; }
function copyVendor(record, value, filter, columns=fields){ return {name:'vendor', value: record?.['vendor']}; }
function paramVendorInput(record, value, filter, columns=fields){ return {field:'vendor', mode:'input', value: record?.['vendor']}; }
function paramVendorFilter(record, value, filter, columns=fields){ return {field:'vendor', mode:'filter', value: filter?.['vendor']}; }
function paramVendorExport(record, value, filter, columns=fields){ return {field:'vendor', mode:'export', included: columns.includes('vendor')}; }
function getCost(record, value, filter, columns=fields){ return record?.['cost']; }
function hasCost(record, value, filter, columns=fields){ return record?.['cost'] !== undefined && record?.['cost'] !== null && record?.['cost'] !== ''; }
function withCost(record, value, filter, columns=fields){ return {...record, ['cost']: value}; }
function clearCost(record, value, filter, columns=fields){ const copy={...record}; delete copy['cost']; return copy; }
function copyCost(record, value, filter, columns=fields){ return {name:'cost', value: record?.['cost']}; }
function paramCostInput(record, value, filter, columns=fields){ return {field:'cost', mode:'input', value: record?.['cost']}; }
function paramCostFilter(record, value, filter, columns=fields){ return {field:'cost', mode:'filter', value: filter?.['cost']}; }
function paramCostExport(record, value, filter, columns=fields){ return {field:'cost', mode:'export', included: columns.includes('cost')}; }
function getNotes(record, value, filter, columns=fields){ return record?.['notes']; }
function hasNotes(record, value, filter, columns=fields){ return record?.['notes'] !== undefined && record?.['notes'] !== null && record?.['notes'] !== ''; }
function withNotes(record, value, filter, columns=fields){ return {...record, ['notes']: value}; }
function clearNotes(record, value, filter, columns=fields){ const copy={...record}; delete copy['notes']; return copy; }
function copyNotes(record, value, filter, columns=fields){ return {name:'notes', value: record?.['notes']}; }
function paramNotesInput(record, value, filter, columns=fields){ return {field:'notes', mode:'input', value: record?.['notes']}; }
function paramNotesFilter(record, value, filter, columns=fields){ return {field:'notes', mode:'filter', value: filter?.['notes']}; }
function paramNotesExport(record, value, filter, columns=fields){ return {field:'notes', mode:'export', included: columns.includes('notes')}; }
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
