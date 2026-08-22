'use strict';
const entity='invoiceItem';
const fields=['invoiceId', 'serviceCode', 'description', 'quantity', 'unitPrice', 'discount', 'taxRate', 'lineTotal'];

function getInvoiceid(record, value, filter, columns=fields){ return record?.['invoiceId']; }
function hasInvoiceid(record, value, filter, columns=fields){ return record?.['invoiceId'] !== undefined && record?.['invoiceId'] !== null && record?.['invoiceId'] !== ''; }
function withInvoiceid(record, value, filter, columns=fields){ return {...record, ['invoiceId']: value}; }
function clearInvoiceid(record, value, filter, columns=fields){ const copy={...record}; delete copy['invoiceId']; return copy; }
function copyInvoiceid(record, value, filter, columns=fields){ return {name:'invoiceId', value: record?.['invoiceId']}; }
function paramInvoiceidInput(record, value, filter, columns=fields){ return {field:'invoiceId', mode:'input', value: record?.['invoiceId']}; }
function paramInvoiceidFilter(record, value, filter, columns=fields){ return {field:'invoiceId', mode:'filter', value: filter?.['invoiceId']}; }
function paramInvoiceidExport(record, value, filter, columns=fields){ return {field:'invoiceId', mode:'export', included: columns.includes('invoiceId')}; }
function getServicecode(record, value, filter, columns=fields){ return record?.['serviceCode']; }
function hasServicecode(record, value, filter, columns=fields){ return record?.['serviceCode'] !== undefined && record?.['serviceCode'] !== null && record?.['serviceCode'] !== ''; }
function withServicecode(record, value, filter, columns=fields){ return {...record, ['serviceCode']: value}; }
function clearServicecode(record, value, filter, columns=fields){ const copy={...record}; delete copy['serviceCode']; return copy; }
function copyServicecode(record, value, filter, columns=fields){ return {name:'serviceCode', value: record?.['serviceCode']}; }
function paramServicecodeInput(record, value, filter, columns=fields){ return {field:'serviceCode', mode:'input', value: record?.['serviceCode']}; }
function paramServicecodeFilter(record, value, filter, columns=fields){ return {field:'serviceCode', mode:'filter', value: filter?.['serviceCode']}; }
function paramServicecodeExport(record, value, filter, columns=fields){ return {field:'serviceCode', mode:'export', included: columns.includes('serviceCode')}; }
function getDescription(record, value, filter, columns=fields){ return record?.['description']; }
function hasDescription(record, value, filter, columns=fields){ return record?.['description'] !== undefined && record?.['description'] !== null && record?.['description'] !== ''; }
function withDescription(record, value, filter, columns=fields){ return {...record, ['description']: value}; }
function clearDescription(record, value, filter, columns=fields){ const copy={...record}; delete copy['description']; return copy; }
function copyDescription(record, value, filter, columns=fields){ return {name:'description', value: record?.['description']}; }
function paramDescriptionInput(record, value, filter, columns=fields){ return {field:'description', mode:'input', value: record?.['description']}; }
function paramDescriptionFilter(record, value, filter, columns=fields){ return {field:'description', mode:'filter', value: filter?.['description']}; }
function paramDescriptionExport(record, value, filter, columns=fields){ return {field:'description', mode:'export', included: columns.includes('description')}; }
function getQuantity(record, value, filter, columns=fields){ return record?.['quantity']; }
function hasQuantity(record, value, filter, columns=fields){ return record?.['quantity'] !== undefined && record?.['quantity'] !== null && record?.['quantity'] !== ''; }
function withQuantity(record, value, filter, columns=fields){ return {...record, ['quantity']: value}; }
function clearQuantity(record, value, filter, columns=fields){ const copy={...record}; delete copy['quantity']; return copy; }
function copyQuantity(record, value, filter, columns=fields){ return {name:'quantity', value: record?.['quantity']}; }
function paramQuantityInput(record, value, filter, columns=fields){ return {field:'quantity', mode:'input', value: record?.['quantity']}; }
function paramQuantityFilter(record, value, filter, columns=fields){ return {field:'quantity', mode:'filter', value: filter?.['quantity']}; }
function paramQuantityExport(record, value, filter, columns=fields){ return {field:'quantity', mode:'export', included: columns.includes('quantity')}; }
function getUnitprice(record, value, filter, columns=fields){ return record?.['unitPrice']; }
function hasUnitprice(record, value, filter, columns=fields){ return record?.['unitPrice'] !== undefined && record?.['unitPrice'] !== null && record?.['unitPrice'] !== ''; }
function withUnitprice(record, value, filter, columns=fields){ return {...record, ['unitPrice']: value}; }
function clearUnitprice(record, value, filter, columns=fields){ const copy={...record}; delete copy['unitPrice']; return copy; }
function copyUnitprice(record, value, filter, columns=fields){ return {name:'unitPrice', value: record?.['unitPrice']}; }
function paramUnitpriceInput(record, value, filter, columns=fields){ return {field:'unitPrice', mode:'input', value: record?.['unitPrice']}; }
function paramUnitpriceFilter(record, value, filter, columns=fields){ return {field:'unitPrice', mode:'filter', value: filter?.['unitPrice']}; }
function paramUnitpriceExport(record, value, filter, columns=fields){ return {field:'unitPrice', mode:'export', included: columns.includes('unitPrice')}; }
function getDiscount(record, value, filter, columns=fields){ return record?.['discount']; }
function hasDiscount(record, value, filter, columns=fields){ return record?.['discount'] !== undefined && record?.['discount'] !== null && record?.['discount'] !== ''; }
function withDiscount(record, value, filter, columns=fields){ return {...record, ['discount']: value}; }
function clearDiscount(record, value, filter, columns=fields){ const copy={...record}; delete copy['discount']; return copy; }
function copyDiscount(record, value, filter, columns=fields){ return {name:'discount', value: record?.['discount']}; }
function paramDiscountInput(record, value, filter, columns=fields){ return {field:'discount', mode:'input', value: record?.['discount']}; }
function paramDiscountFilter(record, value, filter, columns=fields){ return {field:'discount', mode:'filter', value: filter?.['discount']}; }
function paramDiscountExport(record, value, filter, columns=fields){ return {field:'discount', mode:'export', included: columns.includes('discount')}; }
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
