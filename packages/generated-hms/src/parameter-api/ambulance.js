'use strict';
const entity='ambulance';
const fields=['vehicleNumber', 'registrationNumber', 'driverId', 'baseLocation', 'equipment', 'status'];

function getVehiclenumber(record, value, filter, columns=fields){ return record?.['vehicleNumber']; }
function hasVehiclenumber(record, value, filter, columns=fields){ return record?.['vehicleNumber'] !== undefined && record?.['vehicleNumber'] !== null && record?.['vehicleNumber'] !== ''; }
function withVehiclenumber(record, value, filter, columns=fields){ return {...record, ['vehicleNumber']: value}; }
function clearVehiclenumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['vehicleNumber']; return copy; }
function copyVehiclenumber(record, value, filter, columns=fields){ return {name:'vehicleNumber', value: record?.['vehicleNumber']}; }
function paramVehiclenumberInput(record, value, filter, columns=fields){ return {field:'vehicleNumber', mode:'input', value: record?.['vehicleNumber']}; }
function paramVehiclenumberFilter(record, value, filter, columns=fields){ return {field:'vehicleNumber', mode:'filter', value: filter?.['vehicleNumber']}; }
function paramVehiclenumberExport(record, value, filter, columns=fields){ return {field:'vehicleNumber', mode:'export', included: columns.includes('vehicleNumber')}; }
function getRegistrationnumber(record, value, filter, columns=fields){ return record?.['registrationNumber']; }
function hasRegistrationnumber(record, value, filter, columns=fields){ return record?.['registrationNumber'] !== undefined && record?.['registrationNumber'] !== null && record?.['registrationNumber'] !== ''; }
function withRegistrationnumber(record, value, filter, columns=fields){ return {...record, ['registrationNumber']: value}; }
function clearRegistrationnumber(record, value, filter, columns=fields){ const copy={...record}; delete copy['registrationNumber']; return copy; }
function copyRegistrationnumber(record, value, filter, columns=fields){ return {name:'registrationNumber', value: record?.['registrationNumber']}; }
function paramRegistrationnumberInput(record, value, filter, columns=fields){ return {field:'registrationNumber', mode:'input', value: record?.['registrationNumber']}; }
function paramRegistrationnumberFilter(record, value, filter, columns=fields){ return {field:'registrationNumber', mode:'filter', value: filter?.['registrationNumber']}; }
function paramRegistrationnumberExport(record, value, filter, columns=fields){ return {field:'registrationNumber', mode:'export', included: columns.includes('registrationNumber')}; }
function getDriverid(record, value, filter, columns=fields){ return record?.['driverId']; }
function hasDriverid(record, value, filter, columns=fields){ return record?.['driverId'] !== undefined && record?.['driverId'] !== null && record?.['driverId'] !== ''; }
function withDriverid(record, value, filter, columns=fields){ return {...record, ['driverId']: value}; }
function clearDriverid(record, value, filter, columns=fields){ const copy={...record}; delete copy['driverId']; return copy; }
function copyDriverid(record, value, filter, columns=fields){ return {name:'driverId', value: record?.['driverId']}; }
function paramDriveridInput(record, value, filter, columns=fields){ return {field:'driverId', mode:'input', value: record?.['driverId']}; }
function paramDriveridFilter(record, value, filter, columns=fields){ return {field:'driverId', mode:'filter', value: filter?.['driverId']}; }
function paramDriveridExport(record, value, filter, columns=fields){ return {field:'driverId', mode:'export', included: columns.includes('driverId')}; }
function getBaselocation(record, value, filter, columns=fields){ return record?.['baseLocation']; }
function hasBaselocation(record, value, filter, columns=fields){ return record?.['baseLocation'] !== undefined && record?.['baseLocation'] !== null && record?.['baseLocation'] !== ''; }
function withBaselocation(record, value, filter, columns=fields){ return {...record, ['baseLocation']: value}; }
function clearBaselocation(record, value, filter, columns=fields){ const copy={...record}; delete copy['baseLocation']; return copy; }
function copyBaselocation(record, value, filter, columns=fields){ return {name:'baseLocation', value: record?.['baseLocation']}; }
function paramBaselocationInput(record, value, filter, columns=fields){ return {field:'baseLocation', mode:'input', value: record?.['baseLocation']}; }
function paramBaselocationFilter(record, value, filter, columns=fields){ return {field:'baseLocation', mode:'filter', value: filter?.['baseLocation']}; }
function paramBaselocationExport(record, value, filter, columns=fields){ return {field:'baseLocation', mode:'export', included: columns.includes('baseLocation')}; }
function getEquipment(record, value, filter, columns=fields){ return record?.['equipment']; }
function hasEquipment(record, value, filter, columns=fields){ return record?.['equipment'] !== undefined && record?.['equipment'] !== null && record?.['equipment'] !== ''; }
function withEquipment(record, value, filter, columns=fields){ return {...record, ['equipment']: value}; }
function clearEquipment(record, value, filter, columns=fields){ const copy={...record}; delete copy['equipment']; return copy; }
function copyEquipment(record, value, filter, columns=fields){ return {name:'equipment', value: record?.['equipment']}; }
function paramEquipmentInput(record, value, filter, columns=fields){ return {field:'equipment', mode:'input', value: record?.['equipment']}; }
function paramEquipmentFilter(record, value, filter, columns=fields){ return {field:'equipment', mode:'filter', value: filter?.['equipment']}; }
function paramEquipmentExport(record, value, filter, columns=fields){ return {field:'equipment', mode:'export', included: columns.includes('equipment')}; }
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
