'use strict';
// Complete parameter catalog for glucoseReading.
const entity='glucoseReading';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for glucoseReading', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for glucoseReading', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for glucoseReading', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for glucoseReading', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for glucoseReading', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for glucoseReading', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for glucoseReading', index: 1 },
  { name: 'recordedAt', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'recordedAt parameter for glucoseReading', index: 2 },
  { name: 'recordedAt', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'recordedAt parameter for glucoseReading', index: 2 },
  { name: 'recordedAt', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'recordedAt parameter for glucoseReading', index: 2 },
  { name: 'recordedAt', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'recordedAt parameter for glucoseReading', index: 2 },
  { name: 'recordedAt', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'recordedAt parameter for glucoseReading', index: 2 },
  { name: 'recordedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum recordedAt filter for glucoseReading', index: 2 },
  { name: 'recordedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum recordedAt filter for glucoseReading', index: 2 },
  { name: 'value', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'value parameter for glucoseReading', index: 3 },
  { name: 'value', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'value parameter for glucoseReading', index: 3 },
  { name: 'value', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'value parameter for glucoseReading', index: 3 },
  { name: 'value', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'value parameter for glucoseReading', index: 3 },
  { name: 'value', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'value parameter for glucoseReading', index: 3 },
  { name: 'valueMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum value filter for glucoseReading', index: 3 },
  { name: 'valueMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum value filter for glucoseReading', index: 3 },
  { name: 'unit', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'unit parameter for glucoseReading', index: 4 },
  { name: 'unit', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'unit parameter for glucoseReading', index: 4 },
  { name: 'unit', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'unit parameter for glucoseReading', index: 4 },
  { name: 'unit', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'unit parameter for glucoseReading', index: 4 },
  { name: 'unit', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'unit parameter for glucoseReading', index: 4 },
  { name: 'unitMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum unit filter for glucoseReading', index: 4 },
  { name: 'unitMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum unit filter for glucoseReading', index: 4 },
  { name: 'mealContext', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'mealContext parameter for glucoseReading', index: 5 },
  { name: 'mealContext', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'mealContext parameter for glucoseReading', index: 5 },
  { name: 'mealContext', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'mealContext parameter for glucoseReading', index: 5 },
  { name: 'mealContext', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'mealContext parameter for glucoseReading', index: 5 },
  { name: 'mealContext', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'mealContext parameter for glucoseReading', index: 5 },
  { name: 'mealContextMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum mealContext filter for glucoseReading', index: 5 },
  { name: 'mealContextMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum mealContext filter for glucoseReading', index: 5 },
  { name: 'device', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'device parameter for glucoseReading', index: 6 },
  { name: 'device', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'device parameter for glucoseReading', index: 6 },
  { name: 'device', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'device parameter for glucoseReading', index: 6 },
  { name: 'device', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'device parameter for glucoseReading', index: 6 },
  { name: 'device', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'device parameter for glucoseReading', index: 6 },
  { name: 'deviceMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum device filter for glucoseReading', index: 6 },
  { name: 'deviceMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum device filter for glucoseReading', index: 6 },
  { name: 'recordedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'recordedBy parameter for glucoseReading', index: 7 },
  { name: 'recordedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'recordedBy parameter for glucoseReading', index: 7 },
  { name: 'recordedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'recordedBy parameter for glucoseReading', index: 7 },
  { name: 'recordedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'recordedBy parameter for glucoseReading', index: 7 },
  { name: 'recordedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'recordedBy parameter for glucoseReading', index: 7 },
  { name: 'recordedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum recordedBy filter for glucoseReading', index: 7 },
  { name: 'recordedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum recordedBy filter for glucoseReading', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
