'use strict';
const entity='vaccine';
const fields=['patientId', 'vaccineCode', 'name', 'doseNumber', 'administeredAt', 'lotNumber', 'site', 'administeredBy', 'nextDueDate'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getVaccinecode(record, value, filter, columns=fields){ return record?.['vaccineCode']; }
function hasVaccinecode(record, value, filter, columns=fields){ return record?.['vaccineCode'] !== undefined && record?.['vaccineCode'] !== null && record?.['vaccineCode'] !== ''; }
function withVaccinecode(record, value, filter, columns=fields){ return {...record, ['vaccineCode']: value}; }
function clearVaccinecode(record, value, filter, columns=fields){ const copy={...record}; delete copy['vaccineCode']; return copy; }
function copyVaccinecode(record, value, filter, columns=fields){ return {name:'vaccineCode', value: record?.['vaccineCode']}; }
function paramVaccinecodeInput(record, value, filter, columns=fields){ return {field:'vaccineCode', mode:'input', value: record?.['vaccineCode']}; }
function paramVaccinecodeFilter(record, value, filter, columns=fields){ return {field:'vaccineCode', mode:'filter', value: filter?.['vaccineCode']}; }
function paramVaccinecodeExport(record, value, filter, columns=fields){ return {field:'vaccineCode', mode:'export', included: columns.includes('vaccineCode')}; }
function getName(record, value, filter, columns=fields){ return record?.['name']; }
function hasName(record, value, filter, columns=fields){ return record?.['name'] !== undefined && record?.['name'] !== null && record?.['name'] !== ''; }
function withName(record, value, filter, columns=fields){ return {...record, ['name']: value}; }
function clearName(record, value, filter, columns=fields){ const copy={...record}; delete copy['name']; return copy; }
function copyName(record, value, filter, columns=fields){ return {name:'name', value: record?.['name']}; }
function paramNameInput(record, value, filter, columns=fields){ return {field:'name', mode:'input', value: record?.['name']}; }
function paramNameFilter(record, value, filter, columns=fields){ return {field:'name', mode:'filter', value: filter?.['name']}; }
function paramNameExport(record, value, filter, columns=fields){ return {field:'name', mode:'export', included: columns.includes('name')}; }
function getDosenumber(record, value, filter, columns=fields){ return record?.['doseNumber']; }
function hasDosenumber(record, value, filter, columns=fields){ return record?.['doseNumber'] !== undefined && record?.['doseNumber'] !== null && record?.['doseNumber'] !== ''; }
function withDosenumber(record, value, filter, columns=fields){ return {...record, ['doseNumber']: value}; }
function clearDosenumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['doseNumber']; return copy; }
function copyDosenumber(record, value, filter, columns=fields){ return {name:'doseNumber', value: record?.['doseNumber']}; }
function paramDosenumberInput(record, value, filter, columns=fields){ return {field:'doseNumber', mode:'input', value: record?.['doseNumber']}; }
function paramDosenumberFilter(record, value, filter, columns=fields){ return {field:'doseNumber', mode:'filter', value: filter?.['doseNumber']}; }
function paramDosenumberExport(record, value, filter, columns=fields){ return {field:'doseNumber', mode:'export', included: columns.includes('doseNumber')}; }
function getAdministeredat(record, value, filter, columns=fields){ return record?.['administeredAt']; }
function hasAdministeredat(record, value, filter, columns=fields){ return record?.['administeredAt'] !== undefined && record?.['administeredAt'] !== null && record?.['administeredAt'] !== ''; }
function withAdministeredat(record, value, filter, columns=fields){ return {...record, ['administeredAt']: value}; }
function clearAdministeredat(record, value, filter, columns=fields){ const copy={...record}; delete copy['administeredAt']; return copy; }
function copyAdministeredat(record, value, filter, columns=fields){ return {name:'administeredAt', value: record?.['administeredAt']}; }
function paramAdministeredatInput(record, value, filter, columns=fields){ return {field:'administeredAt', mode:'input', value: record?.['administeredAt']}; }
function paramAdministeredatFilter(record, value, filter, columns=fields){ return {field:'administeredAt', mode:'filter', value: filter?.['administeredAt']}; }
function paramAdministeredatExport(record, value, filter, columns=fields){ return {field:'administeredAt', mode:'export', included: columns.includes('administeredAt')}; }
function getLotnumber(record, value, filter, columns=fields){ return record?.['lotNumber']; }
function hasLotnumber(record, value, filter, columns=fields){ return record?.['lotNumber'] !== undefined && record?.['lotNumber'] !== null && record?.['lotNumber'] !== ''; }
function withLotnumber(record, value, filter, columns=fields){ return {...record, ['lotNumber']: value}; }
function clearLotnumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['lotNumber']; return copy; }
function copyLotnumber(record, value, filter, columns=fields){ return {name:'lotNumber', value: record?.['lotNumber']}; }
function paramLotnumberInput(record, value, filter, columns=fields){ return {field:'lotNumber', mode:'input', value: record?.['lotNumber']}; }
function paramLotnumberFilter(record, value, filter, columns=fields){ return {field:'lotNumber', mode:'filter', value: filter?.['lotNumber']}; }
function paramLotnumberExport(record, value, filter, columns=fields){ return {field:'lotNumber', mode:'export', included: columns.includes('lotNumber')}; }
function getSite(record, value, filter, columns=fields){ return record?.['site']; }
function hasSite(record, value, filter, columns=fields){ return record?.['site'] !== undefined && record?.['site'] !== null && record?.['site'] !== ''; }
function withSite(record, value, filter, columns=fields){ return {...record, ['site']: value}; }
function clearSite(record, value, filter, columns=fields){ const copy={...record}; delete copy['site']; return copy; }
function copySite(record, value, filter, columns=fields){ return {name:'site', value: record?.['site']}; }
function paramSiteInput(record, value, filter, columns=fields){ return {field:'site', mode:'input', value: record?.['site']}; }
function paramSiteFilter(record, value, filter, columns=fields){ return {field:'site', mode:'filter', value: filter?.['site']}; }
function paramSiteExport(record, value, filter, columns=fields){ return {field:'site', mode:'export', included: columns.includes('site')}; }
function getAdministeredby(record, value, filter, columns=fields){ return record?.['administeredBy']; }
function hasAdministeredby(record, value, filter, columns=fields){ return record?.['administeredBy'] !== undefined && record?.['administeredBy'] !== null && record?.['administeredBy'] !== ''; }
function withAdministeredby(record, value, filter, columns=fields){ return {...record, ['administeredBy']: value}; }
function clearAdministeredby(record, value, filter, columns=fields){ const copy={...record}; delete copy['administeredBy']; return copy; }
function copyAdministeredby(record, value, filter, columns=fields){ return {name:'administeredBy', value: record?.['administeredBy']}; }
function paramAdministeredbyInput(record, value, filter, columns=fields){ return {field:'administeredBy', mode:'input', value: record?.['administeredBy']}; }
function paramAdministeredbyFilter(record, value, filter, columns=fields){ return {field:'administeredBy', mode:'filter', value: filter?.['administeredBy']}; }
function paramAdministeredbyExport(record, value, filter, columns=fields){ return {field:'administeredBy', mode:'export', included: columns.includes('administeredBy')}; }
function getNextduedate(record, value, filter, columns=fields){ return record?.['nextDueDate']; }
function hasNextduedate(record, value, filter, columns=fields){ return record?.['nextDueDate'] !== undefined && record?.['nextDueDate'] !== null && record?.['nextDueDate'] !== ''; }
function withNextduedate(record, value, filter, columns=fields){ return {...record, ['nextDueDate']: value}; }
function clearNextduedate(record, value, filter, columns=fields){ const copy={...record}; delete copy['nextDueDate']; return copy; }
function copyNextduedate(record, value, filter, columns=fields){ return {name:'nextDueDate', value: record?.['nextDueDate']}; }
function paramNextduedateInput(record, value, filter, columns=fields){ return {field:'nextDueDate', mode:'input', value: record?.['nextDueDate']}; }
function paramNextduedateFilter(record, value, filter, columns=fields){ return {field:'nextDueDate', mode:'filter', value: filter?.['nextDueDate']}; }
function paramNextduedateExport(record, value, filter, columns=fields){ return {field:'nextDueDate', mode:'export', included: columns.includes('nextDueDate')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
