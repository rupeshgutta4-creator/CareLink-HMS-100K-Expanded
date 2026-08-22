'use strict';
// Complete parameter catalog for notificationPreference.
const entity='notificationPreference';
const parameters=[
  { name: 'userId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'userId parameter for notificationPreference', index: 1 },
  { name: 'userId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'userId parameter for notificationPreference', index: 1 },
  { name: 'userId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'userId parameter for notificationPreference', index: 1 },
  { name: 'userId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'userId parameter for notificationPreference', index: 1 },
  { name: 'userId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'userId parameter for notificationPreference', index: 1 },
  { name: 'userIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum userId filter for notificationPreference', index: 1 },
  { name: 'userIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum userId filter for notificationPreference', index: 1 },
  { name: 'channel', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'channel parameter for notificationPreference', index: 2 },
  { name: 'channel', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'channel parameter for notificationPreference', index: 2 },
  { name: 'channel', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'channel parameter for notificationPreference', index: 2 },
  { name: 'channel', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'channel parameter for notificationPreference', index: 2 },
  { name: 'channel', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'channel parameter for notificationPreference', index: 2 },
  { name: 'channelMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum channel filter for notificationPreference', index: 2 },
  { name: 'channelMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum channel filter for notificationPreference', index: 2 },
  { name: 'event', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'event parameter for notificationPreference', index: 3 },
  { name: 'event', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'event parameter for notificationPreference', index: 3 },
  { name: 'event', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'event parameter for notificationPreference', index: 3 },
  { name: 'event', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'event parameter for notificationPreference', index: 3 },
  { name: 'event', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'event parameter for notificationPreference', index: 3 },
  { name: 'eventMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum event filter for notificationPreference', index: 3 },
  { name: 'eventMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum event filter for notificationPreference', index: 3 },
  { name: 'enabled', mode: 'input', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'enabled parameter for notificationPreference', index: 4 },
  { name: 'enabled', mode: 'filter', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'enabled parameter for notificationPreference', index: 4 },
  { name: 'enabled', mode: 'sort', type: 'boolean', required: false, nullable: true, defaultValue: false, description: 'enabled parameter for notificationPreference', index: 4 },
  { name: 'enabled', mode: 'search', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'enabled parameter for notificationPreference', index: 4 },
  { name: 'enabled', mode: 'export', type: 'boolean', required: false, nullable: true, defaultValue: false, description: 'enabled parameter for notificationPreference', index: 4 },
  { name: 'enabledMin', mode: 'range', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'Minimum enabled filter for notificationPreference', index: 4 },
  { name: 'enabledMax', mode: 'range', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'Maximum enabled filter for notificationPreference', index: 4 },
  { name: 'quietHoursStart', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'quietHoursStart parameter for notificationPreference', index: 5 },
  { name: 'quietHoursStart', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'quietHoursStart parameter for notificationPreference', index: 5 },
  { name: 'quietHoursStart', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'quietHoursStart parameter for notificationPreference', index: 5 },
  { name: 'quietHoursStart', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'quietHoursStart parameter for notificationPreference', index: 5 },
  { name: 'quietHoursStart', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'quietHoursStart parameter for notificationPreference', index: 5 },
  { name: 'quietHoursStartMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum quietHoursStart filter for notificationPreference', index: 5 },
  { name: 'quietHoursStartMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum quietHoursStart filter for notificationPreference', index: 5 },
  { name: 'quietHoursEnd', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'quietHoursEnd parameter for notificationPreference', index: 6 },
  { name: 'quietHoursEnd', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'quietHoursEnd parameter for notificationPreference', index: 6 },
  { name: 'quietHoursEnd', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'quietHoursEnd parameter for notificationPreference', index: 6 },
  { name: 'quietHoursEnd', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'quietHoursEnd parameter for notificationPreference', index: 6 },
  { name: 'quietHoursEnd', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'quietHoursEnd parameter for notificationPreference', index: 6 },
  { name: 'quietHoursEndMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum quietHoursEnd filter for notificationPreference', index: 6 },
  { name: 'quietHoursEndMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum quietHoursEnd filter for notificationPreference', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
