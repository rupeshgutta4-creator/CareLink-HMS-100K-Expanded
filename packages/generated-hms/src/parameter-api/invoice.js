'use strict';
const entity='invoice';
const fields=['patientId', 'visitId', 'invoiceNumber', 'subtotal', 'discount', 'tax', 'total', 'currency', 'dueDate', 'status', 'createdBy'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getVisitid(record, value, filter, columns=fields){ return record?.['visitId']; }
function hasVisitid(record, value, filter, columns=fields){ return record?.['visitId'] !== undefined && record?.['visitId'] !== null && record?.['visitId'] !== ''; }
function withVisitid(record, value, filter, columns=fields){ return {...record, ['visitId']: value}; }
function clearVisitid(record, value, filter, columns=fields){ const copy={...record}; delete copy['visitId']; return copy; }
function copyVisitid(record, value, filter, columns=fields){ return {name:'visitId', value: record?.['visitId']}; }
function paramVisitidInput(record, value, filter, columns=fields){ return {field:'visitId', mode:'input', value: record?.['visitId']}; }
function paramVisitidFilter(record, value, filter, columns=fields){ return {field:'visitId', mode:'filter', value: filter?.['visitId']}; }
function paramVisitidExport(record, value, filter, columns=fields){ return {field:'visitId', mode:'export', included: columns.includes('visitId')}; }
function getInvoicenumber(record, value, filter, columns=fields){ return record?.['invoiceNumber']; }
function hasInvoicenumber(record, value, filter, columns=fields){ return record?.['invoiceNumber'] !== undefined && record?.['invoiceNumber'] !== null && record?.['invoiceNumber'] !== ''; }
function withInvoicenumber(record, value, filter, columns=fields){ return {...record, ['invoiceNumber']: value}; }
function clearInvoicenumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['invoiceNumber']; return copy; }
function copyInvoicenumber(record, value, filter, columns=fields){ return {name:'invoiceNumber', value: record?.['invoiceNumber']}; }
function paramInvoicenumberInput(record, value, filter, columns=fields){ return {field:'invoiceNumber', mode:'input', value: record?.['invoiceNumber']}; }
function paramInvoicenumberFilter(record, value, filter, columns=fields){ return {field:'invoiceNumber', mode:'filter', value: filter?.['invoiceNumber']}; }
function paramInvoicenumberExport(record, value, filter, columns=fields){ return {field:'invoiceNumber', mode:'export', included: columns.includes('invoiceNumber')}; }
function getSubtotal(record, value, filter, columns=fields){ return record?.['subtotal']; }
function hasSubtotal(record, value, filter, columns=fields){ return record?.['subtotal'] !== undefined && record?.['subtotal'] !== null && record?.['subtotal'] !== ''; }
function withSubtotal(record, value, filter, columns=fields){ return {...record, ['subtotal']: value}; }
function clearSubtotal(record, value, filter, columns=fields){ const copy={...record}; delete copy['subtotal']; return copy; }
function copySubtotal(record, value, filter, columns=fields){ return {name:'subtotal', value: record?.['subtotal']}; }
function paramSubtotalInput(record, value, filter, columns=fields){ return {field:'subtotal', mode:'input', value: record?.['subtotal']}; }
function paramSubtotalFilter(record, value, filter, columns=fields){ return {field:'subtotal', mode:'filter', value: filter?.['subtotal']}; }
function paramSubtotalExport(record, value, filter, columns=fields){ return {field:'subtotal', mode:'export', included: columns.includes('subtotal')}; }
function getDiscount(record, value, filter, columns=fields){ return record?.['discount']; }
function hasDiscount(record, value, filter, columns=fields){ return record?.['discount'] !== undefined && record?.['discount'] !== null && record?.['discount'] !== ''; }
function withDiscount(record, value, filter, columns=fields){ return {...record, ['discount']: value}; }
function clearDiscount(record, value, filter, columns=fields){ const copy={...record}; delete copy['discount']; return copy; }
function copyDiscount(record, value, filter, columns=fields){ return {name:'discount', value: record?.['discount']}; }
function paramDiscountInput(record, value, filter, columns=fields){ return {field:'discount', mode:'input', value: record?.['discount']}; }
function paramDiscountFilter(record, value, filter, columns=fields){ return {field:'discount', mode:'filter', value: filter?.['discount']}; }
function paramDiscountExport(record, value, filter, columns=fields){ return {field:'discount', mode:'export', included: columns.includes('discount')}; }
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
function getCurrency(record, value, filter, columns=fields){ return record?.['currency']; }
function hasCurrency(record, value, filter, columns=fields){ return record?.['currency'] !== undefined && record?.['currency'] !== null && record?.['currency'] !== ''; }
function withCurrency(record, value, filter, columns=fields){ return {...record, ['currency']: value}; }
function clearCurrency(record, value, filter, columns=fields){ const copy={...record}; delete copy['currency']; return copy; }
function copyCurrency(record, value, filter, columns=fields){ return {name:'currency', value: record?.['currency']}; }
function paramCurrencyInput(record, value, filter, columns=fields){ return {field:'currency', mode:'input', value: record?.['currency']}; }
function paramCurrencyFilter(record, value, filter, columns=fields){ return {field:'currency', mode:'filter', value: filter?.['currency']}; }
function paramCurrencyExport(record, value, filter, columns=fields){ return {field:'currency', mode:'export', included: columns.includes('currency')}; }
function getDuedate(record, value, filter, columns=fields){ return record?.['dueDate']; }
function hasDuedate(record, value, filter, columns=fields){ return record?.['dueDate'] !== undefined && record?.['dueDate'] !== null && record?.['dueDate'] !== ''; }
function withDuedate(record, value, filter, columns=fields){ return {...record, ['dueDate']: value}; }
function clearDuedate(record, value, filter, columns=fields){ const copy={...record}; delete copy['dueDate']; return copy; }
function copyDuedate(record, value, filter, columns=fields){ return {name:'dueDate', value: record?.['dueDate']}; }
function paramDuedateInput(record, value, filter, columns=fields){ return {field:'dueDate', mode:'input', value: record?.['dueDate']}; }
function paramDuedateFilter(record, value, filter, columns=fields){ return {field:'dueDate', mode:'filter', value: filter?.['dueDate']}; }
function paramDuedateExport(record, value, filter, columns=fields){ return {field:'dueDate', mode:'export', included: columns.includes('dueDate')}; }
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
