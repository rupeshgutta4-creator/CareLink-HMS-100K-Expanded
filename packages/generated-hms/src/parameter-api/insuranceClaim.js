'use strict';
const entity='insuranceClaim';
const fields=['patientId', 'invoiceId', 'provider', 'policyNumber', 'claimNumber', 'submittedAt', 'approvedAt', 'claimedAmount', 'approvedAmount', 'status', 'remarks'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getInvoiceid(record, value, filter, columns=fields){ return record?.['invoiceId']; }
function hasInvoiceid(record, value, filter, columns=fields){ return record?.['invoiceId'] !== undefined && record?.['invoiceId'] !== null && record?.['invoiceId'] !== ''; }
function withInvoiceid(record, value, filter, columns=fields){ return {...record, ['invoiceId']: value}; }
function clearInvoiceid(record, value, filter, columns=fields){ const copy={...record}; delete copy['invoiceId']; return copy; }
function copyInvoiceid(record, value, filter, columns=fields){ return {name:'invoiceId', value: record?.['invoiceId']}; }
function paramInvoiceidInput(record, value, filter, columns=fields){ return {field:'invoiceId', mode:'input', value: record?.['invoiceId']}; }
function paramInvoiceidFilter(record, value, filter, columns=fields){ return {field:'invoiceId', mode:'filter', value: filter?.['invoiceId']}; }
function paramInvoiceidExport(record, value, filter, columns=fields){ return {field:'invoiceId', mode:'export', included: columns.includes('invoiceId')}; }
function getProvider(record, value, filter, columns=fields){ return record?.['provider']; }
function hasProvider(record, value, filter, columns=fields){ return record?.['provider'] !== undefined && record?.['provider'] !== null && record?.['provider'] !== ''; }
function withProvider(record, value, filter, columns=fields){ return {...record, ['provider']: value}; }
function clearProvider(record, value, filter, columns=fields){ const copy={...record}; delete copy['provider']; return copy; }
function copyProvider(record, value, filter, columns=fields){ return {name:'provider', value: record?.['provider']}; }
function paramProviderInput(record, value, filter, columns=fields){ return {field:'provider', mode:'input', value: record?.['provider']}; }
function paramProviderFilter(record, value, filter, columns=fields){ return {field:'provider', mode:'filter', value: filter?.['provider']}; }
function paramProviderExport(record, value, filter, columns=fields){ return {field:'provider', mode:'export', included: columns.includes('provider')}; }
function getPolicynumber(record, value, filter, columns=fields){ return record?.['policyNumber']; }
function hasPolicynumber(record, value, filter, columns=fields){ return record?.['policyNumber'] !== undefined && record?.['policyNumber'] !== null && record?.['policyNumber'] !== ''; }
function withPolicynumber(record, value, filter, columns=fields){ return {...record, ['policyNumber']: value}; }
function clearPolicynumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['policyNumber']; return copy; }
function copyPolicynumber(record, value, filter, columns=fields){ return {name:'policyNumber', value: record?.['policyNumber']}; }
function paramPolicynumberInput(record, value, filter, columns=fields){ return {field:'policyNumber', mode:'input', value: record?.['policyNumber']}; }
function paramPolicynumberFilter(record, value, filter, columns=fields){ return {field:'policyNumber', mode:'filter', value: filter?.['policyNumber']}; }
function paramPolicynumberExport(record, value, filter, columns=fields){ return {field:'policyNumber', mode:'export', included: columns.includes('policyNumber')}; }
function getClaimnumber(record, value, filter, columns=fields){ return record?.['claimNumber']; }
function hasClaimnumber(record, value, filter, columns=fields){ return record?.['claimNumber'] !== undefined && record?.['claimNumber'] !== null && record?.['claimNumber'] !== ''; }
function withClaimnumber(record, value, filter, columns=fields){ return {...record, ['claimNumber']: value}; }
function clearClaimnumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['claimNumber']; return copy; }
function copyClaimnumber(record, value, filter, columns=fields){ return {name:'claimNumber', value: record?.['claimNumber']}; }
function paramClaimnumberInput(record, value, filter, columns=fields){ return {field:'claimNumber', mode:'input', value: record?.['claimNumber']}; }
function paramClaimnumberFilter(record, value, filter, columns=fields){ return {field:'claimNumber', mode:'filter', value: filter?.['claimNumber']}; }
function paramClaimnumberExport(record, value, filter, columns=fields){ return {field:'claimNumber', mode:'export', included: columns.includes('claimNumber')}; }
function getSubmittedat(record, value, filter, columns=fields){ return record?.['submittedAt']; }
function hasSubmittedat(record, value, filter, columns=fields){ return record?.['submittedAt'] !== undefined && record?.['submittedAt'] !== null && record?.['submittedAt'] !== ''; }
function withSubmittedat(record, value, filter, columns=fields){ return {...record, ['submittedAt']: value}; }
function clearSubmittedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['submittedAt']; return copy; }
function copySubmittedat(record, value, filter, columns=fields){ return {name:'submittedAt', value: record?.['submittedAt']}; }
function paramSubmittedatInput(record, value, filter, columns=fields){ return {field:'submittedAt', mode:'input', value: record?.['submittedAt']}; }
function paramSubmittedatFilter(record, value, filter, columns=fields){ return {field:'submittedAt', mode:'filter', value: filter?.['submittedAt']}; }
function paramSubmittedatExport(record, value, filter, columns=fields){ return {field:'submittedAt', mode:'export', included: columns.includes('submittedAt')}; }
function getApprovedat(record, value, filter, columns=fields){ return record?.['approvedAt']; }
function hasApprovedat(record, value, filter, columns=fields){ return record?.['approvedAt'] !== undefined && record?.['approvedAt'] !== null && record?.['approvedAt'] !== ''; }
function withApprovedat(record, value, filter, columns=fields){ return {...record, ['approvedAt']: value}; }
function clearApprovedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['approvedAt']; return copy; }
function copyApprovedat(record, value, filter, columns=fields){ return {name:'approvedAt', value: record?.['approvedAt']}; }
function paramApprovedatInput(record, value, filter, columns=fields){ return {field:'approvedAt', mode:'input', value: record?.['approvedAt']}; }
function paramApprovedatFilter(record, value, filter, columns=fields){ return {field:'approvedAt', mode:'filter', value: filter?.['approvedAt']}; }
function paramApprovedatExport(record, value, filter, columns=fields){ return {field:'approvedAt', mode:'export', included: columns.includes('approvedAt')}; }
function getClaimedamount(record, value, filter, columns=fields){ return record?.['claimedAmount']; }
function hasClaimedamount(record, value, filter, columns=fields){ return record?.['claimedAmount'] !== undefined && record?.['claimedAmount'] !== null && record?.['claimedAmount'] !== ''; }
function withClaimedamount(record, value, filter, columns=fields){ return {...record, ['claimedAmount']: value}; }
function clearClaimedamount(record, value, filter, columns=fields){ const copy={...record}; delete copy['claimedAmount']; return copy; }
function copyClaimedamount(record, value, filter, columns=fields){ return {name:'claimedAmount', value: record?.['claimedAmount']}; }
function paramClaimedamountInput(record, value, filter, columns=fields){ return {field:'claimedAmount', mode:'input', value: record?.['claimedAmount']}; }
function paramClaimedamountFilter(record, value, filter, columns=fields){ return {field:'claimedAmount', mode:'filter', value: filter?.['claimedAmount']}; }
function paramClaimedamountExport(record, value, filter, columns=fields){ return {field:'claimedAmount', mode:'export', included: columns.includes('claimedAmount')}; }
function getApprovedamount(record, value, filter, columns=fields){ return record?.['approvedAmount']; }
function hasApprovedamount(record, value, filter, columns=fields){ return record?.['approvedAmount'] !== undefined && record?.['approvedAmount'] !== null && record?.['approvedAmount'] !== ''; }
function withApprovedamount(record, value, filter, columns=fields){ return {...record, ['approvedAmount']: value}; }
function clearApprovedamount(record, value, filter, columns=fields){ const copy={...record}; delete copy['approvedAmount']; return copy; }
function copyApprovedamount(record, value, filter, columns=fields){ return {name:'approvedAmount', value: record?.['approvedAmount']}; }
function paramApprovedamountInput(record, value, filter, columns=fields){ return {field:'approvedAmount', mode:'input', value: record?.['approvedAmount']}; }
function paramApprovedamountFilter(record, value, filter, columns=fields){ return {field:'approvedAmount', mode:'filter', value: filter?.['approvedAmount']}; }
function paramApprovedamountExport(record, value, filter, columns=fields){ return {field:'approvedAmount', mode:'export', included: columns.includes('approvedAmount')}; }
function getStatus(record, value, filter, columns=fields){ return record?.['status']; }
function hasStatus(record, value, filter, columns=fields){ return record?.['status'] !== undefined && record?.['status'] !== null && record?.['status'] !== ''; }
function withStatus(record, value, filter, columns=fields){ return {...record, ['status']: value}; }
function clearStatus(record, value, filter, columns=fields){ const copy={...record}; delete copy['status']; return copy; }
function copyStatus(record, value, filter, columns=fields){ return {name:'status', value: record?.['status']}; }
function paramStatusInput(record, value, filter, columns=fields){ return {field:'status', mode:'input', value: record?.['status']}; }
function paramStatusFilter(record, value, filter, columns=fields){ return {field:'status', mode:'filter', value: filter?.['status']}; }
function paramStatusExport(record, value, filter, columns=fields){ return {field:'status', mode:'export', included: columns.includes('status')}; }
function getRemarks(record, value, filter, columns=fields){ return record?.['remarks']; }
function hasRemarks(record, value, filter, columns=fields){ return record?.['remarks'] !== undefined && record?.['remarks'] !== null && record?.['remarks'] !== ''; }
function withRemarks(record, value, filter, columns=fields){ return {...record, ['remarks']: value}; }
function clearRemarks(record, value, filter, columns=fields){ const copy={...record}; delete copy['remarks']; return copy; }
function copyRemarks(record, value, filter, columns=fields){ return {name:'remarks', value: record?.['remarks']}; }
function paramRemarksInput(record, value, filter, columns=fields){ return {field:'remarks', mode:'input', value: record?.['remarks']}; }
function paramRemarksFilter(record, value, filter, columns=fields){ return {field:'remarks', mode:'filter', value: filter?.['remarks']}; }
function paramRemarksExport(record, value, filter, columns=fields){ return {field:'remarks', mode:'export', included: columns.includes('remarks')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
