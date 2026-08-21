'use strict';
const entity='allergy';
const fields=['patientId', 'substance', 'reaction', 'severity', 'onsetDate', 'verifiedBy', 'status'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getSubstance(record, value, filter, columns=fields){ return record?.['substance']; }
function hasSubstance(record, value, filter, columns=fields){ return record?.['substance'] !== undefined && record?.['substance'] !== null && record?.['substance'] !== ''; }
function withSubstance(record, value, filter, columns=fields){ return {...record, ['substance']: value}; }
function clearSubstance(record, value, filter, columns=fields){ const copy={...record}; delete copy['substance']; return copy; }
function copySubstance(record, value, filter, columns=fields){ return {name:'substance', value: record?.['substance']}; }
function paramSubstanceInput(record, value, filter, columns=fields){ return {field:'substance', mode:'input', value: record?.['substance']}; }
function paramSubstanceFilter(record, value, filter, columns=fields){ return {field:'substance', mode:'filter', value: filter?.['substance']}; }
function paramSubstanceExport(record, value, filter, columns=fields){ return {field:'substance', mode:'export', included: columns.includes('substance')}; }
function getReaction(record, value, filter, columns=fields){ return record?.['reaction']; }
function hasReaction(record, value, filter, columns=fields){ return record?.['reaction'] !== undefined && record?.['reaction'] !== null && record?.['reaction'] !== ''; }
function withReaction(record, value, filter, columns=fields){ return {...record, ['reaction']: value}; }
function clearReaction(record, value, filter, columns=fields){ const copy={...record}; delete copy['reaction']; return copy; }
function copyReaction(record, value, filter, columns=fields){ return {name:'reaction', value: record?.['reaction']}; }
function paramReactionInput(record, value, filter, columns=fields){ return {field:'reaction', mode:'input', value: record?.['reaction']}; }
function paramReactionFilter(record, value, filter, columns=fields){ return {field:'reaction', mode:'filter', value: filter?.['reaction']}; }
function paramReactionExport(record, value, filter, columns=fields){ return {field:'reaction', mode:'export', included: columns.includes('reaction')}; }
function getSeverity(record, value, filter, columns=fields){ return record?.['severity']; }
function hasSeverity(record, value, filter, columns=fields){ return record?.['severity'] !== undefined && record?.['severity'] !== null && record?.['severity'] !== ''; }
function withSeverity(record, value, filter, columns=fields){ return {...record, ['severity']: value}; }
function clearSeverity(record, value, filter, columns=fields){ const copy={...record}; delete copy['severity']; return copy; }
function copySeverity(record, value, filter, columns=fields){ return {name:'severity', value: record?.['severity']}; }
function paramSeverityInput(record, value, filter, columns=fields){ return {field:'severity', mode:'input', value: record?.['severity']}; }
function paramSeverityFilter(record, value, filter, columns=fields){ return {field:'severity', mode:'filter', value: filter?.['severity']}; }
function paramSeverityExport(record, value, filter, columns=fields){ return {field:'severity', mode:'export', included: columns.includes('severity')}; }
function getOnsetdate(record, value, filter, columns=fields){ return record?.['onsetDate']; }
function hasOnsetdate(record, value, filter, columns=fields){ return record?.['onsetDate'] !== undefined && record?.['onsetDate'] !== null && record?.['onsetDate'] !== ''; }
function withOnsetdate(record, value, filter, columns=fields){ return {...record, ['onsetDate']: value}; }
function clearOnsetdate(record, value, filter, columns=fields){ const copy={...record}; delete copy['onsetDate']; return copy; }
function copyOnsetdate(record, value, filter, columns=fields){ return {name:'onsetDate', value: record?.['onsetDate']}; }
function paramOnsetdateInput(record, value, filter, columns=fields){ return {field:'onsetDate', mode:'input', value: record?.['onsetDate']}; }
function paramOnsetdateFilter(record, value, filter, columns=fields){ return {field:'onsetDate', mode:'filter', value: filter?.['onsetDate']}; }
function paramOnsetdateExport(record, value, filter, columns=fields){ return {field:'onsetDate', mode:'export', included: columns.includes('onsetDate')}; }
function getVerifiedby(record, value, filter, columns=fields){ return record?.['verifiedBy']; }
function hasVerifiedby(record, value, filter, columns=fields){ return record?.['verifiedBy'] !== undefined && record?.['verifiedBy'] !== null && record?.['verifiedBy'] !== ''; }
function withVerifiedby(record, value, filter, columns=fields){ return {...record, ['verifiedBy']: value}; }
function clearVerifiedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['verifiedBy']; return copy; }
function copyVerifiedby(record, value, filter, columns=fields){ return {name:'verifiedBy', value: record?.['verifiedBy']}; }
function paramVerifiedbyInput(record, value, filter, columns=fields){ return {field:'verifiedBy', mode:'input', value: record?.['verifiedBy']}; }
function paramVerifiedbyFilter(record, value, filter, columns=fields){ return {field:'verifiedBy', mode:'filter', value: filter?.['verifiedBy']}; }
function paramVerifiedbyExport(record, value, filter, columns=fields){ return {field:'verifiedBy', mode:'export', included: columns.includes('verifiedBy')}; }
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
