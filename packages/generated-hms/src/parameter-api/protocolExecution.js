'use strict';
const entity='protocolExecution';
const fields=['protocolId', 'patientId', 'visitId', 'startedAt', 'completedAt', 'stepResults', 'status'];

function getProtocolid(record, value, filter, columns=fields){ return record?.['protocolId']; }
function hasProtocolid(record, value, filter, columns=fields){ return record?.['protocolId'] !== undefined && record?.['protocolId'] !== null && record?.['protocolId'] !== ''; }
function withProtocolid(record, value, filter, columns=fields){ return {...record, ['protocolId']: value}; }
function clearProtocolid(record, value, filter, columns=fields){ const copy={...record}; delete copy['protocolId']; return copy; }
function copyProtocolid(record, value, filter, columns=fields){ return {name:'protocolId', value: record?.['protocolId']}; }
function paramProtocolidInput(record, value, filter, columns=fields){ return {field:'protocolId', mode:'input', value: record?.['protocolId']}; }
function paramProtocolidFilter(record, value, filter, columns=fields){ return {field:'protocolId', mode:'filter', value: filter?.['protocolId']}; }
function paramProtocolidExport(record, value, filter, columns=fields){ return {field:'protocolId', mode:'export', included: columns.includes('protocolId')}; }
function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getVisitid(record, value, filter, columns=fields){ return record?.['visitId']; }
function hasVisitid(record, value, filter, columns=fields){ return record?.['visitId'] !== undefined && record?.['visitId'] !== null && record?.['visitId'] !== ''; }
function withVisitid(record, value, filter, columns=fields){ return {...record, ['visitId']: value}; }
function clearVisitid(record, value, filter, columns=fields){ const copy={...record}; delete copy['visitId']; return copy; }
function copyVisitid(record, value, filter, columns=fields){ return {name:'visitId', value: record?.['visitId']}; }
function paramVisitidInput(record, value, filter, columns=fields){ return {field:'visitId', mode:'input', value: record?.['visitId']}; }
function paramVisitidFilter(record, value, filter, columns=fields){ return {field:'visitId', mode:'filter', value: filter?.['visitId']}; }
function paramVisitidExport(record, value, filter, columns=fields){ return {field:'visitId', mode:'export', included: columns.includes('visitId')}; }
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
function getStepresults(record, value, filter, columns=fields){ return record?.['stepResults']; }
function hasStepresults(record, value, filter, columns=fields){ return record?.['stepResults'] !== undefined && record?.['stepResults'] !== null && record?.['stepResults'] !== ''; }
function withStepresults(record, value, filter, columns=fields){ return {...record, ['stepResults']: value}; }
function clearStepresults(record, value, filter, columns=fields){ const copy={...record}; delete copy['stepResults']; return copy; }
function copyStepresults(record, value, filter, columns=fields){ return {name:'stepResults', value: record?.['stepResults']}; }
function paramStepresultsInput(record, value, filter, columns=fields){ return {field:'stepResults', mode:'input', value: record?.['stepResults']}; }
function paramStepresultsFilter(record, value, filter, columns=fields){ return {field:'stepResults', mode:'filter', value: filter?.['stepResults']}; }
function paramStepresultsExport(record, value, filter, columns=fields){ return {field:'stepResults', mode:'export', included: columns.includes('stepResults')}; }
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
