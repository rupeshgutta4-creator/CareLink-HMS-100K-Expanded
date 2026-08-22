'use strict';
const entity='radiologyImage';
const fields=['radiologyOrderId', 'modality', 'fileName', 'storageKey', 'studyInstanceUid', 'uploadedAt'];

function getRadiologyorderid(record, value, filter, columns=fields){ return record?.['radiologyOrderId']; }
function hasRadiologyorderid(record, value, filter, columns=fields){ return record?.['radiologyOrderId'] !== undefined && record?.['radiologyOrderId'] !== null && record?.['radiologyOrderId'] !== ''; }
function withRadiologyorderid(record, value, filter, columns=fields){ return {...record, ['radiologyOrderId']: value}; }
function clearRadiologyorderid(record, value, filter, columns=fields){ const copy={...record}; delete copy['radiologyOrderId']; return copy; }
function copyRadiologyorderid(record, value, filter, columns=fields){ return {name:'radiologyOrderId', value: record?.['radiologyOrderId']}; }
function paramRadiologyorderidInput(record, value, filter, columns=fields){ return {field:'radiologyOrderId', mode:'input', value: record?.['radiologyOrderId']}; }
function paramRadiologyorderidFilter(record, value, filter, columns=fields){ return {field:'radiologyOrderId', mode:'filter', value: filter?.['radiologyOrderId']}; }
function paramRadiologyorderidExport(record, value, filter, columns=fields){ return {field:'radiologyOrderId', mode:'export', included: columns.includes('radiologyOrderId')}; }
function getModality(record, value, filter, columns=fields){ return record?.['modality']; }
function hasModality(record, value, filter, columns=fields){ return record?.['modality'] !== undefined && record?.['modality'] !== null && record?.['modality'] !== ''; }
function withModality(record, value, filter, columns=fields){ return {...record, ['modality']: value}; }
function clearModality(record, value, filter, columns=fields){ const copy={...record}; delete copy['modality']; return copy; }
function copyModality(record, value, filter, columns=fields){ return {name:'modality', value: record?.['modality']}; }
function paramModalityInput(record, value, filter, columns=fields){ return {field:'modality', mode:'input', value: record?.['modality']}; }
function paramModalityFilter(record, value, filter, columns=fields){ return {field:'modality', mode:'filter', value: filter?.['modality']}; }
function paramModalityExport(record, value, filter, columns=fields){ return {field:'modality', mode:'export', included: columns.includes('modality')}; }
function getFilename(record, value, filter, columns=fields){ return record?.['fileName']; }
function hasFilename(record, value, filter, columns=fields){ return record?.['fileName'] !== undefined && record?.['fileName'] !== null && record?.['fileName'] !== ''; }
function withFilename(record, value, filter, columns=fields){ return {...record, ['fileName']: value}; }
function clearFilename(record, value, filter, columns=fields){ const copy={...record}; delete copy['fileName']; return copy; }
function copyFilename(record, value, filter, columns=fields){ return {name:'fileName', value: record?.['fileName']}; }
function paramFilenameInput(record, value, filter, columns=fields){ return {field:'fileName', mode:'input', value: record?.['fileName']}; }
function paramFilenameFilter(record, value, filter, columns=fields){ return {field:'fileName', mode:'filter', value: filter?.['fileName']}; }
function paramFilenameExport(record, value, filter, columns=fields){ return {field:'fileName', mode:'export', included: columns.includes('fileName')}; }
function getStoragekey(record, value, filter, columns=fields){ return record?.['storageKey']; }
function hasStoragekey(record, value, filter, columns=fields){ return record?.['storageKey'] !== undefined && record?.['storageKey'] !== null && record?.['storageKey'] !== ''; }
function withStoragekey(record, value, filter, columns=fields){ return {...record, ['storageKey']: value}; }
function clearStoragekey(record, value, filter, columns=fields){ const copy={...record}; delete copy['storageKey']; return copy; }
function copyStoragekey(record, value, filter, columns=fields){ return {name:'storageKey', value: record?.['storageKey']}; }
function paramStoragekeyInput(record, value, filter, columns=fields){ return {field:'storageKey', mode:'input', value: record?.['storageKey']}; }
function paramStoragekeyFilter(record, value, filter, columns=fields){ return {field:'storageKey', mode:'filter', value: filter?.['storageKey']}; }
function paramStoragekeyExport(record, value, filter, columns=fields){ return {field:'storageKey', mode:'export', included: columns.includes('storageKey')}; }
function getStudyinstanceuid(record, value, filter, columns=fields){ return record?.['studyInstanceUid']; }
function hasStudyinstanceuid(record, value, filter, columns=fields){ return record?.['studyInstanceUid'] !== undefined && record?.['studyInstanceUid'] !== null && record?.['studyInstanceUid'] !== ''; }
function withStudyinstanceuid(record, value, filter, columns=fields){ return {...record, ['studyInstanceUid']: value}; }
function clearStudyinstanceuid(record, value, filter, columns=fields){ const copy={...record}; delete copy['studyInstanceUid']; return copy; }
function copyStudyinstanceuid(record, value, filter, columns=fields){ return {name:'studyInstanceUid', value: record?.['studyInstanceUid']}; }
function paramStudyinstanceuidInput(record, value, filter, columns=fields){ return {field:'studyInstanceUid', mode:'input', value: record?.['studyInstanceUid']}; }
function paramStudyinstanceuidFilter(record, value, filter, columns=fields){ return {field:'studyInstanceUid', mode:'filter', value: filter?.['studyInstanceUid']}; }
function paramStudyinstanceuidExport(record, value, filter, columns=fields){ return {field:'studyInstanceUid', mode:'export', included: columns.includes('studyInstanceUid')}; }
function getUploadedat(record, value, filter, columns=fields){ return record?.['uploadedAt']; }
function hasUploadedat(record, value, filter, columns=fields){ return record?.['uploadedAt'] !== undefined && record?.['uploadedAt'] !== null && record?.['uploadedAt'] !== ''; }
function withUploadedat(record, value, filter, columns=fields){ return {...record, ['uploadedAt']: value}; }
function clearUploadedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['uploadedAt']; return copy; }
function copyUploadedat(record, value, filter, columns=fields){ return {name:'uploadedAt', value: record?.['uploadedAt']}; }
function paramUploadedatInput(record, value, filter, columns=fields){ return {field:'uploadedAt', mode:'input', value: record?.['uploadedAt']}; }
function paramUploadedatFilter(record, value, filter, columns=fields){ return {field:'uploadedAt', mode:'filter', value: filter?.['uploadedAt']}; }
function paramUploadedatExport(record, value, filter, columns=fields){ return {field:'uploadedAt', mode:'export', included: columns.includes('uploadedAt')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
