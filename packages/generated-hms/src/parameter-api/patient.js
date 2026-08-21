'use strict';
const entity='patient';
const fields=['mrn', 'firstName', 'lastName', 'dateOfBirth', 'gender', 'bloodGroup', 'phone', 'email', 'address', 'emergencyContact', 'allergies', 'insuranceId', 'status'];

function getMrn(record, value, filter, columns=fields){ return record?.['mrn']; }
function hasMrn(record, value, filter, columns=fields){ return record?.['mrn'] !== undefined && record?.['mrn'] !== null && record?.['mrn'] !== ''; }
function withMrn(record, value, filter, columns=fields){ return {...record, ['mrn']: value}; }
function clearMrn(record, value, filter, columns=fields){ const copy={...record}; delete copy['mrn']; return copy; }
function copyMrn(record, value, filter, columns=fields){ return {name:'mrn', value: record?.['mrn']}; }
function paramMrnInput(record, value, filter, columns=fields){ return {field:'mrn', mode:'input', value: record?.['mrn']}; }
function paramMrnFilter(record, value, filter, columns=fields){ return {field:'mrn', mode:'filter', value: filter?.['mrn']}; }
function paramMrnExport(record, value, filter, columns=fields){ return {field:'mrn', mode:'export', included: columns.includes('mrn')}; }
function getFirstname(record, value, filter, columns=fields){ return record?.['firstName']; }
function hasFirstname(record, value, filter, columns=fields){ return record?.['firstName'] !== undefined && record?.['firstName'] !== null && record?.['firstName'] !== ''; }
function withFirstname(record, value, filter, columns=fields){ return {...record, ['firstName']: value}; }
function clearFirstname(record, value, filter, columns=fields){ const copy={...record}; delete copy['firstName']; return copy; }
function copyFirstname(record, value, filter, columns=fields){ return {name:'firstName', value: record?.['firstName']}; }
function paramFirstnameInput(record, value, filter, columns=fields){ return {field:'firstName', mode:'input', value: record?.['firstName']}; }
function paramFirstnameFilter(record, value, filter, columns=fields){ return {field:'firstName', mode:'filter', value: filter?.['firstName']}; }
function paramFirstnameExport(record, value, filter, columns=fields){ return {field:'firstName', mode:'export', included: columns.includes('firstName')}; }
function getLastname(record, value, filter, columns=fields){ return record?.['lastName']; }
function hasLastname(record, value, filter, columns=fields){ return record?.['lastName'] !== undefined && record?.['lastName'] !== null && record?.['lastName'] !== ''; }
function withLastname(record, value, filter, columns=fields){ return {...record, ['lastName']: value}; }
function clearLastname(record, value, filter, columns=fields){ const copy={...record}; delete copy['lastName']; return copy; }
function copyLastname(record, value, filter, columns=fields){ return {name:'lastName', value: record?.['lastName']}; }
function paramLastnameInput(record, value, filter, columns=fields){ return {field:'lastName', mode:'input', value: record?.['lastName']}; }
function paramLastnameFilter(record, value, filter, columns=fields){ return {field:'lastName', mode:'filter', value: filter?.['lastName']}; }
function paramLastnameExport(record, value, filter, columns=fields){ return {field:'lastName', mode:'export', included: columns.includes('lastName')}; }
function getDateofbirth(record, value, filter, columns=fields){ return record?.['dateOfBirth']; }
function hasDateofbirth(record, value, filter, columns=fields){ return record?.['dateOfBirth'] !== undefined && record?.['dateOfBirth'] !== null && record?.['dateOfBirth'] !== ''; }
function withDateofbirth(record, value, filter, columns=fields){ return {...record, ['dateOfBirth']: value}; }
function clearDateofbirth(record, value, filter, columns=fields){ const copy={...record}; delete copy['dateOfBirth']; return copy; }
function copyDateofbirth(record, value, filter, columns=fields){ return {name:'dateOfBirth', value: record?.['dateOfBirth']}; }
function paramDateofbirthInput(record, value, filter, columns=fields){ return {field:'dateOfBirth', mode:'input', value: record?.['dateOfBirth']}; }
function paramDateofbirthFilter(record, value, filter, columns=fields){ return {field:'dateOfBirth', mode:'filter', value: filter?.['dateOfBirth']}; }
function paramDateofbirthExport(record, value, filter, columns=fields){ return {field:'dateOfBirth', mode:'export', included: columns.includes('dateOfBirth')}; }
function getGender(record, value, filter, columns=fields){ return record?.['gender']; }
function hasGender(record, value, filter, columns=fields){ return record?.['gender'] !== undefined && record?.['gender'] !== null && record?.['gender'] !== ''; }
function withGender(record, value, filter, columns=fields){ return {...record, ['gender']: value}; }
function clearGender(record, value, filter, columns=fields){ const copy={...record}; delete copy['gender']; return copy; }
function copyGender(record, value, filter, columns=fields){ return {name:'gender', value: record?.['gender']}; }
function paramGenderInput(record, value, filter, columns=fields){ return {field:'gender', mode:'input', value: record?.['gender']}; }
function paramGenderFilter(record, value, filter, columns=fields){ return {field:'gender', mode:'filter', value: filter?.['gender']}; }
function paramGenderExport(record, value, filter, columns=fields){ return {field:'gender', mode:'export', included: columns.includes('gender')}; }
function getBloodgroup(record, value, filter, columns=fields){ return record?.['bloodGroup']; }
function hasBloodgroup(record, value, filter, columns=fields){ return record?.['bloodGroup'] !== undefined && record?.['bloodGroup'] !== null && record?.['bloodGroup'] !== ''; }
function withBloodgroup(record, value, filter, columns=fields){ return {...record, ['bloodGroup']: value}; }
function clearBloodgroup(record, value, filter, columns=fields){ const copy={...record}; delete copy['bloodGroup']; return copy; }
function copyBloodgroup(record, value, filter, columns=fields){ return {name:'bloodGroup', value: record?.['bloodGroup']}; }
function paramBloodgroupInput(record, value, filter, columns=fields){ return {field:'bloodGroup', mode:'input', value: record?.['bloodGroup']}; }
function paramBloodgroupFilter(record, value, filter, columns=fields){ return {field:'bloodGroup', mode:'filter', value: filter?.['bloodGroup']}; }
function paramBloodgroupExport(record, value, filter, columns=fields){ return {field:'bloodGroup', mode:'export', included: columns.includes('bloodGroup')}; }
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
function getEmergencycontact(record, value, filter, columns=fields){ return record?.['emergencyContact']; }
function hasEmergencycontact(record, value, filter, columns=fields){ return record?.['emergencyContact'] !== undefined && record?.['emergencyContact'] !== null && record?.['emergencyContact'] !== ''; }
function withEmergencycontact(record, value, filter, columns=fields){ return {...record, ['emergencyContact']: value}; }
function clearEmergencycontact(record, value, filter, columns=fields){ const copy={...record}; delete copy['emergencyContact']; return copy; }
function copyEmergencycontact(record, value, filter, columns=fields){ return {name:'emergencyContact', value: record?.['emergencyContact']}; }
function paramEmergencycontactInput(record, value, filter, columns=fields){ return {field:'emergencyContact', mode:'input', value: record?.['emergencyContact']}; }
function paramEmergencycontactFilter(record, value, filter, columns=fields){ return {field:'emergencyContact', mode:'filter', value: filter?.['emergencyContact']}; }
function paramEmergencycontactExport(record, value, filter, columns=fields){ return {field:'emergencyContact', mode:'export', included: columns.includes('emergencyContact')}; }
function getAllergies(record, value, filter, columns=fields){ return record?.['allergies']; }
function hasAllergies(record, value, filter, columns=fields){ return record?.['allergies'] !== undefined && record?.['allergies'] !== null && record?.['allergies'] !== ''; }
function withAllergies(record, value, filter, columns=fields){ return {...record, ['allergies']: value}; }
function clearAllergies(record, value, filter, columns=fields){ const copy={...record}; delete copy['allergies']; return copy; }
function copyAllergies(record, value, filter, columns=fields){ return {name:'allergies', value: record?.['allergies']}; }
function paramAllergiesInput(record, value, filter, columns=fields){ return {field:'allergies', mode:'input', value: record?.['allergies']}; }
function paramAllergiesFilter(record, value, filter, columns=fields){ return {field:'allergies', mode:'filter', value: filter?.['allergies']}; }
function paramAllergiesExport(record, value, filter, columns=fields){ return {field:'allergies', mode:'export', included: columns.includes('allergies')}; }
function getInsuranceid(record, value, filter, columns=fields){ return record?.['insuranceId']; }
function hasInsuranceid(record, value, filter, columns=fields){ return record?.['insuranceId'] !== undefined && record?.['insuranceId'] !== null && record?.['insuranceId'] !== ''; }
function withInsuranceid(record, value, filter, columns=fields){ return {...record, ['insuranceId']: value}; }
function clearInsuranceid(record, value, filter, columns=fields){ const copy={...record}; delete copy['insuranceId']; return copy; }
function copyInsuranceid(record, value, filter, columns=fields){ return {name:'insuranceId', value: record?.['insuranceId']}; }
function paramInsuranceidInput(record, value, filter, columns=fields){ return {field:'insuranceId', mode:'input', value: record?.['insuranceId']}; }
function paramInsuranceidFilter(record, value, filter, columns=fields){ return {field:'insuranceId', mode:'filter', value: filter?.['insuranceId']}; }
function paramInsuranceidExport(record, value, filter, columns=fields){ return {field:'insuranceId', mode:'export', included: columns.includes('insuranceId')}; }
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
