'use strict';
const entity='checklistRun';
const fields=['checklistId', 'entityId', 'startedAt', 'completedAt', 'answers', 'score', 'status'];

function getChecklistid(record, value, filter, columns=fields){ return record?.['checklistId']; }
function hasChecklistid(record, value, filter, columns=fields){ return record?.['checklistId'] !== undefined && record?.['checklistId'] !== null && record?.['checklistId'] !== ''; }
function withChecklistid(record, value, filter, columns=fields){ return {...record, ['checklistId']: value}; }
function clearChecklistid(record, value, filter, columns=fields){ const copy={...record}; delete copy['checklistId']; return copy; }
function copyChecklistid(record, value, filter, columns=fields){ return {name:'checklistId', value: record?.['checklistId']}; }
function paramChecklistidInput(record, value, filter, columns=fields){ return {field:'checklistId', mode:'input', value: record?.['checklistId']}; }
function paramChecklistidFilter(record, value, filter, columns=fields){ return {field:'checklistId', mode:'filter', value: filter?.['checklistId']}; }
function paramChecklistidExport(record, value, filter, columns=fields){ return {field:'checklistId', mode:'export', included: columns.includes('checklistId')}; }
function getEntityid(record, value, filter, columns=fields){ return record?.['entityId']; }
function hasEntityid(record, value, filter, columns=fields){ return record?.['entityId'] !== undefined && record?.['entityId'] !== null && record?.['entityId'] !== ''; }
function withEntityid(record, value, filter, columns=fields){ return {...record, ['entityId']: value}; }
function clearEntityid(record, value, filter, columns=fields){ const copy={...record}; delete copy['entityId']; return copy; }
function copyEntityid(record, value, filter, columns=fields){ return {name:'entityId', value: record?.['entityId']}; }
function paramEntityidInput(record, value, filter, columns=fields){ return {field:'entityId', mode:'input', value: record?.['entityId']}; }
function paramEntityidFilter(record, value, filter, columns=fields){ return {field:'entityId', mode:'filter', value: filter?.['entityId']}; }
function paramEntityidExport(record, value, filter, columns=fields){ return {field:'entityId', mode:'export', included: columns.includes('entityId')}; }
function getStartedat(record, value, filter, columns=fields){ return record?.['startedAt']; }
function hasStartedat(record, value, filter, columns=fields){ return record?.['startedAt'] !== undefined && record?.['startedAt'] !== null && record?.['startedAt'] !== ''; }
function withStartedat(record, value, filter, columns=fields){ return {...record, ['startedAt']: value}; }
function clearStartedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['startedAt']; return copy; }
function copyStartedat(record, value, filter, columns=fields){ return {name:'startedAt', value: record?.['startedAt']}; }
function paramStartedatInput(record, value, filter, columns=fields){ return {field:'startedAt', mode:'input', value: record?.['startedAt']}; }
function paramStartedatFilter(record, value, filter, columns=fields){ return {field:'startedAt', mode:'filter', value: filter?.['startedAt']}; }
function paramStartedatExport(record, value, filter, columns=fields){ return {field:'startedAt', mode:'export', included: columns.includes('startedAt')}; }
function getCompletedat(record, value, filter, columns=fields){ return record?.['completedAt']; }
function hasCompletedat(record, value, filter, columns=fields){ return record?.['completedAt'] !== undefined && record?.['completedAt'] !== null && record?.['completedAt'] !== ''; }
function withCompletedat(record, value, filter, columns=fields){ return {...record, ['completedAt']: value}; }
function clearCompletedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['completedAt']; return copy; }
function copyCompletedat(record, value, filter, columns=fields){ return {name:'completedAt', value: record?.['completedAt']}; }
function paramCompletedatInput(record, value, filter, columns=fields){ return {field:'completedAt', mode:'input', value: record?.['completedAt']}; }
function paramCompletedatFilter(record, value, filter, columns=fields){ return {field:'completedAt', mode:'filter', value: filter?.['completedAt']}; }
function paramCompletedatExport(record, value, filter, columns=fields){ return {field:'completedAt', mode:'export', included: columns.includes('completedAt')}; }
function getAnswers(record, value, filter, columns=fields){ return record?.['answers']; }
function hasAnswers(record, value, filter, columns=fields){ return record?.['answers'] !== undefined && record?.['answers'] !== null && record?.['answers'] !== ''; }
function withAnswers(record, value, filter, columns=fields){ return {...record, ['answers']: value}; }
function clearAnswers(record, value, filter, columns=fields){ const copy={...record}; delete copy['answers']; return copy; }
function copyAnswers(record, value, filter, columns=fields){ return {name:'answers', value: record?.['answers']}; }
function paramAnswersInput(record, value, filter, columns=fields){ return {field:'answers', mode:'input', value: record?.['answers']}; }
function paramAnswersFilter(record, value, filter, columns=fields){ return {field:'answers', mode:'filter', value: filter?.['answers']}; }
function paramAnswersExport(record, value, filter, columns=fields){ return {field:'answers', mode:'export', included: columns.includes('answers')}; }
function getScore(record, value, filter, columns=fields){ return record?.['score']; }
function hasScore(record, value, filter, columns=fields){ return record?.['score'] !== undefined && record?.['score'] !== null && record?.['score'] !== ''; }
function withScore(record, value, filter, columns=fields){ return {...record, ['score']: value}; }
function clearScore(record, value, filter, columns=fields){ const copy={...record}; delete copy['score']; return copy; }
function copyScore(record, value, filter, columns=fields){ return {name:'score', value: record?.['score']}; }
function paramScoreInput(record, value, filter, columns=fields){ return {field:'score', mode:'input', value: record?.['score']}; }
function paramScoreFilter(record, value, filter, columns=fields){ return {field:'score', mode:'filter', value: filter?.['score']}; }
function paramScoreExport(record, value, filter, columns=fields){ return {field:'score', mode:'export', included: columns.includes('score')}; }
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
