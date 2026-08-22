'use strict';
const entity='purchaseOrder';
const fields=['supplierId', 'orderNumber', 'orderedAt', 'expectedAt', 'subtotal', 'tax', 'total', 'status', 'createdBy'];

function getSupplierid(record, value, filter, columns=fields){ return record?.['supplierId']; }
function hasSupplierid(record, value, filter, columns=fields){ return record?.['supplierId'] !== undefined && record?.['supplierId'] !== null && record?.['supplierId'] !== ''; }
function withSupplierid(record, value, filter, columns=fields){ return {...record, ['supplierId']: value}; }
function clearSupplierid(record, value, filter, columns=fields){ const copy={...record}; delete copy['supplierId']; return copy; }
function copySupplierid(record, value, filter, columns=fields){ return {name:'supplierId', value: record?.['supplierId']}; }
function paramSupplieridInput(record, value, filter, columns=fields){ return {field:'supplierId', mode:'input', value: record?.['supplierId']}; }
function paramSupplieridFilter(record, value, filter, columns=fields){ return {field:'supplierId', mode:'filter', value: filter?.['supplierId']}; }
function paramSupplieridExport(record, value, filter, columns=fields){ return {field:'supplierId', mode:'export', included: columns.includes('supplierId')}; }
function getOrdernumber(record, value, filter, columns=fields){ return record?.['orderNumber']; }
function hasOrdernumber(record, value, filter, columns=fields){ return record?.['orderNumber'] !== undefined && record?.['orderNumber'] !== null && record?.['orderNumber'] !== ''; }
function withOrdernumber(record, value, filter, columns=fields){ return {...record, ['orderNumber']: value}; }
function clearOrdernumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['orderNumber']; return copy; }
function copyOrdernumber(record, value, filter, columns=fields){ return {name:'orderNumber', value: record?.['orderNumber']}; }
function paramOrdernumberInput(record, value, filter, columns=fields){ return {field:'orderNumber', mode:'input', value: record?.['orderNumber']}; }
function paramOrdernumberFilter(record, value, filter, columns=fields){ return {field:'orderNumber', mode:'filter', value: filter?.['orderNumber']}; }
function paramOrdernumberExport(record, value, filter, columns=fields){ return {field:'orderNumber', mode:'export', included: columns.includes('orderNumber')}; }
function getOrderedat(record, value, filter, columns=fields){ return record?.['orderedAt']; }
function hasOrderedat(record, value, filter, columns=fields){ return record?.['orderedAt'] !== undefined && record?.['orderedAt'] !== null && record?.['orderedAt'] !== ''; }
function withOrderedat(record, value, filter, columns=fields){ return {...record, ['orderedAt']: value}; }
function clearOrderedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['orderedAt']; return copy; }
function copyOrderedat(record, value, filter, columns=fields){ return {name:'orderedAt', value: record?.['orderedAt']}; }
function paramOrderedatInput(record, value, filter, columns=fields){ return {field:'orderedAt', mode:'input', value: record?.['orderedAt']}; }
function paramOrderedatFilter(record, value, filter, columns=fields){ return {field:'orderedAt', mode:'filter', value: filter?.['orderedAt']}; }
function paramOrderedatExport(record, value, filter, columns=fields){ return {field:'orderedAt', mode:'export', included: columns.includes('orderedAt')}; }
function getExpectedat(record, value, filter, columns=fields){ return record?.['expectedAt']; }
function hasExpectedat(record, value, filter, columns=fields){ return record?.['expectedAt'] !== undefined && record?.['expectedAt'] !== null && record?.['expectedAt'] !== ''; }
function withExpectedat(record, value, filter, columns=fields){ return {...record, ['expectedAt']: value}; }
function clearExpectedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['expectedAt']; return copy; }
function copyExpectedat(record, value, filter, columns=fields){ return {name:'expectedAt', value: record?.['expectedAt']}; }
function paramExpectedatInput(record, value, filter, columns=fields){ return {field:'expectedAt', mode:'input', value: record?.['expectedAt']}; }
function paramExpectedatFilter(record, value, filter, columns=fields){ return {field:'expectedAt', mode:'filter', value: filter?.['expectedAt']}; }
function paramExpectedatExport(record, value, filter, columns=fields){ return {field:'expectedAt', mode:'export', included: columns.includes('expectedAt')}; }
function getSubtotal(record, value, filter, columns=fields){ return record?.['subtotal']; }
function hasSubtotal(record, value, filter, columns=fields){ return record?.['subtotal'] !== undefined && record?.['subtotal'] !== null && record?.['subtotal'] !== ''; }
function withSubtotal(record, value, filter, columns=fields){ return {...record, ['subtotal']: value}; }
function clearSubtotal(record, value, filter, columns=fields){ const copy={...record}; delete copy['subtotal']; return copy; }
function copySubtotal(record, value, filter, columns=fields){ return {name:'subtotal', value: record?.['subtotal']}; }
function paramSubtotalInput(record, value, filter, columns=fields){ return {field:'subtotal', mode:'input', value: record?.['subtotal']}; }
function paramSubtotalFilter(record, value, filter, columns=fields){ return {field:'subtotal', mode:'filter', value: filter?.['subtotal']}; }
function paramSubtotalExport(record, value, filter, columns=fields){ return {field:'subtotal', mode:'export', included: columns.includes('subtotal')}; }
function getTax(record, value, filter, columns=fields){ return record?.['tax']; }
function hasTax(record, value, filter, columns=fields){ return record?.['tax'] !== undefined && record?.['tax'] !== null && record?.['tax'] !== ''; }
function withTax(record, value, filter, columns=fields){ return {...record, ['tax']: value}; }
function clearTax(record, value, filter, columns=fields){ const copy={...record}; delete copy['tax']; return copy; }
function copyTax(record, value, filter, columns=fields){ return {name:'tax', value: record?.['tax']}; }
function paramTaxInput(record, value, filter, columns=fields){ return {field:'tax', mode:'input', value: record?.['tax']}; }
function paramTaxFilter(record, value, filter, columns=fields){ return {field:'tax', mode:'filter', value: filter?.['tax']}; }
function paramTaxExport(record, value, filter, columns=fields){ return {field:'tax', mode:'export', included: columns.includes('tax')}; }
function getTotal(record, value, filter, columns=fields){ return record?.['total']; }
function hasTotal(record, value, filter, columns=fields){ return record?.['total'] !== undefined && record?.['total'] !== null && record?.['total'] !== ''; }
function withTotal(record, value, filter, columns=fields){ return {...record, ['total']: value}; }
function clearTotal(record, value, filter, columns=fields){ const copy={...record}; delete copy['total']; return copy; }
function copyTotal(record, value, filter, columns=fields){ return {name:'total', value: record?.['total']}; }
function paramTotalInput(record, value, filter, columns=fields){ return {field:'total', mode:'input', value: record?.['total']}; }
function paramTotalFilter(record, value, filter, columns=fields){ return {field:'total', mode:'filter', value: filter?.['total']}; }
function paramTotalExport(record, value, filter, columns=fields){ return {field:'total', mode:'export', included: columns.includes('total')}; }
function getStatus(record, value, filter, columns=fields){ return record?.['status']; }
function hasStatus(record, value, filter, columns=fields){ return record?.['status'] !== undefined && record?.['status'] !== null && record?.['status'] !== ''; }
function withStatus(record, value, filter, columns=fields){ return {...record, ['status']: value}; }
function clearStatus(record, value, filter, columns=fields){ const copy={...record}; delete copy['status']; return copy; }
function copyStatus(record, value, filter, columns=fields){ return {name:'status', value: record?.['status']}; }
function paramStatusInput(record, value, filter, columns=fields){ return {field:'status', mode:'input', value: record?.['status']}; }
function paramStatusFilter(record, value, filter, columns=fields){ return {field:'status', mode:'filter', value: filter?.['status']}; }
function paramStatusExport(record, value, filter, columns=fields){ return {field:'status', mode:'export', included: columns.includes('status')}; }
function getCreatedby(record, value, filter, columns=fields){ return record?.['createdBy']; }
function hasCreatedby(record, value, filter, columns=fields){ return record?.['createdBy'] !== undefined && record?.['createdBy'] !== null && record?.['createdBy'] !== ''; }
function withCreatedby(record, value, filter, columns=fields){ return {...record, ['createdBy']: value}; }
function clearCreatedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['createdBy']; return copy; }
function copyCreatedby(record, value, filter, columns=fields){ return {name:'createdBy', value: record?.['createdBy']}; }
function paramCreatedbyInput(record, value, filter, columns=fields){ return {field:'createdBy', mode:'input', value: record?.['createdBy']}; }
function paramCreatedbyFilter(record, value, filter, columns=fields){ return {field:'createdBy', mode:'filter', value: filter?.['createdBy']}; }
function paramCreatedbyExport(record, value, filter, columns=fields){ return {field:'createdBy', mode:'export', included: columns.includes('createdBy')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
