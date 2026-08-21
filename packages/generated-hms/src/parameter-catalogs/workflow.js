'use strict';
// Complete parameter catalog for workflow.
const entity='workflow';
const parameters=[
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for workflow', index: 1 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for workflow', index: 1 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for workflow', index: 1 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for workflow', index: 1 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for workflow', index: 1 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for workflow', index: 1 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for workflow', index: 1 },
  { name: 'entity', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'entity parameter for workflow', index: 2 },
  { name: 'entity', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'entity parameter for workflow', index: 2 },
  { name: 'entity', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'entity parameter for workflow', index: 2 },
  { name: 'entity', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'entity parameter for workflow', index: 2 },
  { name: 'entity', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'entity parameter for workflow', index: 2 },
  { name: 'entityMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum entity filter for workflow', index: 2 },
  { name: 'entityMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum entity filter for workflow', index: 2 },
  { name: 'steps', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'steps parameter for workflow', index: 3 },
  { name: 'steps', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'steps parameter for workflow', index: 3 },
  { name: 'steps', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'steps parameter for workflow', index: 3 },
  { name: 'steps', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'steps parameter for workflow', index: 3 },
  { name: 'steps', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'steps parameter for workflow', index: 3 },
  { name: 'stepsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum steps filter for workflow', index: 3 },
  { name: 'stepsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum steps filter for workflow', index: 3 },
  { name: 'version', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'version parameter for workflow', index: 4 },
  { name: 'version', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'version parameter for workflow', index: 4 },
  { name: 'version', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'version parameter for workflow', index: 4 },
  { name: 'version', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'version parameter for workflow', index: 4 },
  { name: 'version', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'version parameter for workflow', index: 4 },
  { name: 'versionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum version filter for workflow', index: 4 },
  { name: 'versionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum version filter for workflow', index: 4 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for workflow', index: 5 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for workflow', index: 5 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for workflow', index: 5 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for workflow', index: 5 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for workflow', index: 5 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for workflow', index: 5 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for workflow', index: 5 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
