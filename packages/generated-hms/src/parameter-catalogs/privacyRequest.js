'use strict';
// Complete parameter catalog for privacyRequest.
const entity='privacyRequest';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for privacyRequest', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for privacyRequest', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for privacyRequest', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for privacyRequest', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for privacyRequest', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for privacyRequest', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for privacyRequest', index: 1 },
  { name: 'type', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for privacyRequest', index: 2 },
  { name: 'type', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for privacyRequest', index: 2 },
  { name: 'type', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for privacyRequest', index: 2 },
  { name: 'type', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for privacyRequest', index: 2 },
  { name: 'type', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for privacyRequest', index: 2 },
  { name: 'typeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum type filter for privacyRequest', index: 2 },
  { name: 'typeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum type filter for privacyRequest', index: 2 },
  { name: 'requestedAt', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'requestedAt parameter for privacyRequest', index: 3 },
  { name: 'requestedAt', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'requestedAt parameter for privacyRequest', index: 3 },
  { name: 'requestedAt', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'requestedAt parameter for privacyRequest', index: 3 },
  { name: 'requestedAt', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'requestedAt parameter for privacyRequest', index: 3 },
  { name: 'requestedAt', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'requestedAt parameter for privacyRequest', index: 3 },
  { name: 'requestedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum requestedAt filter for privacyRequest', index: 3 },
  { name: 'requestedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum requestedAt filter for privacyRequest', index: 3 },
  { name: 'processedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'processedAt parameter for privacyRequest', index: 4 },
  { name: 'processedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'processedAt parameter for privacyRequest', index: 4 },
  { name: 'processedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'processedAt parameter for privacyRequest', index: 4 },
  { name: 'processedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'processedAt parameter for privacyRequest', index: 4 },
  { name: 'processedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'processedAt parameter for privacyRequest', index: 4 },
  { name: 'processedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum processedAt filter for privacyRequest', index: 4 },
  { name: 'processedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum processedAt filter for privacyRequest', index: 4 },
  { name: 'processedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'processedBy parameter for privacyRequest', index: 5 },
  { name: 'processedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'processedBy parameter for privacyRequest', index: 5 },
  { name: 'processedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'processedBy parameter for privacyRequest', index: 5 },
  { name: 'processedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'processedBy parameter for privacyRequest', index: 5 },
  { name: 'processedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'processedBy parameter for privacyRequest', index: 5 },
  { name: 'processedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum processedBy filter for privacyRequest', index: 5 },
  { name: 'processedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum processedBy filter for privacyRequest', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for privacyRequest', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for privacyRequest', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for privacyRequest', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for privacyRequest', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for privacyRequest', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for privacyRequest', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for privacyRequest', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
