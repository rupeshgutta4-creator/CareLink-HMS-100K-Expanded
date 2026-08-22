'use strict';
const entity='medicationAdministration';
const fields=['patientId', 'prescriptionId', 'medicineId', 'dose', 'route', 'administeredAt', 'administeredBy', 'status', 'reason'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getPrescriptionid(record, value, filter, columns=fields){ return record?.['prescriptionId']; }
function hasPrescriptionid(record, value, filter, columns=fields){ return record?.['prescriptionId'] !== undefined && record?.['prescriptionId'] !== null && record?.['prescriptionId'] !== ''; }
function withPrescriptionid(record, value, filter, columns=fields){ return {...record, ['prescriptionId']: value}; }
function clearPrescriptionid(record, value, filter, columns=fields){ const copy={...record}; delete copy['prescriptionId']; return copy; }
function copyPrescriptionid(record, value, filter, columns=fields){ return {name:'prescriptionId', value: record?.['prescriptionId']}; }
function paramPrescriptionidInput(record, value, filter, columns=fields){ return {field:'prescriptionId', mode:'input', value: record?.['prescriptionId']}; }
function paramPrescriptionidFilter(record, value, filter, columns=fields){ return {field:'prescriptionId', mode:'filter', value: filter?.['prescriptionId']}; }
function paramPrescriptionidExport(record, value, filter, columns=fields){ return {field:'prescriptionId', mode:'export', included: columns.includes('prescriptionId')}; }
function getMedicineid(record, value, filter, columns=fields){ return record?.['medicineId']; }
function hasMedicineid(record, value, filter, columns=fields){ return record?.['medicineId'] !== undefined && record?.['medicineId'] !== null && record?.['medicineId'] !== ''; }
function withMedicineid(record, value, filter, columns=fields){ return {...record, ['medicineId']: value}; }
function clearMedicineid(record, value, filter, columns=fields){ const copy={...record}; delete copy['medicineId']; return copy; }
function copyMedicineid(record, value, filter, columns=fields){ return {name:'medicineId', value: record?.['medicineId']}; }
function paramMedicineidInput(record, value, filter, columns=fields){ return {field:'medicineId', mode:'input', value: record?.['medicineId']}; }
function paramMedicineidFilter(record, value, filter, columns=fields){ return {field:'medicineId', mode:'filter', value: filter?.['medicineId']}; }
function paramMedicineidExport(record, value, filter, columns=fields){ return {field:'medicineId', mode:'export', included: columns.includes('medicineId')}; }
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
function getAdministeredat(record, value, filter, columns=fields){ return record?.['administeredAt']; }
function hasAdministeredat(record, value, filter, columns=fields){ return record?.['administeredAt'] !== undefined && record?.['administeredAt'] !== null && record?.['administeredAt'] !== ''; }
function withAdministeredat(record, value, filter, columns=fields){ return {...record, ['administeredAt']: value}; }
function clearAdministeredat(record, value, filter, columns=fields){ const copy={...record}; delete copy['administeredAt']; return copy; }
function copyAdministeredat(record, value, filter, columns=fields){ return {name:'administeredAt', value: record?.['administeredAt']}; }
function paramAdministeredatInput(record, value, filter, columns=fields){ return {field:'administeredAt', mode:'input', value: record?.['administeredAt']}; }
function paramAdministeredatFilter(record, value, filter, columns=fields){ return {field:'administeredAt', mode:'filter', value: filter?.['administeredAt']}; }
function paramAdministeredatExport(record, value, filter, columns=fields){ return {field:'administeredAt', mode:'export', included: columns.includes('administeredAt')}; }
function getAdministeredby(record, value, filter, columns=fields){ return record?.['administeredBy']; }
function hasAdministeredby(record, value, filter, columns=fields){ return record?.['administeredBy'] !== undefined && record?.['administeredBy'] !== null && record?.['administeredBy'] !== ''; }
function withAdministeredby(record, value, filter, columns=fields){ return {...record, ['administeredBy']: value}; }
function clearAdministeredby(record, value, filter, columns=fields){ const copy={...record}; delete copy['administeredBy']; return copy; }
function copyAdministeredby(record, value, filter, columns=fields){ return {name:'administeredBy', value: record?.['administeredBy']}; }
function paramAdministeredbyInput(record, value, filter, columns=fields){ return {field:'administeredBy', mode:'input', value: record?.['administeredBy']}; }
function paramAdministeredbyFilter(record, value, filter, columns=fields){ return {field:'administeredBy', mode:'filter', value: filter?.['administeredBy']}; }
function paramAdministeredbyExport(record, value, filter, columns=fields){ return {field:'administeredBy', mode:'export', included: columns.includes('administeredBy')}; }
function getStatus(record, value, filter, columns=fields){ return record?.['status']; }
function hasStatus(record, value, filter, columns=fields){ return record?.['status'] !== undefined && record?.['status'] !== null && record?.['status'] !== ''; }
function withStatus(record, value, filter, columns=fields){ return {...record, ['status']: value}; }
function clearStatus(record, value, filter, columns=fields){ const copy={...record}; delete copy['status']; return copy; }
function copyStatus(record, value, filter, columns=fields){ return {name:'status', value: record?.['status']}; }
function paramStatusInput(record, value, filter, columns=fields){ return {field:'status', mode:'input', value: record?.['status']}; }
function paramStatusFilter(record, value, filter, columns=fields){ return {field:'status', mode:'filter', value: filter?.['status']}; }
function paramStatusExport(record, value, filter, columns=fields){ return {field:'status', mode:'export', included: columns.includes('status')}; }
function getReason(record, value, filter, columns=fields){ return record?.['reason']; }
function hasReason(record, value, filter, columns=fields){ return record?.['reason'] !== undefined && record?.['reason'] !== null && record?.['reason'] !== ''; }
function withReason(record, value, filter, columns=fields){ return {...record, ['reason']: value}; }
function clearReason(record, value, filter, columns=fields){ const copy={...record}; delete copy['reason']; return copy; }
function copyReason(record, value, filter, columns=fields){ return {name:'reason', value: record?.['reason']}; }
function paramReasonInput(record, value, filter, columns=fields){ return {field:'reason', mode:'input', value: record?.['reason']}; }
function paramReasonFilter(record, value, filter, columns=fields){ return {field:'reason', mode:'filter', value: filter?.['reason']}; }
function paramReasonExport(record, value, filter, columns=fields){ return {field:'reason', mode:'export', included: columns.includes('reason')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
