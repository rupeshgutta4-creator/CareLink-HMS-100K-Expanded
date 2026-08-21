'use strict';
const entity='workflowTask';
const fields=['workflowId', 'entityId', 'assigneeId', 'step', 'dueAt', 'completedAt', 'status'];

function getWorkflowid(record, value, filter, columns=fields){ return record?.['workflowId']; }
function hasWorkflowid(record, value, filter, columns=fields){ return record?.['workflowId'] !== undefined && record?.['workflowId'] !== null && record?.['workflowId'] !== ''; }
function withWorkflowid(record, value, filter, columns=fields){ return {...record, ['workflowId']: value}; }
function clearWorkflowid(record, value, filter, columns=fields){ const copy={...record}; delete copy['workflowId']; return copy; }
function copyWorkflowid(record, value, filter, columns=fields){ return {name:'workflowId', value: record?.['workflowId']}; }
function paramWorkflowidInput(record, value, filter, columns=fields){ return {field:'workflowId', mode:'input', value: record?.['workflowId']}; }
function paramWorkflowidFilter(record, value, filter, columns=fields){ return {field:'workflowId', mode:'filter', value: filter?.['workflowId']}; }
function paramWorkflowidExport(record, value, filter, columns=fields){ return {field:'workflowId', mode:'export', included: columns.includes('workflowId')}; }
function getEntityid(record, value, filter, columns=fields){ return record?.['entityId']; }
function hasEntityid(record, value, filter, columns=fields){ return record?.['entityId'] !== undefined && record?.['entityId'] !== null && record?.['entityId'] !== ''; }
function withEntityid(record, value, filter, columns=fields){ return {...record, ['entityId']: value}; }
function clearEntityid(record, value, filter, columns=fields){ const copy={...record}; delete copy['entityId']; return copy; }
function copyEntityid(record, value, filter, columns=fields){ return {name:'entityId', value: record?.['entityId']}; }
function paramEntityidInput(record, value, filter, columns=fields){ return {field:'entityId', mode:'input', value: record?.['entityId']}; }
function paramEntityidFilter(record, value, filter, columns=fields){ return {field:'entityId', mode:'filter', value: filter?.['entityId']}; }
function paramEntityidExport(record, value, filter, columns=fields){ return {field:'entityId', mode:'export', included: columns.includes('entityId')}; }
function getAssigneeid(record, value, filter, columns=fields){ return record?.['assigneeId']; }
function hasAssigneeid(record, value, filter, columns=fields){ return record?.['assigneeId'] !== undefined && record?.['assigneeId'] !== null && record?.['assigneeId'] !== ''; }
function withAssigneeid(record, value, filter, columns=fields){ return {...record, ['assigneeId']: value}; }
function clearAssigneeid(record, value, filter, columns=fields){ const copy={...record}; delete copy['assigneeId']; return copy; }
function copyAssigneeid(record, value, filter, columns=fields){ return {name:'assigneeId', value: record?.['assigneeId']}; }
function paramAssigneeidInput(record, value, filter, columns=fields){ return {field:'assigneeId', mode:'input', value: record?.['assigneeId']}; }
function paramAssigneeidFilter(record, value, filter, columns=fields){ return {field:'assigneeId', mode:'filter', value: filter?.['assigneeId']}; }
function paramAssigneeidExport(record, value, filter, columns=fields){ return {field:'assigneeId', mode:'export', included: columns.includes('assigneeId')}; }
function getStep(record, value, filter, columns=fields){ return record?.['step']; }
function hasStep(record, value, filter, columns=fields){ return record?.['step'] !== undefined && record?.['step'] !== null && record?.['step'] !== ''; }
function withStep(record, value, filter, columns=fields){ return {...record, ['step']: value}; }
function clearStep(record, value, filter, columns=fields){ const copy={...record}; delete copy['step']; return copy; }
function copyStep(record, value, filter, columns=fields){ return {name:'step', value: record?.['step']}; }
function paramStepInput(record, value, filter, columns=fields){ return {field:'step', mode:'input', value: record?.['step']}; }
function paramStepFilter(record, value, filter, columns=fields){ return {field:'step', mode:'filter', value: filter?.['step']}; }
function paramStepExport(record, value, filter, columns=fields){ return {field:'step', mode:'export', included: columns.includes('step')}; }
function getDueat(record, value, filter, columns=fields){ return record?.['dueAt']; }
function hasDueat(record, value, filter, columns=fields){ return record?.['dueAt'] !== undefined && record?.['dueAt'] !== null && record?.['dueAt'] !== ''; }
function withDueat(record, value, filter, columns=fields){ return {...record, ['dueAt']: value}; }
function clearDueat(record, value, filter, columns=fields){ const copy={...record}; delete copy['dueAt']; return copy; }
function copyDueat(record, value, filter, columns=fields){ return {name:'dueAt', value: record?.['dueAt']}; }
function paramDueatInput(record, value, filter, columns=fields){ return {field:'dueAt', mode:'input', value: record?.['dueAt']}; }
function paramDueatFilter(record, value, filter, columns=fields){ return {field:'dueAt', mode:'filter', value: filter?.['dueAt']}; }
function paramDueatExport(record, value, filter, columns=fields){ return {field:'dueAt', mode:'export', included: columns.includes('dueAt')}; }
function getCompletedat(record, value, filter, columns=fields){ return record?.['completedAt']; }
function hasCompletedat(record, value, filter, columns=fields){ return record?.['completedAt'] !== undefined && record?.['completedAt'] !== null && record?.['completedAt'] !== ''; }
function withCompletedat(record, value, filter, columns=fields){ return {...record, ['completedAt']: value}; }
function clearCompletedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['completedAt']; return copy; }
function copyCompletedat(record, value, filter, columns=fields){ return {name:'completedAt', value: record?.['completedAt']}; }
function paramCompletedatInput(record, value, filter, columns=fields){ return {field:'completedAt', mode:'input', value: record?.['completedAt']}; }
function paramCompletedatFilter(record, value, filter, columns=fields){ return {field:'completedAt', mode:'filter', value: filter?.['completedAt']}; }
function paramCompletedatExport(record, value, filter, columns=fields){ return {field:'completedAt', mode:'export', included: columns.includes('completedAt')}; }
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
