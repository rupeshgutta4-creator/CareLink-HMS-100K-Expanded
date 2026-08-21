'use strict';
// Complete parameter catalog for followUp.
const entity='followUp';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for followUp', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for followUp', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for followUp', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for followUp', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for followUp', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for followUp', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for followUp', index: 1 },
  { name: 'doctorId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for followUp', index: 2 },
  { name: 'doctorId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for followUp', index: 2 },
  { name: 'doctorId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'doctorId parameter for followUp', index: 2 },
  { name: 'doctorId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for followUp', index: 2 },
  { name: 'doctorId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'doctorId parameter for followUp', index: 2 },
  { name: 'doctorIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum doctorId filter for followUp', index: 2 },
  { name: 'doctorIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum doctorId filter for followUp', index: 2 },
  { name: 'visitId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'visitId parameter for followUp', index: 3 },
  { name: 'visitId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'visitId parameter for followUp', index: 3 },
  { name: 'visitId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'visitId parameter for followUp', index: 3 },
  { name: 'visitId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'visitId parameter for followUp', index: 3 },
  { name: 'visitId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'visitId parameter for followUp', index: 3 },
  { name: 'visitIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum visitId filter for followUp', index: 3 },
  { name: 'visitIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum visitId filter for followUp', index: 3 },
  { name: 'dueDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'dueDate parameter for followUp', index: 4 },
  { name: 'dueDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'dueDate parameter for followUp', index: 4 },
  { name: 'dueDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'dueDate parameter for followUp', index: 4 },
  { name: 'dueDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'dueDate parameter for followUp', index: 4 },
  { name: 'dueDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'dueDate parameter for followUp', index: 4 },
  { name: 'dueDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum dueDate filter for followUp', index: 4 },
  { name: 'dueDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum dueDate filter for followUp', index: 4 },
  { name: 'reason', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for followUp', index: 5 },
  { name: 'reason', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for followUp', index: 5 },
  { name: 'reason', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reason parameter for followUp', index: 5 },
  { name: 'reason', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for followUp', index: 5 },
  { name: 'reason', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reason parameter for followUp', index: 5 },
  { name: 'reasonMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum reason filter for followUp', index: 5 },
  { name: 'reasonMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum reason filter for followUp', index: 5 },
  { name: 'instructions', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'instructions parameter for followUp', index: 6 },
  { name: 'instructions', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'instructions parameter for followUp', index: 6 },
  { name: 'instructions', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'instructions parameter for followUp', index: 6 },
  { name: 'instructions', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'instructions parameter for followUp', index: 6 },
  { name: 'instructions', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'instructions parameter for followUp', index: 6 },
  { name: 'instructionsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum instructions filter for followUp', index: 6 },
  { name: 'instructionsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum instructions filter for followUp', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for followUp', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for followUp', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for followUp', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for followUp', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for followUp', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for followUp', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for followUp', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
