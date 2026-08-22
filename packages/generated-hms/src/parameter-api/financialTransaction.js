'use strict';
const entity='financialTransaction';
const fields=['costCenterId', 'type', 'reference', 'amount', 'currency', 'transactionDate', 'status'];

function getCostcenterid(record, value, filter, columns=fields){ return record?.['costCenterId']; }
function hasCostcenterid(record, value, filter, columns=fields){ return record?.['costCenterId'] !== undefined && record?.['costCenterId'] !== null && record?.['costCenterId'] !== ''; }
function withCostcenterid(record, value, filter, columns=fields){ return {...record, ['costCenterId']: value}; }
function clearCostcenterid(record, value, filter, columns=fields){ const copy={...record}; delete copy['costCenterId']; return copy; }
function copyCostcenterid(record, value, filter, columns=fields){ return {name:'costCenterId', value: record?.['costCenterId']}; }
function paramCostcenteridInput(record, value, filter, columns=fields){ return {field:'costCenterId', mode:'input', value: record?.['costCenterId']}; }
function paramCostcenteridFilter(record, value, filter, columns=fields){ return {field:'costCenterId', mode:'filter', value: filter?.['costCenterId']}; }
function paramCostcenteridExport(record, value, filter, columns=fields){ return {field:'costCenterId', mode:'export', included: columns.includes('costCenterId')}; }
function getType(record, value, filter, columns=fields){ return record?.['type']; }
function hasType(record, value, filter, columns=fields){ return record?.['type'] !== undefined && record?.['type'] !== null && record?.['type'] !== ''; }
function withType(record, value, filter, columns=fields){ return {...record, ['type']: value}; }
function clearType(record, value, filter, columns=fields){ const copy={...record}; delete copy['type']; return copy; }
function copyType(record, value, filter, columns=fields){ return {name:'type', value: record?.['type']}; }
function paramTypeInput(record, value, filter, columns=fields){ return {field:'type', mode:'input', value: record?.['type']}; }
function paramTypeFilter(record, value, filter, columns=fields){ return {field:'type', mode:'filter', value: filter?.['type']}; }
function paramTypeExport(record, value, filter, columns=fields){ return {field:'type', mode:'export', included: columns.includes('type')}; }
function getReference(record, value, filter, columns=fields){ return record?.['reference']; }
function hasReference(record, value, filter, columns=fields){ return record?.['reference'] !== undefined && record?.['reference'] !== null && record?.['reference'] !== ''; }
function withReference(record, value, filter, columns=fields){ return {...record, ['reference']: value}; }
function clearReference(record, value, filter, columns=fields){ const copy={...record}; delete copy['reference']; return copy; }
function copyReference(record, value, filter, columns=fields){ return {name:'reference', value: record?.['reference']}; }
function paramReferenceInput(record, value, filter, columns=fields){ return {field:'reference', mode:'input', value: record?.['reference']}; }
function paramReferenceFilter(record, value, filter, columns=fields){ return {field:'reference', mode:'filter', value: filter?.['reference']}; }
function paramReferenceExport(record, value, filter, columns=fields){ return {field:'reference', mode:'export', included: columns.includes('reference')}; }
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
function getTransactiondate(record, value, filter, columns=fields){ return record?.['transactionDate']; }
function hasTransactiondate(record, value, filter, columns=fields){ return record?.['transactionDate'] !== undefined && record?.['transactionDate'] !== null && record?.['transactionDate'] !== ''; }
function withTransactiondate(record, value, filter, columns=fields){ return {...record, ['transactionDate']: value}; }
function clearTransactiondate(record, value, filter, columns=fields){ const copy={...record}; delete copy['transactionDate']; return copy; }
function copyTransactiondate(record, value, filter, columns=fields){ return {name:'transactionDate', value: record?.['transactionDate']}; }
function paramTransactiondateInput(record, value, filter, columns=fields){ return {field:'transactionDate', mode:'input', value: record?.['transactionDate']}; }
function paramTransactiondateFilter(record, value, filter, columns=fields){ return {field:'transactionDate', mode:'filter', value: filter?.['transactionDate']}; }
function paramTransactiondateExport(record, value, filter, columns=fields){ return {field:'transactionDate', mode:'export', included: columns.includes('transactionDate')}; }
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
