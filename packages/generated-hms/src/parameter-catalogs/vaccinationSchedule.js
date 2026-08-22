'use strict';
// Complete parameter catalog for vaccinationSchedule.
const entity='vaccinationSchedule';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for vaccinationSchedule', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for vaccinationSchedule', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for vaccinationSchedule', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for vaccinationSchedule', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for vaccinationSchedule', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for vaccinationSchedule', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for vaccinationSchedule', index: 1 },
  { name: 'vaccineCode', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'vaccineCode parameter for vaccinationSchedule', index: 2 },
  { name: 'vaccineCode', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'vaccineCode parameter for vaccinationSchedule', index: 2 },
  { name: 'vaccineCode', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'vaccineCode parameter for vaccinationSchedule', index: 2 },
  { name: 'vaccineCode', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'vaccineCode parameter for vaccinationSchedule', index: 2 },
  { name: 'vaccineCode', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'vaccineCode parameter for vaccinationSchedule', index: 2 },
  { name: 'vaccineCodeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum vaccineCode filter for vaccinationSchedule', index: 2 },
  { name: 'vaccineCodeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum vaccineCode filter for vaccinationSchedule', index: 2 },
  { name: 'dueDate', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'dueDate parameter for vaccinationSchedule', index: 3 },
  { name: 'dueDate', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'dueDate parameter for vaccinationSchedule', index: 3 },
  { name: 'dueDate', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'dueDate parameter for vaccinationSchedule', index: 3 },
  { name: 'dueDate', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'dueDate parameter for vaccinationSchedule', index: 3 },
  { name: 'dueDate', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'dueDate parameter for vaccinationSchedule', index: 3 },
  { name: 'dueDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum dueDate filter for vaccinationSchedule', index: 3 },
  { name: 'dueDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum dueDate filter for vaccinationSchedule', index: 3 },
  { name: 'doseNumber', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'doseNumber parameter for vaccinationSchedule', index: 4 },
  { name: 'doseNumber', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'doseNumber parameter for vaccinationSchedule', index: 4 },
  { name: 'doseNumber', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'doseNumber parameter for vaccinationSchedule', index: 4 },
  { name: 'doseNumber', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'doseNumber parameter for vaccinationSchedule', index: 4 },
  { name: 'doseNumber', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'doseNumber parameter for vaccinationSchedule', index: 4 },
  { name: 'doseNumberMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum doseNumber filter for vaccinationSchedule', index: 4 },
  { name: 'doseNumberMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum doseNumber filter for vaccinationSchedule', index: 4 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for vaccinationSchedule', index: 5 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for vaccinationSchedule', index: 5 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for vaccinationSchedule', index: 5 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for vaccinationSchedule', index: 5 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for vaccinationSchedule', index: 5 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for vaccinationSchedule', index: 5 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for vaccinationSchedule', index: 5 },
  { name: 'reminderSentAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reminderSentAt parameter for vaccinationSchedule', index: 6 },
  { name: 'reminderSentAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reminderSentAt parameter for vaccinationSchedule', index: 6 },
  { name: 'reminderSentAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reminderSentAt parameter for vaccinationSchedule', index: 6 },
  { name: 'reminderSentAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reminderSentAt parameter for vaccinationSchedule', index: 6 },
  { name: 'reminderSentAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reminderSentAt parameter for vaccinationSchedule', index: 6 },
  { name: 'reminderSentAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum reminderSentAt filter for vaccinationSchedule', index: 6 },
  { name: 'reminderSentAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum reminderSentAt filter for vaccinationSchedule', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
