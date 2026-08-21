'use strict';
const entity='medicine';
const fields=['sku', 'name', 'genericName', 'category', 'manufacturer', 'batchNumber', 'expiryDate', 'quantity', 'reorderLevel', 'unitPrice', 'taxRate', 'status'];

function getSku(record, value, filter, columns=fields){ return record?.['sku']; }
function hasSku(record, value, filter, columns=fields){ return record?.['sku'] !== undefined && record?.['sku'] !== null && record?.['sku'] !== ''; }
function withSku(record, value, filter, columns=fields){ return {...record, ['sku']: value}; }
function clearSku(record, value, filter, columns=fields){ const copy={...record}; delete copy['sku']; return copy; }
function copySku(record, value, filter, columns=fields){ return {name:'sku', value: record?.['sku']}; }
function paramSkuInput(record, value, filter, columns=fields){ return {field:'sku', mode:'input', value: record?.['sku']}; }
function paramSkuFilter(record, value, filter, columns=fields){ return {field:'sku', mode:'filter', value: filter?.['sku']}; }
function paramSkuExport(record, value, filter, columns=fields){ return {field:'sku', mode:'export', included: columns.includes('sku')}; }
function getName(record, value, filter, columns=fields){ return record?.['name']; }
function hasName(record, value, filter, columns=fields){ return record?.['name'] !== undefined && record?.['name'] !== null && record?.['name'] !== ''; }
function withName(record, value, filter, columns=fields){ return {...record, ['name']: value}; }
function clearName(record, value, filter, columns=fields){ const copy={...record}; delete copy['name']; return copy; }
function copyName(record, value, filter, columns=fields){ return {name:'name', value: record?.['name']}; }
function paramNameInput(record, value, filter, columns=fields){ return {field:'name', mode:'input', value: record?.['name']}; }
function paramNameFilter(record, value, filter, columns=fields){ return {field:'name', mode:'filter', value: filter?.['name']}; }
function paramNameExport(record, value, filter, columns=fields){ return {field:'name', mode:'export', included: columns.includes('name')}; }
function getGenericname(record, value, filter, columns=fields){ return record?.['genericName']; }
function hasGenericname(record, value, filter, columns=fields){ return record?.['genericName'] !== undefined && record?.['genericName'] !== null && record?.['genericName'] !== ''; }
function withGenericname(record, value, filter, columns=fields){ return {...record, ['genericName']: value}; }
function clearGenericname(record, value, filter, columns=fields){ const copy={...record}; delete copy['genericName']; return copy; }
function copyGenericname(record, value, filter, columns=fields){ return {name:'genericName', value: record?.['genericName']}; }
function paramGenericnameInput(record, value, filter, columns=fields){ return {field:'genericName', mode:'input', value: record?.['genericName']}; }
function paramGenericnameFilter(record, value, filter, columns=fields){ return {field:'genericName', mode:'filter', value: filter?.['genericName']}; }
function paramGenericnameExport(record, value, filter, columns=fields){ return {field:'genericName', mode:'export', included: columns.includes('genericName')}; }
function getCategory(record, value, filter, columns=fields){ return record?.['category']; }
function hasCategory(record, value, filter, columns=fields){ return record?.['category'] !== undefined && record?.['category'] !== null && record?.['category'] !== ''; }
function withCategory(record, value, filter, columns=fields){ return {...record, ['category']: value}; }
function clearCategory(record, value, filter, columns=fields){ const copy={...record}; delete copy['category']; return copy; }
function copyCategory(record, value, filter, columns=fields){ return {name:'category', value: record?.['category']}; }
function paramCategoryInput(record, value, filter, columns=fields){ return {field:'category', mode:'input', value: record?.['category']}; }
function paramCategoryFilter(record, value, filter, columns=fields){ return {field:'category', mode:'filter', value: filter?.['category']}; }
function paramCategoryExport(record, value, filter, columns=fields){ return {field:'category', mode:'export', included: columns.includes('category')}; }
function getManufacturer(record, value, filter, columns=fields){ return record?.['manufacturer']; }
function hasManufacturer(record, value, filter, columns=fields){ return record?.['manufacturer'] !== undefined && record?.['manufacturer'] !== null && record?.['manufacturer'] !== ''; }
function withManufacturer(record, value, filter, columns=fields){ return {...record, ['manufacturer']: value}; }
function clearManufacturer(record, value, filter, columns=fields){ const copy={...record}; delete copy['manufacturer']; return copy; }
function copyManufacturer(record, value, filter, columns=fields){ return {name:'manufacturer', value: record?.['manufacturer']}; }
function paramManufacturerInput(record, value, filter, columns=fields){ return {field:'manufacturer', mode:'input', value: record?.['manufacturer']}; }
function paramManufacturerFilter(record, value, filter, columns=fields){ return {field:'manufacturer', mode:'filter', value: filter?.['manufacturer']}; }
function paramManufacturerExport(record, value, filter, columns=fields){ return {field:'manufacturer', mode:'export', included: columns.includes('manufacturer')}; }
function getBatchnumber(record, value, filter, columns=fields){ return record?.['batchNumber']; }
function hasBatchnumber(record, value, filter, columns=fields){ return record?.['batchNumber'] !== undefined && record?.['batchNumber'] !== null && record?.['batchNumber'] !== ''; }
function withBatchnumber(record, value, filter, columns=fields){ return {...record, ['batchNumber']: value}; }
function clearBatchnumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['batchNumber']; return copy; }
function copyBatchnumber(record, value, filter, columns=fields){ return {name:'batchNumber', value: record?.['batchNumber']}; }
function paramBatchnumberInput(record, value, filter, columns=fields){ return {field:'batchNumber', mode:'input', value: record?.['batchNumber']}; }
function paramBatchnumberFilter(record, value, filter, columns=fields){ return {field:'batchNumber', mode:'filter', value: filter?.['batchNumber']}; }
function paramBatchnumberExport(record, value, filter, columns=fields){ return {field:'batchNumber', mode:'export', included: columns.includes('batchNumber')}; }
function getExpirydate(record, value, filter, columns=fields){ return record?.['expiryDate']; }
function hasExpirydate(record, value, filter, columns=fields){ return record?.['expiryDate'] !== undefined && record?.['expiryDate'] !== null && record?.['expiryDate'] !== ''; }
function withExpirydate(record, value, filter, columns=fields){ return {...record, ['expiryDate']: value}; }
function clearExpirydate(record, value, filter, columns=fields){ const copy={...record}; delete copy['expiryDate']; return copy; }
function copyExpirydate(record, value, filter, columns=fields){ return {name:'expiryDate', value: record?.['expiryDate']}; }
function paramExpirydateInput(record, value, filter, columns=fields){ return {field:'expiryDate', mode:'input', value: record?.['expiryDate']}; }
function paramExpirydateFilter(record, value, filter, columns=fields){ return {field:'expiryDate', mode:'filter', value: filter?.['expiryDate']}; }
function paramExpirydateExport(record, value, filter, columns=fields){ return {field:'expiryDate', mode:'export', included: columns.includes('expiryDate')}; }
function getQuantity(record, value, filter, columns=fields){ return record?.['quantity']; }
function hasQuantity(record, value, filter, columns=fields){ return record?.['quantity'] !== undefined && record?.['quantity'] !== null && record?.['quantity'] !== ''; }
function withQuantity(record, value, filter, columns=fields){ return {...record, ['quantity']: value}; }
function clearQuantity(record, value, filter, columns=fields){ const copy={...record}; delete copy['quantity']; return copy; }
function copyQuantity(record, value, filter, columns=fields){ return {name:'quantity', value: record?.['quantity']}; }
function paramQuantityInput(record, value, filter, columns=fields){ return {field:'quantity', mode:'input', value: record?.['quantity']}; }
function paramQuantityFilter(record, value, filter, columns=fields){ return {field:'quantity', mode:'filter', value: filter?.['quantity']}; }
function paramQuantityExport(record, value, filter, columns=fields){ return {field:'quantity', mode:'export', included: columns.includes('quantity')}; }
function getReorderlevel(record, value, filter, columns=fields){ return record?.['reorderLevel']; }
function hasReorderlevel(record, value, filter, columns=fields){ return record?.['reorderLevel'] !== undefined && record?.['reorderLevel'] !== null && record?.['reorderLevel'] !== ''; }
function withReorderlevel(record, value, filter, columns=fields){ return {...record, ['reorderLevel']: value}; }
function clearReorderlevel(record, value, filter, columns=fields){ const copy={...record}; delete copy['reorderLevel']; return copy; }
function copyReorderlevel(record, value, filter, columns=fields){ return {name:'reorderLevel', value: record?.['reorderLevel']}; }
function paramReorderlevelInput(record, value, filter, columns=fields){ return {field:'reorderLevel', mode:'input', value: record?.['reorderLevel']}; }
function paramReorderlevelFilter(record, value, filter, columns=fields){ return {field:'reorderLevel', mode:'filter', value: filter?.['reorderLevel']}; }
function paramReorderlevelExport(record, value, filter, columns=fields){ return {field:'reorderLevel', mode:'export', included: columns.includes('reorderLevel')}; }
function getUnitprice(record, value, filter, columns=fields){ return record?.['unitPrice']; }
function hasUnitprice(record, value, filter, columns=fields){ return record?.['unitPrice'] !== undefined && record?.['unitPrice'] !== null && record?.['unitPrice'] !== ''; }
function withUnitprice(record, value, filter, columns=fields){ return {...record, ['unitPrice']: value}; }
function clearUnitprice(record, value, filter, columns=fields){ const copy={...record}; delete copy['unitPrice']; return copy; }
function copyUnitprice(record, value, filter, columns=fields){ return {name:'unitPrice', value: record?.['unitPrice']}; }
function paramUnitpriceInput(record, value, filter, columns=fields){ return {field:'unitPrice', mode:'input', value: record?.['unitPrice']}; }
function paramUnitpriceFilter(record, value, filter, columns=fields){ return {field:'unitPrice', mode:'filter', value: filter?.['unitPrice']}; }
function paramUnitpriceExport(record, value, filter, columns=fields){ return {field:'unitPrice', mode:'export', included: columns.includes('unitPrice')}; }
function getTaxrate(record, value, filter, columns=fields){ return record?.['taxRate']; }
function hasTaxrate(record, value, filter, columns=fields){ return record?.['taxRate'] !== undefined && record?.['taxRate'] !== null && record?.['taxRate'] !== ''; }
function withTaxrate(record, value, filter, columns=fields){ return {...record, ['taxRate']: value}; }
function clearTaxrate(record, value, filter, columns=fields){ const copy={...record}; delete copy['taxRate']; return copy; }
function copyTaxrate(record, value, filter, columns=fields){ return {name:'taxRate', value: record?.['taxRate']}; }
function paramTaxrateInput(record, value, filter, columns=fields){ return {field:'taxRate', mode:'input', value: record?.['taxRate']}; }
function paramTaxrateFilter(record, value, filter, columns=fields){ return {field:'taxRate', mode:'filter', value: filter?.['taxRate']}; }
function paramTaxrateExport(record, value, filter, columns=fields){ return {field:'taxRate', mode:'export', included: columns.includes('taxRate')}; }
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
