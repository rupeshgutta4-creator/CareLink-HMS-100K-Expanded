'use strict';
const entity='labResult';
const fields=['labOrderId', 'patientId', 'testCode', 'parameter', 'value', 'unit', 'referenceRange', 'flag', 'verifiedBy', 'verifiedAt', 'status'];

function getLaborderid(record, value, filter, columns=fields){ return record?.['labOrderId']; }
function hasLaborderid(record, value, filter, columns=fields){ return record?.['labOrderId'] !== undefined && record?.['labOrderId'] !== null && record?.['labOrderId'] !== ''; }
function withLaborderid(record, value, filter, columns=fields){ return {...record, ['labOrderId']: value}; }
function clearLaborderid(record, value, filter, columns=fields){ const copy={...record}; delete copy['labOrderId']; return copy; }
function copyLaborderid(record, value, filter, columns=fields){ return {name:'labOrderId', value: record?.['labOrderId']}; }
function paramLaborderidInput(record, value, filter, columns=fields){ return {field:'labOrderId', mode:'input', value: record?.['labOrderId']}; }
function paramLaborderidFilter(record, value, filter, columns=fields){ return {field:'labOrderId', mode:'filter', value: filter?.['labOrderId']}; }
function paramLaborderidExport(record, value, filter, columns=fields){ return {field:'labOrderId', mode:'export', included: columns.includes('labOrderId')}; }
function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getTestcode(record, value, filter, columns=fields){ return record?.['testCode']; }
function hasTestcode(record, value, filter, columns=fields){ return record?.['testCode'] !== undefined && record?.['testCode'] !== null && record?.['testCode'] !== ''; }
function withTestcode(record, value, filter, columns=fields){ return {...record, ['testCode']: value}; }
function clearTestcode(record, value, filter, columns=fields){ const copy={...record}; delete copy['testCode']; return copy; }
function copyTestcode(record, value, filter, columns=fields){ return {name:'testCode', value: record?.['testCode']}; }
function paramTestcodeInput(record, value, filter, columns=fields){ return {field:'testCode', mode:'input', value: record?.['testCode']}; }
function paramTestcodeFilter(record, value, filter, columns=fields){ return {field:'testCode', mode:'filter', value: filter?.['testCode']}; }
function paramTestcodeExport(record, value, filter, columns=fields){ return {field:'testCode', mode:'export', included: columns.includes('testCode')}; }
function getParameter(record, value, filter, columns=fields){ return record?.['parameter']; }
function hasParameter(record, value, filter, columns=fields){ return record?.['parameter'] !== undefined && record?.['parameter'] !== null && record?.['parameter'] !== ''; }
function withParameter(record, value, filter, columns=fields){ return {...record, ['parameter']: value}; }
function clearParameter(record, value, filter, columns=fields){ const copy={...record}; delete copy['parameter']; return copy; }
function copyParameter(record, value, filter, columns=fields){ return {name:'parameter', value: record?.['parameter']}; }
function paramParameterInput(record, value, filter, columns=fields){ return {field:'parameter', mode:'input', value: record?.['parameter']}; }
function paramParameterFilter(record, value, filter, columns=fields){ return {field:'parameter', mode:'filter', value: filter?.['parameter']}; }
function paramParameterExport(record, value, filter, columns=fields){ return {field:'parameter', mode:'export', included: columns.includes('parameter')}; }
function getValue(record, value, filter, columns=fields){ return record?.['value']; }
function hasValue(record, value, filter, columns=fields){ return record?.['value'] !== undefined && record?.['value'] !== null && record?.['value'] !== ''; }
function withValue(record, value, filter, columns=fields){ return {...record, ['value']: value}; }
function clearValue(record, value, filter, columns=fields){ const copy={...record}; delete copy['value']; return copy; }
function copyValue(record, value, filter, columns=fields){ return {name:'value', value: record?.['value']}; }
function paramValueInput(record, value, filter, columns=fields){ return {field:'value', mode:'input', value: record?.['value']}; }
function paramValueFilter(record, value, filter, columns=fields){ return {field:'value', mode:'filter', value: filter?.['value']}; }
function paramValueExport(record, value, filter, columns=fields){ return {field:'value', mode:'export', included: columns.includes('value')}; }
function getUnit(record, value, filter, columns=fields){ return record?.['unit']; }
function hasUnit(record, value, filter, columns=fields){ return record?.['unit'] !== undefined && record?.['unit'] !== null && record?.['unit'] !== ''; }
function withUnit(record, value, filter, columns=fields){ return {...record, ['unit']: value}; }
function clearUnit(record, value, filter, columns=fields){ const copy={...record}; delete copy['unit']; return copy; }
function copyUnit(record, value, filter, columns=fields){ return {name:'unit', value: record?.['unit']}; }
function paramUnitInput(record, value, filter, columns=fields){ return {field:'unit', mode:'input', value: record?.['unit']}; }
function paramUnitFilter(record, value, filter, columns=fields){ return {field:'unit', mode:'filter', value: filter?.['unit']}; }
function paramUnitExport(record, value, filter, columns=fields){ return {field:'unit', mode:'export', included: columns.includes('unit')}; }
function getReferencerange(record, value, filter, columns=fields){ return record?.['referenceRange']; }
function hasReferencerange(record, value, filter, columns=fields){ return record?.['referenceRange'] !== undefined && record?.['referenceRange'] !== null && record?.['referenceRange'] !== ''; }
function withReferencerange(record, value, filter, columns=fields){ return {...record, ['referenceRange']: value}; }
function clearReferencerange(record, value, filter, columns=fields){ const copy={...record}; delete copy['referenceRange']; return copy; }
function copyReferencerange(record, value, filter, columns=fields){ return {name:'referenceRange', value: record?.['referenceRange']}; }
function paramReferencerangeInput(record, value, filter, columns=fields){ return {field:'referenceRange', mode:'input', value: record?.['referenceRange']}; }
function paramReferencerangeFilter(record, value, filter, columns=fields){ return {field:'referenceRange', mode:'filter', value: filter?.['referenceRange']}; }
function paramReferencerangeExport(record, value, filter, columns=fields){ return {field:'referenceRange', mode:'export', included: columns.includes('referenceRange')}; }
function getFlag(record, value, filter, columns=fields){ return record?.['flag']; }
function hasFlag(record, value, filter, columns=fields){ return record?.['flag'] !== undefined && record?.['flag'] !== null && record?.['flag'] !== ''; }
function withFlag(record, value, filter, columns=fields){ return {...record, ['flag']: value}; }
function clearFlag(record, value, filter, columns=fields){ const copy={...record}; delete copy['flag']; return copy; }
function copyFlag(record, value, filter, columns=fields){ return {name:'flag', value: record?.['flag']}; }
function paramFlagInput(record, value, filter, columns=fields){ return {field:'flag', mode:'input', value: record?.['flag']}; }
function paramFlagFilter(record, value, filter, columns=fields){ return {field:'flag', mode:'filter', value: filter?.['flag']}; }
function paramFlagExport(record, value, filter, columns=fields){ return {field:'flag', mode:'export', included: columns.includes('flag')}; }
function getVerifiedby(record, value, filter, columns=fields){ return record?.['verifiedBy']; }
function hasVerifiedby(record, value, filter, columns=fields){ return record?.['verifiedBy'] !== undefined && record?.['verifiedBy'] !== null && record?.['verifiedBy'] !== ''; }
function withVerifiedby(record, value, filter, columns=fields){ return {...record, ['verifiedBy']: value}; }
function clearVerifiedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['verifiedBy']; return copy; }
function copyVerifiedby(record, value, filter, columns=fields){ return {name:'verifiedBy', value: record?.['verifiedBy']}; }
function paramVerifiedbyInput(record, value, filter, columns=fields){ return {field:'verifiedBy', mode:'input', value: record?.['verifiedBy']}; }
function paramVerifiedbyFilter(record, value, filter, columns=fields){ return {field:'verifiedBy', mode:'filter', value: filter?.['verifiedBy']}; }
function paramVerifiedbyExport(record, value, filter, columns=fields){ return {field:'verifiedBy', mode:'export', included: columns.includes('verifiedBy')}; }
function getVerifiedat(record, value, filter, columns=fields){ return record?.['verifiedAt']; }
function hasVerifiedat(record, value, filter, columns=fields){ return record?.['verifiedAt'] !== undefined && record?.['verifiedAt'] !== null && record?.['verifiedAt'] !== ''; }
function withVerifiedat(record, value, filter, columns=fields){ return {...record, ['verifiedAt']: value}; }
function clearVerifiedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['verifiedAt']; return copy; }
function copyVerifiedat(record, value, filter, columns=fields){ return {name:'verifiedAt', value: record?.['verifiedAt']}; }
function paramVerifiedatInput(record, value, filter, columns=fields){ return {field:'verifiedAt', mode:'input', value: record?.['verifiedAt']}; }
function paramVerifiedatFilter(record, value, filter, columns=fields){ return {field:'verifiedAt', mode:'filter', value: filter?.['verifiedAt']}; }
function paramVerifiedatExport(record, value, filter, columns=fields){ return {field:'verifiedAt', mode:'export', included: columns.includes('verifiedAt')}; }
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
