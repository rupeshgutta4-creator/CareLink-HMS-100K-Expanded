'use strict';
const entity='ledgerEntry';
const fields=['transactionId', 'accountCode', 'debit', 'credit', 'description', 'postedAt', 'status'];

function getTransactionid(record, value, filter, columns=fields){ return record?.['transactionId']; }
function hasTransactionid(record, value, filter, columns=fields){ return record?.['transactionId'] !== undefined && record?.['transactionId'] !== null && record?.['transactionId'] !== ''; }
function withTransactionid(record, value, filter, columns=fields){ return {...record, ['transactionId']: value}; }
function clearTransactionid(record, value, filter, columns=fields){ const copy={...record}; delete copy['transactionId']; return copy; }
function copyTransactionid(record, value, filter, columns=fields){ return {name:'transactionId', value: record?.['transactionId']}; }
function paramTransactionidInput(record, value, filter, columns=fields){ return {field:'transactionId', mode:'input', value: record?.['transactionId']}; }
function paramTransactionidFilter(record, value, filter, columns=fields){ return {field:'transactionId', mode:'filter', value: filter?.['transactionId']}; }
function paramTransactionidExport(record, value, filter, columns=fields){ return {field:'transactionId', mode:'export', included: columns.includes('transactionId')}; }
function getAccountcode(record, value, filter, columns=fields){ return record?.['accountCode']; }
function hasAccountcode(record, value, filter, columns=fields){ return record?.['accountCode'] !== undefined && record?.['accountCode'] !== null && record?.['accountCode'] !== ''; }
function withAccountcode(record, value, filter, columns=fields){ return {...record, ['accountCode']: value}; }
function clearAccountcode(record, value, filter, columns=fields){ const copy={...record}; delete copy['accountCode']; return copy; }
function copyAccountcode(record, value, filter, columns=fields){ return {name:'accountCode', value: record?.['accountCode']}; }
function paramAccountcodeInput(record, value, filter, columns=fields){ return {field:'accountCode', mode:'input', value: record?.['accountCode']}; }
function paramAccountcodeFilter(record, value, filter, columns=fields){ return {field:'accountCode', mode:'filter', value: filter?.['accountCode']}; }
function paramAccountcodeExport(record, value, filter, columns=fields){ return {field:'accountCode', mode:'export', included: columns.includes('accountCode')}; }
function getDebit(record, value, filter, columns=fields){ return record?.['debit']; }
function hasDebit(record, value, filter, columns=fields){ return record?.['debit'] !== undefined && record?.['debit'] !== null && record?.['debit'] !== ''; }
function withDebit(record, value, filter, columns=fields){ return {...record, ['debit']: value}; }
function clearDebit(record, value, filter, columns=fields){ const copy={...record}; delete copy['debit']; return copy; }
function copyDebit(record, value, filter, columns=fields){ return {name:'debit', value: record?.['debit']}; }
function paramDebitInput(record, value, filter, columns=fields){ return {field:'debit', mode:'input', value: record?.['debit']}; }
function paramDebitFilter(record, value, filter, columns=fields){ return {field:'debit', mode:'filter', value: filter?.['debit']}; }
function paramDebitExport(record, value, filter, columns=fields){ return {field:'debit', mode:'export', included: columns.includes('debit')}; }
function getCredit(record, value, filter, columns=fields){ return record?.['credit']; }
function hasCredit(record, value, filter, columns=fields){ return record?.['credit'] !== undefined && record?.['credit'] !== null && record?.['credit'] !== ''; }
function withCredit(record, value, filter, columns=fields){ return {...record, ['credit']: value}; }
function clearCredit(record, value, filter, columns=fields){ const copy={...record}; delete copy['credit']; return copy; }
function copyCredit(record, value, filter, columns=fields){ return {name:'credit', value: record?.['credit']}; }
function paramCreditInput(record, value, filter, columns=fields){ return {field:'credit', mode:'input', value: record?.['credit']}; }
function paramCreditFilter(record, value, filter, columns=fields){ return {field:'credit', mode:'filter', value: filter?.['credit']}; }
function paramCreditExport(record, value, filter, columns=fields){ return {field:'credit', mode:'export', included: columns.includes('credit')}; }
function getDescription(record, value, filter, columns=fields){ return record?.['description']; }
function hasDescription(record, value, filter, columns=fields){ return record?.['description'] !== undefined && record?.['description'] !== null && record?.['description'] !== ''; }
function withDescription(record, value, filter, columns=fields){ return {...record, ['description']: value}; }
function clearDescription(record, value, filter, columns=fields){ const copy={...record}; delete copy['description']; return copy; }
function copyDescription(record, value, filter, columns=fields){ return {name:'description', value: record?.['description']}; }
function paramDescriptionInput(record, value, filter, columns=fields){ return {field:'description', mode:'input', value: record?.['description']}; }
function paramDescriptionFilter(record, value, filter, columns=fields){ return {field:'description', mode:'filter', value: filter?.['description']}; }
function paramDescriptionExport(record, value, filter, columns=fields){ return {field:'description', mode:'export', included: columns.includes('description')}; }
function getPostedat(record, value, filter, columns=fields){ return record?.['postedAt']; }
function hasPostedat(record, value, filter, columns=fields){ return record?.['postedAt'] !== undefined && record?.['postedAt'] !== null && record?.['postedAt'] !== ''; }
function withPostedat(record, value, filter, columns=fields){ return {...record, ['postedAt']: value}; }
function clearPostedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['postedAt']; return copy; }
function copyPostedat(record, value, filter, columns=fields){ return {name:'postedAt', value: record?.['postedAt']}; }
function paramPostedatInput(record, value, filter, columns=fields){ return {field:'postedAt', mode:'input', value: record?.['postedAt']}; }
function paramPostedatFilter(record, value, filter, columns=fields){ return {field:'postedAt', mode:'filter', value: filter?.['postedAt']}; }
function paramPostedatExport(record, value, filter, columns=fields){ return {field:'postedAt', mode:'export', included: columns.includes('postedAt')}; }
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
