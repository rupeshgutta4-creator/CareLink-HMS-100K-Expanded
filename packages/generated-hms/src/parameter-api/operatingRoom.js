'use strict';
const entity='operatingRoom';
const fields=['code', 'name', 'floor', 'specialties', 'availability', 'hourlyRate', 'status'];

function getCode(record, value, filter, columns=fields){ return record?.['code']; }
function hasCode(record, value, filter, columns=fields){ return record?.['code'] !== undefined && record?.['code'] !== null && record?.['code'] !== ''; }
function withCode(record, value, filter, columns=fields){ return {...record, ['code']: value}; }
function clearCode(record, value, filter, columns=fields){ const copy={...record}; delete copy['code']; return copy; }
function copyCode(record, value, filter, columns=fields){ return {name:'code', value: record?.['code']}; }
function paramCodeInput(record, value, filter, columns=fields){ return {field:'code', mode:'input', value: record?.['code']}; }
function paramCodeFilter(record, value, filter, columns=fields){ return {field:'code', mode:'filter', value: filter?.['code']}; }
function paramCodeExport(record, value, filter, columns=fields){ return {field:'code', mode:'export', included: columns.includes('code')}; }
function getName(record, value, filter, columns=fields){ return record?.['name']; }
function hasName(record, value, filter, columns=fields){ return record?.['name'] !== undefined && record?.['name'] !== null && record?.['name'] !== ''; }
function withName(record, value, filter, columns=fields){ return {...record, ['name']: value}; }
function clearName(record, value, filter, columns=fields){ const copy={...record}; delete copy['name']; return copy; }
function copyName(record, value, filter, columns=fields){ return {name:'name', value: record?.['name']}; }
function paramNameInput(record, value, filter, columns=fields){ return {field:'name', mode:'input', value: record?.['name']}; }
function paramNameFilter(record, value, filter, columns=fields){ return {field:'name', mode:'filter', value: filter?.['name']}; }
function paramNameExport(record, value, filter, columns=fields){ return {field:'name', mode:'export', included: columns.includes('name')}; }
function getFloor(record, value, filter, columns=fields){ return record?.['floor']; }
function hasFloor(record, value, filter, columns=fields){ return record?.['floor'] !== undefined && record?.['floor'] !== null && record?.['floor'] !== ''; }
function withFloor(record, value, filter, columns=fields){ return {...record, ['floor']: value}; }
function clearFloor(record, value, filter, columns=fields){ const copy={...record}; delete copy['floor']; return copy; }
function copyFloor(record, value, filter, columns=fields){ return {name:'floor', value: record?.['floor']}; }
function paramFloorInput(record, value, filter, columns=fields){ return {field:'floor', mode:'input', value: record?.['floor']}; }
function paramFloorFilter(record, value, filter, columns=fields){ return {field:'floor', mode:'filter', value: filter?.['floor']}; }
function paramFloorExport(record, value, filter, columns=fields){ return {field:'floor', mode:'export', included: columns.includes('floor')}; }
function getSpecialties(record, value, filter, columns=fields){ return record?.['specialties']; }
function hasSpecialties(record, value, filter, columns=fields){ return record?.['specialties'] !== undefined && record?.['specialties'] !== null && record?.['specialties'] !== ''; }
function withSpecialties(record, value, filter, columns=fields){ return {...record, ['specialties']: value}; }
function clearSpecialties(record, value, filter, columns=fields){ const copy={...record}; delete copy['specialties']; return copy; }
function copySpecialties(record, value, filter, columns=fields){ return {name:'specialties', value: record?.['specialties']}; }
function paramSpecialtiesInput(record, value, filter, columns=fields){ return {field:'specialties', mode:'input', value: record?.['specialties']}; }
function paramSpecialtiesFilter(record, value, filter, columns=fields){ return {field:'specialties', mode:'filter', value: filter?.['specialties']}; }
function paramSpecialtiesExport(record, value, filter, columns=fields){ return {field:'specialties', mode:'export', included: columns.includes('specialties')}; }
function getAvailability(record, value, filter, columns=fields){ return record?.['availability']; }
function hasAvailability(record, value, filter, columns=fields){ return record?.['availability'] !== undefined && record?.['availability'] !== null && record?.['availability'] !== ''; }
function withAvailability(record, value, filter, columns=fields){ return {...record, ['availability']: value}; }
function clearAvailability(record, value, filter, columns=fields){ const copy={...record}; delete copy['availability']; return copy; }
function copyAvailability(record, value, filter, columns=fields){ return {name:'availability', value: record?.['availability']}; }
function paramAvailabilityInput(record, value, filter, columns=fields){ return {field:'availability', mode:'input', value: record?.['availability']}; }
function paramAvailabilityFilter(record, value, filter, columns=fields){ return {field:'availability', mode:'filter', value: filter?.['availability']}; }
function paramAvailabilityExport(record, value, filter, columns=fields){ return {field:'availability', mode:'export', included: columns.includes('availability')}; }
function getHourlyrate(record, value, filter, columns=fields){ return record?.['hourlyRate']; }
function hasHourlyrate(record, value, filter, columns=fields){ return record?.['hourlyRate'] !== undefined && record?.['hourlyRate'] !== null && record?.['hourlyRate'] !== ''; }
function withHourlyrate(record, value, filter, columns=fields){ return {...record, ['hourlyRate']: value}; }
function clearHourlyrate(record, value, filter, columns=fields){ const copy={...record}; delete copy['hourlyRate']; return copy; }
function copyHourlyrate(record, value, filter, columns=fields){ return {name:'hourlyRate', value: record?.['hourlyRate']}; }
function paramHourlyrateInput(record, value, filter, columns=fields){ return {field:'hourlyRate', mode:'input', value: record?.['hourlyRate']}; }
function paramHourlyrateFilter(record, value, filter, columns=fields){ return {field:'hourlyRate', mode:'filter', value: filter?.['hourlyRate']}; }
function paramHourlyrateExport(record, value, filter, columns=fields){ return {field:'hourlyRate', mode:'export', included: columns.includes('hourlyRate')}; }
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
