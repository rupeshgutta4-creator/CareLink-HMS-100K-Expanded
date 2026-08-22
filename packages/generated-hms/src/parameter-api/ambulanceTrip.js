'use strict';
const entity='ambulanceTrip';
const fields=['ambulanceId', 'patientId', 'pickupLocation', 'destination', 'requestedAt', 'departedAt', 'arrivedAt', 'status'];

function getAmbulanceid(record, value, filter, columns=fields){ return record?.['ambulanceId']; }
function hasAmbulanceid(record, value, filter, columns=fields){ return record?.['ambulanceId'] !== undefined && record?.['ambulanceId'] !== null && record?.['ambulanceId'] !== ''; }
function withAmbulanceid(record, value, filter, columns=fields){ return {...record, ['ambulanceId']: value}; }
function clearAmbulanceid(record, value, filter, columns=fields){ const copy={...record}; delete copy['ambulanceId']; return copy; }
function copyAmbulanceid(record, value, filter, columns=fields){ return {name:'ambulanceId', value: record?.['ambulanceId']}; }
function paramAmbulanceidInput(record, value, filter, columns=fields){ return {field:'ambulanceId', mode:'input', value: record?.['ambulanceId']}; }
function paramAmbulanceidFilter(record, value, filter, columns=fields){ return {field:'ambulanceId', mode:'filter', value: filter?.['ambulanceId']}; }
function paramAmbulanceidExport(record, value, filter, columns=fields){ return {field:'ambulanceId', mode:'export', included: columns.includes('ambulanceId')}; }
function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getPickuplocation(record, value, filter, columns=fields){ return record?.['pickupLocation']; }
function hasPickuplocation(record, value, filter, columns=fields){ return record?.['pickupLocation'] !== undefined && record?.['pickupLocation'] !== null && record?.['pickupLocation'] !== ''; }
function withPickuplocation(record, value, filter, columns=fields){ return {...record, ['pickupLocation']: value}; }
function clearPickuplocation(record, value, filter, columns=fields){ const copy={...record}; delete copy['pickupLocation']; return copy; }
function copyPickuplocation(record, value, filter, columns=fields){ return {name:'pickupLocation', value: record?.['pickupLocation']}; }
function paramPickuplocationInput(record, value, filter, columns=fields){ return {field:'pickupLocation', mode:'input', value: record?.['pickupLocation']}; }
function paramPickuplocationFilter(record, value, filter, columns=fields){ return {field:'pickupLocation', mode:'filter', value: filter?.['pickupLocation']}; }
function paramPickuplocationExport(record, value, filter, columns=fields){ return {field:'pickupLocation', mode:'export', included: columns.includes('pickupLocation')}; }
function getDestination(record, value, filter, columns=fields){ return record?.['destination']; }
function hasDestination(record, value, filter, columns=fields){ return record?.['destination'] !== undefined && record?.['destination'] !== null && record?.['destination'] !== ''; }
function withDestination(record, value, filter, columns=fields){ return {...record, ['destination']: value}; }
function clearDestination(record, value, filter, columns=fields){ const copy={...record}; delete copy['destination']; return copy; }
function copyDestination(record, value, filter, columns=fields){ return {name:'destination', value: record?.['destination']}; }
function paramDestinationInput(record, value, filter, columns=fields){ return {field:'destination', mode:'input', value: record?.['destination']}; }
function paramDestinationFilter(record, value, filter, columns=fields){ return {field:'destination', mode:'filter', value: filter?.['destination']}; }
function paramDestinationExport(record, value, filter, columns=fields){ return {field:'destination', mode:'export', included: columns.includes('destination')}; }
function getRequestedat(record, value, filter, columns=fields){ return record?.['requestedAt']; }
function hasRequestedat(record, value, filter, columns=fields){ return record?.['requestedAt'] !== undefined && record?.['requestedAt'] !== null && record?.['requestedAt'] !== ''; }
function withRequestedat(record, value, filter, columns=fields){ return {...record, ['requestedAt']: value}; }
function clearRequestedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['requestedAt']; return copy; }
function copyRequestedat(record, value, filter, columns=fields){ return {name:'requestedAt', value: record?.['requestedAt']}; }
function paramRequestedatInput(record, value, filter, columns=fields){ return {field:'requestedAt', mode:'input', value: record?.['requestedAt']}; }
function paramRequestedatFilter(record, value, filter, columns=fields){ return {field:'requestedAt', mode:'filter', value: filter?.['requestedAt']}; }
function paramRequestedatExport(record, value, filter, columns=fields){ return {field:'requestedAt', mode:'export', included: columns.includes('requestedAt')}; }
function getDepartedat(record, value, filter, columns=fields){ return record?.['departedAt']; }
function hasDepartedat(record, value, filter, columns=fields){ return record?.['departedAt'] !== undefined && record?.['departedAt'] !== null && record?.['departedAt'] !== ''; }
function withDepartedat(record, value, filter, columns=fields){ return {...record, ['departedAt']: value}; }
function clearDepartedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['departedAt']; return copy; }
function copyDepartedat(record, value, filter, columns=fields){ return {name:'departedAt', value: record?.['departedAt']}; }
function paramDepartedatInput(record, value, filter, columns=fields){ return {field:'departedAt', mode:'input', value: record?.['departedAt']}; }
function paramDepartedatFilter(record, value, filter, columns=fields){ return {field:'departedAt', mode:'filter', value: filter?.['departedAt']}; }
function paramDepartedatExport(record, value, filter, columns=fields){ return {field:'departedAt', mode:'export', included: columns.includes('departedAt')}; }
function getArrivedat(record, value, filter, columns=fields){ return record?.['arrivedAt']; }
function hasArrivedat(record, value, filter, columns=fields){ return record?.['arrivedAt'] !== undefined && record?.['arrivedAt'] !== null && record?.['arrivedAt'] !== ''; }
function withArrivedat(record, value, filter, columns=fields){ return {...record, ['arrivedAt']: value}; }
function clearArrivedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['arrivedAt']; return copy; }
function copyArrivedat(record, value, filter, columns=fields){ return {name:'arrivedAt', value: record?.['arrivedAt']}; }
function paramArrivedatInput(record, value, filter, columns=fields){ return {field:'arrivedAt', mode:'input', value: record?.['arrivedAt']}; }
function paramArrivedatFilter(record, value, filter, columns=fields){ return {field:'arrivedAt', mode:'filter', value: filter?.['arrivedAt']}; }
function paramArrivedatExport(record, value, filter, columns=fields){ return {field:'arrivedAt', mode:'export', included: columns.includes('arrivedAt')}; }
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
