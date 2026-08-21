'use strict';
const entity='supplier';
const fields=['code', 'name', 'contactPerson', 'phone', 'email', 'address', 'taxId', 'status'];

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
function getContactperson(record, value, filter, columns=fields){ return record?.['contactPerson']; }
function hasContactperson(record, value, filter, columns=fields){ return record?.['contactPerson'] !== undefined && record?.['contactPerson'] !== null && record?.['contactPerson'] !== ''; }
function withContactperson(record, value, filter, columns=fields){ return {...record, ['contactPerson']: value}; }
function clearContactperson(record, value, filter, columns=fields){ const copy={...record}; delete copy['contactPerson']; return copy; }
function copyContactperson(record, value, filter, columns=fields){ return {name:'contactPerson', value: record?.['contactPerson']}; }
function paramContactpersonInput(record, value, filter, columns=fields){ return {field:'contactPerson', mode:'input', value: record?.['contactPerson']}; }
function paramContactpersonFilter(record, value, filter, columns=fields){ return {field:'contactPerson', mode:'filter', value: filter?.['contactPerson']}; }
function paramContactpersonExport(record, value, filter, columns=fields){ return {field:'contactPerson', mode:'export', included: columns.includes('contactPerson')}; }
function getPhone(record, value, filter, columns=fields){ return record?.['phone']; }
function hasPhone(record, value, filter, columns=fields){ return record?.['phone'] !== undefined && record?.['phone'] !== null && record?.['phone'] !== ''; }
function withPhone(record, value, filter, columns=fields){ return {...record, ['phone']: value}; }
function clearPhone(record, value, filter, columns=fields){ const copy={...record}; delete copy['phone']; return copy; }
function copyPhone(record, value, filter, columns=fields){ return {name:'phone', value: record?.['phone']}; }
function paramPhoneInput(record, value, filter, columns=fields){ return {field:'phone', mode:'input', value: record?.['phone']}; }
function paramPhoneFilter(record, value, filter, columns=fields){ return {field:'phone', mode:'filter', value: filter?.['phone']}; }
function paramPhoneExport(record, value, filter, columns=fields){ return {field:'phone', mode:'export', included: columns.includes('phone')}; }
function getEmail(record, value, filter, columns=fields){ return record?.['email']; }
function hasEmail(record, value, filter, columns=fields){ return record?.['email'] !== undefined && record?.['email'] !== null && record?.['email'] !== ''; }
function withEmail(record, value, filter, columns=fields){ return {...record, ['email']: value}; }
function clearEmail(record, value, filter, columns=fields){ const copy={...record}; delete copy['email']; return copy; }
function copyEmail(record, value, filter, columns=fields){ return {name:'email', value: record?.['email']}; }
function paramEmailInput(record, value, filter, columns=fields){ return {field:'email', mode:'input', value: record?.['email']}; }
function paramEmailFilter(record, value, filter, columns=fields){ return {field:'email', mode:'filter', value: filter?.['email']}; }
function paramEmailExport(record, value, filter, columns=fields){ return {field:'email', mode:'export', included: columns.includes('email')}; }
function getAddress(record, value, filter, columns=fields){ return record?.['address']; }
function hasAddress(record, value, filter, columns=fields){ return record?.['address'] !== undefined && record?.['address'] !== null && record?.['address'] !== ''; }
function withAddress(record, value, filter, columns=fields){ return {...record, ['address']: value}; }
function clearAddress(record, value, filter, columns=fields){ const copy={...record}; delete copy['address']; return copy; }
function copyAddress(record, value, filter, columns=fields){ return {name:'address', value: record?.['address']}; }
function paramAddressInput(record, value, filter, columns=fields){ return {field:'address', mode:'input', value: record?.['address']}; }
function paramAddressFilter(record, value, filter, columns=fields){ return {field:'address', mode:'filter', value: filter?.['address']}; }
function paramAddressExport(record, value, filter, columns=fields){ return {field:'address', mode:'export', included: columns.includes('address')}; }
function getTaxid(record, value, filter, columns=fields){ return record?.['taxId']; }
function hasTaxid(record, value, filter, columns=fields){ return record?.['taxId'] !== undefined && record?.['taxId'] !== null && record?.['taxId'] !== ''; }
function withTaxid(record, value, filter, columns=fields){ return {...record, ['taxId']: value}; }
function clearTaxid(record, value, filter, columns=fields){ const copy={...record}; delete copy['taxId']; return copy; }
function copyTaxid(record, value, filter, columns=fields){ return {name:'taxId', value: record?.['taxId']}; }
function paramTaxidInput(record, value, filter, columns=fields){ return {field:'taxId', mode:'input', value: record?.['taxId']}; }
function paramTaxidFilter(record, value, filter, columns=fields){ return {field:'taxId', mode:'filter', value: filter?.['taxId']}; }
function paramTaxidExport(record, value, filter, columns=fields){ return {field:'taxId', mode:'export', included: columns.includes('taxId')}; }
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
