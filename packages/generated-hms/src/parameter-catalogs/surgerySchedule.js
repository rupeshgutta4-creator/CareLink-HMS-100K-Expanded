'use strict';
// Complete parameter catalog for surgerySchedule.
const entity='surgerySchedule';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for surgerySchedule', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for surgerySchedule', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for surgerySchedule', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for surgerySchedule', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for surgerySchedule', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for surgerySchedule', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for surgerySchedule', index: 1 },
  { name: 'doctorId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for surgerySchedule', index: 2 },
  { name: 'doctorId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for surgerySchedule', index: 2 },
  { name: 'doctorId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'doctorId parameter for surgerySchedule', index: 2 },
  { name: 'doctorId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for surgerySchedule', index: 2 },
  { name: 'doctorId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'doctorId parameter for surgerySchedule', index: 2 },
  { name: 'doctorIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum doctorId filter for surgerySchedule', index: 2 },
  { name: 'doctorIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum doctorId filter for surgerySchedule', index: 2 },
  { name: 'operatingRoomId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'operatingRoomId parameter for surgerySchedule', index: 3 },
  { name: 'operatingRoomId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'operatingRoomId parameter for surgerySchedule', index: 3 },
  { name: 'operatingRoomId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'operatingRoomId parameter for surgerySchedule', index: 3 },
  { name: 'operatingRoomId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'operatingRoomId parameter for surgerySchedule', index: 3 },
  { name: 'operatingRoomId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'operatingRoomId parameter for surgerySchedule', index: 3 },
  { name: 'operatingRoomIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum operatingRoomId filter for surgerySchedule', index: 3 },
  { name: 'operatingRoomIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum operatingRoomId filter for surgerySchedule', index: 3 },
  { name: 'procedureId', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'procedureId parameter for surgerySchedule', index: 4 },
  { name: 'procedureId', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'procedureId parameter for surgerySchedule', index: 4 },
  { name: 'procedureId', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'procedureId parameter for surgerySchedule', index: 4 },
  { name: 'procedureId', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'procedureId parameter for surgerySchedule', index: 4 },
  { name: 'procedureId', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'procedureId parameter for surgerySchedule', index: 4 },
  { name: 'procedureIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum procedureId filter for surgerySchedule', index: 4 },
  { name: 'procedureIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum procedureId filter for surgerySchedule', index: 4 },
  { name: 'scheduledAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scheduledAt parameter for surgerySchedule', index: 5 },
  { name: 'scheduledAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scheduledAt parameter for surgerySchedule', index: 5 },
  { name: 'scheduledAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'scheduledAt parameter for surgerySchedule', index: 5 },
  { name: 'scheduledAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'scheduledAt parameter for surgerySchedule', index: 5 },
  { name: 'scheduledAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'scheduledAt parameter for surgerySchedule', index: 5 },
  { name: 'scheduledAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum scheduledAt filter for surgerySchedule', index: 5 },
  { name: 'scheduledAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum scheduledAt filter for surgerySchedule', index: 5 },
  { name: 'durationMinutes', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'durationMinutes parameter for surgerySchedule', index: 6 },
  { name: 'durationMinutes', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'durationMinutes parameter for surgerySchedule', index: 6 },
  { name: 'durationMinutes', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'durationMinutes parameter for surgerySchedule', index: 6 },
  { name: 'durationMinutes', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'durationMinutes parameter for surgerySchedule', index: 6 },
  { name: 'durationMinutes', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'durationMinutes parameter for surgerySchedule', index: 6 },
  { name: 'durationMinutesMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum durationMinutes filter for surgerySchedule', index: 6 },
  { name: 'durationMinutesMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum durationMinutes filter for surgerySchedule', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for surgerySchedule', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for surgerySchedule', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for surgerySchedule', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for surgerySchedule', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for surgerySchedule', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for surgerySchedule', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for surgerySchedule', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
