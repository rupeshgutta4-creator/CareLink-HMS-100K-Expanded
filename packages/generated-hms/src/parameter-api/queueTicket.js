'use strict';
const entity='queueTicket';
const fields=['patientId', 'departmentId', 'ticketNumber', 'priority', 'issuedAt', 'calledAt', 'servedAt', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId']; }
function hasDepartmentid(record, value, filter, columns=fields){ return record?.['departmentId'] !== undefined && record?.['departmentId'] !== null && record?.['departmentId'] !== ''; }
function withDepartmentid(record, value, filter, columns=fields){ return {...record, ['departmentId']: value}; }
function clearDepartmentid(record, value, filter, columns=fields){ const copy={...record}; delete copy['departmentId']; return copy; }
function copyDepartmentid(record, value, filter, columns=fields){ return {name:'departmentId', value: record?.['departmentId']}; }
function paramDepartmentidInput(record, value, filter, columns=fields){ return {field:'departmentId', mode:'input', value: record?.['departmentId']}; }
function paramDepartmentidFilter(record, value, filter, columns=fields){ return {field:'departmentId', mode:'filter', value: filter?.['departmentId']}; }
function paramDepartmentidExport(record, value, filter, columns=fields){ return {field:'departmentId', mode:'export', included: columns.includes('departmentId')}; }
function getTicketnumber(record, value, filter, columns=fields){ return record?.['ticketNumber']; }
function hasTicketnumber(record, value, filter, columns=fields){ return record?.['ticketNumber'] !== undefined && record?.['ticketNumber'] !== null && record?.['ticketNumber'] !== ''; }
function withTicketnumber(record, value, filter, columns=fields){ return {...record, ['ticketNumber']: value}; }
function clearTicketnumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['ticketNumber']; return copy; }
function copyTicketnumber(record, value, filter, columns=fields){ return {name:'ticketNumber', value: record?.['ticketNumber']}; }
function paramTicketnumberInput(record, value, filter, columns=fields){ return {field:'ticketNumber', mode:'input', value: record?.['ticketNumber']}; }
function paramTicketnumberFilter(record, value, filter, columns=fields){ return {field:'ticketNumber', mode:'filter', value: filter?.['ticketNumber']}; }
function paramTicketnumberExport(record, value, filter, columns=fields){ return {field:'ticketNumber', mode:'export', included: columns.includes('ticketNumber')}; }
function getPriority(record, value, filter, columns=fields){ return record?.['priority']; }
function hasPriority(record, value, filter, columns=fields){ return record?.['priority'] !== undefined && record?.['priority'] !== null && record?.['priority'] !== ''; }
function withPriority(record, value, filter, columns=fields){ return {...record, ['priority']: value}; }
function clearPriority(record, value, filter, columns=fields){ const copy={...record}; delete copy['priority']; return copy; }
function copyPriority(record, value, filter, columns=fields){ return {name:'priority', value: record?.['priority']}; }
function paramPriorityInput(record, value, filter, columns=fields){ return {field:'priority', mode:'input', value: record?.['priority']}; }
function paramPriorityFilter(record, value, filter, columns=fields){ return {field:'priority', mode:'filter', value: filter?.['priority']}; }
function paramPriorityExport(record, value, filter, columns=fields){ return {field:'priority', mode:'export', included: columns.includes('priority')}; }
function getIssuedat(record, value, filter, columns=fields){ return record?.['issuedAt']; }
function hasIssuedat(record, value, filter, columns=fields){ return record?.['issuedAt'] !== undefined && record?.['issuedAt'] !== null && record?.['issuedAt'] !== ''; }
function withIssuedat(record, value, filter, columns=fields){ return {...record, ['issuedAt']: value}; }
function clearIssuedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['issuedAt']; return copy; }
function copyIssuedat(record, value, filter, columns=fields){ return {name:'issuedAt', value: record?.['issuedAt']}; }
function paramIssuedatInput(record, value, filter, columns=fields){ return {field:'issuedAt', mode:'input', value: record?.['issuedAt']}; }
function paramIssuedatFilter(record, value, filter, columns=fields){ return {field:'issuedAt', mode:'filter', value: filter?.['issuedAt']}; }
function paramIssuedatExport(record, value, filter, columns=fields){ return {field:'issuedAt', mode:'export', included: columns.includes('issuedAt')}; }
function getCalledat(record, value, filter, columns=fields){ return record?.['calledAt']; }
function hasCalledat(record, value, filter, columns=fields){ return record?.['calledAt'] !== undefined && record?.['calledAt'] !== null && record?.['calledAt'] !== ''; }
function withCalledat(record, value, filter, columns=fields){ return {...record, ['calledAt']: value}; }
function clearCalledat(record, value, filter, columns=fields){ const copy={...record}; delete copy['calledAt']; return copy; }
function copyCalledat(record, value, filter, columns=fields){ return {name:'calledAt', value: record?.['calledAt']}; }
function paramCalledatInput(record, value, filter, columns=fields){ return {field:'calledAt', mode:'input', value: record?.['calledAt']}; }
function paramCalledatFilter(record, value, filter, columns=fields){ return {field:'calledAt', mode:'filter', value: filter?.['calledAt']}; }
function paramCalledatExport(record, value, filter, columns=fields){ return {field:'calledAt', mode:'export', included: columns.includes('calledAt')}; }
function getServedat(record, value, filter, columns=fields){ return record?.['servedAt']; }
function hasServedat(record, value, filter, columns=fields){ return record?.['servedAt'] !== undefined && record?.['servedAt'] !== null && record?.['servedAt'] !== ''; }
function withServedat(record, value, filter, columns=fields){ return {...record, ['servedAt']: value}; }
function clearServedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['servedAt']; return copy; }
function copyServedat(record, value, filter, columns=fields){ return {name:'servedAt', value: record?.['servedAt']}; }
function paramServedatInput(record, value, filter, columns=fields){ return {field:'servedAt', mode:'input', value: record?.['servedAt']}; }
function paramServedatFilter(record, value, filter, columns=fields){ return {field:'servedAt', mode:'filter', value: filter?.['servedAt']}; }
function paramServedatExport(record, value, filter, columns=fields){ return {field:'servedAt', mode:'export', included: columns.includes('servedAt')}; }
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
