'use strict';
const entity='bloodIssue';
const fields=['patientId', 'bloodUnitId', 'requestedBy', 'issuedAt', 'crossmatchResult', 'transfusionStatus', 'notes'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getBloodunitid(record, value, filter, columns=fields){ return record?.['bloodUnitId']; }
function hasBloodunitid(record, value, filter, columns=fields){ return record?.['bloodUnitId'] !== undefined && record?.['bloodUnitId'] !== null && record?.['bloodUnitId'] !== ''; }
function withBloodunitid(record, value, filter, columns=fields){ return {...record, ['bloodUnitId']: value}; }
function clearBloodunitid(record, value, filter, columns=fields){ const copy={...record}; delete copy['bloodUnitId']; return copy; }
function copyBloodunitid(record, value, filter, columns=fields){ return {name:'bloodUnitId', value: record?.['bloodUnitId']}; }
function paramBloodunitidInput(record, value, filter, columns=fields){ return {field:'bloodUnitId', mode:'input', value: record?.['bloodUnitId']}; }
function paramBloodunitidFilter(record, value, filter, columns=fields){ return {field:'bloodUnitId', mode:'filter', value: filter?.['bloodUnitId']}; }
function paramBloodunitidExport(record, value, filter, columns=fields){ return {field:'bloodUnitId', mode:'export', included: columns.includes('bloodUnitId')}; }
function getRequestedby(record, value, filter, columns=fields){ return record?.['requestedBy']; }
function hasRequestedby(record, value, filter, columns=fields){ return record?.['requestedBy'] !== undefined && record?.['requestedBy'] !== null && record?.['requestedBy'] !== ''; }
function withRequestedby(record, value, filter, columns=fields){ return {...record, ['requestedBy']: value}; }
function clearRequestedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['requestedBy']; return copy; }
function copyRequestedby(record, value, filter, columns=fields){ return {name:'requestedBy', value: record?.['requestedBy']}; }
function paramRequestedbyInput(record, value, filter, columns=fields){ return {field:'requestedBy', mode:'input', value: record?.['requestedBy']}; }
function paramRequestedbyFilter(record, value, filter, columns=fields){ return {field:'requestedBy', mode:'filter', value: filter?.['requestedBy']}; }
function paramRequestedbyExport(record, value, filter, columns=fields){ return {field:'requestedBy', mode:'export', included: columns.includes('requestedBy')}; }
function getIssuedat(record, value, filter, columns=fields){ return record?.['issuedAt']; }
function hasIssuedat(record, value, filter, columns=fields){ return record?.['issuedAt'] !== undefined && record?.['issuedAt'] !== null && record?.['issuedAt'] !== ''; }
function withIssuedat(record, value, filter, columns=fields){ return {...record, ['issuedAt']: value}; }
function clearIssuedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['issuedAt']; return copy; }
function copyIssuedat(record, value, filter, columns=fields){ return {name:'issuedAt', value: record?.['issuedAt']}; }
function paramIssuedatInput(record, value, filter, columns=fields){ return {field:'issuedAt', mode:'input', value: record?.['issuedAt']}; }
function paramIssuedatFilter(record, value, filter, columns=fields){ return {field:'issuedAt', mode:'filter', value: filter?.['issuedAt']}; }
function paramIssuedatExport(record, value, filter, columns=fields){ return {field:'issuedAt', mode:'export', included: columns.includes('issuedAt')}; }
function getCrossmatchresult(record, value, filter, columns=fields){ return record?.['crossmatchResult']; }
function hasCrossmatchresult(record, value, filter, columns=fields){ return record?.['crossmatchResult'] !== undefined && record?.['crossmatchResult'] !== null && record?.['crossmatchResult'] !== ''; }
function withCrossmatchresult(record, value, filter, columns=fields){ return {...record, ['crossmatchResult']: value}; }
function clearCrossmatchresult(record, value, filter, columns=fields){ const copy={...record}; delete copy['crossmatchResult']; return copy; }
function copyCrossmatchresult(record, value, filter, columns=fields){ return {name:'crossmatchResult', value: record?.['crossmatchResult']}; }
function paramCrossmatchresultInput(record, value, filter, columns=fields){ return {field:'crossmatchResult', mode:'input', value: record?.['crossmatchResult']}; }
function paramCrossmatchresultFilter(record, value, filter, columns=fields){ return {field:'crossmatchResult', mode:'filter', value: filter?.['crossmatchResult']}; }
function paramCrossmatchresultExport(record, value, filter, columns=fields){ return {field:'crossmatchResult', mode:'export', included: columns.includes('crossmatchResult')}; }
function getTransfusionstatus(record, value, filter, columns=fields){ return record?.['transfusionStatus']; }
function hasTransfusionstatus(record, value, filter, columns=fields){ return record?.['transfusionStatus'] !== undefined && record?.['transfusionStatus'] !== null && record?.['transfusionStatus'] !== ''; }
function withTransfusionstatus(record, value, filter, columns=fields){ return {...record, ['transfusionStatus']: value}; }
function clearTransfusionstatus(record, value, filter, columns=fields){ const copy={...record}; delete copy['transfusionStatus']; return copy; }
function copyTransfusionstatus(record, value, filter, columns=fields){ return {name:'transfusionStatus', value: record?.['transfusionStatus']}; }
function paramTransfusionstatusInput(record, value, filter, columns=fields){ return {field:'transfusionStatus', mode:'input', value: record?.['transfusionStatus']}; }
function paramTransfusionstatusFilter(record, value, filter, columns=fields){ return {field:'transfusionStatus', mode:'filter', value: filter?.['transfusionStatus']}; }
function paramTransfusionstatusExport(record, value, filter, columns=fields){ return {field:'transfusionStatus', mode:'export', included: columns.includes('transfusionStatus')}; }
function getNotes(record, value, filter, columns=fields){ return record?.['notes']; }
function hasNotes(record, value, filter, columns=fields){ return record?.['notes'] !== undefined && record?.['notes'] !== null && record?.['notes'] !== ''; }
function withNotes(record, value, filter, columns=fields){ return {...record, ['notes']: value}; }
function clearNotes(record, value, filter, columns=fields){ const copy={...record}; delete copy['notes']; return copy; }
function copyNotes(record, value, filter, columns=fields){ return {name:'notes', value: record?.['notes']}; }
function paramNotesInput(record, value, filter, columns=fields){ return {field:'notes', mode:'input', value: record?.['notes']}; }
function paramNotesFilter(record, value, filter, columns=fields){ return {field:'notes', mode:'filter', value: filter?.['notes']}; }
function paramNotesExport(record, value, filter, columns=fields){ return {field:'notes', mode:'export', included: columns.includes('notes')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
