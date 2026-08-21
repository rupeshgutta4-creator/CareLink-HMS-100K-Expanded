'use strict';
// Complete parameter catalog for bedTransfer.
const entity='bedTransfer';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for bedTransfer', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for bedTransfer', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for bedTransfer', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for bedTransfer', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for bedTransfer', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for bedTransfer', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for bedTransfer', index: 1 },
  { name: 'fromBedId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fromBedId parameter for bedTransfer', index: 2 },
  { name: 'fromBedId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fromBedId parameter for bedTransfer', index: 2 },
  { name: 'fromBedId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'fromBedId parameter for bedTransfer', index: 2 },
  { name: 'fromBedId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fromBedId parameter for bedTransfer', index: 2 },
  { name: 'fromBedId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'fromBedId parameter for bedTransfer', index: 2 },
  { name: 'fromBedIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum fromBedId filter for bedTransfer', index: 2 },
  { name: 'fromBedIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum fromBedId filter for bedTransfer', index: 2 },
  { name: 'toBedId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'toBedId parameter for bedTransfer', index: 3 },
  { name: 'toBedId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'toBedId parameter for bedTransfer', index: 3 },
  { name: 'toBedId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'toBedId parameter for bedTransfer', index: 3 },
  { name: 'toBedId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'toBedId parameter for bedTransfer', index: 3 },
  { name: 'toBedId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'toBedId parameter for bedTransfer', index: 3 },
  { name: 'toBedIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum toBedId filter for bedTransfer', index: 3 },
  { name: 'toBedIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum toBedId filter for bedTransfer', index: 3 },
  { name: 'requestedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'requestedAt parameter for bedTransfer', index: 4 },
  { name: 'requestedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'requestedAt parameter for bedTransfer', index: 4 },
  { name: 'requestedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'requestedAt parameter for bedTransfer', index: 4 },
  { name: 'requestedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'requestedAt parameter for bedTransfer', index: 4 },
  { name: 'requestedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'requestedAt parameter for bedTransfer', index: 4 },
  { name: 'requestedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum requestedAt filter for bedTransfer', index: 4 },
  { name: 'requestedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum requestedAt filter for bedTransfer', index: 4 },
  { name: 'completedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for bedTransfer', index: 5 },
  { name: 'completedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for bedTransfer', index: 5 },
  { name: 'completedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for bedTransfer', index: 5 },
  { name: 'completedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for bedTransfer', index: 5 },
  { name: 'completedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for bedTransfer', index: 5 },
  { name: 'completedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum completedAt filter for bedTransfer', index: 5 },
  { name: 'completedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum completedAt filter for bedTransfer', index: 5 },
  { name: 'reason', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for bedTransfer', index: 6 },
  { name: 'reason', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for bedTransfer', index: 6 },
  { name: 'reason', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reason parameter for bedTransfer', index: 6 },
  { name: 'reason', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for bedTransfer', index: 6 },
  { name: 'reason', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reason parameter for bedTransfer', index: 6 },
  { name: 'reasonMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum reason filter for bedTransfer', index: 6 },
  { name: 'reasonMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum reason filter for bedTransfer', index: 6 },
  { name: 'approvedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'approvedBy parameter for bedTransfer', index: 7 },
  { name: 'approvedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'approvedBy parameter for bedTransfer', index: 7 },
  { name: 'approvedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'approvedBy parameter for bedTransfer', index: 7 },
  { name: 'approvedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'approvedBy parameter for bedTransfer', index: 7 },
  { name: 'approvedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'approvedBy parameter for bedTransfer', index: 7 },
  { name: 'approvedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum approvedBy filter for bedTransfer', index: 7 },
  { name: 'approvedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum approvedBy filter for bedTransfer', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for bedTransfer', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for bedTransfer', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for bedTransfer', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for bedTransfer', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for bedTransfer', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for bedTransfer', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for bedTransfer', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
