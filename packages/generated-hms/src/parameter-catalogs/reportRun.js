'use strict';
// Complete parameter catalog for reportRun.
const entity='reportRun';
const parameters=[
  { name: 'reportId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'reportId parameter for reportRun', index: 1 },
  { name: 'reportId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'reportId parameter for reportRun', index: 1 },
  { name: 'reportId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'reportId parameter for reportRun', index: 1 },
  { name: 'reportId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'reportId parameter for reportRun', index: 1 },
  { name: 'reportId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'reportId parameter for reportRun', index: 1 },
  { name: 'reportIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum reportId filter for reportRun', index: 1 },
  { name: 'reportIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum reportId filter for reportRun', index: 1 },
  { name: 'requestedBy', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'requestedBy parameter for reportRun', index: 2 },
  { name: 'requestedBy', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'requestedBy parameter for reportRun', index: 2 },
  { name: 'requestedBy', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'requestedBy parameter for reportRun', index: 2 },
  { name: 'requestedBy', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'requestedBy parameter for reportRun', index: 2 },
  { name: 'requestedBy', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'requestedBy parameter for reportRun', index: 2 },
  { name: 'requestedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum requestedBy filter for reportRun', index: 2 },
  { name: 'requestedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum requestedBy filter for reportRun', index: 2 },
  { name: 'parameters', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'parameters parameter for reportRun', index: 3 },
  { name: 'parameters', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'parameters parameter for reportRun', index: 3 },
  { name: 'parameters', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'parameters parameter for reportRun', index: 3 },
  { name: 'parameters', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'parameters parameter for reportRun', index: 3 },
  { name: 'parameters', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'parameters parameter for reportRun', index: 3 },
  { name: 'parametersMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum parameters filter for reportRun', index: 3 },
  { name: 'parametersMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum parameters filter for reportRun', index: 3 },
  { name: 'startedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startedAt parameter for reportRun', index: 4 },
  { name: 'startedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startedAt parameter for reportRun', index: 4 },
  { name: 'startedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'startedAt parameter for reportRun', index: 4 },
  { name: 'startedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startedAt parameter for reportRun', index: 4 },
  { name: 'startedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'startedAt parameter for reportRun', index: 4 },
  { name: 'startedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum startedAt filter for reportRun', index: 4 },
  { name: 'startedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum startedAt filter for reportRun', index: 4 },
  { name: 'completedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for reportRun', index: 5 },
  { name: 'completedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for reportRun', index: 5 },
  { name: 'completedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for reportRun', index: 5 },
  { name: 'completedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for reportRun', index: 5 },
  { name: 'completedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for reportRun', index: 5 },
  { name: 'completedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum completedAt filter for reportRun', index: 5 },
  { name: 'completedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum completedAt filter for reportRun', index: 5 },
  { name: 'fileKey', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'fileKey parameter for reportRun', index: 6 },
  { name: 'fileKey', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'fileKey parameter for reportRun', index: 6 },
  { name: 'fileKey', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'fileKey parameter for reportRun', index: 6 },
  { name: 'fileKey', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'fileKey parameter for reportRun', index: 6 },
  { name: 'fileKey', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'fileKey parameter for reportRun', index: 6 },
  { name: 'fileKeyMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum fileKey filter for reportRun', index: 6 },
  { name: 'fileKeyMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum fileKey filter for reportRun', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for reportRun', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for reportRun', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for reportRun', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for reportRun', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for reportRun', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for reportRun', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for reportRun', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
