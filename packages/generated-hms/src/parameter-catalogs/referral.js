'use strict';
// Complete parameter catalog for referral.
const entity='referral';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for referral', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for referral', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for referral', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for referral', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for referral', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for referral', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for referral', index: 1 },
  { name: 'fromDoctorId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fromDoctorId parameter for referral', index: 2 },
  { name: 'fromDoctorId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fromDoctorId parameter for referral', index: 2 },
  { name: 'fromDoctorId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'fromDoctorId parameter for referral', index: 2 },
  { name: 'fromDoctorId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fromDoctorId parameter for referral', index: 2 },
  { name: 'fromDoctorId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'fromDoctorId parameter for referral', index: 2 },
  { name: 'fromDoctorIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum fromDoctorId filter for referral', index: 2 },
  { name: 'fromDoctorIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum fromDoctorId filter for referral', index: 2 },
  { name: 'toDoctorId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'toDoctorId parameter for referral', index: 3 },
  { name: 'toDoctorId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'toDoctorId parameter for referral', index: 3 },
  { name: 'toDoctorId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'toDoctorId parameter for referral', index: 3 },
  { name: 'toDoctorId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'toDoctorId parameter for referral', index: 3 },
  { name: 'toDoctorId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'toDoctorId parameter for referral', index: 3 },
  { name: 'toDoctorIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum toDoctorId filter for referral', index: 3 },
  { name: 'toDoctorIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum toDoctorId filter for referral', index: 3 },
  { name: 'specialty', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'specialty parameter for referral', index: 4 },
  { name: 'specialty', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'specialty parameter for referral', index: 4 },
  { name: 'specialty', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'specialty parameter for referral', index: 4 },
  { name: 'specialty', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'specialty parameter for referral', index: 4 },
  { name: 'specialty', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'specialty parameter for referral', index: 4 },
  { name: 'specialtyMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum specialty filter for referral', index: 4 },
  { name: 'specialtyMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum specialty filter for referral', index: 4 },
  { name: 'reason', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for referral', index: 5 },
  { name: 'reason', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for referral', index: 5 },
  { name: 'reason', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reason parameter for referral', index: 5 },
  { name: 'reason', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for referral', index: 5 },
  { name: 'reason', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reason parameter for referral', index: 5 },
  { name: 'reasonMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum reason filter for referral', index: 5 },
  { name: 'reasonMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum reason filter for referral', index: 5 },
  { name: 'referredAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'referredAt parameter for referral', index: 6 },
  { name: 'referredAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'referredAt parameter for referral', index: 6 },
  { name: 'referredAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'referredAt parameter for referral', index: 6 },
  { name: 'referredAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'referredAt parameter for referral', index: 6 },
  { name: 'referredAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'referredAt parameter for referral', index: 6 },
  { name: 'referredAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum referredAt filter for referral', index: 6 },
  { name: 'referredAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum referredAt filter for referral', index: 6 },
  { name: 'acceptedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'acceptedAt parameter for referral', index: 7 },
  { name: 'acceptedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'acceptedAt parameter for referral', index: 7 },
  { name: 'acceptedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'acceptedAt parameter for referral', index: 7 },
  { name: 'acceptedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'acceptedAt parameter for referral', index: 7 },
  { name: 'acceptedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'acceptedAt parameter for referral', index: 7 },
  { name: 'acceptedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum acceptedAt filter for referral', index: 7 },
  { name: 'acceptedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum acceptedAt filter for referral', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for referral', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for referral', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for referral', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for referral', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for referral', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for referral', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for referral', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
