'use strict';
// Complete parameter catalog for consent.
const entity='consent';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for consent', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for consent', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for consent', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for consent', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for consent', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for consent', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for consent', index: 1 },
  { name: 'type', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for consent', index: 2 },
  { name: 'type', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for consent', index: 2 },
  { name: 'type', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for consent', index: 2 },
  { name: 'type', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for consent', index: 2 },
  { name: 'type', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for consent', index: 2 },
  { name: 'typeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum type filter for consent', index: 2 },
  { name: 'typeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum type filter for consent', index: 2 },
  { name: 'version', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'version parameter for consent', index: 3 },
  { name: 'version', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'version parameter for consent', index: 3 },
  { name: 'version', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'version parameter for consent', index: 3 },
  { name: 'version', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'version parameter for consent', index: 3 },
  { name: 'version', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'version parameter for consent', index: 3 },
  { name: 'versionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum version filter for consent', index: 3 },
  { name: 'versionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum version filter for consent', index: 3 },
  { name: 'grantedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'grantedAt parameter for consent', index: 4 },
  { name: 'grantedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'grantedAt parameter for consent', index: 4 },
  { name: 'grantedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'grantedAt parameter for consent', index: 4 },
  { name: 'grantedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'grantedAt parameter for consent', index: 4 },
  { name: 'grantedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'grantedAt parameter for consent', index: 4 },
  { name: 'grantedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum grantedAt filter for consent', index: 4 },
  { name: 'grantedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum grantedAt filter for consent', index: 4 },
  { name: 'revokedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'revokedAt parameter for consent', index: 5 },
  { name: 'revokedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'revokedAt parameter for consent', index: 5 },
  { name: 'revokedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'revokedAt parameter for consent', index: 5 },
  { name: 'revokedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'revokedAt parameter for consent', index: 5 },
  { name: 'revokedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'revokedAt parameter for consent', index: 5 },
  { name: 'revokedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum revokedAt filter for consent', index: 5 },
  { name: 'revokedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum revokedAt filter for consent', index: 5 },
  { name: 'grantedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'grantedBy parameter for consent', index: 6 },
  { name: 'grantedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'grantedBy parameter for consent', index: 6 },
  { name: 'grantedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'grantedBy parameter for consent', index: 6 },
  { name: 'grantedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'grantedBy parameter for consent', index: 6 },
  { name: 'grantedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'grantedBy parameter for consent', index: 6 },
  { name: 'grantedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum grantedBy filter for consent', index: 6 },
  { name: 'grantedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum grantedBy filter for consent', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for consent', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for consent', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for consent', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for consent', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for consent', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for consent', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for consent', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
