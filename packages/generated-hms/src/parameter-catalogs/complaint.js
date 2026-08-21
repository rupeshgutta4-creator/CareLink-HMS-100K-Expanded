'use strict';
// Complete parameter catalog for complaint.
const entity='complaint';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for complaint', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for complaint', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for complaint', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for complaint', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for complaint', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for complaint', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for complaint', index: 1 },
  { name: 'category', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'category parameter for complaint', index: 2 },
  { name: 'category', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'category parameter for complaint', index: 2 },
  { name: 'category', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'category parameter for complaint', index: 2 },
  { name: 'category', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'category parameter for complaint', index: 2 },
  { name: 'category', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'category parameter for complaint', index: 2 },
  { name: 'categoryMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum category filter for complaint', index: 2 },
  { name: 'categoryMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum category filter for complaint', index: 2 },
  { name: 'description', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for complaint', index: 3 },
  { name: 'description', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for complaint', index: 3 },
  { name: 'description', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for complaint', index: 3 },
  { name: 'description', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for complaint', index: 3 },
  { name: 'description', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for complaint', index: 3 },
  { name: 'descriptionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum description filter for complaint', index: 3 },
  { name: 'descriptionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum description filter for complaint', index: 3 },
  { name: 'submittedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'submittedAt parameter for complaint', index: 4 },
  { name: 'submittedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'submittedAt parameter for complaint', index: 4 },
  { name: 'submittedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'submittedAt parameter for complaint', index: 4 },
  { name: 'submittedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'submittedAt parameter for complaint', index: 4 },
  { name: 'submittedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'submittedAt parameter for complaint', index: 4 },
  { name: 'submittedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum submittedAt filter for complaint', index: 4 },
  { name: 'submittedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum submittedAt filter for complaint', index: 4 },
  { name: 'assignedTo', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'assignedTo parameter for complaint', index: 5 },
  { name: 'assignedTo', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'assignedTo parameter for complaint', index: 5 },
  { name: 'assignedTo', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'assignedTo parameter for complaint', index: 5 },
  { name: 'assignedTo', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'assignedTo parameter for complaint', index: 5 },
  { name: 'assignedTo', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'assignedTo parameter for complaint', index: 5 },
  { name: 'assignedToMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum assignedTo filter for complaint', index: 5 },
  { name: 'assignedToMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum assignedTo filter for complaint', index: 5 },
  { name: 'resolution', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'resolution parameter for complaint', index: 6 },
  { name: 'resolution', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'resolution parameter for complaint', index: 6 },
  { name: 'resolution', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'resolution parameter for complaint', index: 6 },
  { name: 'resolution', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'resolution parameter for complaint', index: 6 },
  { name: 'resolution', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'resolution parameter for complaint', index: 6 },
  { name: 'resolutionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum resolution filter for complaint', index: 6 },
  { name: 'resolutionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum resolution filter for complaint', index: 6 },
  { name: 'resolvedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'resolvedAt parameter for complaint', index: 7 },
  { name: 'resolvedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'resolvedAt parameter for complaint', index: 7 },
  { name: 'resolvedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'resolvedAt parameter for complaint', index: 7 },
  { name: 'resolvedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'resolvedAt parameter for complaint', index: 7 },
  { name: 'resolvedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'resolvedAt parameter for complaint', index: 7 },
  { name: 'resolvedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum resolvedAt filter for complaint', index: 7 },
  { name: 'resolvedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum resolvedAt filter for complaint', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for complaint', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for complaint', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for complaint', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for complaint', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for complaint', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for complaint', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for complaint', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
