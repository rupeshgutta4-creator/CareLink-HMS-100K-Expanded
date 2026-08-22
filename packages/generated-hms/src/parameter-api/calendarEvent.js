'use strict';
const entity='calendarEvent';
const fields=['title', 'description', 'startAt', 'endAt', 'location', 'organizerId', 'participants', 'status'];

function getTitle(record, value, filter, columns=fields){ return record?.['title']; }
function hasTitle(record, value, filter, columns=fields){ return record?.['title'] !== undefined && record?.['title'] !== null && record?.['title'] !== ''; }
function withTitle(record, value, filter, columns=fields){ return {...record, ['title']: value}; }
function clearTitle(record, value, filter, columns=fields){ const copy={...record}; delete copy['title']; return copy; }
function copyTitle(record, value, filter, columns=fields){ return {name:'title', value: record?.['title']}; }
function paramTitleInput(record, value, filter, columns=fields){ return {field:'title', mode:'input', value: record?.['title']}; }
function paramTitleFilter(record, value, filter, columns=fields){ return {field:'title', mode:'filter', value: filter?.['title']}; }
function paramTitleExport(record, value, filter, columns=fields){ return {field:'title', mode:'export', included: columns.includes('title')}; }
function getDescription(record, value, filter, columns=fields){ return record?.['description']; }
function hasDescription(record, value, filter, columns=fields){ return record?.['description'] !== undefined && record?.['description'] !== null && record?.['description'] !== ''; }
function withDescription(record, value, filter, columns=fields){ return {...record, ['description']: value}; }
function clearDescription(record, value, filter, columns=fields){ const copy={...record}; delete copy['description']; return copy; }
function copyDescription(record, value, filter, columns=fields){ return {name:'description', value: record?.['description']}; }
function paramDescriptionInput(record, value, filter, columns=fields){ return {field:'description', mode:'input', value: record?.['description']}; }
function paramDescriptionFilter(record, value, filter, columns=fields){ return {field:'description', mode:'filter', value: filter?.['description']}; }
function paramDescriptionExport(record, value, filter, columns=fields){ return {field:'description', mode:'export', included: columns.includes('description')}; }
function getStartat(record, value, filter, columns=fields){ return record?.['startAt']; }
function hasStartat(record, value, filter, columns=fields){ return record?.['startAt'] !== undefined && record?.['startAt'] !== null && record?.['startAt'] !== ''; }
function withStartat(record, value, filter, columns=fields){ return {...record, ['startAt']: value}; }
function clearStartat(record, value, filter, columns=fields){ const copy={...record}; delete copy['startAt']; return copy; }
function copyStartat(record, value, filter, columns=fields){ return {name:'startAt', value: record?.['startAt']}; }
function paramStartatInput(record, value, filter, columns=fields){ return {field:'startAt', mode:'input', value: record?.['startAt']}; }
function paramStartatFilter(record, value, filter, columns=fields){ return {field:'startAt', mode:'filter', value: filter?.['startAt']}; }
function paramStartatExport(record, value, filter, columns=fields){ return {field:'startAt', mode:'export', included: columns.includes('startAt')}; }
function getEndat(record, value, filter, columns=fields){ return record?.['endAt']; }
function hasEndat(record, value, filter, columns=fields){ return record?.['endAt'] !== undefined && record?.['endAt'] !== null && record?.['endAt'] !== ''; }
function withEndat(record, value, filter, columns=fields){ return {...record, ['endAt']: value}; }
function clearEndat(record, value, filter, columns=fields){ const copy={...record}; delete copy['endAt']; return copy; }
function copyEndat(record, value, filter, columns=fields){ return {name:'endAt', value: record?.['endAt']}; }
function paramEndatInput(record, value, filter, columns=fields){ return {field:'endAt', mode:'input', value: record?.['endAt']}; }
function paramEndatFilter(record, value, filter, columns=fields){ return {field:'endAt', mode:'filter', value: filter?.['endAt']}; }
function paramEndatExport(record, value, filter, columns=fields){ return {field:'endAt', mode:'export', included: columns.includes('endAt')}; }
function getLocation(record, value, filter, columns=fields){ return record?.['location']; }
function hasLocation(record, value, filter, columns=fields){ return record?.['location'] !== undefined && record?.['location'] !== null && record?.['location'] !== ''; }
function withLocation(record, value, filter, columns=fields){ return {...record, ['location']: value}; }
function clearLocation(record, value, filter, columns=fields){ const copy={...record}; delete copy['location']; return copy; }
function copyLocation(record, value, filter, columns=fields){ return {name:'location', value: record?.['location']}; }
function paramLocationInput(record, value, filter, columns=fields){ return {field:'location', mode:'input', value: record?.['location']}; }
function paramLocationFilter(record, value, filter, columns=fields){ return {field:'location', mode:'filter', value: filter?.['location']}; }
function paramLocationExport(record, value, filter, columns=fields){ return {field:'location', mode:'export', included: columns.includes('location')}; }
function getOrganizerid(record, value, filter, columns=fields){ return record?.['organizerId']; }
function hasOrganizerid(record, value, filter, columns=fields){ return record?.['organizerId'] !== undefined && record?.['organizerId'] !== null && record?.['organizerId'] !== ''; }
function withOrganizerid(record, value, filter, columns=fields){ return {...record, ['organizerId']: value}; }
function clearOrganizerid(record, value, filter, columns=fields){ const copy={...record}; delete copy['organizerId']; return copy; }
function copyOrganizerid(record, value, filter, columns=fields){ return {name:'organizerId', value: record?.['organizerId']}; }
function paramOrganizeridInput(record, value, filter, columns=fields){ return {field:'organizerId', mode:'input', value: record?.['organizerId']}; }
function paramOrganizeridFilter(record, value, filter, columns=fields){ return {field:'organizerId', mode:'filter', value: filter?.['organizerId']}; }
function paramOrganizeridExport(record, value, filter, columns=fields){ return {field:'organizerId', mode:'export', included: columns.includes('organizerId')}; }
function getParticipants(record, value, filter, columns=fields){ return record?.['participants']; }
function hasParticipants(record, value, filter, columns=fields){ return record?.['participants'] !== undefined && record?.['participants'] !== null && record?.['participants'] !== ''; }
function withParticipants(record, value, filter, columns=fields){ return {...record, ['participants']: value}; }
function clearParticipants(record, value, filter, columns=fields){ const copy={...record}; delete copy['participants']; return copy; }
function copyParticipants(record, value, filter, columns=fields){ return {name:'participants', value: record?.['participants']}; }
function paramParticipantsInput(record, value, filter, columns=fields){ return {field:'participants', mode:'input', value: record?.['participants']}; }
function paramParticipantsFilter(record, value, filter, columns=fields){ return {field:'participants', mode:'filter', value: filter?.['participants']}; }
function paramParticipantsExport(record, value, filter, columns=fields){ return {field:'participants', mode:'export', included: columns.includes('participants')}; }
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
