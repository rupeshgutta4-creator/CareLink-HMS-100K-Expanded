'use strict';
const entity='visit';
const fields=['patientId', 'doctorId', 'appointmentId', 'visitDate', 'chiefComplaint', 'diagnosis', 'treatmentPlan', 'notes', 'followUpDate', 'status'];

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
function getAppointmentid(record, value, filter, columns=fields){ return record?.['appointmentId']; }
function hasAppointmentid(record, value, filter, columns=fields){ return record?.['appointmentId'] !== undefined && record?.['appointmentId'] !== null && record?.['appointmentId'] !== ''; }
function withAppointmentid(record, value, filter, columns=fields){ return {...record, ['appointmentId']: value}; }
function clearAppointmentid(record, value, filter, columns=fields){ const copy={...record}; delete copy['appointmentId']; return copy; }
function copyAppointmentid(record, value, filter, columns=fields){ return {name:'appointmentId', value: record?.['appointmentId']}; }
function paramAppointmentidInput(record, value, filter, columns=fields){ return {field:'appointmentId', mode:'input', value: record?.['appointmentId']}; }
function paramAppointmentidFilter(record, value, filter, columns=fields){ return {field:'appointmentId', mode:'filter', value: filter?.['appointmentId']}; }
function paramAppointmentidExport(record, value, filter, columns=fields){ return {field:'appointmentId', mode:'export', included: columns.includes('appointmentId')}; }
function getVisitdate(record, value, filter, columns=fields){ return record?.['visitDate']; }
function hasVisitdate(record, value, filter, columns=fields){ return record?.['visitDate'] !== undefined && record?.['visitDate'] !== null && record?.['visitDate'] !== ''; }
function withVisitdate(record, value, filter, columns=fields){ return {...record, ['visitDate']: value}; }
function clearVisitdate(record, value, filter, columns=fields){ const copy={...record}; delete copy['visitDate']; return copy; }
function copyVisitdate(record, value, filter, columns=fields){ return {name:'visitDate', value: record?.['visitDate']}; }
function paramVisitdateInput(record, value, filter, columns=fields){ return {field:'visitDate', mode:'input', value: record?.['visitDate']}; }
function paramVisitdateFilter(record, value, filter, columns=fields){ return {field:'visitDate', mode:'filter', value: filter?.['visitDate']}; }
function paramVisitdateExport(record, value, filter, columns=fields){ return {field:'visitDate', mode:'export', included: columns.includes('visitDate')}; }
function getChiefcomplaint(record, value, filter, columns=fields){ return record?.['chiefComplaint']; }
function hasChiefcomplaint(record, value, filter, columns=fields){ return record?.['chiefComplaint'] !== undefined && record?.['chiefComplaint'] !== null && record?.['chiefComplaint'] !== ''; }
function withChiefcomplaint(record, value, filter, columns=fields){ return {...record, ['chiefComplaint']: value}; }
function clearChiefcomplaint(record, value, filter, columns=fields){ const copy={...record}; delete copy['chiefComplaint']; return copy; }
function copyChiefcomplaint(record, value, filter, columns=fields){ return {name:'chiefComplaint', value: record?.['chiefComplaint']}; }
function paramChiefcomplaintInput(record, value, filter, columns=fields){ return {field:'chiefComplaint', mode:'input', value: record?.['chiefComplaint']}; }
function paramChiefcomplaintFilter(record, value, filter, columns=fields){ return {field:'chiefComplaint', mode:'filter', value: filter?.['chiefComplaint']}; }
function paramChiefcomplaintExport(record, value, filter, columns=fields){ return {field:'chiefComplaint', mode:'export', included: columns.includes('chiefComplaint')}; }
function getDiagnosis(record, value, filter, columns=fields){ return record?.['diagnosis']; }
function hasDiagnosis(record, value, filter, columns=fields){ return record?.['diagnosis'] !== undefined && record?.['diagnosis'] !== null && record?.['diagnosis'] !== ''; }
function withDiagnosis(record, value, filter, columns=fields){ return {...record, ['diagnosis']: value}; }
function clearDiagnosis(record, value, filter, columns=fields){ const copy={...record}; delete copy['diagnosis']; return copy; }
function copyDiagnosis(record, value, filter, columns=fields){ return {name:'diagnosis', value: record?.['diagnosis']}; }
function paramDiagnosisInput(record, value, filter, columns=fields){ return {field:'diagnosis', mode:'input', value: record?.['diagnosis']}; }
function paramDiagnosisFilter(record, value, filter, columns=fields){ return {field:'diagnosis', mode:'filter', value: filter?.['diagnosis']}; }
function paramDiagnosisExport(record, value, filter, columns=fields){ return {field:'diagnosis', mode:'export', included: columns.includes('diagnosis')}; }
function getTreatmentplan(record, value, filter, columns=fields){ return record?.['treatmentPlan']; }
function hasTreatmentplan(record, value, filter, columns=fields){ return record?.['treatmentPlan'] !== undefined && record?.['treatmentPlan'] !== null && record?.['treatmentPlan'] !== ''; }
function withTreatmentplan(record, value, filter, columns=fields){ return {...record, ['treatmentPlan']: value}; }
function clearTreatmentplan(record, value, filter, columns=fields){ const copy={...record}; delete copy['treatmentPlan']; return copy; }
function copyTreatmentplan(record, value, filter, columns=fields){ return {name:'treatmentPlan', value: record?.['treatmentPlan']}; }
function paramTreatmentplanInput(record, value, filter, columns=fields){ return {field:'treatmentPlan', mode:'input', value: record?.['treatmentPlan']}; }
function paramTreatmentplanFilter(record, value, filter, columns=fields){ return {field:'treatmentPlan', mode:'filter', value: filter?.['treatmentPlan']}; }
function paramTreatmentplanExport(record, value, filter, columns=fields){ return {field:'treatmentPlan', mode:'export', included: columns.includes('treatmentPlan')}; }
function getNotes(record, value, filter, columns=fields){ return record?.['notes']; }
function hasNotes(record, value, filter, columns=fields){ return record?.['notes'] !== undefined && record?.['notes'] !== null && record?.['notes'] !== ''; }
function withNotes(record, value, filter, columns=fields){ return {...record, ['notes']: value}; }
function clearNotes(record, value, filter, columns=fields){ const copy={...record}; delete copy['notes']; return copy; }
function copyNotes(record, value, filter, columns=fields){ return {name:'notes', value: record?.['notes']}; }
function paramNotesInput(record, value, filter, columns=fields){ return {field:'notes', mode:'input', value: record?.['notes']}; }
function paramNotesFilter(record, value, filter, columns=fields){ return {field:'notes', mode:'filter', value: filter?.['notes']}; }
function paramNotesExport(record, value, filter, columns=fields){ return {field:'notes', mode:'export', included: columns.includes('notes')}; }
function getFollowupdate(record, value, filter, columns=fields){ return record?.['followUpDate']; }
function hasFollowupdate(record, value, filter, columns=fields){ return record?.['followUpDate'] !== undefined && record?.['followUpDate'] !== null && record?.['followUpDate'] !== ''; }
function withFollowupdate(record, value, filter, columns=fields){ return {...record, ['followUpDate']: value}; }
function clearFollowupdate(record, value, filter, columns=fields){ const copy={...record}; delete copy['followUpDate']; return copy; }
function copyFollowupdate(record, value, filter, columns=fields){ return {name:'followUpDate', value: record?.['followUpDate']}; }
function paramFollowupdateInput(record, value, filter, columns=fields){ return {field:'followUpDate', mode:'input', value: record?.['followUpDate']}; }
function paramFollowupdateFilter(record, value, filter, columns=fields){ return {field:'followUpDate', mode:'filter', value: filter?.['followUpDate']}; }
function paramFollowupdateExport(record, value, filter, columns=fields){ return {field:'followUpDate', mode:'export', included: columns.includes('followUpDate')}; }
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
