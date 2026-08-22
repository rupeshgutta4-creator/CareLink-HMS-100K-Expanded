'use strict';
const entity='pregnancyRecord';
const fields=['patientId', 'lmpDate', 'eddDate', 'gravida', 'para', 'riskLevel', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getLmpdate(record, value, filter, columns=fields){ return record?.['lmpDate']; }
function hasLmpdate(record, value, filter, columns=fields){ return record?.['lmpDate'] !== undefined && record?.['lmpDate'] !== null && record?.['lmpDate'] !== ''; }
function withLmpdate(record, value, filter, columns=fields){ return {...record, ['lmpDate']: value}; }
function clearLmpdate(record, value, filter, columns=fields){ const copy={...record}; delete copy['lmpDate']; return copy; }
function copyLmpdate(record, value, filter, columns=fields){ return {name:'lmpDate', value: record?.['lmpDate']}; }
function paramLmpdateInput(record, value, filter, columns=fields){ return {field:'lmpDate', mode:'input', value: record?.['lmpDate']}; }
function paramLmpdateFilter(record, value, filter, columns=fields){ return {field:'lmpDate', mode:'filter', value: filter?.['lmpDate']}; }
function paramLmpdateExport(record, value, filter, columns=fields){ return {field:'lmpDate', mode:'export', included: columns.includes('lmpDate')}; }
function getEdddate(record, value, filter, columns=fields){ return record?.['eddDate']; }
function hasEdddate(record, value, filter, columns=fields){ return record?.['eddDate'] !== undefined && record?.['eddDate'] !== null && record?.['eddDate'] !== ''; }
function withEdddate(record, value, filter, columns=fields){ return {...record, ['eddDate']: value}; }
function clearEdddate(record, value, filter, columns=fields){ const copy={...record}; delete copy['eddDate']; return copy; }
function copyEdddate(record, value, filter, columns=fields){ return {name:'eddDate', value: record?.['eddDate']}; }
function paramEdddateInput(record, value, filter, columns=fields){ return {field:'eddDate', mode:'input', value: record?.['eddDate']}; }
function paramEdddateFilter(record, value, filter, columns=fields){ return {field:'eddDate', mode:'filter', value: filter?.['eddDate']}; }
function paramEdddateExport(record, value, filter, columns=fields){ return {field:'eddDate', mode:'export', included: columns.includes('eddDate')}; }
function getGravida(record, value, filter, columns=fields){ return record?.['gravida']; }
function hasGravida(record, value, filter, columns=fields){ return record?.['gravida'] !== undefined && record?.['gravida'] !== null && record?.['gravida'] !== ''; }
function withGravida(record, value, filter, columns=fields){ return {...record, ['gravida']: value}; }
function clearGravida(record, value, filter, columns=fields){ const copy={...record}; delete copy['gravida']; return copy; }
function copyGravida(record, value, filter, columns=fields){ return {name:'gravida', value: record?.['gravida']}; }
function paramGravidaInput(record, value, filter, columns=fields){ return {field:'gravida', mode:'input', value: record?.['gravida']}; }
function paramGravidaFilter(record, value, filter, columns=fields){ return {field:'gravida', mode:'filter', value: filter?.['gravida']}; }
function paramGravidaExport(record, value, filter, columns=fields){ return {field:'gravida', mode:'export', included: columns.includes('gravida')}; }
function getPara(record, value, filter, columns=fields){ return record?.['para']; }
function hasPara(record, value, filter, columns=fields){ return record?.['para'] !== undefined && record?.['para'] !== null && record?.['para'] !== ''; }
function withPara(record, value, filter, columns=fields){ return {...record, ['para']: value}; }
function clearPara(record, value, filter, columns=fields){ const copy={...record}; delete copy['para']; return copy; }
function copyPara(record, value, filter, columns=fields){ return {name:'para', value: record?.['para']}; }
function paramParaInput(record, value, filter, columns=fields){ return {field:'para', mode:'input', value: record?.['para']}; }
function paramParaFilter(record, value, filter, columns=fields){ return {field:'para', mode:'filter', value: filter?.['para']}; }
function paramParaExport(record, value, filter, columns=fields){ return {field:'para', mode:'export', included: columns.includes('para')}; }
function getRisklevel(record, value, filter, columns=fields){ return record?.['riskLevel']; }
function hasRisklevel(record, value, filter, columns=fields){ return record?.['riskLevel'] !== undefined && record?.['riskLevel'] !== null && record?.['riskLevel'] !== ''; }
function withRisklevel(record, value, filter, columns=fields){ return {...record, ['riskLevel']: value}; }
function clearRisklevel(record, value, filter, columns=fields){ const copy={...record}; delete copy['riskLevel']; return copy; }
function copyRisklevel(record, value, filter, columns=fields){ return {name:'riskLevel', value: record?.['riskLevel']}; }
function paramRisklevelInput(record, value, filter, columns=fields){ return {field:'riskLevel', mode:'input', value: record?.['riskLevel']}; }
function paramRisklevelFilter(record, value, filter, columns=fields){ return {field:'riskLevel', mode:'filter', value: filter?.['riskLevel']}; }
function paramRisklevelExport(record, value, filter, columns=fields){ return {field:'riskLevel', mode:'export', included: columns.includes('riskLevel')}; }
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
