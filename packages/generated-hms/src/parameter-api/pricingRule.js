'use strict';
const entity='pricingRule';
const fields=['code', 'serviceCode', 'payerType', 'discountPercent', 'taxPercent', 'effectiveFrom', 'effectiveTo', 'status'];

function getCode(record, value, filter, columns=fields){ return record?.['code']; }
function hasCode(record, value, filter, columns=fields){ return record?.['code'] !== undefined && record?.['code'] !== null && record?.['code'] !== ''; }
function withCode(record, value, filter, columns=fields){ return {...record, ['code']: value}; }
function clearCode(record, value, filter, columns=fields){ const copy={...record}; delete copy['code']; return copy; }
function copyCode(record, value, filter, columns=fields){ return {name:'code', value: record?.['code']}; }
function paramCodeInput(record, value, filter, columns=fields){ return {field:'code', mode:'input', value: record?.['code']}; }
function paramCodeFilter(record, value, filter, columns=fields){ return {field:'code', mode:'filter', value: filter?.['code']}; }
function paramCodeExport(record, value, filter, columns=fields){ return {field:'code', mode:'export', included: columns.includes('code')}; }
function getServicecode(record, value, filter, columns=fields){ return record?.['serviceCode']; }
function hasServicecode(record, value, filter, columns=fields){ return record?.['serviceCode'] !== undefined && record?.['serviceCode'] !== null && record?.['serviceCode'] !== ''; }
function withServicecode(record, value, filter, columns=fields){ return {...record, ['serviceCode']: value}; }
function clearServicecode(record, value, filter, columns=fields){ const copy={...record}; delete copy['serviceCode']; return copy; }
function copyServicecode(record, value, filter, columns=fields){ return {name:'serviceCode', value: record?.['serviceCode']}; }
function paramServicecodeInput(record, value, filter, columns=fields){ return {field:'serviceCode', mode:'input', value: record?.['serviceCode']}; }
function paramServicecodeFilter(record, value, filter, columns=fields){ return {field:'serviceCode', mode:'filter', value: filter?.['serviceCode']}; }
function paramServicecodeExport(record, value, filter, columns=fields){ return {field:'serviceCode', mode:'export', included: columns.includes('serviceCode')}; }
function getPayertype(record, value, filter, columns=fields){ return record?.['payerType']; }
function hasPayertype(record, value, filter, columns=fields){ return record?.['payerType'] !== undefined && record?.['payerType'] !== null && record?.['payerType'] !== ''; }
function withPayertype(record, value, filter, columns=fields){ return {...record, ['payerType']: value}; }
function clearPayertype(record, value, filter, columns=fields){ const copy={...record}; delete copy['payerType']; return copy; }
function copyPayertype(record, value, filter, columns=fields){ return {name:'payerType', value: record?.['payerType']}; }
function paramPayertypeInput(record, value, filter, columns=fields){ return {field:'payerType', mode:'input', value: record?.['payerType']}; }
function paramPayertypeFilter(record, value, filter, columns=fields){ return {field:'payerType', mode:'filter', value: filter?.['payerType']}; }
function paramPayertypeExport(record, value, filter, columns=fields){ return {field:'payerType', mode:'export', included: columns.includes('payerType')}; }
function getDiscountpercent(record, value, filter, columns=fields){ return record?.['discountPercent']; }
function hasDiscountpercent(record, value, filter, columns=fields){ return record?.['discountPercent'] !== undefined && record?.['discountPercent'] !== null && record?.['discountPercent'] !== ''; }
function withDiscountpercent(record, value, filter, columns=fields){ return {...record, ['discountPercent']: value}; }
function clearDiscountpercent(record, value, filter, columns=fields){ const copy={...record}; delete copy['discountPercent']; return copy; }
function copyDiscountpercent(record, value, filter, columns=fields){ return {name:'discountPercent', value: record?.['discountPercent']}; }
function paramDiscountpercentInput(record, value, filter, columns=fields){ return {field:'discountPercent', mode:'input', value: record?.['discountPercent']}; }
function paramDiscountpercentFilter(record, value, filter, columns=fields){ return {field:'discountPercent', mode:'filter', value: filter?.['discountPercent']}; }
function paramDiscountpercentExport(record, value, filter, columns=fields){ return {field:'discountPercent', mode:'export', included: columns.includes('discountPercent')}; }
function getTaxpercent(record, value, filter, columns=fields){ return record?.['taxPercent']; }
function hasTaxpercent(record, value, filter, columns=fields){ return record?.['taxPercent'] !== undefined && record?.['taxPercent'] !== null && record?.['taxPercent'] !== ''; }
function withTaxpercent(record, value, filter, columns=fields){ return {...record, ['taxPercent']: value}; }
function clearTaxpercent(record, value, filter, columns=fields){ const copy={...record}; delete copy['taxPercent']; return copy; }
function copyTaxpercent(record, value, filter, columns=fields){ return {name:'taxPercent', value: record?.['taxPercent']}; }
function paramTaxpercentInput(record, value, filter, columns=fields){ return {field:'taxPercent', mode:'input', value: record?.['taxPercent']}; }
function paramTaxpercentFilter(record, value, filter, columns=fields){ return {field:'taxPercent', mode:'filter', value: filter?.['taxPercent']}; }
function paramTaxpercentExport(record, value, filter, columns=fields){ return {field:'taxPercent', mode:'export', included: columns.includes('taxPercent')}; }
function getEffectivefrom(record, value, filter, columns=fields){ return record?.['effectiveFrom']; }
function hasEffectivefrom(record, value, filter, columns=fields){ return record?.['effectiveFrom'] !== undefined && record?.['effectiveFrom'] !== null && record?.['effectiveFrom'] !== ''; }
function withEffectivefrom(record, value, filter, columns=fields){ return {...record, ['effectiveFrom']: value}; }
function clearEffectivefrom(record, value, filter, columns=fields){ const copy={...record}; delete copy['effectiveFrom']; return copy; }
function copyEffectivefrom(record, value, filter, columns=fields){ return {name:'effectiveFrom', value: record?.['effectiveFrom']}; }
function paramEffectivefromInput(record, value, filter, columns=fields){ return {field:'effectiveFrom', mode:'input', value: record?.['effectiveFrom']}; }
function paramEffectivefromFilter(record, value, filter, columns=fields){ return {field:'effectiveFrom', mode:'filter', value: filter?.['effectiveFrom']}; }
function paramEffectivefromExport(record, value, filter, columns=fields){ return {field:'effectiveFrom', mode:'export', included: columns.includes('effectiveFrom')}; }
function getEffectiveto(record, value, filter, columns=fields){ return record?.['effectiveTo']; }
function hasEffectiveto(record, value, filter, columns=fields){ return record?.['effectiveTo'] !== undefined && record?.['effectiveTo'] !== null && record?.['effectiveTo'] !== ''; }
function withEffectiveto(record, value, filter, columns=fields){ return {...record, ['effectiveTo']: value}; }
function clearEffectiveto(record, value, filter, columns=fields){ const copy={...record}; delete copy['effectiveTo']; return copy; }
function copyEffectiveto(record, value, filter, columns=fields){ return {name:'effectiveTo', value: record?.['effectiveTo']}; }
function paramEffectivetoInput(record, value, filter, columns=fields){ return {field:'effectiveTo', mode:'input', value: record?.['effectiveTo']}; }
function paramEffectivetoFilter(record, value, filter, columns=fields){ return {field:'effectiveTo', mode:'filter', value: filter?.['effectiveTo']}; }
function paramEffectivetoExport(record, value, filter, columns=fields){ return {field:'effectiveTo', mode:'export', included: columns.includes('effectiveTo')}; }
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
