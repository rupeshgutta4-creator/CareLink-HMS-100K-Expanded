'use strict';
const entity='occupationalHealth';
const fields=['patientId', 'employer', 'jobTitle', 'exposureRisks', 'assessmentDate', 'restrictions', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getEmployer(record, value, filter, columns=fields){ return record?.['employer']; }
function hasEmployer(record, value, filter, columns=fields){ return record?.['employer'] !== undefined && record?.['employer'] !== null && record?.['employer'] !== ''; }
function withEmployer(record, value, filter, columns=fields){ return {...record, ['employer']: value}; }
function clearEmployer(record, value, filter, columns=fields){ const copy={...record}; delete copy['employer']; return copy; }
function copyEmployer(record, value, filter, columns=fields){ return {name:'employer', value: record?.['employer']}; }
function paramEmployerInput(record, value, filter, columns=fields){ return {field:'employer', mode:'input', value: record?.['employer']}; }
function paramEmployerFilter(record, value, filter, columns=fields){ return {field:'employer', mode:'filter', value: filter?.['employer']}; }
function paramEmployerExport(record, value, filter, columns=fields){ return {field:'employer', mode:'export', included: columns.includes('employer')}; }
function getJobtitle(record, value, filter, columns=fields){ return record?.['jobTitle']; }
function hasJobtitle(record, value, filter, columns=fields){ return record?.['jobTitle'] !== undefined && record?.['jobTitle'] !== null && record?.['jobTitle'] !== ''; }
function withJobtitle(record, value, filter, columns=fields){ return {...record, ['jobTitle']: value}; }
function clearJobtitle(record, value, filter, columns=fields){ const copy={...record}; delete copy['jobTitle']; return copy; }
function copyJobtitle(record, value, filter, columns=fields){ return {name:'jobTitle', value: record?.['jobTitle']}; }
function paramJobtitleInput(record, value, filter, columns=fields){ return {field:'jobTitle', mode:'input', value: record?.['jobTitle']}; }
function paramJobtitleFilter(record, value, filter, columns=fields){ return {field:'jobTitle', mode:'filter', value: filter?.['jobTitle']}; }
function paramJobtitleExport(record, value, filter, columns=fields){ return {field:'jobTitle', mode:'export', included: columns.includes('jobTitle')}; }
function getExposurerisks(record, value, filter, columns=fields){ return record?.['exposureRisks']; }
function hasExposurerisks(record, value, filter, columns=fields){ return record?.['exposureRisks'] !== undefined && record?.['exposureRisks'] !== null && record?.['exposureRisks'] !== ''; }
function withExposurerisks(record, value, filter, columns=fields){ return {...record, ['exposureRisks']: value}; }
function clearExposurerisks(record, value, filter, columns=fields){ const copy={...record}; delete copy['exposureRisks']; return copy; }
function copyExposurerisks(record, value, filter, columns=fields){ return {name:'exposureRisks', value: record?.['exposureRisks']}; }
function paramExposurerisksInput(record, value, filter, columns=fields){ return {field:'exposureRisks', mode:'input', value: record?.['exposureRisks']}; }
function paramExposurerisksFilter(record, value, filter, columns=fields){ return {field:'exposureRisks', mode:'filter', value: filter?.['exposureRisks']}; }
function paramExposurerisksExport(record, value, filter, columns=fields){ return {field:'exposureRisks', mode:'export', included: columns.includes('exposureRisks')}; }
function getAssessmentdate(record, value, filter, columns=fields){ return record?.['assessmentDate']; }
function hasAssessmentdate(record, value, filter, columns=fields){ return record?.['assessmentDate'] !== undefined && record?.['assessmentDate'] !== null && record?.['assessmentDate'] !== ''; }
function withAssessmentdate(record, value, filter, columns=fields){ return {...record, ['assessmentDate']: value}; }
function clearAssessmentdate(record, value, filter, columns=fields){ const copy={...record}; delete copy['assessmentDate']; return copy; }
function copyAssessmentdate(record, value, filter, columns=fields){ return {name:'assessmentDate', value: record?.['assessmentDate']}; }
function paramAssessmentdateInput(record, value, filter, columns=fields){ return {field:'assessmentDate', mode:'input', value: record?.['assessmentDate']}; }
function paramAssessmentdateFilter(record, value, filter, columns=fields){ return {field:'assessmentDate', mode:'filter', value: filter?.['assessmentDate']}; }
function paramAssessmentdateExport(record, value, filter, columns=fields){ return {field:'assessmentDate', mode:'export', included: columns.includes('assessmentDate')}; }
function getRestrictions(record, value, filter, columns=fields){ return record?.['restrictions']; }
function hasRestrictions(record, value, filter, columns=fields){ return record?.['restrictions'] !== undefined && record?.['restrictions'] !== null && record?.['restrictions'] !== ''; }
function withRestrictions(record, value, filter, columns=fields){ return {...record, ['restrictions']: value}; }
function clearRestrictions(record, value, filter, columns=fields){ const copy={...record}; delete copy['restrictions']; return copy; }
function copyRestrictions(record, value, filter, columns=fields){ return {name:'restrictions', value: record?.['restrictions']}; }
function paramRestrictionsInput(record, value, filter, columns=fields){ return {field:'restrictions', mode:'input', value: record?.['restrictions']}; }
function paramRestrictionsFilter(record, value, filter, columns=fields){ return {field:'restrictions', mode:'filter', value: filter?.['restrictions']}; }
function paramRestrictionsExport(record, value, filter, columns=fields){ return {field:'restrictions', mode:'export', included: columns.includes('restrictions')}; }
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
