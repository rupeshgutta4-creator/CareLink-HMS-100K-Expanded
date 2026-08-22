'use strict';
// Complete parameter catalog for reportDefinition.
const entity='reportDefinition';
const parameters=[
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for reportDefinition', index: 1 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for reportDefinition', index: 1 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for reportDefinition', index: 1 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for reportDefinition', index: 1 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for reportDefinition', index: 1 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for reportDefinition', index: 1 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for reportDefinition', index: 1 },
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for reportDefinition', index: 2 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for reportDefinition', index: 2 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for reportDefinition', index: 2 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for reportDefinition', index: 2 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for reportDefinition', index: 2 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for reportDefinition', index: 2 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for reportDefinition', index: 2 },
  { name: 'description', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for reportDefinition', index: 3 },
  { name: 'description', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for reportDefinition', index: 3 },
  { name: 'description', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for reportDefinition', index: 3 },
  { name: 'description', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for reportDefinition', index: 3 },
  { name: 'description', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for reportDefinition', index: 3 },
  { name: 'descriptionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum description filter for reportDefinition', index: 3 },
  { name: 'descriptionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum description filter for reportDefinition', index: 3 },
  { name: 'query', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'query parameter for reportDefinition', index: 4 },
  { name: 'query', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'query parameter for reportDefinition', index: 4 },
  { name: 'query', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'query parameter for reportDefinition', index: 4 },
  { name: 'query', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'query parameter for reportDefinition', index: 4 },
  { name: 'query', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'query parameter for reportDefinition', index: 4 },
  { name: 'queryMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum query filter for reportDefinition', index: 4 },
  { name: 'queryMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum query filter for reportDefinition', index: 4 },
  { name: 'parameters', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'parameters parameter for reportDefinition', index: 5 },
  { name: 'parameters', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'parameters parameter for reportDefinition', index: 5 },
  { name: 'parameters', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'parameters parameter for reportDefinition', index: 5 },
  { name: 'parameters', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'parameters parameter for reportDefinition', index: 5 },
  { name: 'parameters', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'parameters parameter for reportDefinition', index: 5 },
  { name: 'parametersMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum parameters filter for reportDefinition', index: 5 },
  { name: 'parametersMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum parameters filter for reportDefinition', index: 5 },
  { name: 'format', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'format parameter for reportDefinition', index: 6 },
  { name: 'format', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'format parameter for reportDefinition', index: 6 },
  { name: 'format', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'format parameter for reportDefinition', index: 6 },
  { name: 'format', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'format parameter for reportDefinition', index: 6 },
  { name: 'format', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'format parameter for reportDefinition', index: 6 },
  { name: 'formatMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum format filter for reportDefinition', index: 6 },
  { name: 'formatMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum format filter for reportDefinition', index: 6 },
  { name: 'roles', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'roles parameter for reportDefinition', index: 7 },
  { name: 'roles', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'roles parameter for reportDefinition', index: 7 },
  { name: 'roles', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'roles parameter for reportDefinition', index: 7 },
  { name: 'roles', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'roles parameter for reportDefinition', index: 7 },
  { name: 'roles', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'roles parameter for reportDefinition', index: 7 },
  { name: 'rolesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum roles filter for reportDefinition', index: 7 },
  { name: 'rolesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum roles filter for reportDefinition', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for reportDefinition', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for reportDefinition', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for reportDefinition', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for reportDefinition', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for reportDefinition', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for reportDefinition', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for reportDefinition', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
