'use strict';
const entity='complaint';
const fields=['patientId', 'category', 'description', 'submittedAt', 'assignedTo', 'resolution', 'resolvedAt', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getCategory(record, value, filter, columns=fields){ return record?.['category']; }
function hasCategory(record, value, filter, columns=fields){ return record?.['category'] !== undefined && record?.['category'] !== null && record?.['category'] !== ''; }
function withCategory(record, value, filter, columns=fields){ return {...record, ['category']: value}; }
function clearCategory(record, value, filter, columns=fields){ const copy={...record}; delete copy['category']; return copy; }
function copyCategory(record, value, filter, columns=fields){ return {name:'category', value: record?.['category']}; }
function paramCategoryInput(record, value, filter, columns=fields){ return {field:'category', mode:'input', value: record?.['category']}; }
function paramCategoryFilter(record, value, filter, columns=fields){ return {field:'category', mode:'filter', value: filter?.['category']}; }
function paramCategoryExport(record, value, filter, columns=fields){ return {field:'category', mode:'export', included: columns.includes('category')}; }
function getDescription(record, value, filter, columns=fields){ return record?.['description']; }
function hasDescription(record, value, filter, columns=fields){ return record?.['description'] !== undefined && record?.['description'] !== null && record?.['description'] !== ''; }
function withDescription(record, value, filter, columns=fields){ return {...record, ['description']: value}; }
function clearDescription(record, value, filter, columns=fields){ const copy={...record}; delete copy['description']; return copy; }
function copyDescription(record, value, filter, columns=fields){ return {name:'description', value: record?.['description']}; }
function paramDescriptionInput(record, value, filter, columns=fields){ return {field:'description', mode:'input', value: record?.['description']}; }
function paramDescriptionFilter(record, value, filter, columns=fields){ return {field:'description', mode:'filter', value: filter?.['description']}; }
function paramDescriptionExport(record, value, filter, columns=fields){ return {field:'description', mode:'export', included: columns.includes('description')}; }
function getSubmittedat(record, value, filter, columns=fields){ return record?.['submittedAt']; }
function hasSubmittedat(record, value, filter, columns=fields){ return record?.['submittedAt'] !== undefined && record?.['submittedAt'] !== null && record?.['submittedAt'] !== ''; }
function withSubmittedat(record, value, filter, columns=fields){ return {...record, ['submittedAt']: value}; }
function clearSubmittedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['submittedAt']; return copy; }
function copySubmittedat(record, value, filter, columns=fields){ return {name:'submittedAt', value: record?.['submittedAt']}; }
function paramSubmittedatInput(record, value, filter, columns=fields){ return {field:'submittedAt', mode:'input', value: record?.['submittedAt']}; }
function paramSubmittedatFilter(record, value, filter, columns=fields){ return {field:'submittedAt', mode:'filter', value: filter?.['submittedAt']}; }
function paramSubmittedatExport(record, value, filter, columns=fields){ return {field:'submittedAt', mode:'export', included: columns.includes('submittedAt')}; }
function getAssignedto(record, value, filter, columns=fields){ return record?.['assignedTo']; }
function hasAssignedto(record, value, filter, columns=fields){ return record?.['assignedTo'] !== undefined && record?.['assignedTo'] !== null && record?.['assignedTo'] !== ''; }
function withAssignedto(record, value, filter, columns=fields){ return {...record, ['assignedTo']: value}; }
function clearAssignedto(record, value, filter, columns=fields){ const copy={...record}; delete copy['assignedTo']; return copy; }
function copyAssignedto(record, value, filter, columns=fields){ return {name:'assignedTo', value: record?.['assignedTo']}; }
function paramAssignedtoInput(record, value, filter, columns=fields){ return {field:'assignedTo', mode:'input', value: record?.['assignedTo']}; }
function paramAssignedtoFilter(record, value, filter, columns=fields){ return {field:'assignedTo', mode:'filter', value: filter?.['assignedTo']}; }
function paramAssignedtoExport(record, value, filter, columns=fields){ return {field:'assignedTo', mode:'export', included: columns.includes('assignedTo')}; }
function getResolution(record, value, filter, columns=fields){ return record?.['resolution']; }
function hasResolution(record, value, filter, columns=fields){ return record?.['resolution'] !== undefined && record?.['resolution'] !== null && record?.['resolution'] !== ''; }
function withResolution(record, value, filter, columns=fields){ return {...record, ['resolution']: value}; }
function clearResolution(record, value, filter, columns=fields){ const copy={...record}; delete copy['resolution']; return copy; }
function copyResolution(record, value, filter, columns=fields){ return {name:'resolution', value: record?.['resolution']}; }
function paramResolutionInput(record, value, filter, columns=fields){ return {field:'resolution', mode:'input', value: record?.['resolution']}; }
function paramResolutionFilter(record, value, filter, columns=fields){ return {field:'resolution', mode:'filter', value: filter?.['resolution']}; }
function paramResolutionExport(record, value, filter, columns=fields){ return {field:'resolution', mode:'export', included: columns.includes('resolution')}; }
function getResolvedat(record, value, filter, columns=fields){ return record?.['resolvedAt']; }
function hasResolvedat(record, value, filter, columns=fields){ return record?.['resolvedAt'] !== undefined && record?.['resolvedAt'] !== null && record?.['resolvedAt'] !== ''; }
function withResolvedat(record, value, filter, columns=fields){ return {...record, ['resolvedAt']: value}; }
function clearResolvedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['resolvedAt']; return copy; }
function copyResolvedat(record, value, filter, columns=fields){ return {name:'resolvedAt', value: record?.['resolvedAt']}; }
function paramResolvedatInput(record, value, filter, columns=fields){ return {field:'resolvedAt', mode:'input', value: record?.['resolvedAt']}; }
function paramResolvedatFilter(record, value, filter, columns=fields){ return {field:'resolvedAt', mode:'filter', value: filter?.['resolvedAt']}; }
function paramResolvedatExport(record, value, filter, columns=fields){ return {field:'resolvedAt', mode:'export', included: columns.includes('resolvedAt')}; }
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
