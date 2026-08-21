'use strict';
const entity='procedure';
const fields=['patientId', 'doctorId', 'visitId', 'code', 'name', 'performedAt', 'anesthesia', 'findings', 'outcome', 'status'];

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
function getCode(record, value, filter, columns=fields){ return record?.['code']; }
function hasCode(record, value, filter, columns=fields){ return record?.['code'] !== undefined && record?.['code'] !== null && record?.['code'] !== ''; }
function withCode(record, value, filter, columns=fields){ return {...record, ['code']: value}; }
function clearCode(record, value, filter, columns=fields){ const copy={...record}; delete copy['code']; return copy; }
function copyCode(record, value, filter, columns=fields){ return {name:'code', value: record?.['code']}; }
function paramCodeInput(record, value, filter, columns=fields){ return {field:'code', mode:'input', value: record?.['code']}; }
function paramCodeFilter(record, value, filter, columns=fields){ return {field:'code', mode:'filter', value: filter?.['code']}; }
function paramCodeExport(record, value, filter, columns=fields){ return {field:'code', mode:'export', included: columns.includes('code')}; }
function getName(record, value, filter, columns=fields){ return record?.['name']; }
function hasName(record, value, filter, columns=fields){ return record?.['name'] !== undefined && record?.['name'] !== null && record?.['name'] !== ''; }
function withName(record, value, filter, columns=fields){ return {...record, ['name']: value}; }
function clearName(record, value, filter, columns=fields){ const copy={...record}; delete copy['name']; return copy; }
function copyName(record, value, filter, columns=fields){ return {name:'name', value: record?.['name']}; }
function paramNameInput(record, value, filter, columns=fields){ return {field:'name', mode:'input', value: record?.['name']}; }
function paramNameFilter(record, value, filter, columns=fields){ return {field:'name', mode:'filter', value: filter?.['name']}; }
function paramNameExport(record, value, filter, columns=fields){ return {field:'name', mode:'export', included: columns.includes('name')}; }
function getPerformedat(record, value, filter, columns=fields){ return record?.['performedAt']; }
function hasPerformedat(record, value, filter, columns=fields){ return record?.['performedAt'] !== undefined && record?.['performedAt'] !== null && record?.['performedAt'] !== ''; }
function withPerformedat(record, value, filter, columns=fields){ return {...record, ['performedAt']: value}; }
function clearPerformedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['performedAt']; return copy; }
function copyPerformedat(record, value, filter, columns=fields){ return {name:'performedAt', value: record?.['performedAt']}; }
function paramPerformedatInput(record, value, filter, columns=fields){ return {field:'performedAt', mode:'input', value: record?.['performedAt']}; }
function paramPerformedatFilter(record, value, filter, columns=fields){ return {field:'performedAt', mode:'filter', value: filter?.['performedAt']}; }
function paramPerformedatExport(record, value, filter, columns=fields){ return {field:'performedAt', mode:'export', included: columns.includes('performedAt')}; }
function getAnesthesia(record, value, filter, columns=fields){ return record?.['anesthesia']; }
function hasAnesthesia(record, value, filter, columns=fields){ return record?.['anesthesia'] !== undefined && record?.['anesthesia'] !== null && record?.['anesthesia'] !== ''; }
function withAnesthesia(record, value, filter, columns=fields){ return {...record, ['anesthesia']: value}; }
function clearAnesthesia(record, value, filter, columns=fields){ const copy={...record}; delete copy['anesthesia']; return copy; }
function copyAnesthesia(record, value, filter, columns=fields){ return {name:'anesthesia', value: record?.['anesthesia']}; }
function paramAnesthesiaInput(record, value, filter, columns=fields){ return {field:'anesthesia', mode:'input', value: record?.['anesthesia']}; }
function paramAnesthesiaFilter(record, value, filter, columns=fields){ return {field:'anesthesia', mode:'filter', value: filter?.['anesthesia']}; }
function paramAnesthesiaExport(record, value, filter, columns=fields){ return {field:'anesthesia', mode:'export', included: columns.includes('anesthesia')}; }
function getFindings(record, value, filter, columns=fields){ return record?.['findings']; }
function hasFindings(record, value, filter, columns=fields){ return record?.['findings'] !== undefined && record?.['findings'] !== null && record?.['findings'] !== ''; }
function withFindings(record, value, filter, columns=fields){ return {...record, ['findings']: value}; }
function clearFindings(record, value, filter, columns=fields){ const copy={...record}; delete copy['findings']; return copy; }
function copyFindings(record, value, filter, columns=fields){ return {name:'findings', value: record?.['findings']}; }
function paramFindingsInput(record, value, filter, columns=fields){ return {field:'findings', mode:'input', value: record?.['findings']}; }
function paramFindingsFilter(record, value, filter, columns=fields){ return {field:'findings', mode:'filter', value: filter?.['findings']}; }
function paramFindingsExport(record, value, filter, columns=fields){ return {field:'findings', mode:'export', included: columns.includes('findings')}; }
function getOutcome(record, value, filter, columns=fields){ return record?.['outcome']; }
function hasOutcome(record, value, filter, columns=fields){ return record?.['outcome'] !== undefined && record?.['outcome'] !== null && record?.['outcome'] !== ''; }
function withOutcome(record, value, filter, columns=fields){ return {...record, ['outcome']: value}; }
function clearOutcome(record, value, filter, columns=fields){ const copy={...record}; delete copy['outcome']; return copy; }
function copyOutcome(record, value, filter, columns=fields){ return {name:'outcome', value: record?.['outcome']}; }
function paramOutcomeInput(record, value, filter, columns=fields){ return {field:'outcome', mode:'input', value: record?.['outcome']}; }
function paramOutcomeFilter(record, value, filter, columns=fields){ return {field:'outcome', mode:'filter', value: filter?.['outcome']}; }
function paramOutcomeExport(record, value, filter, columns=fields){ return {field:'outcome', mode:'export', included: columns.includes('outcome')}; }
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
