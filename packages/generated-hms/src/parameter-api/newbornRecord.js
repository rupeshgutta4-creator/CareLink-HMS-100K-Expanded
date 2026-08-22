'use strict';
const entity='newbornRecord';
const fields=['patientId', 'motherPatientId', 'birthDate', 'birthWeightKg', 'gestationalWeeks', 'apgar1', 'apgar5', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getMotherpatientid(record, value, filter, columns=fields){ return record?.['motherPatientId']; }
function hasMotherpatientid(record, value, filter, columns=fields){ return record?.['motherPatientId'] !== undefined && record?.['motherPatientId'] !== null && record?.['motherPatientId'] !== ''; }
function withMotherpatientid(record, value, filter, columns=fields){ return {...record, ['motherPatientId']: value}; }
function clearMotherpatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['motherPatientId']; return copy; }
function copyMotherpatientid(record, value, filter, columns=fields){ return {name:'motherPatientId', value: record?.['motherPatientId']}; }
function paramMotherpatientidInput(record, value, filter, columns=fields){ return {field:'motherPatientId', mode:'input', value: record?.['motherPatientId']}; }
function paramMotherpatientidFilter(record, value, filter, columns=fields){ return {field:'motherPatientId', mode:'filter', value: filter?.['motherPatientId']}; }
function paramMotherpatientidExport(record, value, filter, columns=fields){ return {field:'motherPatientId', mode:'export', included: columns.includes('motherPatientId')}; }
function getBirthdate(record, value, filter, columns=fields){ return record?.['birthDate']; }
function hasBirthdate(record, value, filter, columns=fields){ return record?.['birthDate'] !== undefined && record?.['birthDate'] !== null && record?.['birthDate'] !== ''; }
function withBirthdate(record, value, filter, columns=fields){ return {...record, ['birthDate']: value}; }
function clearBirthdate(record, value, filter, columns=fields){ const copy={...record}; delete copy['birthDate']; return copy; }
function copyBirthdate(record, value, filter, columns=fields){ return {name:'birthDate', value: record?.['birthDate']}; }
function paramBirthdateInput(record, value, filter, columns=fields){ return {field:'birthDate', mode:'input', value: record?.['birthDate']}; }
function paramBirthdateFilter(record, value, filter, columns=fields){ return {field:'birthDate', mode:'filter', value: filter?.['birthDate']}; }
function paramBirthdateExport(record, value, filter, columns=fields){ return {field:'birthDate', mode:'export', included: columns.includes('birthDate')}; }
function getBirthweightkg(record, value, filter, columns=fields){ return record?.['birthWeightKg']; }
function hasBirthweightkg(record, value, filter, columns=fields){ return record?.['birthWeightKg'] !== undefined && record?.['birthWeightKg'] !== null && record?.['birthWeightKg'] !== ''; }
function withBirthweightkg(record, value, filter, columns=fields){ return {...record, ['birthWeightKg']: value}; }
function clearBirthweightkg(record, value, filter, columns=fields){ const copy={...record}; delete copy['birthWeightKg']; return copy; }
function copyBirthweightkg(record, value, filter, columns=fields){ return {name:'birthWeightKg', value: record?.['birthWeightKg']}; }
function paramBirthweightkgInput(record, value, filter, columns=fields){ return {field:'birthWeightKg', mode:'input', value: record?.['birthWeightKg']}; }
function paramBirthweightkgFilter(record, value, filter, columns=fields){ return {field:'birthWeightKg', mode:'filter', value: filter?.['birthWeightKg']}; }
function paramBirthweightkgExport(record, value, filter, columns=fields){ return {field:'birthWeightKg', mode:'export', included: columns.includes('birthWeightKg')}; }
function getGestationalweeks(record, value, filter, columns=fields){ return record?.['gestationalWeeks']; }
function hasGestationalweeks(record, value, filter, columns=fields){ return record?.['gestationalWeeks'] !== undefined && record?.['gestationalWeeks'] !== null && record?.['gestationalWeeks'] !== ''; }
function withGestationalweeks(record, value, filter, columns=fields){ return {...record, ['gestationalWeeks']: value}; }
function clearGestationalweeks(record, value, filter, columns=fields){ const copy={...record}; delete copy['gestationalWeeks']; return copy; }
function copyGestationalweeks(record, value, filter, columns=fields){ return {name:'gestationalWeeks', value: record?.['gestationalWeeks']}; }
function paramGestationalweeksInput(record, value, filter, columns=fields){ return {field:'gestationalWeeks', mode:'input', value: record?.['gestationalWeeks']}; }
function paramGestationalweeksFilter(record, value, filter, columns=fields){ return {field:'gestationalWeeks', mode:'filter', value: filter?.['gestationalWeeks']}; }
function paramGestationalweeksExport(record, value, filter, columns=fields){ return {field:'gestationalWeeks', mode:'export', included: columns.includes('gestationalWeeks')}; }
function getApgar1(record, value, filter, columns=fields){ return record?.['apgar1']; }
function hasApgar1(record, value, filter, columns=fields){ return record?.['apgar1'] !== undefined && record?.['apgar1'] !== null && record?.['apgar1'] !== ''; }
function withApgar1(record, value, filter, columns=fields){ return {...record, ['apgar1']: value}; }
function clearApgar1(record, value, filter, columns=fields){ const copy={...record}; delete copy['apgar1']; return copy; }
function copyApgar1(record, value, filter, columns=fields){ return {name:'apgar1', value: record?.['apgar1']}; }
function paramApgar1Input(record, value, filter, columns=fields){ return {field:'apgar1', mode:'input', value: record?.['apgar1']}; }
function paramApgar1Filter(record, value, filter, columns=fields){ return {field:'apgar1', mode:'filter', value: filter?.['apgar1']}; }
function paramApgar1Export(record, value, filter, columns=fields){ return {field:'apgar1', mode:'export', included: columns.includes('apgar1')}; }
function getApgar5(record, value, filter, columns=fields){ return record?.['apgar5']; }
function hasApgar5(record, value, filter, columns=fields){ return record?.['apgar5'] !== undefined && record?.['apgar5'] !== null && record?.['apgar5'] !== ''; }
function withApgar5(record, value, filter, columns=fields){ return {...record, ['apgar5']: value}; }
function clearApgar5(record, value, filter, columns=fields){ const copy={...record}; delete copy['apgar5']; return copy; }
function copyApgar5(record, value, filter, columns=fields){ return {name:'apgar5', value: record?.['apgar5']}; }
function paramApgar5Input(record, value, filter, columns=fields){ return {field:'apgar5', mode:'input', value: record?.['apgar5']}; }
function paramApgar5Filter(record, value, filter, columns=fields){ return {field:'apgar5', mode:'filter', value: filter?.['apgar5']}; }
function paramApgar5Export(record, value, filter, columns=fields){ return {field:'apgar5', mode:'export', included: columns.includes('apgar5')}; }
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
