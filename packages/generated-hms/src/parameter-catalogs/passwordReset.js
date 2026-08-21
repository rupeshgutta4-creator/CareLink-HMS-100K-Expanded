'use strict';
// Complete parameter catalog for passwordReset.
const entity='passwordReset';
const parameters=[
  { name: 'userId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'userId parameter for passwordReset', index: 1 },
  { name: 'userId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'userId parameter for passwordReset', index: 1 },
  { name: 'userId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'userId parameter for passwordReset', index: 1 },
  { name: 'userId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'userId parameter for passwordReset', index: 1 },
  { name: 'userId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'userId parameter for passwordReset', index: 1 },
  { name: 'userIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum userId filter for passwordReset', index: 1 },
  { name: 'userIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum userId filter for passwordReset', index: 1 },
  { name: 'tokenHash', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'tokenHash parameter for passwordReset', index: 2 },
  { name: 'tokenHash', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'tokenHash parameter for passwordReset', index: 2 },
  { name: 'tokenHash', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'tokenHash parameter for passwordReset', index: 2 },
  { name: 'tokenHash', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'tokenHash parameter for passwordReset', index: 2 },
  { name: 'tokenHash', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'tokenHash parameter for passwordReset', index: 2 },
  { name: 'tokenHashMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum tokenHash filter for passwordReset', index: 2 },
  { name: 'tokenHashMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum tokenHash filter for passwordReset', index: 2 },
  { name: 'expiresAt', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'expiresAt parameter for passwordReset', index: 3 },
  { name: 'expiresAt', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'expiresAt parameter for passwordReset', index: 3 },
  { name: 'expiresAt', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'expiresAt parameter for passwordReset', index: 3 },
  { name: 'expiresAt', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'expiresAt parameter for passwordReset', index: 3 },
  { name: 'expiresAt', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'expiresAt parameter for passwordReset', index: 3 },
  { name: 'expiresAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum expiresAt filter for passwordReset', index: 3 },
  { name: 'expiresAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum expiresAt filter for passwordReset', index: 3 },
  { name: 'usedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'usedAt parameter for passwordReset', index: 4 },
  { name: 'usedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'usedAt parameter for passwordReset', index: 4 },
  { name: 'usedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'usedAt parameter for passwordReset', index: 4 },
  { name: 'usedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'usedAt parameter for passwordReset', index: 4 },
  { name: 'usedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'usedAt parameter for passwordReset', index: 4 },
  { name: 'usedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum usedAt filter for passwordReset', index: 4 },
  { name: 'usedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum usedAt filter for passwordReset', index: 4 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for passwordReset', index: 5 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for passwordReset', index: 5 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for passwordReset', index: 5 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for passwordReset', index: 5 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for passwordReset', index: 5 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for passwordReset', index: 5 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for passwordReset', index: 5 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
