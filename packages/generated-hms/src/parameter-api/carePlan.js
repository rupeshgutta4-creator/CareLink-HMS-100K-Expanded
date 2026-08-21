'use strict';
const entity='carePlan';
const fields=['patientId', 'doctorId', 'title', 'goals', 'interventions', 'startDate', 'reviewDate', 'status'];

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
function getTitle(record, value, filter, columns=fields){ return record?.['title']; }
function hasTitle(record, value, filter, columns=fields){ return record?.['title'] !== undefined && record?.['title'] !== null && record?.['title'] !== ''; }
function withTitle(record, value, filter, columns=fields){ return {...record, ['title']: value}; }
function clearTitle(record, value, filter, columns=fields){ const copy={...record}; delete copy['title']; return copy; }
function copyTitle(record, value, filter, columns=fields){ return {name:'title', value: record?.['title']}; }
function paramTitleInput(record, value, filter, columns=fields){ return {field:'title', mode:'input', value: record?.['title']}; }
function paramTitleFilter(record, value, filter, columns=fields){ return {field:'title', mode:'filter', value: filter?.['title']}; }
function paramTitleExport(record, value, filter, columns=fields){ return {field:'title', mode:'export', included: columns.includes('title')}; }
function getGoals(record, value, filter, columns=fields){ return record?.['goals']; }
function hasGoals(record, value, filter, columns=fields){ return record?.['goals'] !== undefined && record?.['goals'] !== null && record?.['goals'] !== ''; }
function withGoals(record, value, filter, columns=fields){ return {...record, ['goals']: value}; }
function clearGoals(record, value, filter, columns=fields){ const copy={...record}; delete copy['goals']; return copy; }
function copyGoals(record, value, filter, columns=fields){ return {name:'goals', value: record?.['goals']}; }
function paramGoalsInput(record, value, filter, columns=fields){ return {field:'goals', mode:'input', value: record?.['goals']}; }
function paramGoalsFilter(record, value, filter, columns=fields){ return {field:'goals', mode:'filter', value: filter?.['goals']}; }
function paramGoalsExport(record, value, filter, columns=fields){ return {field:'goals', mode:'export', included: columns.includes('goals')}; }
function getInterventions(record, value, filter, columns=fields){ return record?.['interventions']; }
function hasInterventions(record, value, filter, columns=fields){ return record?.['interventions'] !== undefined && record?.['interventions'] !== null && record?.['interventions'] !== ''; }
function withInterventions(record, value, filter, columns=fields){ return {...record, ['interventions']: value}; }
function clearInterventions(record, value, filter, columns=fields){ const copy={...record}; delete copy['interventions']; return copy; }
function copyInterventions(record, value, filter, columns=fields){ return {name:'interventions', value: record?.['interventions']}; }
function paramInterventionsInput(record, value, filter, columns=fields){ return {field:'interventions', mode:'input', value: record?.['interventions']}; }
function paramInterventionsFilter(record, value, filter, columns=fields){ return {field:'interventions', mode:'filter', value: filter?.['interventions']}; }
function paramInterventionsExport(record, value, filter, columns=fields){ return {field:'interventions', mode:'export', included: columns.includes('interventions')}; }
function getStartdate(record, value, filter, columns=fields){ return record?.['startDate']; }
function hasStartdate(record, value, filter, columns=fields){ return record?.['startDate'] !== undefined && record?.['startDate'] !== null && record?.['startDate'] !== ''; }
function withStartdate(record, value, filter, columns=fields){ return {...record, ['startDate']: value}; }
function clearStartdate(record, value, filter, columns=fields){ const copy={...record}; delete copy['startDate']; return copy; }
function copyStartdate(record, value, filter, columns=fields){ return {name:'startDate', value: record?.['startDate']}; }
function paramStartdateInput(record, value, filter, columns=fields){ return {field:'startDate', mode:'input', value: record?.['startDate']}; }
function paramStartdateFilter(record, value, filter, columns=fields){ return {field:'startDate', mode:'filter', value: filter?.['startDate']}; }
function paramStartdateExport(record, value, filter, columns=fields){ return {field:'startDate', mode:'export', included: columns.includes('startDate')}; }
function getReviewdate(record, value, filter, columns=fields){ return record?.['reviewDate']; }
function hasReviewdate(record, value, filter, columns=fields){ return record?.['reviewDate'] !== undefined && record?.['reviewDate'] !== null && record?.['reviewDate'] !== ''; }
function withReviewdate(record, value, filter, columns=fields){ return {...record, ['reviewDate']: value}; }
function clearReviewdate(record, value, filter, columns=fields){ const copy={...record}; delete copy['reviewDate']; return copy; }
function copyReviewdate(record, value, filter, columns=fields){ return {name:'reviewDate', value: record?.['reviewDate']}; }
function paramReviewdateInput(record, value, filter, columns=fields){ return {field:'reviewDate', mode:'input', value: record?.['reviewDate']}; }
function paramReviewdateFilter(record, value, filter, columns=fields){ return {field:'reviewDate', mode:'filter', value: filter?.['reviewDate']}; }
function paramReviewdateExport(record, value, filter, columns=fields){ return {field:'reviewDate', mode:'export', included: columns.includes('reviewDate')}; }
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
