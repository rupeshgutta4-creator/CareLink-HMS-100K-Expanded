'use strict';
const entity='bloodUnit';
const fields=['donorCode', 'bloodGroup', 'component', 'collectionDate', 'expiryDate', 'volumeMl', 'storageLocation', 'status'];

function getDonorcode(record, value, filter, columns=fields){ return record?.['donorCode']; }
function hasDonorcode(record, value, filter, columns=fields){ return record?.['donorCode'] !== undefined && record?.['donorCode'] !== null && record?.['donorCode'] !== ''; }
function withDonorcode(record, value, filter, columns=fields){ return {...record, ['donorCode']: value}; }
function clearDonorcode(record, value, filter, columns=fields){ const copy={...record}; delete copy['donorCode']; return copy; }
function copyDonorcode(record, value, filter, columns=fields){ return {name:'donorCode', value: record?.['donorCode']}; }
function paramDonorcodeInput(record, value, filter, columns=fields){ return {field:'donorCode', mode:'input', value: record?.['donorCode']}; }
function paramDonorcodeFilter(record, value, filter, columns=fields){ return {field:'donorCode', mode:'filter', value: filter?.['donorCode']}; }
function paramDonorcodeExport(record, value, filter, columns=fields){ return {field:'donorCode', mode:'export', included: columns.includes('donorCode')}; }
function getBloodgroup(record, value, filter, columns=fields){ return record?.['bloodGroup']; }
function hasBloodgroup(record, value, filter, columns=fields){ return record?.['bloodGroup'] !== undefined && record?.['bloodGroup'] !== null && record?.['bloodGroup'] !== ''; }
function withBloodgroup(record, value, filter, columns=fields){ return {...record, ['bloodGroup']: value}; }
function clearBloodgroup(record, value, filter, columns=fields){ const copy={...record}; delete copy['bloodGroup']; return copy; }
function copyBloodgroup(record, value, filter, columns=fields){ return {name:'bloodGroup', value: record?.['bloodGroup']}; }
function paramBloodgroupInput(record, value, filter, columns=fields){ return {field:'bloodGroup', mode:'input', value: record?.['bloodGroup']}; }
function paramBloodgroupFilter(record, value, filter, columns=fields){ return {field:'bloodGroup', mode:'filter', value: filter?.['bloodGroup']}; }
function paramBloodgroupExport(record, value, filter, columns=fields){ return {field:'bloodGroup', mode:'export', included: columns.includes('bloodGroup')}; }
function getComponent(record, value, filter, columns=fields){ return record?.['component']; }
function hasComponent(record, value, filter, columns=fields){ return record?.['component'] !== undefined && record?.['component'] !== null && record?.['component'] !== ''; }
function withComponent(record, value, filter, columns=fields){ return {...record, ['component']: value}; }
function clearComponent(record, value, filter, columns=fields){ const copy={...record}; delete copy['component']; return copy; }
function copyComponent(record, value, filter, columns=fields){ return {name:'component', value: record?.['component']}; }
function paramComponentInput(record, value, filter, columns=fields){ return {field:'component', mode:'input', value: record?.['component']}; }
function paramComponentFilter(record, value, filter, columns=fields){ return {field:'component', mode:'filter', value: filter?.['component']}; }
function paramComponentExport(record, value, filter, columns=fields){ return {field:'component', mode:'export', included: columns.includes('component')}; }
function getCollectiondate(record, value, filter, columns=fields){ return record?.['collectionDate']; }
function hasCollectiondate(record, value, filter, columns=fields){ return record?.['collectionDate'] !== undefined && record?.['collectionDate'] !== null && record?.['collectionDate'] !== ''; }
function withCollectiondate(record, value, filter, columns=fields){ return {...record, ['collectionDate']: value}; }
function clearCollectiondate(record, value, filter, columns=fields){ const copy={...record}; delete copy['collectionDate']; return copy; }
function copyCollectiondate(record, value, filter, columns=fields){ return {name:'collectionDate', value: record?.['collectionDate']}; }
function paramCollectiondateInput(record, value, filter, columns=fields){ return {field:'collectionDate', mode:'input', value: record?.['collectionDate']}; }
function paramCollectiondateFilter(record, value, filter, columns=fields){ return {field:'collectionDate', mode:'filter', value: filter?.['collectionDate']}; }
function paramCollectiondateExport(record, value, filter, columns=fields){ return {field:'collectionDate', mode:'export', included: columns.includes('collectionDate')}; }
function getExpirydate(record, value, filter, columns=fields){ return record?.['expiryDate']; }
function hasExpirydate(record, value, filter, columns=fields){ return record?.['expiryDate'] !== undefined && record?.['expiryDate'] !== null && record?.['expiryDate'] !== ''; }
function withExpirydate(record, value, filter, columns=fields){ return {...record, ['expiryDate']: value}; }
function clearExpirydate(record, value, filter, columns=fields){ const copy={...record}; delete copy['expiryDate']; return copy; }
function copyExpirydate(record, value, filter, columns=fields){ return {name:'expiryDate', value: record?.['expiryDate']}; }
function paramExpirydateInput(record, value, filter, columns=fields){ return {field:'expiryDate', mode:'input', value: record?.['expiryDate']}; }
function paramExpirydateFilter(record, value, filter, columns=fields){ return {field:'expiryDate', mode:'filter', value: filter?.['expiryDate']}; }
function paramExpirydateExport(record, value, filter, columns=fields){ return {field:'expiryDate', mode:'export', included: columns.includes('expiryDate')}; }
function getVolumeml(record, value, filter, columns=fields){ return record?.['volumeMl']; }
function hasVolumeml(record, value, filter, columns=fields){ return record?.['volumeMl'] !== undefined && record?.['volumeMl'] !== null && record?.['volumeMl'] !== ''; }
function withVolumeml(record, value, filter, columns=fields){ return {...record, ['volumeMl']: value}; }
function clearVolumeml(record, value, filter, columns=fields){ const copy={...record}; delete copy['volumeMl']; return copy; }
function copyVolumeml(record, value, filter, columns=fields){ return {name:'volumeMl', value: record?.['volumeMl']}; }
function paramVolumemlInput(record, value, filter, columns=fields){ return {field:'volumeMl', mode:'input', value: record?.['volumeMl']}; }
function paramVolumemlFilter(record, value, filter, columns=fields){ return {field:'volumeMl', mode:'filter', value: filter?.['volumeMl']}; }
function paramVolumemlExport(record, value, filter, columns=fields){ return {field:'volumeMl', mode:'export', included: columns.includes('volumeMl')}; }
function getStoragelocation(record, value, filter, columns=fields){ return record?.['storageLocation']; }
function hasStoragelocation(record, value, filter, columns=fields){ return record?.['storageLocation'] !== undefined && record?.['storageLocation'] !== null && record?.['storageLocation'] !== ''; }
function withStoragelocation(record, value, filter, columns=fields){ return {...record, ['storageLocation']: value}; }
function clearStoragelocation(record, value, filter, columns=fields){ const copy={...record}; delete copy['storageLocation']; return copy; }
function copyStoragelocation(record, value, filter, columns=fields){ return {name:'storageLocation', value: record?.['storageLocation']}; }
function paramStoragelocationInput(record, value, filter, columns=fields){ return {field:'storageLocation', mode:'input', value: record?.['storageLocation']}; }
function paramStoragelocationFilter(record, value, filter, columns=fields){ return {field:'storageLocation', mode:'filter', value: filter?.['storageLocation']}; }
function paramStoragelocationExport(record, value, filter, columns=fields){ return {field:'storageLocation', mode:'export', included: columns.includes('storageLocation')}; }
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
