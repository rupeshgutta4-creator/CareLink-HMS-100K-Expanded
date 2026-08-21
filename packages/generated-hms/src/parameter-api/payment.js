'use strict';
const entity='payment';
const fields=['invoiceId', 'patientId', 'amount', 'currency', 'method', 'transactionId', 'paidAt', 'status', 'receivedBy', 'notes'];

function getInvoiceid(record, value, filter, columns=fields){ return record?.['invoiceId']; }
function hasInvoiceid(record, value, filter, columns=fields){ return record?.['invoiceId'] !== undefined && record?.['invoiceId'] !== null && record?.['invoiceId'] !== ''; }
function withInvoiceid(record, value, filter, columns=fields){ return {...record, ['invoiceId']: value}; }
function clearInvoiceid(record, value, filter, columns=fields){ const copy={...record}; delete copy['invoiceId']; return copy; }
function copyInvoiceid(record, value, filter, columns=fields){ return {name:'invoiceId', value: record?.['invoiceId']}; }
function paramInvoiceidInput(record, value, filter, columns=fields){ return {field:'invoiceId', mode:'input', value: record?.['invoiceId']}; }
function paramInvoiceidFilter(record, value, filter, columns=fields){ return {field:'invoiceId', mode:'filter', value: filter?.['invoiceId']}; }
function paramInvoiceidExport(record, value, filter, columns=fields){ return {field:'invoiceId', mode:'export', included: columns.includes('invoiceId')}; }
function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getAmount(record, value, filter, columns=fields){ return record?.['amount']; }
function hasAmount(record, value, filter, columns=fields){ return record?.['amount'] !== undefined && record?.['amount'] !== null && record?.['amount'] !== ''; }
function withAmount(record, value, filter, columns=fields){ return {...record, ['amount']: value}; }
function clearAmount(record, value, filter, columns=fields){ const copy={...record}; delete copy['amount']; return copy; }
function copyAmount(record, value, filter, columns=fields){ return {name:'amount', value: record?.['amount']}; }
function paramAmountInput(record, value, filter, columns=fields){ return {field:'amount', mode:'input', value: record?.['amount']}; }
function paramAmountFilter(record, value, filter, columns=fields){ return {field:'amount', mode:'filter', value: filter?.['amount']}; }
function paramAmountExport(record, value, filter, columns=fields){ return {field:'amount', mode:'export', included: columns.includes('amount')}; }
function getCurrency(record, value, filter, columns=fields){ return record?.['currency']; }
function hasCurrency(record, value, filter, columns=fields){ return record?.['currency'] !== undefined && record?.['currency'] !== null && record?.['currency'] !== ''; }
function withCurrency(record, value, filter, columns=fields){ return {...record, ['currency']: value}; }
function clearCurrency(record, value, filter, columns=fields){ const copy={...record}; delete copy['currency']; return copy; }
function copyCurrency(record, value, filter, columns=fields){ return {name:'currency', value: record?.['currency']}; }
function paramCurrencyInput(record, value, filter, columns=fields){ return {field:'currency', mode:'input', value: record?.['currency']}; }
function paramCurrencyFilter(record, value, filter, columns=fields){ return {field:'currency', mode:'filter', value: filter?.['currency']}; }
function paramCurrencyExport(record, value, filter, columns=fields){ return {field:'currency', mode:'export', included: columns.includes('currency')}; }
function getMethod(record, value, filter, columns=fields){ return record?.['method']; }
function hasMethod(record, value, filter, columns=fields){ return record?.['method'] !== undefined && record?.['method'] !== null && record?.['method'] !== ''; }
function withMethod(record, value, filter, columns=fields){ return {...record, ['method']: value}; }
function clearMethod(record, value, filter, columns=fields){ const copy={...record}; delete copy['method']; return copy; }
function copyMethod(record, value, filter, columns=fields){ return {name:'method', value: record?.['method']}; }
function paramMethodInput(record, value, filter, columns=fields){ return {field:'method', mode:'input', value: record?.['method']}; }
function paramMethodFilter(record, value, filter, columns=fields){ return {field:'method', mode:'filter', value: filter?.['method']}; }
function paramMethodExport(record, value, filter, columns=fields){ return {field:'method', mode:'export', included: columns.includes('method')}; }
function getTransactionid(record, value, filter, columns=fields){ return record?.['transactionId']; }
function hasTransactionid(record, value, filter, columns=fields){ return record?.['transactionId'] !== undefined && record?.['transactionId'] !== null && record?.['transactionId'] !== ''; }
function withTransactionid(record, value, filter, columns=fields){ return {...record, ['transactionId']: value}; }
function clearTransactionid(record, value, filter, columns=fields){ const copy={...record}; delete copy['transactionId']; return copy; }
function copyTransactionid(record, value, filter, columns=fields){ return {name:'transactionId', value: record?.['transactionId']}; }
function paramTransactionidInput(record, value, filter, columns=fields){ return {field:'transactionId', mode:'input', value: record?.['transactionId']}; }
function paramTransactionidFilter(record, value, filter, columns=fields){ return {field:'transactionId', mode:'filter', value: filter?.['transactionId']}; }
function paramTransactionidExport(record, value, filter, columns=fields){ return {field:'transactionId', mode:'export', included: columns.includes('transactionId')}; }
function getPaidat(record, value, filter, columns=fields){ return record?.['paidAt']; }
function hasPaidat(record, value, filter, columns=fields){ return record?.['paidAt'] !== undefined && record?.['paidAt'] !== null && record?.['paidAt'] !== ''; }
function withPaidat(record, value, filter, columns=fields){ return {...record, ['paidAt']: value}; }
function clearPaidat(record, value, filter, columns=fields){ const copy={...record}; delete copy['paidAt']; return copy; }
function copyPaidat(record, value, filter, columns=fields){ return {name:'paidAt', value: record?.['paidAt']}; }
function paramPaidatInput(record, value, filter, columns=fields){ return {field:'paidAt', mode:'input', value: record?.['paidAt']}; }
function paramPaidatFilter(record, value, filter, columns=fields){ return {field:'paidAt', mode:'filter', value: filter?.['paidAt']}; }
function paramPaidatExport(record, value, filter, columns=fields){ return {field:'paidAt', mode:'export', included: columns.includes('paidAt')}; }
function getStatus(record, value, filter, columns=fields){ return record?.['status']; }
function hasStatus(record, value, filter, columns=fields){ return record?.['status'] !== undefined && record?.['status'] !== null && record?.['status'] !== ''; }
function withStatus(record, value, filter, columns=fields){ return {...record, ['status']: value}; }
function clearStatus(record, value, filter, columns=fields){ const copy={...record}; delete copy['status']; return copy; }
function copyStatus(record, value, filter, columns=fields){ return {name:'status', value: record?.['status']}; }
function paramStatusInput(record, value, filter, columns=fields){ return {field:'status', mode:'input', value: record?.['status']}; }
function paramStatusFilter(record, value, filter, columns=fields){ return {field:'status', mode:'filter', value: filter?.['status']}; }
function paramStatusExport(record, value, filter, columns=fields){ return {field:'status', mode:'export', included: columns.includes('status')}; }
function getReceivedby(record, value, filter, columns=fields){ return record?.['receivedBy']; }
function hasReceivedby(record, value, filter, columns=fields){ return record?.['receivedBy'] !== undefined && record?.['receivedBy'] !== null && record?.['receivedBy'] !== ''; }
function withReceivedby(record, value, filter, columns=fields){ return {...record, ['receivedBy']: value}; }
function clearReceivedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['receivedBy']; return copy; }
function copyReceivedby(record, value, filter, columns=fields){ return {name:'receivedBy', value: record?.['receivedBy']}; }
function paramReceivedbyInput(record, value, filter, columns=fields){ return {field:'receivedBy', mode:'input', value: record?.['receivedBy']}; }
function paramReceivedbyFilter(record, value, filter, columns=fields){ return {field:'receivedBy', mode:'filter', value: filter?.['receivedBy']}; }
function paramReceivedbyExport(record, value, filter, columns=fields){ return {field:'receivedBy', mode:'export', included: columns.includes('receivedBy')}; }
function getNotes(record, value, filter, columns=fields){ return record?.['notes']; }
function hasNotes(record, value, filter, columns=fields){ return record?.['notes'] !== undefined && record?.['notes'] !== null && record?.['notes'] !== ''; }
function withNotes(record, value, filter, columns=fields){ return {...record, ['notes']: value}; }
function clearNotes(record, value, filter, columns=fields){ const copy={...record}; delete copy['notes']; return copy; }
function copyNotes(record, value, filter, columns=fields){ return {name:'notes', value: record?.['notes']}; }
function paramNotesInput(record, value, filter, columns=fields){ return {field:'notes', mode:'input', value: record?.['notes']}; }
function paramNotesFilter(record, value, filter, columns=fields){ return {field:'notes', mode:'filter', value: filter?.['notes']}; }
function paramNotesExport(record, value, filter, columns=fields){ return {field:'notes', mode:'export', included: columns.includes('notes')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
