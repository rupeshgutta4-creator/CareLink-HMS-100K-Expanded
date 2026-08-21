'use strict';
// Complete parameter catalog for healthMetric.
const entity='healthMetric';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for healthMetric', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for healthMetric', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for healthMetric', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for healthMetric', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for healthMetric', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for healthMetric', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for healthMetric', index: 1 },
  { name: 'metric', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'metric parameter for healthMetric', index: 2 },
  { name: 'metric', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'metric parameter for healthMetric', index: 2 },
  { name: 'metric', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'metric parameter for healthMetric', index: 2 },
  { name: 'metric', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'metric parameter for healthMetric', index: 2 },
  { name: 'metric', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'metric parameter for healthMetric', index: 2 },
  { name: 'metricMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum metric filter for healthMetric', index: 2 },
  { name: 'metricMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum metric filter for healthMetric', index: 2 },
  { name: 'value', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'value parameter for healthMetric', index: 3 },
  { name: 'value', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'value parameter for healthMetric', index: 3 },
  { name: 'value', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'value parameter for healthMetric', index: 3 },
  { name: 'value', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'value parameter for healthMetric', index: 3 },
  { name: 'value', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'value parameter for healthMetric', index: 3 },
  { name: 'valueMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum value filter for healthMetric', index: 3 },
  { name: 'valueMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum value filter for healthMetric', index: 3 },
  { name: 'unit', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'unit parameter for healthMetric', index: 4 },
  { name: 'unit', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'unit parameter for healthMetric', index: 4 },
  { name: 'unit', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'unit parameter for healthMetric', index: 4 },
  { name: 'unit', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'unit parameter for healthMetric', index: 4 },
  { name: 'unit', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'unit parameter for healthMetric', index: 4 },
  { name: 'unitMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum unit filter for healthMetric', index: 4 },
  { name: 'unitMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum unit filter for healthMetric', index: 4 },
  { name: 'recordedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'recordedAt parameter for healthMetric', index: 5 },
  { name: 'recordedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'recordedAt parameter for healthMetric', index: 5 },
  { name: 'recordedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'recordedAt parameter for healthMetric', index: 5 },
  { name: 'recordedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'recordedAt parameter for healthMetric', index: 5 },
  { name: 'recordedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'recordedAt parameter for healthMetric', index: 5 },
  { name: 'recordedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum recordedAt filter for healthMetric', index: 5 },
  { name: 'recordedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum recordedAt filter for healthMetric', index: 5 },
  { name: 'source', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'source parameter for healthMetric', index: 6 },
  { name: 'source', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'source parameter for healthMetric', index: 6 },
  { name: 'source', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'source parameter for healthMetric', index: 6 },
  { name: 'source', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'source parameter for healthMetric', index: 6 },
  { name: 'source', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'source parameter for healthMetric', index: 6 },
  { name: 'sourceMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum source filter for healthMetric', index: 6 },
  { name: 'sourceMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum source filter for healthMetric', index: 6 },
  { name: 'notes', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for healthMetric', index: 7 },
  { name: 'notes', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for healthMetric', index: 7 },
  { name: 'notes', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'notes parameter for healthMetric', index: 7 },
  { name: 'notes', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for healthMetric', index: 7 },
  { name: 'notes', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'notes parameter for healthMetric', index: 7 },
  { name: 'notesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum notes filter for healthMetric', index: 7 },
  { name: 'notesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum notes filter for healthMetric', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
