'use strict';
const entity='qualityResult';
const fields=['indicatorId', 'period', 'numerator', 'denominator', 'rate', 'calculatedAt'];

function getIndicatorid(record, value, filter, columns=fields){ return record?.['indicatorId']; }
function hasIndicatorid(record, value, filter, columns=fields){ return record?.['indicatorId'] !== undefined && record?.['indicatorId'] !== null && record?.['indicatorId'] !== ''; }
function withIndicatorid(record, value, filter, columns=fields){ return {...record, ['indicatorId']: value}; }
function clearIndicatorid(record, value, filter, columns=fields){ const copy={...record}; delete copy['indicatorId']; return copy; }
function copyIndicatorid(record, value, filter, columns=fields){ return {name:'indicatorId', value: record?.['indicatorId']}; }
function paramIndicatoridInput(record, value, filter, columns=fields){ return {field:'indicatorId', mode:'input', value: record?.['indicatorId']}; }
function paramIndicatoridFilter(record, value, filter, columns=fields){ return {field:'indicatorId', mode:'filter', value: filter?.['indicatorId']}; }
function paramIndicatoridExport(record, value, filter, columns=fields){ return {field:'indicatorId', mode:'export', included: columns.includes('indicatorId')}; }
function getPeriod(record, value, filter, columns=fields){ return record?.['period']; }
function hasPeriod(record, value, filter, columns=fields){ return record?.['period'] !== undefined && record?.['period'] !== null && record?.['period'] !== ''; }
function withPeriod(record, value, filter, columns=fields){ return {...record, ['period']: value}; }
function clearPeriod(record, value, filter, columns=fields){ const copy={...record}; delete copy['period']; return copy; }
function copyPeriod(record, value, filter, columns=fields){ return {name:'period', value: record?.['period']}; }
function paramPeriodInput(record, value, filter, columns=fields){ return {field:'period', mode:'input', value: record?.['period']}; }
function paramPeriodFilter(record, value, filter, columns=fields){ return {field:'period', mode:'filter', value: filter?.['period']}; }
function paramPeriodExport(record, value, filter, columns=fields){ return {field:'period', mode:'export', included: columns.includes('period')}; }
function getNumerator(record, value, filter, columns=fields){ return record?.['numerator']; }
function hasNumerator(record, value, filter, columns=fields){ return record?.['numerator'] !== undefined && record?.['numerator'] !== null && record?.['numerator'] !== ''; }
function withNumerator(record, value, filter, columns=fields){ return {...record, ['numerator']: value}; }
function clearNumerator(record, value, filter, columns=fields){ const copy={...record}; delete copy['numerator']; return copy; }
function copyNumerator(record, value, filter, columns=fields){ return {name:'numerator', value: record?.['numerator']}; }
function paramNumeratorInput(record, value, filter, columns=fields){ return {field:'numerator', mode:'input', value: record?.['numerator']}; }
function paramNumeratorFilter(record, value, filter, columns=fields){ return {field:'numerator', mode:'filter', value: filter?.['numerator']}; }
function paramNumeratorExport(record, value, filter, columns=fields){ return {field:'numerator', mode:'export', included: columns.includes('numerator')}; }
function getDenominator(record, value, filter, columns=fields){ return record?.['denominator']; }
function hasDenominator(record, value, filter, columns=fields){ return record?.['denominator'] !== undefined && record?.['denominator'] !== null && record?.['denominator'] !== ''; }
function withDenominator(record, value, filter, columns=fields){ return {...record, ['denominator']: value}; }
function clearDenominator(record, value, filter, columns=fields){ const copy={...record}; delete copy['denominator']; return copy; }
function copyDenominator(record, value, filter, columns=fields){ return {name:'denominator', value: record?.['denominator']}; }
function paramDenominatorInput(record, value, filter, columns=fields){ return {field:'denominator', mode:'input', value: record?.['denominator']}; }
function paramDenominatorFilter(record, value, filter, columns=fields){ return {field:'denominator', mode:'filter', value: filter?.['denominator']}; }
function paramDenominatorExport(record, value, filter, columns=fields){ return {field:'denominator', mode:'export', included: columns.includes('denominator')}; }
function getRate(record, value, filter, columns=fields){ return record?.['rate']; }
function hasRate(record, value, filter, columns=fields){ return record?.['rate'] !== undefined && record?.['rate'] !== null && record?.['rate'] !== ''; }
function withRate(record, value, filter, columns=fields){ return {...record, ['rate']: value}; }
function clearRate(record, value, filter, columns=fields){ const copy={...record}; delete copy['rate']; return copy; }
function copyRate(record, value, filter, columns=fields){ return {name:'rate', value: record?.['rate']}; }
function paramRateInput(record, value, filter, columns=fields){ return {field:'rate', mode:'input', value: record?.['rate']}; }
function paramRateFilter(record, value, filter, columns=fields){ return {field:'rate', mode:'filter', value: filter?.['rate']}; }
function paramRateExport(record, value, filter, columns=fields){ return {field:'rate', mode:'export', included: columns.includes('rate')}; }
function getCalculatedat(record, value, filter, columns=fields){ return record?.['calculatedAt']; }
function hasCalculatedat(record, value, filter, columns=fields){ return record?.['calculatedAt'] !== undefined && record?.['calculatedAt'] !== null && record?.['calculatedAt'] !== ''; }
function withCalculatedat(record, value, filter, columns=fields){ return {...record, ['calculatedAt']: value}; }
function clearCalculatedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['calculatedAt']; return copy; }
function copyCalculatedat(record, value, filter, columns=fields){ return {name:'calculatedAt', value: record?.['calculatedAt']}; }
function paramCalculatedatInput(record, value, filter, columns=fields){ return {field:'calculatedAt', mode:'input', value: record?.['calculatedAt']}; }
function paramCalculatedatFilter(record, value, filter, columns=fields){ return {field:'calculatedAt', mode:'filter', value: filter?.['calculatedAt']}; }
function paramCalculatedatExport(record, value, filter, columns=fields){ return {field:'calculatedAt', mode:'export', included: columns.includes('calculatedAt')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
