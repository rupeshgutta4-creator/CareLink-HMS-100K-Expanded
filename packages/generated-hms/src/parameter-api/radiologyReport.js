'use strict';
const entity='radiologyReport';
const fields=['radiologyOrderId', 'patientId', 'findings', 'impression', 'reportedBy', 'reportedAt', 'status'];

function getRadiologyorderid(record, value, filter, columns=fields){ return record?.['radiologyOrderId']; }
function hasRadiologyorderid(record, value, filter, columns=fields){ return record?.['radiologyOrderId'] !== undefined && record?.['radiologyOrderId'] !== null && record?.['radiologyOrderId'] !== ''; }
function withRadiologyorderid(record, value, filter, columns=fields){ return {...record, ['radiologyOrderId']: value}; }
function clearRadiologyorderid(record, value, filter, columns=fields){ const copy={...record}; delete copy['radiologyOrderId']; return copy; }
function copyRadiologyorderid(record, value, filter, columns=fields){ return {name:'radiologyOrderId', value: record?.['radiologyOrderId']}; }
function paramRadiologyorderidInput(record, value, filter, columns=fields){ return {field:'radiologyOrderId', mode:'input', value: record?.['radiologyOrderId']}; }
function paramRadiologyorderidFilter(record, value, filter, columns=fields){ return {field:'radiologyOrderId', mode:'filter', value: filter?.['radiologyOrderId']}; }
function paramRadiologyorderidExport(record, value, filter, columns=fields){ return {field:'radiologyOrderId', mode:'export', included: columns.includes('radiologyOrderId')}; }
function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getFindings(record, value, filter, columns=fields){ return record?.['findings']; }
function hasFindings(record, value, filter, columns=fields){ return record?.['findings'] !== undefined && record?.['findings'] !== null && record?.['findings'] !== ''; }
function withFindings(record, value, filter, columns=fields){ return {...record, ['findings']: value}; }
function clearFindings(record, value, filter, columns=fields){ const copy={...record}; delete copy['findings']; return copy; }
function copyFindings(record, value, filter, columns=fields){ return {name:'findings', value: record?.['findings']}; }
function paramFindingsInput(record, value, filter, columns=fields){ return {field:'findings', mode:'input', value: record?.['findings']}; }
function paramFindingsFilter(record, value, filter, columns=fields){ return {field:'findings', mode:'filter', value: filter?.['findings']}; }
function paramFindingsExport(record, value, filter, columns=fields){ return {field:'findings', mode:'export', included: columns.includes('findings')}; }
function getImpression(record, value, filter, columns=fields){ return record?.['impression']; }
function hasImpression(record, value, filter, columns=fields){ return record?.['impression'] !== undefined && record?.['impression'] !== null && record?.['impression'] !== ''; }
function withImpression(record, value, filter, columns=fields){ return {...record, ['impression']: value}; }
function clearImpression(record, value, filter, columns=fields){ const copy={...record}; delete copy['impression']; return copy; }
function copyImpression(record, value, filter, columns=fields){ return {name:'impression', value: record?.['impression']}; }
function paramImpressionInput(record, value, filter, columns=fields){ return {field:'impression', mode:'input', value: record?.['impression']}; }
function paramImpressionFilter(record, value, filter, columns=fields){ return {field:'impression', mode:'filter', value: filter?.['impression']}; }
function paramImpressionExport(record, value, filter, columns=fields){ return {field:'impression', mode:'export', included: columns.includes('impression')}; }
function getReportedby(record, value, filter, columns=fields){ return record?.['reportedBy']; }
function hasReportedby(record, value, filter, columns=fields){ return record?.['reportedBy'] !== undefined && record?.['reportedBy'] !== null && record?.['reportedBy'] !== ''; }
function withReportedby(record, value, filter, columns=fields){ return {...record, ['reportedBy']: value}; }
function clearReportedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['reportedBy']; return copy; }
function copyReportedby(record, value, filter, columns=fields){ return {name:'reportedBy', value: record?.['reportedBy']}; }
function paramReportedbyInput(record, value, filter, columns=fields){ return {field:'reportedBy', mode:'input', value: record?.['reportedBy']}; }
function paramReportedbyFilter(record, value, filter, columns=fields){ return {field:'reportedBy', mode:'filter', value: filter?.['reportedBy']}; }
function paramReportedbyExport(record, value, filter, columns=fields){ return {field:'reportedBy', mode:'export', included: columns.includes('reportedBy')}; }
function getReportedat(record, value, filter, columns=fields){ return record?.['reportedAt']; }
function hasReportedat(record, value, filter, columns=fields){ return record?.['reportedAt'] !== undefined && record?.['reportedAt'] !== null && record?.['reportedAt'] !== ''; }
function withReportedat(record, value, filter, columns=fields){ return {...record, ['reportedAt']: value}; }
function clearReportedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['reportedAt']; return copy; }
function copyReportedat(record, value, filter, columns=fields){ return {name:'reportedAt', value: record?.['reportedAt']}; }
function paramReportedatInput(record, value, filter, columns=fields){ return {field:'reportedAt', mode:'input', value: record?.['reportedAt']}; }
function paramReportedatFilter(record, value, filter, columns=fields){ return {field:'reportedAt', mode:'filter', value: filter?.['reportedAt']}; }
function paramReportedatExport(record, value, filter, columns=fields){ return {field:'reportedAt', mode:'export', included: columns.includes('reportedAt')}; }
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
