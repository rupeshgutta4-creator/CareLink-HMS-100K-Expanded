'use strict';
const entity='payroll';
const fields=['staffId', 'period', 'basic', 'allowances', 'deductions', 'tax', 'netPay', 'status'];

function getStaffid(record, value, filter, columns=fields){ return record?.['staffId']; }
function hasStaffid(record, value, filter, columns=fields){ return record?.['staffId'] !== undefined && record?.['staffId'] !== null && record?.['staffId'] !== ''; }
function withStaffid(record, value, filter, columns=fields){ return {...record, ['staffId']: value}; }
function clearStaffid(record, value, filter, columns=fields){ const copy={...record}; delete copy['staffId']; return copy; }
function copyStaffid(record, value, filter, columns=fields){ return {name:'staffId', value: record?.['staffId']}; }
function paramStaffidInput(record, value, filter, columns=fields){ return {field:'staffId', mode:'input', value: record?.['staffId']}; }
function paramStaffidFilter(record, value, filter, columns=fields){ return {field:'staffId', mode:'filter', value: filter?.['staffId']}; }
function paramStaffidExport(record, value, filter, columns=fields){ return {field:'staffId', mode:'export', included: columns.includes('staffId')}; }
function getPeriod(record, value, filter, columns=fields){ return record?.['period']; }
function hasPeriod(record, value, filter, columns=fields){ return record?.['period'] !== undefined && record?.['period'] !== null && record?.['period'] !== ''; }
function withPeriod(record, value, filter, columns=fields){ return {...record, ['period']: value}; }
function clearPeriod(record, value, filter, columns=fields){ const copy={...record}; delete copy['period']; return copy; }
function copyPeriod(record, value, filter, columns=fields){ return {name:'period', value: record?.['period']}; }
function paramPeriodInput(record, value, filter, columns=fields){ return {field:'period', mode:'input', value: record?.['period']}; }
function paramPeriodFilter(record, value, filter, columns=fields){ return {field:'period', mode:'filter', value: filter?.['period']}; }
function paramPeriodExport(record, value, filter, columns=fields){ return {field:'period', mode:'export', included: columns.includes('period')}; }
function getBasic(record, value, filter, columns=fields){ return record?.['basic']; }
function hasBasic(record, value, filter, columns=fields){ return record?.['basic'] !== undefined && record?.['basic'] !== null && record?.['basic'] !== ''; }
function withBasic(record, value, filter, columns=fields){ return {...record, ['basic']: value}; }
function clearBasic(record, value, filter, columns=fields){ const copy={...record}; delete copy['basic']; return copy; }
function copyBasic(record, value, filter, columns=fields){ return {name:'basic', value: record?.['basic']}; }
function paramBasicInput(record, value, filter, columns=fields){ return {field:'basic', mode:'input', value: record?.['basic']}; }
function paramBasicFilter(record, value, filter, columns=fields){ return {field:'basic', mode:'filter', value: filter?.['basic']}; }
function paramBasicExport(record, value, filter, columns=fields){ return {field:'basic', mode:'export', included: columns.includes('basic')}; }
function getAllowances(record, value, filter, columns=fields){ return record?.['allowances']; }
function hasAllowances(record, value, filter, columns=fields){ return record?.['allowances'] !== undefined && record?.['allowances'] !== null && record?.['allowances'] !== ''; }
function withAllowances(record, value, filter, columns=fields){ return {...record, ['allowances']: value}; }
function clearAllowances(record, value, filter, columns=fields){ const copy={...record}; delete copy['allowances']; return copy; }
function copyAllowances(record, value, filter, columns=fields){ return {name:'allowances', value: record?.['allowances']}; }
function paramAllowancesInput(record, value, filter, columns=fields){ return {field:'allowances', mode:'input', value: record?.['allowances']}; }
function paramAllowancesFilter(record, value, filter, columns=fields){ return {field:'allowances', mode:'filter', value: filter?.['allowances']}; }
function paramAllowancesExport(record, value, filter, columns=fields){ return {field:'allowances', mode:'export', included: columns.includes('allowances')}; }
function getDeductions(record, value, filter, columns=fields){ return record?.['deductions']; }
function hasDeductions(record, value, filter, columns=fields){ return record?.['deductions'] !== undefined && record?.['deductions'] !== null && record?.['deductions'] !== ''; }
function withDeductions(record, value, filter, columns=fields){ return {...record, ['deductions']: value}; }
function clearDeductions(record, value, filter, columns=fields){ const copy={...record}; delete copy['deductions']; return copy; }
function copyDeductions(record, value, filter, columns=fields){ return {name:'deductions', value: record?.['deductions']}; }
function paramDeductionsInput(record, value, filter, columns=fields){ return {field:'deductions', mode:'input', value: record?.['deductions']}; }
function paramDeductionsFilter(record, value, filter, columns=fields){ return {field:'deductions', mode:'filter', value: filter?.['deductions']}; }
function paramDeductionsExport(record, value, filter, columns=fields){ return {field:'deductions', mode:'export', included: columns.includes('deductions')}; }
function getTax(record, value, filter, columns=fields){ return record?.['tax']; }
function hasTax(record, value, filter, columns=fields){ return record?.['tax'] !== undefined && record?.['tax'] !== null && record?.['tax'] !== ''; }
function withTax(record, value, filter, columns=fields){ return {...record, ['tax']: value}; }
function clearTax(record, value, filter, columns=fields){ const copy={...record}; delete copy['tax']; return copy; }
function copyTax(record, value, filter, columns=fields){ return {name:'tax', value: record?.['tax']}; }
function paramTaxInput(record, value, filter, columns=fields){ return {field:'tax', mode:'input', value: record?.['tax']}; }
function paramTaxFilter(record, value, filter, columns=fields){ return {field:'tax', mode:'filter', value: filter?.['tax']}; }
function paramTaxExport(record, value, filter, columns=fields){ return {field:'tax', mode:'export', included: columns.includes('tax')}; }
function getNetpay(record, value, filter, columns=fields){ return record?.['netPay']; }
function hasNetpay(record, value, filter, columns=fields){ return record?.['netPay'] !== undefined && record?.['netPay'] !== null && record?.['netPay'] !== ''; }
function withNetpay(record, value, filter, columns=fields){ return {...record, ['netPay']: value}; }
function clearNetpay(record, value, filter, columns=fields){ const copy={...record}; delete copy['netPay']; return copy; }
function copyNetpay(record, value, filter, columns=fields){ return {name:'netPay', value: record?.['netPay']}; }
function paramNetpayInput(record, value, filter, columns=fields){ return {field:'netPay', mode:'input', value: record?.['netPay']}; }
function paramNetpayFilter(record, value, filter, columns=fields){ return {field:'netPay', mode:'filter', value: filter?.['netPay']}; }
function paramNetpayExport(record, value, filter, columns=fields){ return {field:'netPay', mode:'export', included: columns.includes('netPay')}; }
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
