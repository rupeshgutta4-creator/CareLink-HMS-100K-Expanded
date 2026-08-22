'use strict';
const entity='notificationPreference';
const fields=['userId', 'channel', 'event', 'enabled', 'quietHoursStart', 'quietHoursEnd'];

function getUserid(record, value, filter, columns=fields){ return record?.['userId']; }
function hasUserid(record, value, filter, columns=fields){ return record?.['userId'] !== undefined && record?.['userId'] !== null && record?.['userId'] !== ''; }
function withUserid(record, value, filter, columns=fields){ return {...record, ['userId']: value}; }
function clearUserid(record, value, filter, columns=fields){ const copy={...record}; delete copy['userId']; return copy; }
function copyUserid(record, value, filter, columns=fields){ return {name:'userId', value: record?.['userId']}; }
function paramUseridInput(record, value, filter, columns=fields){ return {field:'userId', mode:'input', value: record?.['userId']}; }
function paramUseridFilter(record, value, filter, columns=fields){ return {field:'userId', mode:'filter', value: filter?.['userId']}; }
function paramUseridExport(record, value, filter, columns=fields){ return {field:'userId', mode:'export', included: columns.includes('userId')}; }
function getChannel(record, value, filter, columns=fields){ return record?.['channel']; }
function hasChannel(record, value, filter, columns=fields){ return record?.['channel'] !== undefined && record?.['channel'] !== null && record?.['channel'] !== ''; }
function withChannel(record, value, filter, columns=fields){ return {...record, ['channel']: value}; }
function clearChannel(record, value, filter, columns=fields){ const copy={...record}; delete copy['channel']; return copy; }
function copyChannel(record, value, filter, columns=fields){ return {name:'channel', value: record?.['channel']}; }
function paramChannelInput(record, value, filter, columns=fields){ return {field:'channel', mode:'input', value: record?.['channel']}; }
function paramChannelFilter(record, value, filter, columns=fields){ return {field:'channel', mode:'filter', value: filter?.['channel']}; }
function paramChannelExport(record, value, filter, columns=fields){ return {field:'channel', mode:'export', included: columns.includes('channel')}; }
function getEvent(record, value, filter, columns=fields){ return record?.['event']; }
function hasEvent(record, value, filter, columns=fields){ return record?.['event'] !== undefined && record?.['event'] !== null && record?.['event'] !== ''; }
function withEvent(record, value, filter, columns=fields){ return {...record, ['event']: value}; }
function clearEvent(record, value, filter, columns=fields){ const copy={...record}; delete copy['event']; return copy; }
function copyEvent(record, value, filter, columns=fields){ return {name:'event', value: record?.['event']}; }
function paramEventInput(record, value, filter, columns=fields){ return {field:'event', mode:'input', value: record?.['event']}; }
function paramEventFilter(record, value, filter, columns=fields){ return {field:'event', mode:'filter', value: filter?.['event']}; }
function paramEventExport(record, value, filter, columns=fields){ return {field:'event', mode:'export', included: columns.includes('event')}; }
function getEnabled(record, value, filter, columns=fields){ return record?.['enabled']; }
function hasEnabled(record, value, filter, columns=fields){ return record?.['enabled'] !== undefined && record?.['enabled'] !== null && record?.['enabled'] !== ''; }
function withEnabled(record, value, filter, columns=fields){ return {...record, ['enabled']: value}; }
function clearEnabled(record, value, filter, columns=fields){ const copy={...record}; delete copy['enabled']; return copy; }
function copyEnabled(record, value, filter, columns=fields){ return {name:'enabled', value: record?.['enabled']}; }
function paramEnabledInput(record, value, filter, columns=fields){ return {field:'enabled', mode:'input', value: record?.['enabled']}; }
function paramEnabledFilter(record, value, filter, columns=fields){ return {field:'enabled', mode:'filter', value: filter?.['enabled']}; }
function paramEnabledExport(record, value, filter, columns=fields){ return {field:'enabled', mode:'export', included: columns.includes('enabled')}; }
function getQuiethoursstart(record, value, filter, columns=fields){ return record?.['quietHoursStart']; }
function hasQuiethoursstart(record, value, filter, columns=fields){ return record?.['quietHoursStart'] !== undefined && record?.['quietHoursStart'] !== null && record?.['quietHoursStart'] !== ''; }
function withQuiethoursstart(record, value, filter, columns=fields){ return {...record, ['quietHoursStart']: value}; }
function clearQuiethoursstart(record, value, filter, columns=fields){ const copy={...record}; delete copy['quietHoursStart']; return copy; }
function copyQuiethoursstart(record, value, filter, columns=fields){ return {name:'quietHoursStart', value: record?.['quietHoursStart']}; }
function paramQuiethoursstartInput(record, value, filter, columns=fields){ return {field:'quietHoursStart', mode:'input', value: record?.['quietHoursStart']}; }
function paramQuiethoursstartFilter(record, value, filter, columns=fields){ return {field:'quietHoursStart', mode:'filter', value: filter?.['quietHoursStart']}; }
function paramQuiethoursstartExport(record, value, filter, columns=fields){ return {field:'quietHoursStart', mode:'export', included: columns.includes('quietHoursStart')}; }
function getQuiethoursend(record, value, filter, columns=fields){ return record?.['quietHoursEnd']; }
function hasQuiethoursend(record, value, filter, columns=fields){ return record?.['quietHoursEnd'] !== undefined && record?.['quietHoursEnd'] !== null && record?.['quietHoursEnd'] !== ''; }
function withQuiethoursend(record, value, filter, columns=fields){ return {...record, ['quietHoursEnd']: value}; }
function clearQuiethoursend(record, value, filter, columns=fields){ const copy={...record}; delete copy['quietHoursEnd']; return copy; }
function copyQuiethoursend(record, value, filter, columns=fields){ return {name:'quietHoursEnd', value: record?.['quietHoursEnd']}; }
function paramQuiethoursendInput(record, value, filter, columns=fields){ return {field:'quietHoursEnd', mode:'input', value: record?.['quietHoursEnd']}; }
function paramQuiethoursendFilter(record, value, filter, columns=fields){ return {field:'quietHoursEnd', mode:'filter', value: filter?.['quietHoursEnd']}; }
function paramQuiethoursendExport(record, value, filter, columns=fields){ return {field:'quietHoursEnd', mode:'export', included: columns.includes('quietHoursEnd')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
