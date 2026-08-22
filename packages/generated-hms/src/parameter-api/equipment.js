'use strict';
const entity='equipment';
const fields=['assetCode', 'name', 'category', 'serialNumber', 'location', 'purchaseDate', 'warrantyEnd', 'maintenanceDue', 'status'];

function getAssetcode(record, value, filter, columns=fields){ return record?.['assetCode']; }
function hasAssetcode(record, value, filter, columns=fields){ return record?.['assetCode'] !== undefined && record?.['assetCode'] !== null && record?.['assetCode'] !== ''; }
function withAssetcode(record, value, filter, columns=fields){ return {...record, ['assetCode']: value}; }
function clearAssetcode(record, value, filter, columns=fields){ const copy={...record}; delete copy['assetCode']; return copy; }
function copyAssetcode(record, value, filter, columns=fields){ return {name:'assetCode', value: record?.['assetCode']}; }
function paramAssetcodeInput(record, value, filter, columns=fields){ return {field:'assetCode', mode:'input', value: record?.['assetCode']}; }
function paramAssetcodeFilter(record, value, filter, columns=fields){ return {field:'assetCode', mode:'filter', value: filter?.['assetCode']}; }
function paramAssetcodeExport(record, value, filter, columns=fields){ return {field:'assetCode', mode:'export', included: columns.includes('assetCode')}; }
function getName(record, value, filter, columns=fields){ return record?.['name']; }
function hasName(record, value, filter, columns=fields){ return record?.['name'] !== undefined && record?.['name'] !== null && record?.['name'] !== ''; }
function withName(record, value, filter, columns=fields){ return {...record, ['name']: value}; }
function clearName(record, value, filter, columns=fields){ const copy={...record}; delete copy['name']; return copy; }
function copyName(record, value, filter, columns=fields){ return {name:'name', value: record?.['name']}; }
function paramNameInput(record, value, filter, columns=fields){ return {field:'name', mode:'input', value: record?.['name']}; }
function paramNameFilter(record, value, filter, columns=fields){ return {field:'name', mode:'filter', value: filter?.['name']}; }
function paramNameExport(record, value, filter, columns=fields){ return {field:'name', mode:'export', included: columns.includes('name')}; }
function getCategory(record, value, filter, columns=fields){ return record?.['category']; }
function hasCategory(record, value, filter, columns=fields){ return record?.['category'] !== undefined && record?.['category'] !== null && record?.['category'] !== ''; }
function withCategory(record, value, filter, columns=fields){ return {...record, ['category']: value}; }
function clearCategory(record, value, filter, columns=fields){ const copy={...record}; delete copy['category']; return copy; }
function copyCategory(record, value, filter, columns=fields){ return {name:'category', value: record?.['category']}; }
function paramCategoryInput(record, value, filter, columns=fields){ return {field:'category', mode:'input', value: record?.['category']}; }
function paramCategoryFilter(record, value, filter, columns=fields){ return {field:'category', mode:'filter', value: filter?.['category']}; }
function paramCategoryExport(record, value, filter, columns=fields){ return {field:'category', mode:'export', included: columns.includes('category')}; }
function getSerialnumber(record, value, filter, columns=fields){ return record?.['serialNumber']; }
function hasSerialnumber(record, value, filter, columns=fields){ return record?.['serialNumber'] !== undefined && record?.['serialNumber'] !== null && record?.['serialNumber'] !== ''; }
function withSerialnumber(record, value, filter, columns=fields){ return {...record, ['serialNumber']: value}; }
function clearSerialnumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['serialNumber']; return copy; }
function copySerialnumber(record, value, filter, columns=fields){ return {name:'serialNumber', value: record?.['serialNumber']}; }
function paramSerialnumberInput(record, value, filter, columns=fields){ return {field:'serialNumber', mode:'input', value: record?.['serialNumber']}; }
function paramSerialnumberFilter(record, value, filter, columns=fields){ return {field:'serialNumber', mode:'filter', value: filter?.['serialNumber']}; }
function paramSerialnumberExport(record, value, filter, columns=fields){ return {field:'serialNumber', mode:'export', included: columns.includes('serialNumber')}; }
function getLocation(record, value, filter, columns=fields){ return record?.['location']; }
function hasLocation(record, value, filter, columns=fields){ return record?.['location'] !== undefined && record?.['location'] !== null && record?.['location'] !== ''; }
function withLocation(record, value, filter, columns=fields){ return {...record, ['location']: value}; }
function clearLocation(record, value, filter, columns=fields){ const copy={...record}; delete copy['location']; return copy; }
function copyLocation(record, value, filter, columns=fields){ return {name:'location', value: record?.['location']}; }
function paramLocationInput(record, value, filter, columns=fields){ return {field:'location', mode:'input', value: record?.['location']}; }
function paramLocationFilter(record, value, filter, columns=fields){ return {field:'location', mode:'filter', value: filter?.['location']}; }
function paramLocationExport(record, value, filter, columns=fields){ return {field:'location', mode:'export', included: columns.includes('location')}; }
function getPurchasedate(record, value, filter, columns=fields){ return record?.['purchaseDate']; }
function hasPurchasedate(record, value, filter, columns=fields){ return record?.['purchaseDate'] !== undefined && record?.['purchaseDate'] !== null && record?.['purchaseDate'] !== ''; }
function withPurchasedate(record, value, filter, columns=fields){ return {...record, ['purchaseDate']: value}; }
function clearPurchasedate(record, value, filter, columns=fields){ const copy={...record}; delete copy['purchaseDate']; return copy; }
function copyPurchasedate(record, value, filter, columns=fields){ return {name:'purchaseDate', value: record?.['purchaseDate']}; }
function paramPurchasedateInput(record, value, filter, columns=fields){ return {field:'purchaseDate', mode:'input', value: record?.['purchaseDate']}; }
function paramPurchasedateFilter(record, value, filter, columns=fields){ return {field:'purchaseDate', mode:'filter', value: filter?.['purchaseDate']}; }
function paramPurchasedateExport(record, value, filter, columns=fields){ return {field:'purchaseDate', mode:'export', included: columns.includes('purchaseDate')}; }
function getWarrantyend(record, value, filter, columns=fields){ return record?.['warrantyEnd']; }
function hasWarrantyend(record, value, filter, columns=fields){ return record?.['warrantyEnd'] !== undefined && record?.['warrantyEnd'] !== null && record?.['warrantyEnd'] !== ''; }
function withWarrantyend(record, value, filter, columns=fields){ return {...record, ['warrantyEnd']: value}; }
function clearWarrantyend(record, value, filter, columns=fields){ const copy={...record}; delete copy['warrantyEnd']; return copy; }
function copyWarrantyend(record, value, filter, columns=fields){ return {name:'warrantyEnd', value: record?.['warrantyEnd']}; }
function paramWarrantyendInput(record, value, filter, columns=fields){ return {field:'warrantyEnd', mode:'input', value: record?.['warrantyEnd']}; }
function paramWarrantyendFilter(record, value, filter, columns=fields){ return {field:'warrantyEnd', mode:'filter', value: filter?.['warrantyEnd']}; }
function paramWarrantyendExport(record, value, filter, columns=fields){ return {field:'warrantyEnd', mode:'export', included: columns.includes('warrantyEnd')}; }
function getMaintenancedue(record, value, filter, columns=fields){ return record?.['maintenanceDue']; }
function hasMaintenancedue(record, value, filter, columns=fields){ return record?.['maintenanceDue'] !== undefined && record?.['maintenanceDue'] !== null && record?.['maintenanceDue'] !== ''; }
function withMaintenancedue(record, value, filter, columns=fields){ return {...record, ['maintenanceDue']: value}; }
function clearMaintenancedue(record, value, filter, columns=fields){ const copy={...record}; delete copy['maintenanceDue']; return copy; }
function copyMaintenancedue(record, value, filter, columns=fields){ return {name:'maintenanceDue', value: record?.['maintenanceDue']}; }
function paramMaintenancedueInput(record, value, filter, columns=fields){ return {field:'maintenanceDue', mode:'input', value: record?.['maintenanceDue']}; }
function paramMaintenancedueFilter(record, value, filter, columns=fields){ return {field:'maintenanceDue', mode:'filter', value: filter?.['maintenanceDue']}; }
function paramMaintenancedueExport(record, value, filter, columns=fields){ return {field:'maintenanceDue', mode:'export', included: columns.includes('maintenanceDue')}; }
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
