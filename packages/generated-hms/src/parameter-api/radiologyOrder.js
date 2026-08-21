'use strict';
const entity='radiologyOrder';
const fields=['patientId', 'doctorId', 'visitId', 'studyCode', 'studyName', 'modality', 'priority', 'scheduledAt', 'status', 'clinicalHistory'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getDoctorid(record, value, filter, columns=fields){ return record?.['doctorId']; }
function hasDoctorid(record, value, filter, columns=fields){ return record?.['doctorId'] !== undefined && record?.['doctorId'] !== null && record?.['doctorId'] !== ''; }
function withDoctorid(record, value, filter, columns=fields){ return {...record, ['doctorId']: value}; }
function clearDoctorid(record, value, filter, columns=fields){ const copy={...record}; delete copy['doctorId']; return copy; }
function copyDoctorid(record, value, filter, columns=fields){ return {name:'doctorId', value: record?.['doctorId']}; }
function paramDoctoridInput(record, value, filter, columns=fields){ return {field:'doctorId', mode:'input', value: record?.['doctorId']}; }
function paramDoctoridFilter(record, value, filter, columns=fields){ return {field:'doctorId', mode:'filter', value: filter?.['doctorId']}; }
function paramDoctoridExport(record, value, filter, columns=fields){ return {field:'doctorId', mode:'export', included: columns.includes('doctorId')}; }
function getVisitid(record, value, filter, columns=fields){ return record?.['visitId']; }
function hasVisitid(record, value, filter, columns=fields){ return record?.['visitId'] !== undefined && record?.['visitId'] !== null && record?.['visitId'] !== ''; }
function withVisitid(record, value, filter, columns=fields){ return {...record, ['visitId']: value}; }
function clearVisitid(record, value, filter, columns=fields){ const copy={...record}; delete copy['visitId']; return copy; }
function copyVisitid(record, value, filter, columns=fields){ return {name:'visitId', value: record?.['visitId']}; }
function paramVisitidInput(record, value, filter, columns=fields){ return {field:'visitId', mode:'input', value: record?.['visitId']}; }
function paramVisitidFilter(record, value, filter, columns=fields){ return {field:'visitId', mode:'filter', value: filter?.['visitId']}; }
function paramVisitidExport(record, value, filter, columns=fields){ return {field:'visitId', mode:'export', included: columns.includes('visitId')}; }
function getStudycode(record, value, filter, columns=fields){ return record?.['studyCode']; }
function hasStudycode(record, value, filter, columns=fields){ return record?.['studyCode'] !== undefined && record?.['studyCode'] !== null && record?.['studyCode'] !== ''; }
function withStudycode(record, value, filter, columns=fields){ return {...record, ['studyCode']: value}; }
function clearStudycode(record, value, filter, columns=fields){ const copy={...record}; delete copy['studyCode']; return copy; }
function copyStudycode(record, value, filter, columns=fields){ return {name:'studyCode', value: record?.['studyCode']}; }
function paramStudycodeInput(record, value, filter, columns=fields){ return {field:'studyCode', mode:'input', value: record?.['studyCode']}; }
function paramStudycodeFilter(record, value, filter, columns=fields){ return {field:'studyCode', mode:'filter', value: filter?.['studyCode']}; }
function paramStudycodeExport(record, value, filter, columns=fields){ return {field:'studyCode', mode:'export', included: columns.includes('studyCode')}; }
function getStudyname(record, value, filter, columns=fields){ return record?.['studyName']; }
function hasStudyname(record, value, filter, columns=fields){ return record?.['studyName'] !== undefined && record?.['studyName'] !== null && record?.['studyName'] !== ''; }
function withStudyname(record, value, filter, columns=fields){ return {...record, ['studyName']: value}; }
function clearStudyname(record, value, filter, columns=fields){ const copy={...record}; delete copy['studyName']; return copy; }
function copyStudyname(record, value, filter, columns=fields){ return {name:'studyName', value: record?.['studyName']}; }
function paramStudynameInput(record, value, filter, columns=fields){ return {field:'studyName', mode:'input', value: record?.['studyName']}; }
function paramStudynameFilter(record, value, filter, columns=fields){ return {field:'studyName', mode:'filter', value: filter?.['studyName']}; }
function paramStudynameExport(record, value, filter, columns=fields){ return {field:'studyName', mode:'export', included: columns.includes('studyName')}; }
function getModality(record, value, filter, columns=fields){ return record?.['modality']; }
function hasModality(record, value, filter, columns=fields){ return record?.['modality'] !== undefined && record?.['modality'] !== null && record?.['modality'] !== ''; }
function withModality(record, value, filter, columns=fields){ return {...record, ['modality']: value}; }
function clearModality(record, value, filter, columns=fields){ const copy={...record}; delete copy['modality']; return copy; }
function copyModality(record, value, filter, columns=fields){ return {name:'modality', value: record?.['modality']}; }
function paramModalityInput(record, value, filter, columns=fields){ return {field:'modality', mode:'input', value: record?.['modality']}; }
function paramModalityFilter(record, value, filter, columns=fields){ return {field:'modality', mode:'filter', value: filter?.['modality']}; }
function paramModalityExport(record, value, filter, columns=fields){ return {field:'modality', mode:'export', included: columns.includes('modality')}; }
function getPriority(record, value, filter, columns=fields){ return record?.['priority']; }
function hasPriority(record, value, filter, columns=fields){ return record?.['priority'] !== undefined && record?.['priority'] !== null && record?.['priority'] !== ''; }
function withPriority(record, value, filter, columns=fields){ return {...record, ['priority']: value}; }
function clearPriority(record, value, filter, columns=fields){ const copy={...record}; delete copy['priority']; return copy; }
function copyPriority(record, value, filter, columns=fields){ return {name:'priority', value: record?.['priority']}; }
function paramPriorityInput(record, value, filter, columns=fields){ return {field:'priority', mode:'input', value: record?.['priority']}; }
function paramPriorityFilter(record, value, filter, columns=fields){ return {field:'priority', mode:'filter', value: filter?.['priority']}; }
function paramPriorityExport(record, value, filter, columns=fields){ return {field:'priority', mode:'export', included: columns.includes('priority')}; }
function getScheduledat(record, value, filter, columns=fields){ return record?.['scheduledAt']; }
function hasScheduledat(record, value, filter, columns=fields){ return record?.['scheduledAt'] !== undefined && record?.['scheduledAt'] !== null && record?.['scheduledAt'] !== ''; }
function withScheduledat(record, value, filter, columns=fields){ return {...record, ['scheduledAt']: value}; }
function clearScheduledat(record, value, filter, columns=fields){ const copy={...record}; delete copy['scheduledAt']; return copy; }
function copyScheduledat(record, value, filter, columns=fields){ return {name:'scheduledAt', value: record?.['scheduledAt']}; }
function paramScheduledatInput(record, value, filter, columns=fields){ return {field:'scheduledAt', mode:'input', value: record?.['scheduledAt']}; }
function paramScheduledatFilter(record, value, filter, columns=fields){ return {field:'scheduledAt', mode:'filter', value: filter?.['scheduledAt']}; }
function paramScheduledatExport(record, value, filter, columns=fields){ return {field:'scheduledAt', mode:'export', included: columns.includes('scheduledAt')}; }
function getStatus(record, value, filter, columns=fields){ return record?.['status']; }
function hasStatus(record, value, filter, columns=fields){ return record?.['status'] !== undefined && record?.['status'] !== null && record?.['status'] !== ''; }
function withStatus(record, value, filter, columns=fields){ return {...record, ['status']: value}; }
function clearStatus(record, value, filter, columns=fields){ const copy={...record}; delete copy['status']; return copy; }
function copyStatus(record, value, filter, columns=fields){ return {name:'status', value: record?.['status']}; }
function paramStatusInput(record, value, filter, columns=fields){ return {field:'status', mode:'input', value: record?.['status']}; }
function paramStatusFilter(record, value, filter, columns=fields){ return {field:'status', mode:'filter', value: filter?.['status']}; }
function paramStatusExport(record, value, filter, columns=fields){ return {field:'status', mode:'export', included: columns.includes('status')}; }
function getClinicalhistory(record, value, filter, columns=fields){ return record?.['clinicalHistory']; }
function hasClinicalhistory(record, value, filter, columns=fields){ return record?.['clinicalHistory'] !== undefined && record?.['clinicalHistory'] !== null && record?.['clinicalHistory'] !== ''; }
function withClinicalhistory(record, value, filter, columns=fields){ return {...record, ['clinicalHistory']: value}; }
function clearClinicalhistory(record, value, filter, columns=fields){ const copy={...record}; delete copy['clinicalHistory']; return copy; }
function copyClinicalhistory(record, value, filter, columns=fields){ return {name:'clinicalHistory', value: record?.['clinicalHistory']}; }
function paramClinicalhistoryInput(record, value, filter, columns=fields){ return {field:'clinicalHistory', mode:'input', value: record?.['clinicalHistory']}; }
function paramClinicalhistoryFilter(record, value, filter, columns=fields){ return {field:'clinicalHistory', mode:'filter', value: filter?.['clinicalHistory']}; }
function paramClinicalhistoryExport(record, value, filter, columns=fields){ return {field:'clinicalHistory', mode:'export', included: columns.includes('clinicalHistory')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
