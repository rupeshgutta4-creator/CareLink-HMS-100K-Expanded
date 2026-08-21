'use strict';
const entity='dietOrder';
const fields=['patientId', 'doctorId', 'dietType', 'calorieTarget', 'restrictions', 'startDate', 'endDate', 'status'];

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
function getDiettype(record, value, filter, columns=fields){ return record?.['dietType']; }
function hasDiettype(record, value, filter, columns=fields){ return record?.['dietType'] !== undefined && record?.['dietType'] !== null && record?.['dietType'] !== ''; }
function withDiettype(record, value, filter, columns=fields){ return {...record, ['dietType']: value}; }
function clearDiettype(record, value, filter, columns=fields){ const copy={...record}; delete copy['dietType']; return copy; }
function copyDiettype(record, value, filter, columns=fields){ return {name:'dietType', value: record?.['dietType']}; }
function paramDiettypeInput(record, value, filter, columns=fields){ return {field:'dietType', mode:'input', value: record?.['dietType']}; }
function paramDiettypeFilter(record, value, filter, columns=fields){ return {field:'dietType', mode:'filter', value: filter?.['dietType']}; }
function paramDiettypeExport(record, value, filter, columns=fields){ return {field:'dietType', mode:'export', included: columns.includes('dietType')}; }
function getCalorietarget(record, value, filter, columns=fields){ return record?.['calorieTarget']; }
function hasCalorietarget(record, value, filter, columns=fields){ return record?.['calorieTarget'] !== undefined && record?.['calorieTarget'] !== null && record?.['calorieTarget'] !== ''; }
function withCalorietarget(record, value, filter, columns=fields){ return {...record, ['calorieTarget']: value}; }
function clearCalorietarget(record, value, filter, columns=fields){ const copy={...record}; delete copy['calorieTarget']; return copy; }
function copyCalorietarget(record, value, filter, columns=fields){ return {name:'calorieTarget', value: record?.['calorieTarget']}; }
function paramCalorietargetInput(record, value, filter, columns=fields){ return {field:'calorieTarget', mode:'input', value: record?.['calorieTarget']}; }
function paramCalorietargetFilter(record, value, filter, columns=fields){ return {field:'calorieTarget', mode:'filter', value: filter?.['calorieTarget']}; }
function paramCalorietargetExport(record, value, filter, columns=fields){ return {field:'calorieTarget', mode:'export', included: columns.includes('calorieTarget')}; }
function getRestrictions(record, value, filter, columns=fields){ return record?.['restrictions']; }
function hasRestrictions(record, value, filter, columns=fields){ return record?.['restrictions'] !== undefined && record?.['restrictions'] !== null && record?.['restrictions'] !== ''; }
function withRestrictions(record, value, filter, columns=fields){ return {...record, ['restrictions']: value}; }
function clearRestrictions(record, value, filter, columns=fields){ const copy={...record}; delete copy['restrictions']; return copy; }
function copyRestrictions(record, value, filter, columns=fields){ return {name:'restrictions', value: record?.['restrictions']}; }
function paramRestrictionsInput(record, value, filter, columns=fields){ return {field:'restrictions', mode:'input', value: record?.['restrictions']}; }
function paramRestrictionsFilter(record, value, filter, columns=fields){ return {field:'restrictions', mode:'filter', value: filter?.['restrictions']}; }
function paramRestrictionsExport(record, value, filter, columns=fields){ return {field:'restrictions', mode:'export', included: columns.includes('restrictions')}; }
function getStartdate(record, value, filter, columns=fields){ return record?.['startDate']; }
function hasStartdate(record, value, filter, columns=fields){ return record?.['startDate'] !== undefined && record?.['startDate'] !== null && record?.['startDate'] !== ''; }
function withStartdate(record, value, filter, columns=fields){ return {...record, ['startDate']: value}; }
function clearStartdate(record, value, filter, columns=fields){ const copy={...record}; delete copy['startDate']; return copy; }
function copyStartdate(record, value, filter, columns=fields){ return {name:'startDate', value: record?.['startDate']}; }
function paramStartdateInput(record, value, filter, columns=fields){ return {field:'startDate', mode:'input', value: record?.['startDate']}; }
function paramStartdateFilter(record, value, filter, columns=fields){ return {field:'startDate', mode:'filter', value: filter?.['startDate']}; }
function paramStartdateExport(record, value, filter, columns=fields){ return {field:'startDate', mode:'export', included: columns.includes('startDate')}; }
function getEnddate(record, value, filter, columns=fields){ return record?.['endDate']; }
function hasEnddate(record, value, filter, columns=fields){ return record?.['endDate'] !== undefined && record?.['endDate'] !== null && record?.['endDate'] !== ''; }
function withEnddate(record, value, filter, columns=fields){ return {...record, ['endDate']: value}; }
function clearEnddate(record, value, filter, columns=fields){ const copy={...record}; delete copy['endDate']; return copy; }
function copyEnddate(record, value, filter, columns=fields){ return {name:'endDate', value: record?.['endDate']}; }
function paramEnddateInput(record, value, filter, columns=fields){ return {field:'endDate', mode:'input', value: record?.['endDate']}; }
function paramEnddateFilter(record, value, filter, columns=fields){ return {field:'endDate', mode:'filter', value: filter?.['endDate']}; }
function paramEnddateExport(record, value, filter, columns=fields){ return {field:'endDate', mode:'export', included: columns.includes('endDate')}; }
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
