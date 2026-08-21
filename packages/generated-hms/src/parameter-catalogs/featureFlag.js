'use strict';
// Complete parameter catalog for featureFlag.
const entity='featureFlag';
const parameters=[
  { name: 'key', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'key parameter for featureFlag', index: 1 },
  { name: 'key', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'key parameter for featureFlag', index: 1 },
  { name: 'key', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'key parameter for featureFlag', index: 1 },
  { name: 'key', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'key parameter for featureFlag', index: 1 },
  { name: 'key', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'key parameter for featureFlag', index: 1 },
  { name: 'keyMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum key filter for featureFlag', index: 1 },
  { name: 'keyMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum key filter for featureFlag', index: 1 },
  { name: 'description', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for featureFlag', index: 2 },
  { name: 'description', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for featureFlag', index: 2 },
  { name: 'description', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for featureFlag', index: 2 },
  { name: 'description', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for featureFlag', index: 2 },
  { name: 'description', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for featureFlag', index: 2 },
  { name: 'descriptionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum description filter for featureFlag', index: 2 },
  { name: 'descriptionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum description filter for featureFlag', index: 2 },
  { name: 'enabled', mode: 'input', type: 'boolean', required: true, nullable: true, defaultValue: null, description: 'enabled parameter for featureFlag', index: 3 },
  { name: 'enabled', mode: 'filter', type: 'boolean', required: true, nullable: true, defaultValue: null, description: 'enabled parameter for featureFlag', index: 3 },
  { name: 'enabled', mode: 'sort', type: 'boolean', required: true, nullable: true, defaultValue: false, description: 'enabled parameter for featureFlag', index: 3 },
  { name: 'enabled', mode: 'search', type: 'boolean', required: true, nullable: true, defaultValue: null, description: 'enabled parameter for featureFlag', index: 3 },
  { name: 'enabled', mode: 'export', type: 'boolean', required: true, nullable: true, defaultValue: false, description: 'enabled parameter for featureFlag', index: 3 },
  { name: 'enabledMin', mode: 'range', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'Minimum enabled filter for featureFlag', index: 3 },
  { name: 'enabledMax', mode: 'range', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'Maximum enabled filter for featureFlag', index: 3 },
  { name: 'rolloutPercent', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'rolloutPercent parameter for featureFlag', index: 4 },
  { name: 'rolloutPercent', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'rolloutPercent parameter for featureFlag', index: 4 },
  { name: 'rolloutPercent', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'rolloutPercent parameter for featureFlag', index: 4 },
  { name: 'rolloutPercent', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'rolloutPercent parameter for featureFlag', index: 4 },
  { name: 'rolloutPercent', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'rolloutPercent parameter for featureFlag', index: 4 },
  { name: 'rolloutPercentMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum rolloutPercent filter for featureFlag', index: 4 },
  { name: 'rolloutPercentMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum rolloutPercent filter for featureFlag', index: 4 },
  { name: 'roles', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'roles parameter for featureFlag', index: 5 },
  { name: 'roles', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'roles parameter for featureFlag', index: 5 },
  { name: 'roles', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'roles parameter for featureFlag', index: 5 },
  { name: 'roles', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'roles parameter for featureFlag', index: 5 },
  { name: 'roles', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'roles parameter for featureFlag', index: 5 },
  { name: 'rolesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum roles filter for featureFlag', index: 5 },
  { name: 'rolesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum roles filter for featureFlag', index: 5 },
  { name: 'updatedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'updatedBy parameter for featureFlag', index: 6 },
  { name: 'updatedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'updatedBy parameter for featureFlag', index: 6 },
  { name: 'updatedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'updatedBy parameter for featureFlag', index: 6 },
  { name: 'updatedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'updatedBy parameter for featureFlag', index: 6 },
  { name: 'updatedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'updatedBy parameter for featureFlag', index: 6 },
  { name: 'updatedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum updatedBy filter for featureFlag', index: 6 },
  { name: 'updatedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum updatedBy filter for featureFlag', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
