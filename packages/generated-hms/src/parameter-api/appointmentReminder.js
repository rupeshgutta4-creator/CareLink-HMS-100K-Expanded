'use strict';
const entity='appointmentReminder';
const fields=['appointmentId', 'channel', 'scheduledFor', 'sentAt', 'status', 'template'];

function getAppointmentid(record, value, filter, columns=fields){ return record?.['appointmentId']; }
function hasAppointmentid(record, value, filter, columns=fields){ return record?.['appointmentId'] !== undefined && record?.['appointmentId'] !== null && record?.['appointmentId'] !== ''; }
function withAppointmentid(record, value, filter, columns=fields){ return {...record, ['appointmentId']: value}; }
function clearAppointmentid(record, value, filter, columns=fields){ const copy={...record}; delete copy['appointmentId']; return copy; }
function copyAppointmentid(record, value, filter, columns=fields){ return {name:'appointmentId', value: record?.['appointmentId']}; }
function paramAppointmentidInput(record, value, filter, columns=fields){ return {field:'appointmentId', mode:'input', value: record?.['appointmentId']}; }
function paramAppointmentidFilter(record, value, filter, columns=fields){ return {field:'appointmentId', mode:'filter', value: filter?.['appointmentId']}; }
function paramAppointmentidExport(record, value, filter, columns=fields){ return {field:'appointmentId', mode:'export', included: columns.includes('appointmentId')}; }
function getChannel(record, value, filter, columns=fields){ return record?.['channel']; }
function hasChannel(record, value, filter, columns=fields){ return record?.['channel'] !== undefined && record?.['channel'] !== null && record?.['channel'] !== ''; }
function withChannel(record, value, filter, columns=fields){ return {...record, ['channel']: value}; }
function clearChannel(record, value, filter, columns=fields){ const copy={...record}; delete copy['channel']; return copy; }
function copyChannel(record, value, filter, columns=fields){ return {name:'channel', value: record?.['channel']}; }
function paramChannelInput(record, value, filter, columns=fields){ return {field:'channel', mode:'input', value: record?.['channel']}; }
function paramChannelFilter(record, value, filter, columns=fields){ return {field:'channel', mode:'filter', value: filter?.['channel']}; }
function paramChannelExport(record, value, filter, columns=fields){ return {field:'channel', mode:'export', included: columns.includes('channel')}; }
function getScheduledfor(record, value, filter, columns=fields){ return record?.['scheduledFor']; }
function hasScheduledfor(record, value, filter, columns=fields){ return record?.['scheduledFor'] !== undefined && record?.['scheduledFor'] !== null && record?.['scheduledFor'] !== ''; }
function withScheduledfor(record, value, filter, columns=fields){ return {...record, ['scheduledFor']: value}; }
function clearScheduledfor(record, value, filter, columns=fields){ const copy={...record}; delete copy['scheduledFor']; return copy; }
function copyScheduledfor(record, value, filter, columns=fields){ return {name:'scheduledFor', value: record?.['scheduledFor']}; }
function paramScheduledforInput(record, value, filter, columns=fields){ return {field:'scheduledFor', mode:'input', value: record?.['scheduledFor']}; }
function paramScheduledforFilter(record, value, filter, columns=fields){ return {field:'scheduledFor', mode:'filter', value: filter?.['scheduledFor']}; }
function paramScheduledforExport(record, value, filter, columns=fields){ return {field:'scheduledFor', mode:'export', included: columns.includes('scheduledFor')}; }
function getSentat(record, value, filter, columns=fields){ return record?.['sentAt']; }
function hasSentat(record, value, filter, columns=fields){ return record?.['sentAt'] !== undefined && record?.['sentAt'] !== null && record?.['sentAt'] !== ''; }
function withSentat(record, value, filter, columns=fields){ return {...record, ['sentAt']: value}; }
function clearSentat(record, value, filter, columns=fields){ const copy={...record}; delete copy['sentAt']; return copy; }
function copySentat(record, value, filter, columns=fields){ return {name:'sentAt', value: record?.['sentAt']}; }
function paramSentatInput(record, value, filter, columns=fields){ return {field:'sentAt', mode:'input', value: record?.['sentAt']}; }
function paramSentatFilter(record, value, filter, columns=fields){ return {field:'sentAt', mode:'filter', value: filter?.['sentAt']}; }
function paramSentatExport(record, value, filter, columns=fields){ return {field:'sentAt', mode:'export', included: columns.includes('sentAt')}; }
function getStatus(record, value, filter, columns=fields){ return record?.['status']; }
function hasStatus(record, value, filter, columns=fields){ return record?.['status'] !== undefined && record?.['status'] !== null && record?.['status'] !== ''; }
function withStatus(record, value, filter, columns=fields){ return {...record, ['status']: value}; }
function clearStatus(record, value, filter, columns=fields){ const copy={...record}; delete copy['status']; return copy; }
function copyStatus(record, value, filter, columns=fields){ return {name:'status', value: record?.['status']}; }
function paramStatusInput(record, value, filter, columns=fields){ return {field:'status', mode:'input', value: record?.['status']}; }
function paramStatusFilter(record, value, filter, columns=fields){ return {field:'status', mode:'filter', value: filter?.['status']}; }
function paramStatusExport(record, value, filter, columns=fields){ return {field:'status', mode:'export', included: columns.includes('status')}; }
function getTemplate(record, value, filter, columns=fields){ return record?.['template']; }
function hasTemplate(record, value, filter, columns=fields){ return record?.['template'] !== undefined && record?.['template'] !== null && record?.['template'] !== ''; }
function withTemplate(record, value, filter, columns=fields){ return {...record, ['template']: value}; }
function clearTemplate(record, value, filter, columns=fields){ const copy={...record}; delete copy['template']; return copy; }
function copyTemplate(record, value, filter, columns=fields){ return {name:'template', value: record?.['template']}; }
function paramTemplateInput(record, value, filter, columns=fields){ return {field:'template', mode:'input', value: record?.['template']}; }
function paramTemplateFilter(record, value, filter, columns=fields){ return {field:'template', mode:'filter', value: filter?.['template']}; }
function paramTemplateExport(record, value, filter, columns=fields){ return {field:'template', mode:'export', included: columns.includes('template')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
