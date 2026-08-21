'use strict';
// Complete parameter catalog for role.
const entity='role';
const parameters=[
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for role', index: 1 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for role', index: 1 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for role', index: 1 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for role', index: 1 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for role', index: 1 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for role', index: 1 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for role', index: 1 },
  { name: 'description', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for role', index: 2 },
  { name: 'description', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for role', index: 2 },
  { name: 'description', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for role', index: 2 },
  { name: 'description', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for role', index: 2 },
  { name: 'description', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for role', index: 2 },
  { name: 'descriptionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum description filter for role', index: 2 },
  { name: 'descriptionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum description filter for role', index: 2 },
  { name: 'permissions', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'permissions parameter for role', index: 3 },
  { name: 'permissions', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'permissions parameter for role', index: 3 },
  { name: 'permissions', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'permissions parameter for role', index: 3 },
  { name: 'permissions', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'permissions parameter for role', index: 3 },
  { name: 'permissions', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'permissions parameter for role', index: 3 },
  { name: 'permissionsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum permissions filter for role', index: 3 },
  { name: 'permissionsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum permissions filter for role', index: 3 },
  { name: 'scope', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scope parameter for role', index: 4 },
  { name: 'scope', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scope parameter for role', index: 4 },
  { name: 'scope', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'scope parameter for role', index: 4 },
  { name: 'scope', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scope parameter for role', index: 4 },
  { name: 'scope', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'scope parameter for role', index: 4 },
  { name: 'scopeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum scope filter for role', index: 4 },
  { name: 'scopeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum scope filter for role', index: 4 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for role', index: 5 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for role', index: 5 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for role', index: 5 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for role', index: 5 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for role', index: 5 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for role', index: 5 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for role', index: 5 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
