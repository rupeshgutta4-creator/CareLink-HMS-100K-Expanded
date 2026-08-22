'use strict';
// Complete parameter catalog for patientPortalSession.
const entity='patientPortalSession';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for patientPortalSession', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for patientPortalSession', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for patientPortalSession', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for patientPortalSession', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for patientPortalSession', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for patientPortalSession', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for patientPortalSession', index: 1 },
  { name: 'tokenHash', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'tokenHash parameter for patientPortalSession', index: 2 },
  { name: 'tokenHash', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'tokenHash parameter for patientPortalSession', index: 2 },
  { name: 'tokenHash', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'tokenHash parameter for patientPortalSession', index: 2 },
  { name: 'tokenHash', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'tokenHash parameter for patientPortalSession', index: 2 },
  { name: 'tokenHash', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'tokenHash parameter for patientPortalSession', index: 2 },
  { name: 'tokenHashMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum tokenHash filter for patientPortalSession', index: 2 },
  { name: 'tokenHashMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum tokenHash filter for patientPortalSession', index: 2 },
  { name: 'issuedAt', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'issuedAt parameter for patientPortalSession', index: 3 },
  { name: 'issuedAt', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'issuedAt parameter for patientPortalSession', index: 3 },
  { name: 'issuedAt', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'issuedAt parameter for patientPortalSession', index: 3 },
  { name: 'issuedAt', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'issuedAt parameter for patientPortalSession', index: 3 },
  { name: 'issuedAt', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'issuedAt parameter for patientPortalSession', index: 3 },
  { name: 'issuedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum issuedAt filter for patientPortalSession', index: 3 },
  { name: 'issuedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum issuedAt filter for patientPortalSession', index: 3 },
  { name: 'expiresAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'expiresAt parameter for patientPortalSession', index: 4 },
  { name: 'expiresAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'expiresAt parameter for patientPortalSession', index: 4 },
  { name: 'expiresAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'expiresAt parameter for patientPortalSession', index: 4 },
  { name: 'expiresAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'expiresAt parameter for patientPortalSession', index: 4 },
  { name: 'expiresAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'expiresAt parameter for patientPortalSession', index: 4 },
  { name: 'expiresAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum expiresAt filter for patientPortalSession', index: 4 },
  { name: 'expiresAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum expiresAt filter for patientPortalSession', index: 4 },
  { name: 'ipAddress', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'ipAddress parameter for patientPortalSession', index: 5 },
  { name: 'ipAddress', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'ipAddress parameter for patientPortalSession', index: 5 },
  { name: 'ipAddress', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'ipAddress parameter for patientPortalSession', index: 5 },
  { name: 'ipAddress', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'ipAddress parameter for patientPortalSession', index: 5 },
  { name: 'ipAddress', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'ipAddress parameter for patientPortalSession', index: 5 },
  { name: 'ipAddressMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum ipAddress filter for patientPortalSession', index: 5 },
  { name: 'ipAddressMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum ipAddress filter for patientPortalSession', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for patientPortalSession', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for patientPortalSession', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for patientPortalSession', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for patientPortalSession', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for patientPortalSession', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for patientPortalSession', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for patientPortalSession', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
