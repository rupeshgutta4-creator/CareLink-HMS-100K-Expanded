'use strict';
// Complete parameter catalog for appointmentReminder.
const entity='appointmentReminder';
const parameters=[
  { name: 'appointmentId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'appointmentId parameter for appointmentReminder', index: 1 },
  { name: 'appointmentId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'appointmentId parameter for appointmentReminder', index: 1 },
  { name: 'appointmentId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'appointmentId parameter for appointmentReminder', index: 1 },
  { name: 'appointmentId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'appointmentId parameter for appointmentReminder', index: 1 },
  { name: 'appointmentId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'appointmentId parameter for appointmentReminder', index: 1 },
  { name: 'appointmentIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum appointmentId filter for appointmentReminder', index: 1 },
  { name: 'appointmentIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum appointmentId filter for appointmentReminder', index: 1 },
  { name: 'channel', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'channel parameter for appointmentReminder', index: 2 },
  { name: 'channel', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'channel parameter for appointmentReminder', index: 2 },
  { name: 'channel', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'channel parameter for appointmentReminder', index: 2 },
  { name: 'channel', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'channel parameter for appointmentReminder', index: 2 },
  { name: 'channel', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'channel parameter for appointmentReminder', index: 2 },
  { name: 'channelMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum channel filter for appointmentReminder', index: 2 },
  { name: 'channelMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum channel filter for appointmentReminder', index: 2 },
  { name: 'scheduledFor', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'scheduledFor parameter for appointmentReminder', index: 3 },
  { name: 'scheduledFor', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'scheduledFor parameter for appointmentReminder', index: 3 },
  { name: 'scheduledFor', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'scheduledFor parameter for appointmentReminder', index: 3 },
  { name: 'scheduledFor', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'scheduledFor parameter for appointmentReminder', index: 3 },
  { name: 'scheduledFor', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'scheduledFor parameter for appointmentReminder', index: 3 },
  { name: 'scheduledForMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum scheduledFor filter for appointmentReminder', index: 3 },
  { name: 'scheduledForMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum scheduledFor filter for appointmentReminder', index: 3 },
  { name: 'sentAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'sentAt parameter for appointmentReminder', index: 4 },
  { name: 'sentAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'sentAt parameter for appointmentReminder', index: 4 },
  { name: 'sentAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'sentAt parameter for appointmentReminder', index: 4 },
  { name: 'sentAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'sentAt parameter for appointmentReminder', index: 4 },
  { name: 'sentAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'sentAt parameter for appointmentReminder', index: 4 },
  { name: 'sentAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum sentAt filter for appointmentReminder', index: 4 },
  { name: 'sentAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum sentAt filter for appointmentReminder', index: 4 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for appointmentReminder', index: 5 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for appointmentReminder', index: 5 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for appointmentReminder', index: 5 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for appointmentReminder', index: 5 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for appointmentReminder', index: 5 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for appointmentReminder', index: 5 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for appointmentReminder', index: 5 },
  { name: 'template', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'template parameter for appointmentReminder', index: 6 },
  { name: 'template', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'template parameter for appointmentReminder', index: 6 },
  { name: 'template', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'template parameter for appointmentReminder', index: 6 },
  { name: 'template', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'template parameter for appointmentReminder', index: 6 },
  { name: 'template', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'template parameter for appointmentReminder', index: 6 },
  { name: 'templateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum template filter for appointmentReminder', index: 6 },
  { name: 'templateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum template filter for appointmentReminder', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
