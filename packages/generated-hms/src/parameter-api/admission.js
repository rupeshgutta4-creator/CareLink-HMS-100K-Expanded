'use strict';
const entity='admission';
const fields=['patientId', 'doctorId', 'wardId', 'bedId', 'admittedAt', 'expectedDischargeAt', 'dischargeAt', 'admissionType', 'reason', 'status', 'attendingTeam'];

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
function getWardid(record, value, filter, columns=fields){ return record?.['wardId']; }
function hasWardid(record, value, filter, columns=fields){ return record?.['wardId'] !== undefined && record?.['wardId'] !== null && record?.['wardId'] !== ''; }
function withWardid(record, value, filter, columns=fields){ return {...record, ['wardId']: value}; }
function clearWardid(record, value, filter, columns=fields){ const copy={...record}; delete copy['wardId']; return copy; }
function copyWardid(record, value, filter, columns=fields){ return {name:'wardId', value: record?.['wardId']}; }
function paramWardidInput(record, value, filter, columns=fields){ return {field:'wardId', mode:'input', value: record?.['wardId']}; }
function paramWardidFilter(record, value, filter, columns=fields){ return {field:'wardId', mode:'filter', value: filter?.['wardId']}; }
function paramWardidExport(record, value, filter, columns=fields){ return {field:'wardId', mode:'export', included: columns.includes('wardId')}; }
function getBedid(record, value, filter, columns=fields){ return record?.['bedId']; }
function hasBedid(record, value, filter, columns=fields){ return record?.['bedId'] !== undefined && record?.['bedId'] !== null && record?.['bedId'] !== ''; }
function withBedid(record, value, filter, columns=fields){ return {...record, ['bedId']: value}; }
function clearBedid(record, value, filter, columns=fields){ const copy={...record}; delete copy['bedId']; return copy; }
function copyBedid(record, value, filter, columns=fields){ return {name:'bedId', value: record?.['bedId']}; }
function paramBedidInput(record, value, filter, columns=fields){ return {field:'bedId', mode:'input', value: record?.['bedId']}; }
function paramBedidFilter(record, value, filter, columns=fields){ return {field:'bedId', mode:'filter', value: filter?.['bedId']}; }
function paramBedidExport(record, value, filter, columns=fields){ return {field:'bedId', mode:'export', included: columns.includes('bedId')}; }
function getAdmittedat(record, value, filter, columns=fields){ return record?.['admittedAt']; }
function hasAdmittedat(record, value, filter, columns=fields){ return record?.['admittedAt'] !== undefined && record?.['admittedAt'] !== null && record?.['admittedAt'] !== ''; }
function withAdmittedat(record, value, filter, columns=fields){ return {...record, ['admittedAt']: value}; }
function clearAdmittedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['admittedAt']; return copy; }
function copyAdmittedat(record, value, filter, columns=fields){ return {name:'admittedAt', value: record?.['admittedAt']}; }
function paramAdmittedatInput(record, value, filter, columns=fields){ return {field:'admittedAt', mode:'input', value: record?.['admittedAt']}; }
function paramAdmittedatFilter(record, value, filter, columns=fields){ return {field:'admittedAt', mode:'filter', value: filter?.['admittedAt']}; }
function paramAdmittedatExport(record, value, filter, columns=fields){ return {field:'admittedAt', mode:'export', included: columns.includes('admittedAt')}; }
function getExpecteddischargeat(record, value, filter, columns=fields){ return record?.['expectedDischargeAt']; }
function hasExpecteddischargeat(record, value, filter, columns=fields){ return record?.['expectedDischargeAt'] !== undefined && record?.['expectedDischargeAt'] !== null && record?.['expectedDischargeAt'] !== ''; }
function withExpecteddischargeat(record, value, filter, columns=fields){ return {...record, ['expectedDischargeAt']: value}; }
function clearExpecteddischargeat(record, value, filter, columns=fields){ const copy={...record}; delete copy['expectedDischargeAt']; return copy; }
function copyExpecteddischargeat(record, value, filter, columns=fields){ return {name:'expectedDischargeAt', value: record?.['expectedDischargeAt']}; }
function paramExpecteddischargeatInput(record, value, filter, columns=fields){ return {field:'expectedDischargeAt', mode:'input', value: record?.['expectedDischargeAt']}; }
function paramExpecteddischargeatFilter(record, value, filter, columns=fields){ return {field:'expectedDischargeAt', mode:'filter', value: filter?.['expectedDischargeAt']}; }
function paramExpecteddischargeatExport(record, value, filter, columns=fields){ return {field:'expectedDischargeAt', mode:'export', included: columns.includes('expectedDischargeAt')}; }
function getDischargeat(record, value, filter, columns=fields){ return record?.['dischargeAt']; }
function hasDischargeat(record, value, filter, columns=fields){ return record?.['dischargeAt'] !== undefined && record?.['dischargeAt'] !== null && record?.['dischargeAt'] !== ''; }
function withDischargeat(record, value, filter, columns=fields){ return {...record, ['dischargeAt']: value}; }
function clearDischargeat(record, value, filter, columns=fields){ const copy={...record}; delete copy['dischargeAt']; return copy; }
function copyDischargeat(record, value, filter, columns=fields){ return {name:'dischargeAt', value: record?.['dischargeAt']}; }
function paramDischargeatInput(record, value, filter, columns=fields){ return {field:'dischargeAt', mode:'input', value: record?.['dischargeAt']}; }
function paramDischargeatFilter(record, value, filter, columns=fields){ return {field:'dischargeAt', mode:'filter', value: filter?.['dischargeAt']}; }
function paramDischargeatExport(record, value, filter, columns=fields){ return {field:'dischargeAt', mode:'export', included: columns.includes('dischargeAt')}; }
function getAdmissiontype(record, value, filter, columns=fields){ return record?.['admissionType']; }
function hasAdmissiontype(record, value, filter, columns=fields){ return record?.['admissionType'] !== undefined && record?.['admissionType'] !== null && record?.['admissionType'] !== ''; }
function withAdmissiontype(record, value, filter, columns=fields){ return {...record, ['admissionType']: value}; }
function clearAdmissiontype(record, value, filter, columns=fields){ const copy={...record}; delete copy['admissionType']; return copy; }
function copyAdmissiontype(record, value, filter, columns=fields){ return {name:'admissionType', value: record?.['admissionType']}; }
function paramAdmissiontypeInput(record, value, filter, columns=fields){ return {field:'admissionType', mode:'input', value: record?.['admissionType']}; }
function paramAdmissiontypeFilter(record, value, filter, columns=fields){ return {field:'admissionType', mode:'filter', value: filter?.['admissionType']}; }
function paramAdmissiontypeExport(record, value, filter, columns=fields){ return {field:'admissionType', mode:'export', included: columns.includes('admissionType')}; }
function getReason(record, value, filter, columns=fields){ return record?.['reason']; }
function hasReason(record, value, filter, columns=fields){ return record?.['reason'] !== undefined && record?.['reason'] !== null && record?.['reason'] !== ''; }
function withReason(record, value, filter, columns=fields){ return {...record, ['reason']: value}; }
function clearReason(record, value, filter, columns=fields){ const copy={...record}; delete copy['reason']; return copy; }
function copyReason(record, value, filter, columns=fields){ return {name:'reason', value: record?.['reason']}; }
function paramReasonInput(record, value, filter, columns=fields){ return {field:'reason', mode:'input', value: record?.['reason']}; }
function paramReasonFilter(record, value, filter, columns=fields){ return {field:'reason', mode:'filter', value: filter?.['reason']}; }
function paramReasonExport(record, value, filter, columns=fields){ return {field:'reason', mode:'export', included: columns.includes('reason')}; }
function getStatus(record, value, filter, columns=fields){ return record?.['status']; }
function hasStatus(record, value, filter, columns=fields){ return record?.['status'] !== undefined && record?.['status'] !== null && record?.['status'] !== ''; }
function withStatus(record, value, filter, columns=fields){ return {...record, ['status']: value}; }
function clearStatus(record, value, filter, columns=fields){ const copy={...record}; delete copy['status']; return copy; }
function copyStatus(record, value, filter, columns=fields){ return {name:'status', value: record?.['status']}; }
function paramStatusInput(record, value, filter, columns=fields){ return {field:'status', mode:'input', value: record?.['status']}; }
function paramStatusFilter(record, value, filter, columns=fields){ return {field:'status', mode:'filter', value: filter?.['status']}; }
function paramStatusExport(record, value, filter, columns=fields){ return {field:'status', mode:'export', included: columns.includes('status')}; }
function getAttendingteam(record, value, filter, columns=fields){ return record?.['attendingTeam']; }
function hasAttendingteam(record, value, filter, columns=fields){ return record?.['attendingTeam'] !== undefined && record?.['attendingTeam'] !== null && record?.['attendingTeam'] !== ''; }
function withAttendingteam(record, value, filter, columns=fields){ return {...record, ['attendingTeam']: value}; }
function clearAttendingteam(record, value, filter, columns=fields){ const copy={...record}; delete copy['attendingTeam']; return copy; }
function copyAttendingteam(record, value, filter, columns=fields){ return {name:'attendingTeam', value: record?.['attendingTeam']}; }
function paramAttendingteamInput(record, value, filter, columns=fields){ return {field:'attendingTeam', mode:'input', value: record?.['attendingTeam']}; }
function paramAttendingteamFilter(record, value, filter, columns=fields){ return {field:'attendingTeam', mode:'filter', value: filter?.['attendingTeam']}; }
function paramAttendingteamExport(record, value, filter, columns=fields){ return {field:'attendingTeam', mode:'export', included: columns.includes('attendingTeam')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
