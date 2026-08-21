'use strict';
// Complete parameter catalog for nursingTask.
const entity='nursingTask';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for nursingTask', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for nursingTask', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for nursingTask', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for nursingTask', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for nursingTask', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for nursingTask', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for nursingTask', index: 1 },
  { name: 'staffId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for nursingTask', index: 2 },
  { name: 'staffId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for nursingTask', index: 2 },
  { name: 'staffId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'staffId parameter for nursingTask', index: 2 },
  { name: 'staffId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for nursingTask', index: 2 },
  { name: 'staffId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'staffId parameter for nursingTask', index: 2 },
  { name: 'staffIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum staffId filter for nursingTask', index: 2 },
  { name: 'staffIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum staffId filter for nursingTask', index: 2 },
  { name: 'type', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for nursingTask', index: 3 },
  { name: 'type', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for nursingTask', index: 3 },
  { name: 'type', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for nursingTask', index: 3 },
  { name: 'type', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for nursingTask', index: 3 },
  { name: 'type', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for nursingTask', index: 3 },
  { name: 'typeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum type filter for nursingTask', index: 3 },
  { name: 'typeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum type filter for nursingTask', index: 3 },
  { name: 'scheduledAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scheduledAt parameter for nursingTask', index: 4 },
  { name: 'scheduledAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scheduledAt parameter for nursingTask', index: 4 },
  { name: 'scheduledAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'scheduledAt parameter for nursingTask', index: 4 },
  { name: 'scheduledAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scheduledAt parameter for nursingTask', index: 4 },
  { name: 'scheduledAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'scheduledAt parameter for nursingTask', index: 4 },
  { name: 'scheduledAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum scheduledAt filter for nursingTask', index: 4 },
  { name: 'scheduledAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum scheduledAt filter for nursingTask', index: 4 },
  { name: 'completedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for nursingTask', index: 5 },
  { name: 'completedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for nursingTask', index: 5 },
  { name: 'completedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for nursingTask', index: 5 },
  { name: 'completedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for nursingTask', index: 5 },
  { name: 'completedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for nursingTask', index: 5 },
  { name: 'completedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum completedAt filter for nursingTask', index: 5 },
  { name: 'completedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum completedAt filter for nursingTask', index: 5 },
  { name: 'priority', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'priority parameter for nursingTask', index: 6 },
  { name: 'priority', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'priority parameter for nursingTask', index: 6 },
  { name: 'priority', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'priority parameter for nursingTask', index: 6 },
  { name: 'priority', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'priority parameter for nursingTask', index: 6 },
  { name: 'priority', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'priority parameter for nursingTask', index: 6 },
  { name: 'priorityMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum priority filter for nursingTask', index: 6 },
  { name: 'priorityMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum priority filter for nursingTask', index: 6 },
  { name: 'notes', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for nursingTask', index: 7 },
  { name: 'notes', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for nursingTask', index: 7 },
  { name: 'notes', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'notes parameter for nursingTask', index: 7 },
  { name: 'notes', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for nursingTask', index: 7 },
  { name: 'notes', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'notes parameter for nursingTask', index: 7 },
  { name: 'notesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum notes filter for nursingTask', index: 7 },
  { name: 'notesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum notes filter for nursingTask', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for nursingTask', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for nursingTask', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for nursingTask', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for nursingTask', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for nursingTask', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for nursingTask', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for nursingTask', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
