'use strict';
// Complete parameter catalog for apiKey.
const entity='apiKey';
const parameters=[
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for apiKey', index: 1 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for apiKey', index: 1 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for apiKey', index: 1 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for apiKey', index: 1 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for apiKey', index: 1 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for apiKey', index: 1 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for apiKey', index: 1 },
  { name: 'prefix', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'prefix parameter for apiKey', index: 2 },
  { name: 'prefix', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'prefix parameter for apiKey', index: 2 },
  { name: 'prefix', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'prefix parameter for apiKey', index: 2 },
  { name: 'prefix', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'prefix parameter for apiKey', index: 2 },
  { name: 'prefix', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'prefix parameter for apiKey', index: 2 },
  { name: 'prefixMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum prefix filter for apiKey', index: 2 },
  { name: 'prefixMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum prefix filter for apiKey', index: 2 },
  { name: 'hash', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'hash parameter for apiKey', index: 3 },
  { name: 'hash', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'hash parameter for apiKey', index: 3 },
  { name: 'hash', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'hash parameter for apiKey', index: 3 },
  { name: 'hash', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'hash parameter for apiKey', index: 3 },
  { name: 'hash', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'hash parameter for apiKey', index: 3 },
  { name: 'hashMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum hash filter for apiKey', index: 3 },
  { name: 'hashMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum hash filter for apiKey', index: 3 },
  { name: 'scopes', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scopes parameter for apiKey', index: 4 },
  { name: 'scopes', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scopes parameter for apiKey', index: 4 },
  { name: 'scopes', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'scopes parameter for apiKey', index: 4 },
  { name: 'scopes', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scopes parameter for apiKey', index: 4 },
  { name: 'scopes', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'scopes parameter for apiKey', index: 4 },
  { name: 'scopesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum scopes filter for apiKey', index: 4 },
  { name: 'scopesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum scopes filter for apiKey', index: 4 },
  { name: 'expiresAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'expiresAt parameter for apiKey', index: 5 },
  { name: 'expiresAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'expiresAt parameter for apiKey', index: 5 },
  { name: 'expiresAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'expiresAt parameter for apiKey', index: 5 },
  { name: 'expiresAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'expiresAt parameter for apiKey', index: 5 },
  { name: 'expiresAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'expiresAt parameter for apiKey', index: 5 },
  { name: 'expiresAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum expiresAt filter for apiKey', index: 5 },
  { name: 'expiresAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum expiresAt filter for apiKey', index: 5 },
  { name: 'lastUsedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'lastUsedAt parameter for apiKey', index: 6 },
  { name: 'lastUsedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'lastUsedAt parameter for apiKey', index: 6 },
  { name: 'lastUsedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'lastUsedAt parameter for apiKey', index: 6 },
  { name: 'lastUsedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'lastUsedAt parameter for apiKey', index: 6 },
  { name: 'lastUsedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'lastUsedAt parameter for apiKey', index: 6 },
  { name: 'lastUsedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum lastUsedAt filter for apiKey', index: 6 },
  { name: 'lastUsedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum lastUsedAt filter for apiKey', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for apiKey', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for apiKey', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for apiKey', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for apiKey', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for apiKey', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for apiKey', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for apiKey', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
