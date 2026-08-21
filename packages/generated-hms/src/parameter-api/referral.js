'use strict';
const entity='referral';
const fields=['patientId', 'fromDoctorId', 'toDoctorId', 'specialty', 'reason', 'referredAt', 'acceptedAt', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getFromdoctorid(record, value, filter, columns=fields){ return record?.['fromDoctorId']; }
function hasFromdoctorid(record, value, filter, columns=fields){ return record?.['fromDoctorId'] !== undefined && record?.['fromDoctorId'] !== null && record?.['fromDoctorId'] !== ''; }
function withFromdoctorid(record, value, filter, columns=fields){ return {...record, ['fromDoctorId']: value}; }
function clearFromdoctorid(record, value, filter, columns=fields){ const copy={...record}; delete copy['fromDoctorId']; return copy; }
function copyFromdoctorid(record, value, filter, columns=fields){ return {name:'fromDoctorId', value: record?.['fromDoctorId']}; }
function paramFromdoctoridInput(record, value, filter, columns=fields){ return {field:'fromDoctorId', mode:'input', value: record?.['fromDoctorId']}; }
function paramFromdoctoridFilter(record, value, filter, columns=fields){ return {field:'fromDoctorId', mode:'filter', value: filter?.['fromDoctorId']}; }
function paramFromdoctoridExport(record, value, filter, columns=fields){ return {field:'fromDoctorId', mode:'export', included: columns.includes('fromDoctorId')}; }
function getTodoctorid(record, value, filter, columns=fields){ return record?.['toDoctorId']; }
function hasTodoctorid(record, value, filter, columns=fields){ return record?.['toDoctorId'] !== undefined && record?.['toDoctorId'] !== null && record?.['toDoctorId'] !== ''; }
function withTodoctorid(record, value, filter, columns=fields){ return {...record, ['toDoctorId']: value}; }
function clearTodoctorid(record, value, filter, columns=fields){ const copy={...record}; delete copy['toDoctorId']; return copy; }
function copyTodoctorid(record, value, filter, columns=fields){ return {name:'toDoctorId', value: record?.['toDoctorId']}; }
function paramTodoctoridInput(record, value, filter, columns=fields){ return {field:'toDoctorId', mode:'input', value: record?.['toDoctorId']}; }
function paramTodoctoridFilter(record, value, filter, columns=fields){ return {field:'toDoctorId', mode:'filter', value: filter?.['toDoctorId']}; }
function paramTodoctoridExport(record, value, filter, columns=fields){ return {field:'toDoctorId', mode:'export', included: columns.includes('toDoctorId')}; }
function getSpecialty(record, value, filter, columns=fields){ return record?.['specialty']; }
function hasSpecialty(record, value, filter, columns=fields){ return record?.['specialty'] !== undefined && record?.['specialty'] !== null && record?.['specialty'] !== ''; }
function withSpecialty(record, value, filter, columns=fields){ return {...record, ['specialty']: value}; }
function clearSpecialty(record, value, filter, columns=fields){ const copy={...record}; delete copy['specialty']; return copy; }
function copySpecialty(record, value, filter, columns=fields){ return {name:'specialty', value: record?.['specialty']}; }
function paramSpecialtyInput(record, value, filter, columns=fields){ return {field:'specialty', mode:'input', value: record?.['specialty']}; }
function paramSpecialtyFilter(record, value, filter, columns=fields){ return {field:'specialty', mode:'filter', value: filter?.['specialty']}; }
function paramSpecialtyExport(record, value, filter, columns=fields){ return {field:'specialty', mode:'export', included: columns.includes('specialty')}; }
function getReason(record, value, filter, columns=fields){ return record?.['reason']; }
function hasReason(record, value, filter, columns=fields){ return record?.['reason'] !== undefined && record?.['reason'] !== null && record?.['reason'] !== ''; }
function withReason(record, value, filter, columns=fields){ return {...record, ['reason']: value}; }
function clearReason(record, value, filter, columns=fields){ const copy={...record}; delete copy['reason']; return copy; }
function copyReason(record, value, filter, columns=fields){ return {name:'reason', value: record?.['reason']}; }
function paramReasonInput(record, value, filter, columns=fields){ return {field:'reason', mode:'input', value: record?.['reason']}; }
function paramReasonFilter(record, value, filter, columns=fields){ return {field:'reason', mode:'filter', value: filter?.['reason']}; }
function paramReasonExport(record, value, filter, columns=fields){ return {field:'reason', mode:'export', included: columns.includes('reason')}; }
function getReferredat(record, value, filter, columns=fields){ return record?.['referredAt']; }
function hasReferredat(record, value, filter, columns=fields){ return record?.['referredAt'] !== undefined && record?.['referredAt'] !== null && record?.['referredAt'] !== ''; }
function withReferredat(record, value, filter, columns=fields){ return {...record, ['referredAt']: value}; }
function clearReferredat(record, value, filter, columns=fields){ const copy={...record}; delete copy['referredAt']; return copy; }
function copyReferredat(record, value, filter, columns=fields){ return {name:'referredAt', value: record?.['referredAt']}; }
function paramReferredatInput(record, value, filter, columns=fields){ return {field:'referredAt', mode:'input', value: record?.['referredAt']}; }
function paramReferredatFilter(record, value, filter, columns=fields){ return {field:'referredAt', mode:'filter', value: filter?.['referredAt']}; }
function paramReferredatExport(record, value, filter, columns=fields){ return {field:'referredAt', mode:'export', included: columns.includes('referredAt')}; }
function getAcceptedat(record, value, filter, columns=fields){ return record?.['acceptedAt']; }
function hasAcceptedat(record, value, filter, columns=fields){ return record?.['acceptedAt'] !== undefined && record?.['acceptedAt'] !== null && record?.['acceptedAt'] !== ''; }
function withAcceptedat(record, value, filter, columns=fields){ return {...record, ['acceptedAt']: value}; }
function clearAcceptedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['acceptedAt']; return copy; }
function copyAcceptedat(record, value, filter, columns=fields){ return {name:'acceptedAt', value: record?.['acceptedAt']}; }
function paramAcceptedatInput(record, value, filter, columns=fields){ return {field:'acceptedAt', mode:'input', value: record?.['acceptedAt']}; }
function paramAcceptedatFilter(record, value, filter, columns=fields){ return {field:'acceptedAt', mode:'filter', value: filter?.['acceptedAt']}; }
function paramAcceptedatExport(record, value, filter, columns=fields){ return {field:'acceptedAt', mode:'export', included: columns.includes('acceptedAt')}; }
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
