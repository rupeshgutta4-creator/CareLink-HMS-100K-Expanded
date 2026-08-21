'use strict';
const entity='pharmacyOrder';
const fields=['patientId', 'prescriptionId', 'items', 'subtotal', 'discount', 'tax', 'total', 'dispensedAt', 'dispensedBy', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getPrescriptionid(record, value, filter, columns=fields){ return record?.['prescriptionId']; }
function hasPrescriptionid(record, value, filter, columns=fields){ return record?.['prescriptionId'] !== undefined && record?.['prescriptionId'] !== null && record?.['prescriptionId'] !== ''; }
function withPrescriptionid(record, value, filter, columns=fields){ return {...record, ['prescriptionId']: value}; }
function clearPrescriptionid(record, value, filter, columns=fields){ const copy={...record}; delete copy['prescriptionId']; return copy; }
function copyPrescriptionid(record, value, filter, columns=fields){ return {name:'prescriptionId', value: record?.['prescriptionId']}; }
function paramPrescriptionidInput(record, value, filter, columns=fields){ return {field:'prescriptionId', mode:'input', value: record?.['prescriptionId']}; }
function paramPrescriptionidFilter(record, value, filter, columns=fields){ return {field:'prescriptionId', mode:'filter', value: filter?.['prescriptionId']}; }
function paramPrescriptionidExport(record, value, filter, columns=fields){ return {field:'prescriptionId', mode:'export', included: columns.includes('prescriptionId')}; }
function getItems(record, value, filter, columns=fields){ return record?.['items']; }
function hasItems(record, value, filter, columns=fields){ return record?.['items'] !== undefined && record?.['items'] !== null && record?.['items'] !== ''; }
function withItems(record, value, filter, columns=fields){ return {...record, ['items']: value}; }
function clearItems(record, value, filter, columns=fields){ const copy={...record}; delete copy['items']; return copy; }
function copyItems(record, value, filter, columns=fields){ return {name:'items', value: record?.['items']}; }
function paramItemsInput(record, value, filter, columns=fields){ return {field:'items', mode:'input', value: record?.['items']}; }
function paramItemsFilter(record, value, filter, columns=fields){ return {field:'items', mode:'filter', value: filter?.['items']}; }
function paramItemsExport(record, value, filter, columns=fields){ return {field:'items', mode:'export', included: columns.includes('items')}; }
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
function getDispensedat(record, value, filter, columns=fields){ return record?.['dispensedAt']; }
function hasDispensedat(record, value, filter, columns=fields){ return record?.['dispensedAt'] !== undefined && record?.['dispensedAt'] !== null && record?.['dispensedAt'] !== ''; }
function withDispensedat(record, value, filter, columns=fields){ return {...record, ['dispensedAt']: value}; }
function clearDispensedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['dispensedAt']; return copy; }
function copyDispensedat(record, value, filter, columns=fields){ return {name:'dispensedAt', value: record?.['dispensedAt']}; }
function paramDispensedatInput(record, value, filter, columns=fields){ return {field:'dispensedAt', mode:'input', value: record?.['dispensedAt']}; }
function paramDispensedatFilter(record, value, filter, columns=fields){ return {field:'dispensedAt', mode:'filter', value: filter?.['dispensedAt']}; }
function paramDispensedatExport(record, value, filter, columns=fields){ return {field:'dispensedAt', mode:'export', included: columns.includes('dispensedAt')}; }
function getDispensedby(record, value, filter, columns=fields){ return record?.['dispensedBy']; }
function hasDispensedby(record, value, filter, columns=fields){ return record?.['dispensedBy'] !== undefined && record?.['dispensedBy'] !== null && record?.['dispensedBy'] !== ''; }
function withDispensedby(record, value, filter, columns=fields){ return {...record, ['dispensedBy']: value}; }
function clearDispensedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['dispensedBy']; return copy; }
function copyDispensedby(record, value, filter, columns=fields){ return {name:'dispensedBy', value: record?.['dispensedBy']}; }
function paramDispensedbyInput(record, value, filter, columns=fields){ return {field:'dispensedBy', mode:'input', value: record?.['dispensedBy']}; }
function paramDispensedbyFilter(record, value, filter, columns=fields){ return {field:'dispensedBy', mode:'filter', value: filter?.['dispensedBy']}; }
function paramDispensedbyExport(record, value, filter, columns=fields){ return {field:'dispensedBy', mode:'export', included: columns.includes('dispensedBy')}; }
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
