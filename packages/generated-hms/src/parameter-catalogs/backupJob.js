'use strict';
// Complete parameter catalog for backupJob.
const entity='backupJob';
const parameters=[
  { name: 'type', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for backupJob', index: 1 },
  { name: 'type', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for backupJob', index: 1 },
  { name: 'type', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for backupJob', index: 1 },
  { name: 'type', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for backupJob', index: 1 },
  { name: 'type', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for backupJob', index: 1 },
  { name: 'typeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum type filter for backupJob', index: 1 },
  { name: 'typeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum type filter for backupJob', index: 1 },
  { name: 'startedAt', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startedAt parameter for backupJob', index: 2 },
  { name: 'startedAt', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startedAt parameter for backupJob', index: 2 },
  { name: 'startedAt', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'startedAt parameter for backupJob', index: 2 },
  { name: 'startedAt', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startedAt parameter for backupJob', index: 2 },
  { name: 'startedAt', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'startedAt parameter for backupJob', index: 2 },
  { name: 'startedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum startedAt filter for backupJob', index: 2 },
  { name: 'startedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum startedAt filter for backupJob', index: 2 },
  { name: 'completedAt', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'completedAt parameter for backupJob', index: 3 },
  { name: 'completedAt', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'completedAt parameter for backupJob', index: 3 },
  { name: 'completedAt', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'completedAt parameter for backupJob', index: 3 },
  { name: 'completedAt', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'completedAt parameter for backupJob', index: 3 },
  { name: 'completedAt', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'completedAt parameter for backupJob', index: 3 },
  { name: 'completedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum completedAt filter for backupJob', index: 3 },
  { name: 'completedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum completedAt filter for backupJob', index: 3 },
  { name: 'sizeBytes', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'sizeBytes parameter for backupJob', index: 4 },
  { name: 'sizeBytes', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'sizeBytes parameter for backupJob', index: 4 },
  { name: 'sizeBytes', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'sizeBytes parameter for backupJob', index: 4 },
  { name: 'sizeBytes', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'sizeBytes parameter for backupJob', index: 4 },
  { name: 'sizeBytes', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'sizeBytes parameter for backupJob', index: 4 },
  { name: 'sizeBytesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum sizeBytes filter for backupJob', index: 4 },
  { name: 'sizeBytesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum sizeBytes filter for backupJob', index: 4 },
  { name: 'storageKey', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageKey parameter for backupJob', index: 5 },
  { name: 'storageKey', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageKey parameter for backupJob', index: 5 },
  { name: 'storageKey', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'storageKey parameter for backupJob', index: 5 },
  { name: 'storageKey', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageKey parameter for backupJob', index: 5 },
  { name: 'storageKey', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'storageKey parameter for backupJob', index: 5 },
  { name: 'storageKeyMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum storageKey filter for backupJob', index: 5 },
  { name: 'storageKeyMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum storageKey filter for backupJob', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for backupJob', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for backupJob', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for backupJob', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for backupJob', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for backupJob', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for backupJob', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for backupJob', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
