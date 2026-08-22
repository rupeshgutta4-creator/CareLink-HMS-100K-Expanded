'use strict';
// Complete parameter catalog for allergy.
const entity='allergy';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for allergy', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for allergy', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for allergy', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for allergy', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for allergy', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for allergy', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for allergy', index: 1 },
  { name: 'substance', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'substance parameter for allergy', index: 2 },
  { name: 'substance', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'substance parameter for allergy', index: 2 },
  { name: 'substance', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'substance parameter for allergy', index: 2 },
  { name: 'substance', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'substance parameter for allergy', index: 2 },
  { name: 'substance', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'substance parameter for allergy', index: 2 },
  { name: 'substanceMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum substance filter for allergy', index: 2 },
  { name: 'substanceMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum substance filter for allergy', index: 2 },
  { name: 'reaction', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'reaction parameter for allergy', index: 3 },
  { name: 'reaction', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'reaction parameter for allergy', index: 3 },
  { name: 'reaction', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'reaction parameter for allergy', index: 3 },
  { name: 'reaction', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'reaction parameter for allergy', index: 3 },
  { name: 'reaction', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'reaction parameter for allergy', index: 3 },
  { name: 'reactionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum reaction filter for allergy', index: 3 },
  { name: 'reactionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum reaction filter for allergy', index: 3 },
  { name: 'severity', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'severity parameter for allergy', index: 4 },
  { name: 'severity', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'severity parameter for allergy', index: 4 },
  { name: 'severity', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'severity parameter for allergy', index: 4 },
  { name: 'severity', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'severity parameter for allergy', index: 4 },
  { name: 'severity', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'severity parameter for allergy', index: 4 },
  { name: 'severityMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum severity filter for allergy', index: 4 },
  { name: 'severityMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum severity filter for allergy', index: 4 },
  { name: 'onsetDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'onsetDate parameter for allergy', index: 5 },
  { name: 'onsetDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'onsetDate parameter for allergy', index: 5 },
  { name: 'onsetDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'onsetDate parameter for allergy', index: 5 },
  { name: 'onsetDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'onsetDate parameter for allergy', index: 5 },
  { name: 'onsetDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'onsetDate parameter for allergy', index: 5 },
  { name: 'onsetDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum onsetDate filter for allergy', index: 5 },
  { name: 'onsetDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum onsetDate filter for allergy', index: 5 },
  { name: 'verifiedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'verifiedBy parameter for allergy', index: 6 },
  { name: 'verifiedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'verifiedBy parameter for allergy', index: 6 },
  { name: 'verifiedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'verifiedBy parameter for allergy', index: 6 },
  { name: 'verifiedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'verifiedBy parameter for allergy', index: 6 },
  { name: 'verifiedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'verifiedBy parameter for allergy', index: 6 },
  { name: 'verifiedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum verifiedBy filter for allergy', index: 6 },
  { name: 'verifiedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum verifiedBy filter for allergy', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for allergy', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for allergy', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for allergy', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for allergy', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for allergy', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for allergy', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for allergy', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
