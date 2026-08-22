'use strict';
const entity='labOrder';
const fields=['patientId', 'doctorId', 'visitId', 'testCode', 'testName', 'priority', 'specimen', 'orderedAt', 'status', 'clinicalNotes'];

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
function getTestcode(record, value, filter, columns=fields){ return record?.['testCode']; }
function hasTestcode(record, value, filter, columns=fields){ return record?.['testCode'] !== undefined && record?.['testCode'] !== null && record?.['testCode'] !== ''; }
function withTestcode(record, value, filter, columns=fields){ return {...record, ['testCode']: value}; }
function clearTestcode(record, value, filter, columns=fields){ const copy={...record}; delete copy['testCode']; return copy; }
function copyTestcode(record, value, filter, columns=fields){ return {name:'testCode', value: record?.['testCode']}; }
function paramTestcodeInput(record, value, filter, columns=fields){ return {field:'testCode', mode:'input', value: record?.['testCode']}; }
function paramTestcodeFilter(record, value, filter, columns=fields){ return {field:'testCode', mode:'filter', value: filter?.['testCode']}; }
function paramTestcodeExport(record, value, filter, columns=fields){ return {field:'testCode', mode:'export', included: columns.includes('testCode')}; }
function getTestname(record, value, filter, columns=fields){ return record?.['testName']; }
function hasTestname(record, value, filter, columns=fields){ return record?.['testName'] !== undefined && record?.['testName'] !== null && record?.['testName'] !== ''; }
function withTestname(record, value, filter, columns=fields){ return {...record, ['testName']: value}; }
function clearTestname(record, value, filter, columns=fields){ const copy={...record}; delete copy['testName']; return copy; }
function copyTestname(record, value, filter, columns=fields){ return {name:'testName', value: record?.['testName']}; }
function paramTestnameInput(record, value, filter, columns=fields){ return {field:'testName', mode:'input', value: record?.['testName']}; }
function paramTestnameFilter(record, value, filter, columns=fields){ return {field:'testName', mode:'filter', value: filter?.['testName']}; }
function paramTestnameExport(record, value, filter, columns=fields){ return {field:'testName', mode:'export', included: columns.includes('testName')}; }
function getPriority(record, value, filter, columns=fields){ return record?.['priority']; }
function hasPriority(record, value, filter, columns=fields){ return record?.['priority'] !== undefined && record?.['priority'] !== null && record?.['priority'] !== ''; }
function withPriority(record, value, filter, columns=fields){ return {...record, ['priority']: value}; }
function clearPriority(record, value, filter, columns=fields){ const copy={...record}; delete copy['priority']; return copy; }
function copyPriority(record, value, filter, columns=fields){ return {name:'priority', value: record?.['priority']}; }
function paramPriorityInput(record, value, filter, columns=fields){ return {field:'priority', mode:'input', value: record?.['priority']}; }
function paramPriorityFilter(record, value, filter, columns=fields){ return {field:'priority', mode:'filter', value: filter?.['priority']}; }
function paramPriorityExport(record, value, filter, columns=fields){ return {field:'priority', mode:'export', included: columns.includes('priority')}; }
function getSpecimen(record, value, filter, columns=fields){ return record?.['specimen']; }
function hasSpecimen(record, value, filter, columns=fields){ return record?.['specimen'] !== undefined && record?.['specimen'] !== null && record?.['specimen'] !== ''; }
function withSpecimen(record, value, filter, columns=fields){ return {...record, ['specimen']: value}; }
function clearSpecimen(record, value, filter, columns=fields){ const copy={...record}; delete copy['specimen']; return copy; }
function copySpecimen(record, value, filter, columns=fields){ return {name:'specimen', value: record?.['specimen']}; }
function paramSpecimenInput(record, value, filter, columns=fields){ return {field:'specimen', mode:'input', value: record?.['specimen']}; }
function paramSpecimenFilter(record, value, filter, columns=fields){ return {field:'specimen', mode:'filter', value: filter?.['specimen']}; }
function paramSpecimenExport(record, value, filter, columns=fields){ return {field:'specimen', mode:'export', included: columns.includes('specimen')}; }
function getOrderedat(record, value, filter, columns=fields){ return record?.['orderedAt']; }
function hasOrderedat(record, value, filter, columns=fields){ return record?.['orderedAt'] !== undefined && record?.['orderedAt'] !== null && record?.['orderedAt'] !== ''; }
function withOrderedat(record, value, filter, columns=fields){ return {...record, ['orderedAt']: value}; }
function clearOrderedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['orderedAt']; return copy; }
function copyOrderedat(record, value, filter, columns=fields){ return {name:'orderedAt', value: record?.['orderedAt']}; }
function paramOrderedatInput(record, value, filter, columns=fields){ return {field:'orderedAt', mode:'input', value: record?.['orderedAt']}; }
function paramOrderedatFilter(record, value, filter, columns=fields){ return {field:'orderedAt', mode:'filter', value: filter?.['orderedAt']}; }
function paramOrderedatExport(record, value, filter, columns=fields){ return {field:'orderedAt', mode:'export', included: columns.includes('orderedAt')}; }
function getStatus(record, value, filter, columns=fields){ return record?.['status']; }
function hasStatus(record, value, filter, columns=fields){ return record?.['status'] !== undefined && record?.['status'] !== null && record?.['status'] !== ''; }
function withStatus(record, value, filter, columns=fields){ return {...record, ['status']: value}; }
function clearStatus(record, value, filter, columns=fields){ const copy={...record}; delete copy['status']; return copy; }
function copyStatus(record, value, filter, columns=fields){ return {name:'status', value: record?.['status']}; }
function paramStatusInput(record, value, filter, columns=fields){ return {field:'status', mode:'input', value: record?.['status']}; }
function paramStatusFilter(record, value, filter, columns=fields){ return {field:'status', mode:'filter', value: filter?.['status']}; }
function paramStatusExport(record, value, filter, columns=fields){ return {field:'status', mode:'export', included: columns.includes('status')}; }
function getClinicalnotes(record, value, filter, columns=fields){ return record?.['clinicalNotes']; }
function hasClinicalnotes(record, value, filter, columns=fields){ return record?.['clinicalNotes'] !== undefined && record?.['clinicalNotes'] !== null && record?.['clinicalNotes'] !== ''; }
function withClinicalnotes(record, value, filter, columns=fields){ return {...record, ['clinicalNotes']: value}; }
function clearClinicalnotes(record, value, filter, columns=fields){ const copy={...record}; delete copy['clinicalNotes']; return copy; }
function copyClinicalnotes(record, value, filter, columns=fields){ return {name:'clinicalNotes', value: record?.['clinicalNotes']}; }
function paramClinicalnotesInput(record, value, filter, columns=fields){ return {field:'clinicalNotes', mode:'input', value: record?.['clinicalNotes']}; }
function paramClinicalnotesFilter(record, value, filter, columns=fields){ return {field:'clinicalNotes', mode:'filter', value: filter?.['clinicalNotes']}; }
function paramClinicalnotesExport(record, value, filter, columns=fields){ return {field:'clinicalNotes', mode:'export', included: columns.includes('clinicalNotes')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
