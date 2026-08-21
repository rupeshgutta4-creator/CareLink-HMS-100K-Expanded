'use strict';
const entity='employeeAttendance';
const fields=['staffId', 'date', 'checkIn', 'checkOut', 'shift', 'status'];

function getStaffid(record, value, filter, columns=fields){ return record?.['staffId']; }
function hasStaffid(record, value, filter, columns=fields){ return record?.['staffId'] !== undefined && record?.['staffId'] !== null && record?.['staffId'] !== ''; }
function withStaffid(record, value, filter, columns=fields){ return {...record, ['staffId']: value}; }
function clearStaffid(record, value, filter, columns=fields){ const copy={...record}; delete copy['staffId']; return copy; }
function copyStaffid(record, value, filter, columns=fields){ return {name:'staffId', value: record?.['staffId']}; }
function paramStaffidInput(record, value, filter, columns=fields){ return {field:'staffId', mode:'input', value: record?.['staffId']}; }
function paramStaffidFilter(record, value, filter, columns=fields){ return {field:'staffId', mode:'filter', value: filter?.['staffId']}; }
function paramStaffidExport(record, value, filter, columns=fields){ return {field:'staffId', mode:'export', included: columns.includes('staffId')}; }
function getDate(record, value, filter, columns=fields){ return record?.['date']; }
function hasDate(record, value, filter, columns=fields){ return record?.['date'] !== undefined && record?.['date'] !== null && record?.['date'] !== ''; }
function withDate(record, value, filter, columns=fields){ return {...record, ['date']: value}; }
function clearDate(record, value, filter, columns=fields){ const copy={...record}; delete copy['date']; return copy; }
function copyDate(record, value, filter, columns=fields){ return {name:'date', value: record?.['date']}; }
function paramDateInput(record, value, filter, columns=fields){ return {field:'date', mode:'input', value: record?.['date']}; }
function paramDateFilter(record, value, filter, columns=fields){ return {field:'date', mode:'filter', value: filter?.['date']}; }
function paramDateExport(record, value, filter, columns=fields){ return {field:'date', mode:'export', included: columns.includes('date')}; }
function getCheckin(record, value, filter, columns=fields){ return record?.['checkIn']; }
function hasCheckin(record, value, filter, columns=fields){ return record?.['checkIn'] !== undefined && record?.['checkIn'] !== null && record?.['checkIn'] !== ''; }
function withCheckin(record, value, filter, columns=fields){ return {...record, ['checkIn']: value}; }
function clearCheckin(record, value, filter, columns=fields){ const copy={...record}; delete copy['checkIn']; return copy; }
function copyCheckin(record, value, filter, columns=fields){ return {name:'checkIn', value: record?.['checkIn']}; }
function paramCheckinInput(record, value, filter, columns=fields){ return {field:'checkIn', mode:'input', value: record?.['checkIn']}; }
function paramCheckinFilter(record, value, filter, columns=fields){ return {field:'checkIn', mode:'filter', value: filter?.['checkIn']}; }
function paramCheckinExport(record, value, filter, columns=fields){ return {field:'checkIn', mode:'export', included: columns.includes('checkIn')}; }
function getCheckout(record, value, filter, columns=fields){ return record?.['checkOut']; }
function hasCheckout(record, value, filter, columns=fields){ return record?.['checkOut'] !== undefined && record?.['checkOut'] !== null && record?.['checkOut'] !== ''; }
function withCheckout(record, value, filter, columns=fields){ return {...record, ['checkOut']: value}; }
function clearCheckout(record, value, filter, columns=fields){ const copy={...record}; delete copy['checkOut']; return copy; }
function copyCheckout(record, value, filter, columns=fields){ return {name:'checkOut', value: record?.['checkOut']}; }
function paramCheckoutInput(record, value, filter, columns=fields){ return {field:'checkOut', mode:'input', value: record?.['checkOut']}; }
function paramCheckoutFilter(record, value, filter, columns=fields){ return {field:'checkOut', mode:'filter', value: filter?.['checkOut']}; }
function paramCheckoutExport(record, value, filter, columns=fields){ return {field:'checkOut', mode:'export', included: columns.includes('checkOut')}; }
function getShift(record, value, filter, columns=fields){ return record?.['shift']; }
function hasShift(record, value, filter, columns=fields){ return record?.['shift'] !== undefined && record?.['shift'] !== null && record?.['shift'] !== ''; }
function withShift(record, value, filter, columns=fields){ return {...record, ['shift']: value}; }
function clearShift(record, value, filter, columns=fields){ const copy={...record}; delete copy['shift']; return copy; }
function copyShift(record, value, filter, columns=fields){ return {name:'shift', value: record?.['shift']}; }
function paramShiftInput(record, value, filter, columns=fields){ return {field:'shift', mode:'input', value: record?.['shift']}; }
function paramShiftFilter(record, value, filter, columns=fields){ return {field:'shift', mode:'filter', value: filter?.['shift']}; }
function paramShiftExport(record, value, filter, columns=fields){ return {field:'shift', mode:'export', included: columns.includes('shift')}; }
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
