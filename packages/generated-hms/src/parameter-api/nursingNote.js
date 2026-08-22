'use strict';
const entity='nursingNote';
const fields=['patientId', 'staffId', 'recordedAt', 'assessment', 'intervention', 'response', 'handover', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getStaffid(record, value, filter, columns=fields){ return record?.['staffId']; }
function hasStaffid(record, value, filter, columns=fields){ return record?.['staffId'] !== undefined && record?.['staffId'] !== null && record?.['staffId'] !== ''; }
function withStaffid(record, value, filter, columns=fields){ return {...record, ['staffId']: value}; }
function clearStaffid(record, value, filter, columns=fields){ const copy={...record}; delete copy['staffId']; return copy; }
function copyStaffid(record, value, filter, columns=fields){ return {name:'staffId', value: record?.['staffId']}; }
function paramStaffidInput(record, value, filter, columns=fields){ return {field:'staffId', mode:'input', value: record?.['staffId']}; }
function paramStaffidFilter(record, value, filter, columns=fields){ return {field:'staffId', mode:'filter', value: filter?.['staffId']}; }
function paramStaffidExport(record, value, filter, columns=fields){ return {field:'staffId', mode:'export', included: columns.includes('staffId')}; }
function getRecordedat(record, value, filter, columns=fields){ return record?.['recordedAt']; }
function hasRecordedat(record, value, filter, columns=fields){ return record?.['recordedAt'] !== undefined && record?.['recordedAt'] !== null && record?.['recordedAt'] !== ''; }
function withRecordedat(record, value, filter, columns=fields){ return {...record, ['recordedAt']: value}; }
function clearRecordedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['recordedAt']; return copy; }
function copyRecordedat(record, value, filter, columns=fields){ return {name:'recordedAt', value: record?.['recordedAt']}; }
function paramRecordedatInput(record, value, filter, columns=fields){ return {field:'recordedAt', mode:'input', value: record?.['recordedAt']}; }
function paramRecordedatFilter(record, value, filter, columns=fields){ return {field:'recordedAt', mode:'filter', value: filter?.['recordedAt']}; }
function paramRecordedatExport(record, value, filter, columns=fields){ return {field:'recordedAt', mode:'export', included: columns.includes('recordedAt')}; }
function getAssessment(record, value, filter, columns=fields){ return record?.['assessment']; }
function hasAssessment(record, value, filter, columns=fields){ return record?.['assessment'] !== undefined && record?.['assessment'] !== null && record?.['assessment'] !== ''; }
function withAssessment(record, value, filter, columns=fields){ return {...record, ['assessment']: value}; }
function clearAssessment(record, value, filter, columns=fields){ const copy={...record}; delete copy['assessment']; return copy; }
function copyAssessment(record, value, filter, columns=fields){ return {name:'assessment', value: record?.['assessment']}; }
function paramAssessmentInput(record, value, filter, columns=fields){ return {field:'assessment', mode:'input', value: record?.['assessment']}; }
function paramAssessmentFilter(record, value, filter, columns=fields){ return {field:'assessment', mode:'filter', value: filter?.['assessment']}; }
function paramAssessmentExport(record, value, filter, columns=fields){ return {field:'assessment', mode:'export', included: columns.includes('assessment')}; }
function getIntervention(record, value, filter, columns=fields){ return record?.['intervention']; }
function hasIntervention(record, value, filter, columns=fields){ return record?.['intervention'] !== undefined && record?.['intervention'] !== null && record?.['intervention'] !== ''; }
function withIntervention(record, value, filter, columns=fields){ return {...record, ['intervention']: value}; }
function clearIntervention(record, value, filter, columns=fields){ const copy={...record}; delete copy['intervention']; return copy; }
function copyIntervention(record, value, filter, columns=fields){ return {name:'intervention', value: record?.['intervention']}; }
function paramInterventionInput(record, value, filter, columns=fields){ return {field:'intervention', mode:'input', value: record?.['intervention']}; }
function paramInterventionFilter(record, value, filter, columns=fields){ return {field:'intervention', mode:'filter', value: filter?.['intervention']}; }
function paramInterventionExport(record, value, filter, columns=fields){ return {field:'intervention', mode:'export', included: columns.includes('intervention')}; }
function getResponse(record, value, filter, columns=fields){ return record?.['response']; }
function hasResponse(record, value, filter, columns=fields){ return record?.['response'] !== undefined && record?.['response'] !== null && record?.['response'] !== ''; }
function withResponse(record, value, filter, columns=fields){ return {...record, ['response']: value}; }
function clearResponse(record, value, filter, columns=fields){ const copy={...record}; delete copy['response']; return copy; }
function copyResponse(record, value, filter, columns=fields){ return {name:'response', value: record?.['response']}; }
function paramResponseInput(record, value, filter, columns=fields){ return {field:'response', mode:'input', value: record?.['response']}; }
function paramResponseFilter(record, value, filter, columns=fields){ return {field:'response', mode:'filter', value: filter?.['response']}; }
function paramResponseExport(record, value, filter, columns=fields){ return {field:'response', mode:'export', included: columns.includes('response')}; }
function getHandover(record, value, filter, columns=fields){ return record?.['handover']; }
function hasHandover(record, value, filter, columns=fields){ return record?.['handover'] !== undefined && record?.['handover'] !== null && record?.['handover'] !== ''; }
function withHandover(record, value, filter, columns=fields){ return {...record, ['handover']: value}; }
function clearHandover(record, value, filter, columns=fields){ const copy={...record}; delete copy['handover']; return copy; }
function copyHandover(record, value, filter, columns=fields){ return {name:'handover', value: record?.['handover']}; }
function paramHandoverInput(record, value, filter, columns=fields){ return {field:'handover', mode:'input', value: record?.['handover']}; }
function paramHandoverFilter(record, value, filter, columns=fields){ return {field:'handover', mode:'filter', value: filter?.['handover']}; }
function paramHandoverExport(record, value, filter, columns=fields){ return {field:'handover', mode:'export', included: columns.includes('handover')}; }
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
