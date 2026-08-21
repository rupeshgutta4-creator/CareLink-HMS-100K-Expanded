'use strict';
const entity='patientFeedback';
const fields=['patientId', 'visitId', 'rating', 'category', 'comments', 'submittedAt', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getVisitid(record, value, filter, columns=fields){ return record?.['visitId']; }
function hasVisitid(record, value, filter, columns=fields){ return record?.['visitId'] !== undefined && record?.['visitId'] !== null && record?.['visitId'] !== ''; }
function withVisitid(record, value, filter, columns=fields){ return {...record, ['visitId']: value}; }
function clearVisitid(record, value, filter, columns=fields){ const copy={...record}; delete copy['visitId']; return copy; }
function copyVisitid(record, value, filter, columns=fields){ return {name:'visitId', value: record?.['visitId']}; }
function paramVisitidInput(record, value, filter, columns=fields){ return {field:'visitId', mode:'input', value: record?.['visitId']}; }
function paramVisitidFilter(record, value, filter, columns=fields){ return {field:'visitId', mode:'filter', value: filter?.['visitId']}; }
function paramVisitidExport(record, value, filter, columns=fields){ return {field:'visitId', mode:'export', included: columns.includes('visitId')}; }
function getRating(record, value, filter, columns=fields){ return record?.['rating']; }
function hasRating(record, value, filter, columns=fields){ return record?.['rating'] !== undefined && record?.['rating'] !== null && record?.['rating'] !== ''; }
function withRating(record, value, filter, columns=fields){ return {...record, ['rating']: value}; }
function clearRating(record, value, filter, columns=fields){ const copy={...record}; delete copy['rating']; return copy; }
function copyRating(record, value, filter, columns=fields){ return {name:'rating', value: record?.['rating']}; }
function paramRatingInput(record, value, filter, columns=fields){ return {field:'rating', mode:'input', value: record?.['rating']}; }
function paramRatingFilter(record, value, filter, columns=fields){ return {field:'rating', mode:'filter', value: filter?.['rating']}; }
function paramRatingExport(record, value, filter, columns=fields){ return {field:'rating', mode:'export', included: columns.includes('rating')}; }
function getCategory(record, value, filter, columns=fields){ return record?.['category']; }
function hasCategory(record, value, filter, columns=fields){ return record?.['category'] !== undefined && record?.['category'] !== null && record?.['category'] !== ''; }
function withCategory(record, value, filter, columns=fields){ return {...record, ['category']: value}; }
function clearCategory(record, value, filter, columns=fields){ const copy={...record}; delete copy['category']; return copy; }
function copyCategory(record, value, filter, columns=fields){ return {name:'category', value: record?.['category']}; }
function paramCategoryInput(record, value, filter, columns=fields){ return {field:'category', mode:'input', value: record?.['category']}; }
function paramCategoryFilter(record, value, filter, columns=fields){ return {field:'category', mode:'filter', value: filter?.['category']}; }
function paramCategoryExport(record, value, filter, columns=fields){ return {field:'category', mode:'export', included: columns.includes('category')}; }
function getComments(record, value, filter, columns=fields){ return record?.['comments']; }
function hasComments(record, value, filter, columns=fields){ return record?.['comments'] !== undefined && record?.['comments'] !== null && record?.['comments'] !== ''; }
function withComments(record, value, filter, columns=fields){ return {...record, ['comments']: value}; }
function clearComments(record, value, filter, columns=fields){ const copy={...record}; delete copy['comments']; return copy; }
function copyComments(record, value, filter, columns=fields){ return {name:'comments', value: record?.['comments']}; }
function paramCommentsInput(record, value, filter, columns=fields){ return {field:'comments', mode:'input', value: record?.['comments']}; }
function paramCommentsFilter(record, value, filter, columns=fields){ return {field:'comments', mode:'filter', value: filter?.['comments']}; }
function paramCommentsExport(record, value, filter, columns=fields){ return {field:'comments', mode:'export', included: columns.includes('comments')}; }
function getSubmittedat(record, value, filter, columns=fields){ return record?.['submittedAt']; }
function hasSubmittedat(record, value, filter, columns=fields){ return record?.['submittedAt'] !== undefined && record?.['submittedAt'] !== null && record?.['submittedAt'] !== ''; }
function withSubmittedat(record, value, filter, columns=fields){ return {...record, ['submittedAt']: value}; }
function clearSubmittedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['submittedAt']; return copy; }
function copySubmittedat(record, value, filter, columns=fields){ return {name:'submittedAt', value: record?.['submittedAt']}; }
function paramSubmittedatInput(record, value, filter, columns=fields){ return {field:'submittedAt', mode:'input', value: record?.['submittedAt']}; }
function paramSubmittedatFilter(record, value, filter, columns=fields){ return {field:'submittedAt', mode:'filter', value: filter?.['submittedAt']}; }
function paramSubmittedatExport(record, value, filter, columns=fields){ return {field:'submittedAt', mode:'export', included: columns.includes('submittedAt')}; }
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
