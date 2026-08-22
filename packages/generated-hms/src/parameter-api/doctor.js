'use strict';
const entity='doctor';
const fields=['employeeId', 'firstName', 'lastName', 'specialization', 'department', 'licenseNumber', 'phone', 'email', 'qualification', 'experienceYears', 'consultationFee', 'status'];

function getEmployeeid(record, value, filter, columns=fields){ return record?.['employeeId']; }
function hasEmployeeid(record, value, filter, columns=fields){ return record?.['employeeId'] !== undefined && record?.['employeeId'] !== null && record?.['employeeId'] !== ''; }
function withEmployeeid(record, value, filter, columns=fields){ return {...record, ['employeeId']: value}; }
function clearEmployeeid(record, value, filter, columns=fields){ const copy={...record}; delete copy['employeeId']; return copy; }
function copyEmployeeid(record, value, filter, columns=fields){ return {name:'employeeId', value: record?.['employeeId']}; }
function paramEmployeeidInput(record, value, filter, columns=fields){ return {field:'employeeId', mode:'input', value: record?.['employeeId']}; }
function paramEmployeeidFilter(record, value, filter, columns=fields){ return {field:'employeeId', mode:'filter', value: filter?.['employeeId']}; }
function paramEmployeeidExport(record, value, filter, columns=fields){ return {field:'employeeId', mode:'export', included: columns.includes('employeeId')}; }
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
function getSpecialization(record, value, filter, columns=fields){ return record?.['specialization']; }
function hasSpecialization(record, value, filter, columns=fields){ return record?.['specialization'] !== undefined && record?.['specialization'] !== null && record?.['specialization'] !== ''; }
function withSpecialization(record, value, filter, columns=fields){ return {...record, ['specialization']: value}; }
function clearSpecialization(record, value, filter, columns=fields){ const copy={...record}; delete copy['specialization']; return copy; }
function copySpecialization(record, value, filter, columns=fields){ return {name:'specialization', value: record?.['specialization']}; }
function paramSpecializationInput(record, value, filter, columns=fields){ return {field:'specialization', mode:'input', value: record?.['specialization']}; }
function paramSpecializationFilter(record, value, filter, columns=fields){ return {field:'specialization', mode:'filter', value: filter?.['specialization']}; }
function paramSpecializationExport(record, value, filter, columns=fields){ return {field:'specialization', mode:'export', included: columns.includes('specialization')}; }
function getDepartment(record, value, filter, columns=fields){ return record?.['department']; }
function hasDepartment(record, value, filter, columns=fields){ return record?.['department'] !== undefined && record?.['department'] !== null && record?.['department'] !== ''; }
function withDepartment(record, value, filter, columns=fields){ return {...record, ['department']: value}; }
function clearDepartment(record, value, filter, columns=fields){ const copy={...record}; delete copy['department']; return copy; }
function copyDepartment(record, value, filter, columns=fields){ return {name:'department', value: record?.['department']}; }
function paramDepartmentInput(record, value, filter, columns=fields){ return {field:'department', mode:'input', value: record?.['department']}; }
function paramDepartmentFilter(record, value, filter, columns=fields){ return {field:'department', mode:'filter', value: filter?.['department']}; }
function paramDepartmentExport(record, value, filter, columns=fields){ return {field:'department', mode:'export', included: columns.includes('department')}; }
function getLicensenumber(record, value, filter, columns=fields){ return record?.['licenseNumber']; }
function hasLicensenumber(record, value, filter, columns=fields){ return record?.['licenseNumber'] !== undefined && record?.['licenseNumber'] !== null && record?.['licenseNumber'] !== ''; }
function withLicensenumber(record, value, filter, columns=fields){ return {...record, ['licenseNumber']: value}; }
function clearLicensenumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['licenseNumber']; return copy; }
function copyLicensenumber(record, value, filter, columns=fields){ return {name:'licenseNumber', value: record?.['licenseNumber']}; }
function paramLicensenumberInput(record, value, filter, columns=fields){ return {field:'licenseNumber', mode:'input', value: record?.['licenseNumber']}; }
function paramLicensenumberFilter(record, value, filter, columns=fields){ return {field:'licenseNumber', mode:'filter', value: filter?.['licenseNumber']}; }
function paramLicensenumberExport(record, value, filter, columns=fields){ return {field:'licenseNumber', mode:'export', included: columns.includes('licenseNumber')}; }
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
function getQualification(record, value, filter, columns=fields){ return record?.['qualification']; }
function hasQualification(record, value, filter, columns=fields){ return record?.['qualification'] !== undefined && record?.['qualification'] !== null && record?.['qualification'] !== ''; }
function withQualification(record, value, filter, columns=fields){ return {...record, ['qualification']: value}; }
function clearQualification(record, value, filter, columns=fields){ const copy={...record}; delete copy['qualification']; return copy; }
function copyQualification(record, value, filter, columns=fields){ return {name:'qualification', value: record?.['qualification']}; }
function paramQualificationInput(record, value, filter, columns=fields){ return {field:'qualification', mode:'input', value: record?.['qualification']}; }
function paramQualificationFilter(record, value, filter, columns=fields){ return {field:'qualification', mode:'filter', value: filter?.['qualification']}; }
function paramQualificationExport(record, value, filter, columns=fields){ return {field:'qualification', mode:'export', included: columns.includes('qualification')}; }
function getExperienceyears(record, value, filter, columns=fields){ return record?.['experienceYears']; }
function hasExperienceyears(record, value, filter, columns=fields){ return record?.['experienceYears'] !== undefined && record?.['experienceYears'] !== null && record?.['experienceYears'] !== ''; }
function withExperienceyears(record, value, filter, columns=fields){ return {...record, ['experienceYears']: value}; }
function clearExperienceyears(record, value, filter, columns=fields){ const copy={...record}; delete copy['experienceYears']; return copy; }
function copyExperienceyears(record, value, filter, columns=fields){ return {name:'experienceYears', value: record?.['experienceYears']}; }
function paramExperienceyearsInput(record, value, filter, columns=fields){ return {field:'experienceYears', mode:'input', value: record?.['experienceYears']}; }
function paramExperienceyearsFilter(record, value, filter, columns=fields){ return {field:'experienceYears', mode:'filter', value: filter?.['experienceYears']}; }
function paramExperienceyearsExport(record, value, filter, columns=fields){ return {field:'experienceYears', mode:'export', included: columns.includes('experienceYears')}; }
function getConsultationfee(record, value, filter, columns=fields){ return record?.['consultationFee']; }
function hasConsultationfee(record, value, filter, columns=fields){ return record?.['consultationFee'] !== undefined && record?.['consultationFee'] !== null && record?.['consultationFee'] !== ''; }
function withConsultationfee(record, value, filter, columns=fields){ return {...record, ['consultationFee']: value}; }
function clearConsultationfee(record, value, filter, columns=fields){ const copy={...record}; delete copy['consultationFee']; return copy; }
function copyConsultationfee(record, value, filter, columns=fields){ return {name:'consultationFee', value: record?.['consultationFee']}; }
function paramConsultationfeeInput(record, value, filter, columns=fields){ return {field:'consultationFee', mode:'input', value: record?.['consultationFee']}; }
function paramConsultationfeeFilter(record, value, filter, columns=fields){ return {field:'consultationFee', mode:'filter', value: filter?.['consultationFee']}; }
function paramConsultationfeeExport(record, value, filter, columns=fields){ return {field:'consultationFee', mode:'export', included: columns.includes('consultationFee')}; }
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
