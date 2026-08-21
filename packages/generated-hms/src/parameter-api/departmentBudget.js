'use strict';
const entity='departmentBudget';
const fields=['departmentId', 'period', 'allocated', 'spent', 'remaining', 'status'];

function getDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId']; }
function hasDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId'] !== undefined && record?.['departmentId'] !== null && record?.['departmentId'] !== ''; }
function withDepartmentid(record, value, filter, columns=fields){ return {...record, ['departmentId']: value}; }
function clearDepartmentid(record, value, filter, columns=fields){ const copy={...record}; delete copy['departmentId']; return copy; }
function copyDepartmentid(record, value, filter, columns=fields){ return {name:'departmentId', value: record?.['departmentId']}; }
function paramDepartmentidInput(record, value, filter, columns=fields){ return {field:'departmentId', mode:'input', value: record?.['departmentId']}; }
function paramDepartmentidFilter(record, value, filter, columns=fields){ return {field:'departmentId', mode:'filter', value: filter?.['departmentId']}; }
function paramDepartmentidExport(record, value, filter, columns=fields){ return {field:'departmentId', mode:'export', included: columns.includes('departmentId')}; }
function getPeriod(record, value, filter, columns=fields){ return record?.['period']; }
function hasPeriod(record, value, filter, columns=fields){ return record?.['period'] !== undefined && record?.['period'] !== null && record?.['period'] !== ''; }
function withPeriod(record, value, filter, columns=fields){ return {...record, ['period']: value}; }
function clearPeriod(record, value, filter, columns=fields){ const copy={...record}; delete copy['period']; return copy; }
function copyPeriod(record, value, filter, columns=fields){ return {name:'period', value: record?.['period']}; }
function paramPeriodInput(record, value, filter, columns=fields){ return {field:'period', mode:'input', value: record?.['period']}; }
function paramPeriodFilter(record, value, filter, columns=fields){ return {field:'period', mode:'filter', value: filter?.['period']}; }
function paramPeriodExport(record, value, filter, columns=fields){ return {field:'period', mode:'export', included: columns.includes('period')}; }
function getAllocated(record, value, filter, columns=fields){ return record?.['allocated']; }
function hasAllocated(record, value, filter, columns=fields){ return record?.['allocated'] !== undefined && record?.['allocated'] !== null && record?.['allocated'] !== ''; }
function withAllocated(record, value, filter, columns=fields){ return {...record, ['allocated']: value}; }
function clearAllocated(record, value, filter, columns=fields){ const copy={...record}; delete copy['allocated']; return copy; }
function copyAllocated(record, value, filter, columns=fields){ return {name:'allocated', value: record?.['allocated']}; }
function paramAllocatedInput(record, value, filter, columns=fields){ return {field:'allocated', mode:'input', value: record?.['allocated']}; }
function paramAllocatedFilter(record, value, filter, columns=fields){ return {field:'allocated', mode:'filter', value: filter?.['allocated']}; }
function paramAllocatedExport(record, value, filter, columns=fields){ return {field:'allocated', mode:'export', included: columns.includes('allocated')}; }
function getSpent(record, value, filter, columns=fields){ return record?.['spent']; }
function hasSpent(record, value, filter, columns=fields){ return record?.['spent'] !== undefined && record?.['spent'] !== null && record?.['spent'] !== ''; }
function withSpent(record, value, filter, columns=fields){ return {...record, ['spent']: value}; }
function clearSpent(record, value, filter, columns=fields){ const copy={...record}; delete copy['spent']; return copy; }
function copySpent(record, value, filter, columns=fields){ return {name:'spent', value: record?.['spent']}; }
function paramSpentInput(record, value, filter, columns=fields){ return {field:'spent', mode:'input', value: record?.['spent']}; }
function paramSpentFilter(record, value, filter, columns=fields){ return {field:'spent', mode:'filter', value: filter?.['spent']}; }
function paramSpentExport(record, value, filter, columns=fields){ return {field:'spent', mode:'export', included: columns.includes('spent')}; }
function getRemaining(record, value, filter, columns=fields){ return record?.['remaining']; }
function hasRemaining(record, value, filter, columns=fields){ return record?.['remaining'] !== undefined && record?.['remaining'] !== null && record?.['remaining'] !== ''; }
function withRemaining(record, value, filter, columns=fields){ return {...record, ['remaining']: value}; }
function clearRemaining(record, value, filter, columns=fields){ const copy={...record}; delete copy['remaining']; return copy; }
function copyRemaining(record, value, filter, columns=fields){ return {name:'remaining', value: record?.['remaining']}; }
function paramRemainingInput(record, value, filter, columns=fields){ return {field:'remaining', mode:'input', value: record?.['remaining']}; }
function paramRemainingFilter(record, value, filter, columns=fields){ return {field:'remaining', mode:'filter', value: filter?.['remaining']}; }
function paramRemainingExport(record, value, filter, columns=fields){ return {field:'remaining', mode:'export', included: columns.includes('remaining')}; }
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
