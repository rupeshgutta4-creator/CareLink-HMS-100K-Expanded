'use strict';
const entity='qualityIndicator';
const fields=['code', 'name', 'numeratorQuery', 'denominatorQuery', 'target', 'period', 'status'];

function getCode(record, value, filter, columns=fields){ return record?.['code']; }
function hasCode(record, value, filter, columns=fields){ return record?.['code'] !== undefined && record?.['code'] !== null && record?.['code'] !== ''; }
function withCode(record, value, filter, columns=fields){ return {...record, ['code']: value}; }
function clearCode(record, value, filter, columns=fields){ const copy={...record}; delete copy['code']; return copy; }
function copyCode(record, value, filter, columns=fields){ return {name:'code', value: record?.['code']}; }
function paramCodeInput(record, value, filter, columns=fields){ return {field:'code', mode:'input', value: record?.['code']}; }
function paramCodeFilter(record, value, filter, columns=fields){ return {field:'code', mode:'filter', value: filter?.['code']}; }
function paramCodeExport(record, value, filter, columns=fields){ return {field:'code', mode:'export', included: columns.includes('code')}; }
function getName(record, value, filter, columns=fields){ return record?.['name']; }
function hasName(record, value, filter, columns=fields){ return record?.['name'] !== undefined && record?.['name'] !== null && record?.['name'] !== ''; }
function withName(record, value, filter, columns=fields){ return {...record, ['name']: value}; }
function clearName(record, value, filter, columns=fields){ const copy={...record}; delete copy['name']; return copy; }
function copyName(record, value, filter, columns=fields){ return {name:'name', value: record?.['name']}; }
function paramNameInput(record, value, filter, columns=fields){ return {field:'name', mode:'input', value: record?.['name']}; }
function paramNameFilter(record, value, filter, columns=fields){ return {field:'name', mode:'filter', value: filter?.['name']}; }
function paramNameExport(record, value, filter, columns=fields){ return {field:'name', mode:'export', included: columns.includes('name')}; }
function getNumeratorquery(record, value, filter, columns=fields){ return record?.['numeratorQuery']; }
function hasNumeratorquery(record, value, filter, columns=fields){ return record?.['numeratorQuery'] !== undefined && record?.['numeratorQuery'] !== null && record?.['numeratorQuery'] !== ''; }
function withNumeratorquery(record, value, filter, columns=fields){ return {...record, ['numeratorQuery']: value}; }
function clearNumeratorquery(record, value, filter, columns=fields){ const copy={...record}; delete copy['numeratorQuery']; return copy; }
function copyNumeratorquery(record, value, filter, columns=fields){ return {name:'numeratorQuery', value: record?.['numeratorQuery']}; }
function paramNumeratorqueryInput(record, value, filter, columns=fields){ return {field:'numeratorQuery', mode:'input', value: record?.['numeratorQuery']}; }
function paramNumeratorqueryFilter(record, value, filter, columns=fields){ return {field:'numeratorQuery', mode:'filter', value: filter?.['numeratorQuery']}; }
function paramNumeratorqueryExport(record, value, filter, columns=fields){ return {field:'numeratorQuery', mode:'export', included: columns.includes('numeratorQuery')}; }
function getDenominatorquery(record, value, filter, columns=fields){ return record?.['denominatorQuery']; }
function hasDenominatorquery(record, value, filter, columns=fields){ return record?.['denominatorQuery'] !== undefined && record?.['denominatorQuery'] !== null && record?.['denominatorQuery'] !== ''; }
function withDenominatorquery(record, value, filter, columns=fields){ return {...record, ['denominatorQuery']: value}; }
function clearDenominatorquery(record, value, filter, columns=fields){ const copy={...record}; delete copy['denominatorQuery']; return copy; }
function copyDenominatorquery(record, value, filter, columns=fields){ return {name:'denominatorQuery', value: record?.['denominatorQuery']}; }
function paramDenominatorqueryInput(record, value, filter, columns=fields){ return {field:'denominatorQuery', mode:'input', value: record?.['denominatorQuery']}; }
function paramDenominatorqueryFilter(record, value, filter, columns=fields){ return {field:'denominatorQuery', mode:'filter', value: filter?.['denominatorQuery']}; }
function paramDenominatorqueryExport(record, value, filter, columns=fields){ return {field:'denominatorQuery', mode:'export', included: columns.includes('denominatorQuery')}; }
function getTarget(record, value, filter, columns=fields){ return record?.['target']; }
function hasTarget(record, value, filter, columns=fields){ return record?.['target'] !== undefined && record?.['target'] !== null && record?.['target'] !== ''; }
function withTarget(record, value, filter, columns=fields){ return {...record, ['target']: value}; }
function clearTarget(record, value, filter, columns=fields){ const copy={...record}; delete copy['target']; return copy; }
function copyTarget(record, value, filter, columns=fields){ return {name:'target', value: record?.['target']}; }
function paramTargetInput(record, value, filter, columns=fields){ return {field:'target', mode:'input', value: record?.['target']}; }
function paramTargetFilter(record, value, filter, columns=fields){ return {field:'target', mode:'filter', value: filter?.['target']}; }
function paramTargetExport(record, value, filter, columns=fields){ return {field:'target', mode:'export', included: columns.includes('target')}; }
function getPeriod(record, value, filter, columns=fields){ return record?.['period']; }
function hasPeriod(record, value, filter, columns=fields){ return record?.['period'] !== undefined && record?.['period'] !== null && record?.['period'] !== ''; }
function withPeriod(record, value, filter, columns=fields){ return {...record, ['period']: value}; }
function clearPeriod(record, value, filter, columns=fields){ const copy={...record}; delete copy['period']; return copy; }
function copyPeriod(record, value, filter, columns=fields){ return {name:'period', value: record?.['period']}; }
function paramPeriodInput(record, value, filter, columns=fields){ return {field:'period', mode:'input', value: record?.['period']}; }
function paramPeriodFilter(record, value, filter, columns=fields){ return {field:'period', mode:'filter', value: filter?.['period']}; }
function paramPeriodExport(record, value, filter, columns=fields){ return {field:'period', mode:'export', included: columns.includes('period')}; }
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
