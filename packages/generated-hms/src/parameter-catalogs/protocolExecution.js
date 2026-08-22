'use strict';
// Complete parameter catalog for protocolExecution.
const entity='protocolExecution';
const parameters=[
  { name: 'protocolId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'protocolId parameter for protocolExecution', index: 1 },
  { name: 'protocolId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'protocolId parameter for protocolExecution', index: 1 },
  { name: 'protocolId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'protocolId parameter for protocolExecution', index: 1 },
  { name: 'protocolId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'protocolId parameter for protocolExecution', index: 1 },
  { name: 'protocolId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'protocolId parameter for protocolExecution', index: 1 },
  { name: 'protocolIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum protocolId filter for protocolExecution', index: 1 },
  { name: 'protocolIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum protocolId filter for protocolExecution', index: 1 },
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for protocolExecution', index: 2 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for protocolExecution', index: 2 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for protocolExecution', index: 2 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for protocolExecution', index: 2 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for protocolExecution', index: 2 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for protocolExecution', index: 2 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for protocolExecution', index: 2 },
  { name: 'visitId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'visitId parameter for protocolExecution', index: 3 },
  { name: 'visitId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'visitId parameter for protocolExecution', index: 3 },
  { name: 'visitId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'visitId parameter for protocolExecution', index: 3 },
  { name: 'visitId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'visitId parameter for protocolExecution', index: 3 },
  { name: 'visitId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'visitId parameter for protocolExecution', index: 3 },
  { name: 'visitIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum visitId filter for protocolExecution', index: 3 },
  { name: 'visitIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum visitId filter for protocolExecution', index: 3 },
  { name: 'startedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startedAt parameter for protocolExecution', index: 4 },
  { name: 'startedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startedAt parameter for protocolExecution', index: 4 },
  { name: 'startedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'startedAt parameter for protocolExecution', index: 4 },
  { name: 'startedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startedAt parameter for protocolExecution', index: 4 },
  { name: 'startedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'startedAt parameter for protocolExecution', index: 4 },
  { name: 'startedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum startedAt filter for protocolExecution', index: 4 },
  { name: 'startedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum startedAt filter for protocolExecution', index: 4 },
  { name: 'completedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for protocolExecution', index: 5 },
  { name: 'completedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for protocolExecution', index: 5 },
  { name: 'completedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for protocolExecution', index: 5 },
  { name: 'completedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for protocolExecution', index: 5 },
  { name: 'completedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for protocolExecution', index: 5 },
  { name: 'completedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum completedAt filter for protocolExecution', index: 5 },
  { name: 'completedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum completedAt filter for protocolExecution', index: 5 },
  { name: 'stepResults', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'stepResults parameter for protocolExecution', index: 6 },
  { name: 'stepResults', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'stepResults parameter for protocolExecution', index: 6 },
  { name: 'stepResults', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'stepResults parameter for protocolExecution', index: 6 },
  { name: 'stepResults', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'stepResults parameter for protocolExecution', index: 6 },
  { name: 'stepResults', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'stepResults parameter for protocolExecution', index: 6 },
  { name: 'stepResultsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum stepResults filter for protocolExecution', index: 6 },
  { name: 'stepResultsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum stepResults filter for protocolExecution', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for protocolExecution', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for protocolExecution', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for protocolExecution', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for protocolExecution', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for protocolExecution', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for protocolExecution', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for protocolExecution', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
