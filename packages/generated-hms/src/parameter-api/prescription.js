'use strict';
const entity='prescription';
const fields=['patientId', 'doctorId', 'visitId', 'medicationId', 'dose', 'route', 'frequency', 'durationDays', 'quantity', 'instructions', 'status'];

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
function getMedicationid(record, value, filter, columns=fields){ return record?.['medicationId']; }
function hasMedicationid(record, value, filter, columns=fields){ return record?.['medicationId'] !== undefined && record?.['medicationId'] !== null && record?.['medicationId'] !== ''; }
function withMedicationid(record, value, filter, columns=fields){ return {...record, ['medicationId']: value}; }
function clearMedicationid(record, value, filter, columns=fields){ const copy={...record}; delete copy['medicationId']; return copy; }
function copyMedicationid(record, value, filter, columns=fields){ return {name:'medicationId', value: record?.['medicationId']}; }
function paramMedicationidInput(record, value, filter, columns=fields){ return {field:'medicationId', mode:'input', value: record?.['medicationId']}; }
function paramMedicationidFilter(record, value, filter, columns=fields){ return {field:'medicationId', mode:'filter', value: filter?.['medicationId']}; }
function paramMedicationidExport(record, value, filter, columns=fields){ return {field:'medicationId', mode:'export', included: columns.includes('medicationId')}; }
function getDose(record, value, filter, columns=fields){ return record?.['dose']; }
function hasDose(record, value, filter, columns=fields){ return record?.['dose'] !== undefined && record?.['dose'] !== null && record?.['dose'] !== ''; }
function withDose(record, value, filter, columns=fields){ return {...record, ['dose']: value}; }
function clearDose(record, value, filter, columns=fields){ const copy={...record}; delete copy['dose']; return copy; }
function copyDose(record, value, filter, columns=fields){ return {name:'dose', value: record?.['dose']}; }
function paramDoseInput(record, value, filter, columns=fields){ return {field:'dose', mode:'input', value: record?.['dose']}; }
function paramDoseFilter(record, value, filter, columns=fields){ return {field:'dose', mode:'filter', value: filter?.['dose']}; }
function paramDoseExport(record, value, filter, columns=fields){ return {field:'dose', mode:'export', included: columns.includes('dose')}; }
function getRoute(record, value, filter, columns=fields){ return record?.['route']; }
function hasRoute(record, value, filter, columns=fields){ return record?.['route'] !== undefined && record?.['route'] !== null && record?.['route'] !== ''; }
function withRoute(record, value, filter, columns=fields){ return {...record, ['route']: value}; }
function clearRoute(record, value, filter, columns=fields){ const copy={...record}; delete copy['route']; return copy; }
function copyRoute(record, value, filter, columns=fields){ return {name:'route', value: record?.['route']}; }
function paramRouteInput(record, value, filter, columns=fields){ return {field:'route', mode:'input', value: record?.['route']}; }
function paramRouteFilter(record, value, filter, columns=fields){ return {field:'route', mode:'filter', value: filter?.['route']}; }
function paramRouteExport(record, value, filter, columns=fields){ return {field:'route', mode:'export', included: columns.includes('route')}; }
function getFrequency(record, value, filter, columns=fields){ return record?.['frequency']; }
function hasFrequency(record, value, filter, columns=fields){ return record?.['frequency'] !== undefined && record?.['frequency'] !== null && record?.['frequency'] !== ''; }
function withFrequency(record, value, filter, columns=fields){ return {...record, ['frequency']: value}; }
function clearFrequency(record, value, filter, columns=fields){ const copy={...record}; delete copy['frequency']; return copy; }
function copyFrequency(record, value, filter, columns=fields){ return {name:'frequency', value: record?.['frequency']}; }
function paramFrequencyInput(record, value, filter, columns=fields){ return {field:'frequency', mode:'input', value: record?.['frequency']}; }
function paramFrequencyFilter(record, value, filter, columns=fields){ return {field:'frequency', mode:'filter', value: filter?.['frequency']}; }
function paramFrequencyExport(record, value, filter, columns=fields){ return {field:'frequency', mode:'export', included: columns.includes('frequency')}; }
function getDurationdays(record, value, filter, columns=fields){ return record?.['durationDays']; }
function hasDurationdays(record, value, filter, columns=fields){ return record?.['durationDays'] !== undefined && record?.['durationDays'] !== null && record?.['durationDays'] !== ''; }
function withDurationdays(record, value, filter, columns=fields){ return {...record, ['durationDays']: value}; }
function clearDurationdays(record, value, filter, columns=fields){ const copy={...record}; delete copy['durationDays']; return copy; }
function copyDurationdays(record, value, filter, columns=fields){ return {name:'durationDays', value: record?.['durationDays']}; }
function paramDurationdaysInput(record, value, filter, columns=fields){ return {field:'durationDays', mode:'input', value: record?.['durationDays']}; }
function paramDurationdaysFilter(record, value, filter, columns=fields){ return {field:'durationDays', mode:'filter', value: filter?.['durationDays']}; }
function paramDurationdaysExport(record, value, filter, columns=fields){ return {field:'durationDays', mode:'export', included: columns.includes('durationDays')}; }
function getQuantity(record, value, filter, columns=fields){ return record?.['quantity']; }
function hasQuantity(record, value, filter, columns=fields){ return record?.['quantity'] !== undefined && record?.['quantity'] !== null && record?.['quantity'] !== ''; }
function withQuantity(record, value, filter, columns=fields){ return {...record, ['quantity']: value}; }
function clearQuantity(record, value, filter, columns=fields){ const copy={...record}; delete copy['quantity']; return copy; }
function copyQuantity(record, value, filter, columns=fields){ return {name:'quantity', value: record?.['quantity']}; }
function paramQuantityInput(record, value, filter, columns=fields){ return {field:'quantity', mode:'input', value: record?.['quantity']}; }
function paramQuantityFilter(record, value, filter, columns=fields){ return {field:'quantity', mode:'filter', value: filter?.['quantity']}; }
function paramQuantityExport(record, value, filter, columns=fields){ return {field:'quantity', mode:'export', included: columns.includes('quantity')}; }
function getInstructions(record, value, filter, columns=fields){ return record?.['instructions']; }
function hasInstructions(record, value, filter, columns=fields){ return record?.['instructions'] !== undefined && record?.['instructions'] !== null && record?.['instructions'] !== ''; }
function withInstructions(record, value, filter, columns=fields){ return {...record, ['instructions']: value}; }
function clearInstructions(record, value, filter, columns=fields){ const copy={...record}; delete copy['instructions']; return copy; }
function copyInstructions(record, value, filter, columns=fields){ return {name:'instructions', value: record?.['instructions']}; }
function paramInstructionsInput(record, value, filter, columns=fields){ return {field:'instructions', mode:'input', value: record?.['instructions']}; }
function paramInstructionsFilter(record, value, filter, columns=fields){ return {field:'instructions', mode:'filter', value: filter?.['instructions']}; }
function paramInstructionsExport(record, value, filter, columns=fields){ return {field:'instructions', mode:'export', included: columns.includes('instructions')}; }
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
