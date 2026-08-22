'use strict';
const entity='discharge';
const fields=['admissionId', 'patientId', 'dischargedAt', 'diagnosis', 'condition', 'instructions', 'followUpDate', 'medications', 'doctorId', 'status'];

function getAdmissionid(record, value, filter, columns=fields){ return record?.['admissionId']; }
function hasAdmissionid(record, value, filter, columns=fields){ return record?.['admissionId'] !== undefined && record?.['admissionId'] !== null && record?.['admissionId'] !== ''; }
function withAdmissionid(record, value, filter, columns=fields){ return {...record, ['admissionId']: value}; }
function clearAdmissionid(record, value, filter, columns=fields){ const copy={...record}; delete copy['admissionId']; return copy; }
function copyAdmissionid(record, value, filter, columns=fields){ return {name:'admissionId', value: record?.['admissionId']}; }
function paramAdmissionidInput(record, value, filter, columns=fields){ return {field:'admissionId', mode:'input', value: record?.['admissionId']}; }
function paramAdmissionidFilter(record, value, filter, columns=fields){ return {field:'admissionId', mode:'filter', value: filter?.['admissionId']}; }
function paramAdmissionidExport(record, value, filter, columns=fields){ return {field:'admissionId', mode:'export', included: columns.includes('admissionId')}; }
function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getDischargedat(record, value, filter, columns=fields){ return record?.['dischargedAt']; }
function hasDischargedat(record, value, filter, columns=fields){ return record?.['dischargedAt'] !== undefined && record?.['dischargedAt'] !== null && record?.['dischargedAt'] !== ''; }
function withDischargedat(record, value, filter, columns=fields){ return {...record, ['dischargedAt']: value}; }
function clearDischargedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['dischargedAt']; return copy; }
function copyDischargedat(record, value, filter, columns=fields){ return {name:'dischargedAt', value: record?.['dischargedAt']}; }
function paramDischargedatInput(record, value, filter, columns=fields){ return {field:'dischargedAt', mode:'input', value: record?.['dischargedAt']}; }
function paramDischargedatFilter(record, value, filter, columns=fields){ return {field:'dischargedAt', mode:'filter', value: filter?.['dischargedAt']}; }
function paramDischargedatExport(record, value, filter, columns=fields){ return {field:'dischargedAt', mode:'export', included: columns.includes('dischargedAt')}; }
function getDiagnosis(record, value, filter, columns=fields){ return record?.['diagnosis']; }
function hasDiagnosis(record, value, filter, columns=fields){ return record?.['diagnosis'] !== undefined && record?.['diagnosis'] !== null && record?.['diagnosis'] !== ''; }
function withDiagnosis(record, value, filter, columns=fields){ return {...record, ['diagnosis']: value}; }
function clearDiagnosis(record, value, filter, columns=fields){ const copy={...record}; delete copy['diagnosis']; return copy; }
function copyDiagnosis(record, value, filter, columns=fields){ return {name:'diagnosis', value: record?.['diagnosis']}; }
function paramDiagnosisInput(record, value, filter, columns=fields){ return {field:'diagnosis', mode:'input', value: record?.['diagnosis']}; }
function paramDiagnosisFilter(record, value, filter, columns=fields){ return {field:'diagnosis', mode:'filter', value: filter?.['diagnosis']}; }
function paramDiagnosisExport(record, value, filter, columns=fields){ return {field:'diagnosis', mode:'export', included: columns.includes('diagnosis')}; }
function getCondition(record, value, filter, columns=fields){ return record?.['condition']; }
function hasCondition(record, value, filter, columns=fields){ return record?.['condition'] !== undefined && record?.['condition'] !== null && record?.['condition'] !== ''; }
function withCondition(record, value, filter, columns=fields){ return {...record, ['condition']: value}; }
function clearCondition(record, value, filter, columns=fields){ const copy={...record}; delete copy['condition']; return copy; }
function copyCondition(record, value, filter, columns=fields){ return {name:'condition', value: record?.['condition']}; }
function paramConditionInput(record, value, filter, columns=fields){ return {field:'condition', mode:'input', value: record?.['condition']}; }
function paramConditionFilter(record, value, filter, columns=fields){ return {field:'condition', mode:'filter', value: filter?.['condition']}; }
function paramConditionExport(record, value, filter, columns=fields){ return {field:'condition', mode:'export', included: columns.includes('condition')}; }
function getInstructions(record, value, filter, columns=fields){ return record?.['instructions']; }
function hasInstructions(record, value, filter, columns=fields){ return record?.['instructions'] !== undefined && record?.['instructions'] !== null && record?.['instructions'] !== ''; }
function withInstructions(record, value, filter, columns=fields){ return {...record, ['instructions']: value}; }
function clearInstructions(record, value, filter, columns=fields){ const copy={...record}; delete copy['instructions']; return copy; }
function copyInstructions(record, value, filter, columns=fields){ return {name:'instructions', value: record?.['instructions']}; }
function paramInstructionsInput(record, value, filter, columns=fields){ return {field:'instructions', mode:'input', value: record?.['instructions']}; }
function paramInstructionsFilter(record, value, filter, columns=fields){ return {field:'instructions', mode:'filter', value: filter?.['instructions']}; }
function paramInstructionsExport(record, value, filter, columns=fields){ return {field:'instructions', mode:'export', included: columns.includes('instructions')}; }
function getFollowupdate(record, value, filter, columns=fields){ return record?.['followUpDate']; }
function hasFollowupdate(record, value, filter, columns=fields){ return record?.['followUpDate'] !== undefined && record?.['followUpDate'] !== null && record?.['followUpDate'] !== ''; }
function withFollowupdate(record, value, filter, columns=fields){ return {...record, ['followUpDate']: value}; }
function clearFollowupdate(record, value, filter, columns=fields){ const copy={...record}; delete copy['followUpDate']; return copy; }
function copyFollowupdate(record, value, filter, columns=fields){ return {name:'followUpDate', value: record?.['followUpDate']}; }
function paramFollowupdateInput(record, value, filter, columns=fields){ return {field:'followUpDate', mode:'input', value: record?.['followUpDate']}; }
function paramFollowupdateFilter(record, value, filter, columns=fields){ return {field:'followUpDate', mode:'filter', value: filter?.['followUpDate']}; }
function paramFollowupdateExport(record, value, filter, columns=fields){ return {field:'followUpDate', mode:'export', included: columns.includes('followUpDate')}; }
function getMedications(record, value, filter, columns=fields){ return record?.['medications']; }
function hasMedications(record, value, filter, columns=fields){ return record?.['medications'] !== undefined && record?.['medications'] !== null && record?.['medications'] !== ''; }
function withMedications(record, value, filter, columns=fields){ return {...record, ['medications']: value}; }
function clearMedications(record, value, filter, columns=fields){ const copy={...record}; delete copy['medications']; return copy; }
function copyMedications(record, value, filter, columns=fields){ return {name:'medications', value: record?.['medications']}; }
function paramMedicationsInput(record, value, filter, columns=fields){ return {field:'medications', mode:'input', value: record?.['medications']}; }
function paramMedicationsFilter(record, value, filter, columns=fields){ return {field:'medications', mode:'filter', value: filter?.['medications']}; }
function paramMedicationsExport(record, value, filter, columns=fields){ return {field:'medications', mode:'export', included: columns.includes('medications')}; }
function getDoctorid(record, value, filter, columns=fields){ return record?.['doctorId']; }
function hasDoctorid(record, value, filter, columns=fields){ return record?.['doctorId'] !== undefined && record?.['doctorId'] !== null && record?.['doctorId'] !== ''; }
function withDoctorid(record, value, filter, columns=fields){ return {...record, ['doctorId']: value}; }
function clearDoctorid(record, value, filter, columns=fields){ const copy={...record}; delete copy['doctorId']; return copy; }
function copyDoctorid(record, value, filter, columns=fields){ return {name:'doctorId', value: record?.['doctorId']}; }
function paramDoctoridInput(record, value, filter, columns=fields){ return {field:'doctorId', mode:'input', value: record?.['doctorId']}; }
function paramDoctoridFilter(record, value, filter, columns=fields){ return {field:'doctorId', mode:'filter', value: filter?.['doctorId']}; }
function paramDoctoridExport(record, value, filter, columns=fields){ return {field:'doctorId', mode:'export', included: columns.includes('doctorId')}; }
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
