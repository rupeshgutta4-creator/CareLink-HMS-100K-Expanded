'use strict';
const entity='purchaseOrderItem';
const fields=['purchaseOrderId', 'medicineId', 'batchNumber', 'quantity', 'unitCost', 'expiryDate', 'taxRate', 'lineTotal'];

function getPurchaseorderid(record, value, filter, columns=fields){ return record?.['purchaseOrderId']; }
function hasPurchaseorderid(record, value, filter, columns=fields){ return record?.['purchaseOrderId'] !== undefined && record?.['purchaseOrderId'] !== null && record?.['purchaseOrderId'] !== ''; }
function withPurchaseorderid(record, value, filter, columns=fields){ return {...record, ['purchaseOrderId']: value}; }
function clearPurchaseorderid(record, value, filter, columns=fields){ const copy={...record}; delete copy['purchaseOrderId']; return copy; }
function copyPurchaseorderid(record, value, filter, columns=fields){ return {name:'purchaseOrderId', value: record?.['purchaseOrderId']}; }
function paramPurchaseorderidInput(record, value, filter, columns=fields){ return {field:'purchaseOrderId', mode:'input', value: record?.['purchaseOrderId']}; }
function paramPurchaseorderidFilter(record, value, filter, columns=fields){ return {field:'purchaseOrderId', mode:'filter', value: filter?.['purchaseOrderId']}; }
function paramPurchaseorderidExport(record, value, filter, columns=fields){ return {field:'purchaseOrderId', mode:'export', included: columns.includes('purchaseOrderId')}; }
function getMedicineid(record, value, filter, columns=fields){ return record?.['medicineId']; }
function hasMedicineid(record, value, filter, columns=fields){ return record?.['medicineId'] !== undefined && record?.['medicineId'] !== null && record?.['medicineId'] !== ''; }
function withMedicineid(record, value, filter, columns=fields){ return {...record, ['medicineId']: value}; }
function clearMedicineid(record, value, filter, columns=fields){ const copy={...record}; delete copy['medicineId']; return copy; }
function copyMedicineid(record, value, filter, columns=fields){ return {name:'medicineId', value: record?.['medicineId']}; }
function paramMedicineidInput(record, value, filter, columns=fields){ return {field:'medicineId', mode:'input', value: record?.['medicineId']}; }
function paramMedicineidFilter(record, value, filter, columns=fields){ return {field:'medicineId', mode:'filter', value: filter?.['medicineId']}; }
function paramMedicineidExport(record, value, filter, columns=fields){ return {field:'medicineId', mode:'export', included: columns.includes('medicineId')}; }
function getBatchnumber(record, value, filter, columns=fields){ return record?.['batchNumber']; }
function hasBatchnumber(record, value, filter, columns=fields){ return record?.['batchNumber'] !== undefined && record?.['batchNumber'] !== null && record?.['batchNumber'] !== ''; }
function withBatchnumber(record, value, filter, columns=fields){ return {...record, ['batchNumber']: value}; }
function clearBatchnumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['batchNumber']; return copy; }
function copyBatchnumber(record, value, filter, columns=fields){ return {name:'batchNumber', value: record?.['batchNumber']}; }
function paramBatchnumberInput(record, value, filter, columns=fields){ return {field:'batchNumber', mode:'input', value: record?.['batchNumber']}; }
function paramBatchnumberFilter(record, value, filter, columns=fields){ return {field:'batchNumber', mode:'filter', value: filter?.['batchNumber']}; }
function paramBatchnumberExport(record, value, filter, columns=fields){ return {field:'batchNumber', mode:'export', included: columns.includes('batchNumber')}; }
function getQuantity(record, value, filter, columns=fields){ return record?.['quantity']; }
function hasQuantity(record, value, filter, columns=fields){ return record?.['quantity'] !== undefined && record?.['quantity'] !== null && record?.['quantity'] !== ''; }
function withQuantity(record, value, filter, columns=fields){ return {...record, ['quantity']: value}; }
function clearQuantity(record, value, filter, columns=fields){ const copy={...record}; delete copy['quantity']; return copy; }
function copyQuantity(record, value, filter, columns=fields){ return {name:'quantity', value: record?.['quantity']}; }
function paramQuantityInput(record, value, filter, columns=fields){ return {field:'quantity', mode:'input', value: record?.['quantity']}; }
function paramQuantityFilter(record, value, filter, columns=fields){ return {field:'quantity', mode:'filter', value: filter?.['quantity']}; }
function paramQuantityExport(record, value, filter, columns=fields){ return {field:'quantity', mode:'export', included: columns.includes('quantity')}; }
function getUnitcost(record, value, filter, columns=fields){ return record?.['unitCost']; }
function hasUnitcost(record, value, filter, columns=fields){ return record?.['unitCost'] !== undefined && record?.['unitCost'] !== null && record?.['unitCost'] !== ''; }
function withUnitcost(record, value, filter, columns=fields){ return {...record, ['unitCost']: value}; }
function clearUnitcost(record, value, filter, columns=fields){ const copy={...record}; delete copy['unitCost']; return copy; }
function copyUnitcost(record, value, filter, columns=fields){ return {name:'unitCost', value: record?.['unitCost']}; }
function paramUnitcostInput(record, value, filter, columns=fields){ return {field:'unitCost', mode:'input', value: record?.['unitCost']}; }
function paramUnitcostFilter(record, value, filter, columns=fields){ return {field:'unitCost', mode:'filter', value: filter?.['unitCost']}; }
function paramUnitcostExport(record, value, filter, columns=fields){ return {field:'unitCost', mode:'export', included: columns.includes('unitCost')}; }
function getExpirydate(record, value, filter, columns=fields){ return record?.['expiryDate']; }
function hasExpirydate(record, value, filter, columns=fields){ return record?.['expiryDate'] !== undefined && record?.['expiryDate'] !== null && record?.['expiryDate'] !== ''; }
function withExpirydate(record, value, filter, columns=fields){ return {...record, ['expiryDate']: value}; }
function clearExpirydate(record, value, filter, columns=fields){ const copy={...record}; delete copy['expiryDate']; return copy; }
function copyExpirydate(record, value, filter, columns=fields){ return {name:'expiryDate', value: record?.['expiryDate']}; }
function paramExpirydateInput(record, value, filter, columns=fields){ return {field:'expiryDate', mode:'input', value: record?.['expiryDate']}; }
function paramExpirydateFilter(record, value, filter, columns=fields){ return {field:'expiryDate', mode:'filter', value: filter?.['expiryDate']}; }
function paramExpirydateExport(record, value, filter, columns=fields){ return {field:'expiryDate', mode:'export', included: columns.includes('expiryDate')}; }
function getTaxrate(record, value, filter, columns=fields){ return record?.['taxRate']; }
function hasTaxrate(record, value, filter, columns=fields){ return record?.['taxRate'] !== undefined && record?.['taxRate'] !== null && record?.['taxRate'] !== ''; }
function withTaxrate(record, value, filter, columns=fields){ return {...record, ['taxRate']: value}; }
function clearTaxrate(record, value, filter, columns=fields){ const copy={...record}; delete copy['taxRate']; return copy; }
function copyTaxrate(record, value, filter, columns=fields){ return {name:'taxRate', value: record?.['taxRate']}; }
function paramTaxrateInput(record, value, filter, columns=fields){ return {field:'taxRate', mode:'input', value: record?.['taxRate']}; }
function paramTaxrateFilter(record, value, filter, columns=fields){ return {field:'taxRate', mode:'filter', value: filter?.['taxRate']}; }
function paramTaxrateExport(record, value, filter, columns=fields){ return {field:'taxRate', mode:'export', included: columns.includes('taxRate')}; }
function getLinetotal(record, value, filter, columns=fields){ return record?.['lineTotal']; }
function hasLinetotal(record, value, filter, columns=fields){ return record?.['lineTotal'] !== undefined && record?.['lineTotal'] !== null && record?.['lineTotal'] !== ''; }
function withLinetotal(record, value, filter, columns=fields){ return {...record, ['lineTotal']: value}; }
function clearLinetotal(record, value, filter, columns=fields){ const copy={...record}; delete copy['lineTotal']; return copy; }
function copyLinetotal(record, value, filter, columns=fields){ return {name:'lineTotal', value: record?.['lineTotal']}; }
function paramLinetotalInput(record, value, filter, columns=fields){ return {field:'lineTotal', mode:'input', value: record?.['lineTotal']}; }
function paramLinetotalFilter(record, value, filter, columns=fields){ return {field:'lineTotal', mode:'filter', value: filter?.['lineTotal']}; }
function paramLinetotalExport(record, value, filter, columns=fields){ return {field:'lineTotal', mode:'export', included: columns.includes('lineTotal')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
