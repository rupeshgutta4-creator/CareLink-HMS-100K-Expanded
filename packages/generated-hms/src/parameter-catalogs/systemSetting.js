'use strict';
// Complete parameter catalog for systemSetting.
const entity='systemSetting';
const parameters=[
  { name: 'key', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'key parameter for systemSetting', index: 1 },
  { name: 'key', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'key parameter for systemSetting', index: 1 },
  { name: 'key', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'key parameter for systemSetting', index: 1 },
  { name: 'key', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'key parameter for systemSetting', index: 1 },
  { name: 'key', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'key parameter for systemSetting', index: 1 },
  { name: 'keyMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum key filter for systemSetting', index: 1 },
  { name: 'keyMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum key filter for systemSetting', index: 1 },
  { name: 'value', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'value parameter for systemSetting', index: 2 },
  { name: 'value', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'value parameter for systemSetting', index: 2 },
  { name: 'value', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'value parameter for systemSetting', index: 2 },
  { name: 'value', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'value parameter for systemSetting', index: 2 },
  { name: 'value', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'value parameter for systemSetting', index: 2 },
  { name: 'valueMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum value filter for systemSetting', index: 2 },
  { name: 'valueMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum value filter for systemSetting', index: 2 },
  { name: 'type', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for systemSetting', index: 3 },
  { name: 'type', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for systemSetting', index: 3 },
  { name: 'type', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for systemSetting', index: 3 },
  { name: 'type', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for systemSetting', index: 3 },
  { name: 'type', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for systemSetting', index: 3 },
  { name: 'typeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum type filter for systemSetting', index: 3 },
  { name: 'typeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum type filter for systemSetting', index: 3 },
  { name: 'description', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'description parameter for systemSetting', index: 4 },
  { name: 'description', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'description parameter for systemSetting', index: 4 },
  { name: 'description', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'description parameter for systemSetting', index: 4 },
  { name: 'description', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'description parameter for systemSetting', index: 4 },
  { name: 'description', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'description parameter for systemSetting', index: 4 },
  { name: 'descriptionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum description filter for systemSetting', index: 4 },
  { name: 'descriptionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum description filter for systemSetting', index: 4 },
  { name: 'scope', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scope parameter for systemSetting', index: 5 },
  { name: 'scope', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scope parameter for systemSetting', index: 5 },
  { name: 'scope', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'scope parameter for systemSetting', index: 5 },
  { name: 'scope', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scope parameter for systemSetting', index: 5 },
  { name: 'scope', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'scope parameter for systemSetting', index: 5 },
  { name: 'scopeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum scope filter for systemSetting', index: 5 },
  { name: 'scopeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum scope filter for systemSetting', index: 5 },
  { name: 'updatedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'updatedBy parameter for systemSetting', index: 6 },
  { name: 'updatedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'updatedBy parameter for systemSetting', index: 6 },
  { name: 'updatedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'updatedBy parameter for systemSetting', index: 6 },
  { name: 'updatedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'updatedBy parameter for systemSetting', index: 6 },
  { name: 'updatedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'updatedBy parameter for systemSetting', index: 6 },
  { name: 'updatedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum updatedBy filter for systemSetting', index: 6 },
  { name: 'updatedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum updatedBy filter for systemSetting', index: 6 },
  { name: 'updatedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'updatedAt parameter for systemSetting', index: 7 },
  { name: 'updatedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'updatedAt parameter for systemSetting', index: 7 },
  { name: 'updatedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'updatedAt parameter for systemSetting', index: 7 },
  { name: 'updatedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'updatedAt parameter for systemSetting', index: 7 },
  { name: 'updatedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'updatedAt parameter for systemSetting', index: 7 },
  { name: 'updatedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum updatedAt filter for systemSetting', index: 7 },
  { name: 'updatedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum updatedAt filter for systemSetting', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
