'use strict';
// Complete parameter catalog for loginEvent.
const entity='loginEvent';
const parameters=[
  { name: 'userId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'userId parameter for loginEvent', index: 1 },
  { name: 'userId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'userId parameter for loginEvent', index: 1 },
  { name: 'userId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'userId parameter for loginEvent', index: 1 },
  { name: 'userId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'userId parameter for loginEvent', index: 1 },
  { name: 'userId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'userId parameter for loginEvent', index: 1 },
  { name: 'userIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum userId filter for loginEvent', index: 1 },
  { name: 'userIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum userId filter for loginEvent', index: 1 },
  { name: 'timestamp', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'timestamp parameter for loginEvent', index: 2 },
  { name: 'timestamp', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'timestamp parameter for loginEvent', index: 2 },
  { name: 'timestamp', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'timestamp parameter for loginEvent', index: 2 },
  { name: 'timestamp', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'timestamp parameter for loginEvent', index: 2 },
  { name: 'timestamp', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'timestamp parameter for loginEvent', index: 2 },
  { name: 'timestampMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum timestamp filter for loginEvent', index: 2 },
  { name: 'timestampMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum timestamp filter for loginEvent', index: 2 },
  { name: 'ipAddress', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'ipAddress parameter for loginEvent', index: 3 },
  { name: 'ipAddress', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'ipAddress parameter for loginEvent', index: 3 },
  { name: 'ipAddress', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'ipAddress parameter for loginEvent', index: 3 },
  { name: 'ipAddress', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'ipAddress parameter for loginEvent', index: 3 },
  { name: 'ipAddress', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'ipAddress parameter for loginEvent', index: 3 },
  { name: 'ipAddressMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum ipAddress filter for loginEvent', index: 3 },
  { name: 'ipAddressMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum ipAddress filter for loginEvent', index: 3 },
  { name: 'userAgent', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'userAgent parameter for loginEvent', index: 4 },
  { name: 'userAgent', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'userAgent parameter for loginEvent', index: 4 },
  { name: 'userAgent', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'userAgent parameter for loginEvent', index: 4 },
  { name: 'userAgent', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'userAgent parameter for loginEvent', index: 4 },
  { name: 'userAgent', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'userAgent parameter for loginEvent', index: 4 },
  { name: 'userAgentMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum userAgent filter for loginEvent', index: 4 },
  { name: 'userAgentMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum userAgent filter for loginEvent', index: 4 },
  { name: 'success', mode: 'input', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'success parameter for loginEvent', index: 5 },
  { name: 'success', mode: 'filter', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'success parameter for loginEvent', index: 5 },
  { name: 'success', mode: 'sort', type: 'boolean', required: false, nullable: true, defaultValue: false, description: 'success parameter for loginEvent', index: 5 },
  { name: 'success', mode: 'search', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'success parameter for loginEvent', index: 5 },
  { name: 'success', mode: 'export', type: 'boolean', required: false, nullable: true, defaultValue: false, description: 'success parameter for loginEvent', index: 5 },
  { name: 'successMin', mode: 'range', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'Minimum success filter for loginEvent', index: 5 },
  { name: 'successMax', mode: 'range', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'Maximum success filter for loginEvent', index: 5 },
  { name: 'failureReason', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'failureReason parameter for loginEvent', index: 6 },
  { name: 'failureReason', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'failureReason parameter for loginEvent', index: 6 },
  { name: 'failureReason', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'failureReason parameter for loginEvent', index: 6 },
  { name: 'failureReason', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'failureReason parameter for loginEvent', index: 6 },
  { name: 'failureReason', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'failureReason parameter for loginEvent', index: 6 },
  { name: 'failureReasonMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum failureReason filter for loginEvent', index: 6 },
  { name: 'failureReasonMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum failureReason filter for loginEvent', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
