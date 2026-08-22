'use strict';
// Complete parameter catalog for integration.
const entity='integration';
const parameters=[
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for integration', index: 1 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for integration', index: 1 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for integration', index: 1 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for integration', index: 1 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for integration', index: 1 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for integration', index: 1 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for integration', index: 1 },
  { name: 'provider', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'provider parameter for integration', index: 2 },
  { name: 'provider', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'provider parameter for integration', index: 2 },
  { name: 'provider', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'provider parameter for integration', index: 2 },
  { name: 'provider', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'provider parameter for integration', index: 2 },
  { name: 'provider', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'provider parameter for integration', index: 2 },
  { name: 'providerMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum provider filter for integration', index: 2 },
  { name: 'providerMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum provider filter for integration', index: 2 },
  { name: 'baseUrl', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'baseUrl parameter for integration', index: 3 },
  { name: 'baseUrl', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'baseUrl parameter for integration', index: 3 },
  { name: 'baseUrl', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'baseUrl parameter for integration', index: 3 },
  { name: 'baseUrl', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'baseUrl parameter for integration', index: 3 },
  { name: 'baseUrl', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'baseUrl parameter for integration', index: 3 },
  { name: 'baseUrlMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum baseUrl filter for integration', index: 3 },
  { name: 'baseUrlMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum baseUrl filter for integration', index: 3 },
  { name: 'credentialsRef', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'credentialsRef parameter for integration', index: 4 },
  { name: 'credentialsRef', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'credentialsRef parameter for integration', index: 4 },
  { name: 'credentialsRef', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'credentialsRef parameter for integration', index: 4 },
  { name: 'credentialsRef', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'credentialsRef parameter for integration', index: 4 },
  { name: 'credentialsRef', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'credentialsRef parameter for integration', index: 4 },
  { name: 'credentialsRefMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum credentialsRef filter for integration', index: 4 },
  { name: 'credentialsRefMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum credentialsRef filter for integration', index: 4 },
  { name: 'events', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'events parameter for integration', index: 5 },
  { name: 'events', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'events parameter for integration', index: 5 },
  { name: 'events', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'events parameter for integration', index: 5 },
  { name: 'events', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'events parameter for integration', index: 5 },
  { name: 'events', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'events parameter for integration', index: 5 },
  { name: 'eventsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum events filter for integration', index: 5 },
  { name: 'eventsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum events filter for integration', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for integration', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for integration', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for integration', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for integration', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for integration', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for integration', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for integration', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
