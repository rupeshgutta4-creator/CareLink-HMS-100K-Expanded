'use strict';
// Complete parameter catalog for careTeam.
const entity='careTeam';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for careTeam', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for careTeam', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for careTeam', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for careTeam', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for careTeam', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for careTeam', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for careTeam', index: 1 },
  { name: 'staffId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for careTeam', index: 2 },
  { name: 'staffId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for careTeam', index: 2 },
  { name: 'staffId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'staffId parameter for careTeam', index: 2 },
  { name: 'staffId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for careTeam', index: 2 },
  { name: 'staffId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'staffId parameter for careTeam', index: 2 },
  { name: 'staffIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum staffId filter for careTeam', index: 2 },
  { name: 'staffIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum staffId filter for careTeam', index: 2 },
  { name: 'role', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'role parameter for careTeam', index: 3 },
  { name: 'role', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'role parameter for careTeam', index: 3 },
  { name: 'role', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'role parameter for careTeam', index: 3 },
  { name: 'role', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'role parameter for careTeam', index: 3 },
  { name: 'role', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'role parameter for careTeam', index: 3 },
  { name: 'roleMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum role filter for careTeam', index: 3 },
  { name: 'roleMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum role filter for careTeam', index: 3 },
  { name: 'startDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startDate parameter for careTeam', index: 4 },
  { name: 'startDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startDate parameter for careTeam', index: 4 },
  { name: 'startDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'startDate parameter for careTeam', index: 4 },
  { name: 'startDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startDate parameter for careTeam', index: 4 },
  { name: 'startDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'startDate parameter for careTeam', index: 4 },
  { name: 'startDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum startDate filter for careTeam', index: 4 },
  { name: 'startDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum startDate filter for careTeam', index: 4 },
  { name: 'endDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endDate parameter for careTeam', index: 5 },
  { name: 'endDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endDate parameter for careTeam', index: 5 },
  { name: 'endDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'endDate parameter for careTeam', index: 5 },
  { name: 'endDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endDate parameter for careTeam', index: 5 },
  { name: 'endDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'endDate parameter for careTeam', index: 5 },
  { name: 'endDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum endDate filter for careTeam', index: 5 },
  { name: 'endDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum endDate filter for careTeam', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for careTeam', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for careTeam', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for careTeam', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for careTeam', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for careTeam', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for careTeam', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for careTeam', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
