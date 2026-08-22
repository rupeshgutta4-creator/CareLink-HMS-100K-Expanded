'use strict';
const entity='labAttachment';
const fields=['labResultId', 'fileName', 'mimeType', 'storageKey', 'sizeBytes', 'uploadedBy', 'uploadedAt'];

function getLabresultid(record, value, filter, columns=fields){ return record?.['labResultId']; }
function hasLabresultid(record, value, filter, columns=fields){ return record?.['labResultId'] !== undefined && record?.['labResultId'] !== null && record?.['labResultId'] !== ''; }
function withLabresultid(record, value, filter, columns=fields){ return {...record, ['labResultId']: value}; }
function clearLabresultid(record, value, filter, columns=fields){ const copy={...record}; delete copy['labResultId']; return copy; }
function copyLabresultid(record, value, filter, columns=fields){ return {name:'labResultId', value: record?.['labResultId']}; }
function paramLabresultidInput(record, value, filter, columns=fields){ return {field:'labResultId', mode:'input', value: record?.['labResultId']}; }
function paramLabresultidFilter(record, value, filter, columns=fields){ return {field:'labResultId', mode:'filter', value: filter?.['labResultId']}; }
function paramLabresultidExport(record, value, filter, columns=fields){ return {field:'labResultId', mode:'export', included: columns.includes('labResultId')}; }
function getFilename(record, value, filter, columns=fields){ return record?.['fileName']; }
function hasFilename(record, value, filter, columns=fields){ return record?.['fileName'] !== undefined && record?.['fileName'] !== null && record?.['fileName'] !== ''; }
function withFilename(record, value, filter, columns=fields){ return {...record, ['fileName']: value}; }
function clearFilename(record, value, filter, columns=fields){ const copy={...record}; delete copy['fileName']; return copy; }
function copyFilename(record, value, filter, columns=fields){ return {name:'fileName', value: record?.['fileName']}; }
function paramFilenameInput(record, value, filter, columns=fields){ return {field:'fileName', mode:'input', value: record?.['fileName']}; }
function paramFilenameFilter(record, value, filter, columns=fields){ return {field:'fileName', mode:'filter', value: filter?.['fileName']}; }
function paramFilenameExport(record, value, filter, columns=fields){ return {field:'fileName', mode:'export', included: columns.includes('fileName')}; }
function getMimetype(record, value, filter, columns=fields){ return record?.['mimeType']; }
function hasMimetype(record, value, filter, columns=fields){ return record?.['mimeType'] !== undefined && record?.['mimeType'] !== null && record?.['mimeType'] !== ''; }
function withMimetype(record, value, filter, columns=fields){ return {...record, ['mimeType']: value}; }
function clearMimetype(record, value, filter, columns=fields){ const copy={...record}; delete copy['mimeType']; return copy; }
function copyMimetype(record, value, filter, columns=fields){ return {name:'mimeType', value: record?.['mimeType']}; }
function paramMimetypeInput(record, value, filter, columns=fields){ return {field:'mimeType', mode:'input', value: record?.['mimeType']}; }
function paramMimetypeFilter(record, value, filter, columns=fields){ return {field:'mimeType', mode:'filter', value: filter?.['mimeType']}; }
function paramMimetypeExport(record, value, filter, columns=fields){ return {field:'mimeType', mode:'export', included: columns.includes('mimeType')}; }
function getStoragekey(record, value, filter, columns=fields){ return record?.['storageKey']; }
function hasStoragekey(record, value, filter, columns=fields){ return record?.['storageKey'] !== undefined && record?.['storageKey'] !== null && record?.['storageKey'] !== ''; }
function withStoragekey(record, value, filter, columns=fields){ return {...record, ['storageKey']: value}; }
function clearStoragekey(record, value, filter, columns=fields){ const copy={...record}; delete copy['storageKey']; return copy; }
function copyStoragekey(record, value, filter, columns=fields){ return {name:'storageKey', value: record?.['storageKey']}; }
function paramStoragekeyInput(record, value, filter, columns=fields){ return {field:'storageKey', mode:'input', value: record?.['storageKey']}; }
function paramStoragekeyFilter(record, value, filter, columns=fields){ return {field:'storageKey', mode:'filter', value: filter?.['storageKey']}; }
function paramStoragekeyExport(record, value, filter, columns=fields){ return {field:'storageKey', mode:'export', included: columns.includes('storageKey')}; }
function getSizebytes(record, value, filter, columns=fields){ return record?.['sizeBytes']; }
function hasSizebytes(record, value, filter, columns=fields){ return record?.['sizeBytes'] !== undefined && record?.['sizeBytes'] !== null && record?.['sizeBytes'] !== ''; }
function withSizebytes(record, value, filter, columns=fields){ return {...record, ['sizeBytes']: value}; }
function clearSizebytes(record, value, filter, columns=fields){ const copy={...record}; delete copy['sizeBytes']; return copy; }
function copySizebytes(record, value, filter, columns=fields){ return {name:'sizeBytes', value: record?.['sizeBytes']}; }
function paramSizebytesInput(record, value, filter, columns=fields){ return {field:'sizeBytes', mode:'input', value: record?.['sizeBytes']}; }
function paramSizebytesFilter(record, value, filter, columns=fields){ return {field:'sizeBytes', mode:'filter', value: filter?.['sizeBytes']}; }
function paramSizebytesExport(record, value, filter, columns=fields){ return {field:'sizeBytes', mode:'export', included: columns.includes('sizeBytes')}; }
function getUploadedby(record, value, filter, columns=fields){ return record?.['uploadedBy']; }
function hasUploadedby(record, value, filter, columns=fields){ return record?.['uploadedBy'] !== undefined && record?.['uploadedBy'] !== null && record?.['uploadedBy'] !== ''; }
function withUploadedby(record, value, filter, columns=fields){ return {...record, ['uploadedBy']: value}; }
function clearUploadedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['uploadedBy']; return copy; }
function copyUploadedby(record, value, filter, columns=fields){ return {name:'uploadedBy', value: record?.['uploadedBy']}; }
function paramUploadedbyInput(record, value, filter, columns=fields){ return {field:'uploadedBy', mode:'input', value: record?.['uploadedBy']}; }
function paramUploadedbyFilter(record, value, filter, columns=fields){ return {field:'uploadedBy', mode:'filter', value: filter?.['uploadedBy']}; }
function paramUploadedbyExport(record, value, filter, columns=fields){ return {field:'uploadedBy', mode:'export', included: columns.includes('uploadedBy')}; }
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
