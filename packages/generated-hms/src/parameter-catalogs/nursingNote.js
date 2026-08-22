'use strict';
// Complete parameter catalog for nursingNote.
const entity='nursingNote';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for nursingNote', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for nursingNote', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for nursingNote', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for nursingNote', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for nursingNote', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for nursingNote', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for nursingNote', index: 1 },
  { name: 'staffId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for nursingNote', index: 2 },
  { name: 'staffId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for nursingNote', index: 2 },
  { name: 'staffId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'staffId parameter for nursingNote', index: 2 },
  { name: 'staffId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for nursingNote', index: 2 },
  { name: 'staffId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'staffId parameter for nursingNote', index: 2 },
  { name: 'staffIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum staffId filter for nursingNote', index: 2 },
  { name: 'staffIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum staffId filter for nursingNote', index: 2 },
  { name: 'recordedAt', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'recordedAt parameter for nursingNote', index: 3 },
  { name: 'recordedAt', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'recordedAt parameter for nursingNote', index: 3 },
  { name: 'recordedAt', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'recordedAt parameter for nursingNote', index: 3 },
  { name: 'recordedAt', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'recordedAt parameter for nursingNote', index: 3 },
  { name: 'recordedAt', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'recordedAt parameter for nursingNote', index: 3 },
  { name: 'recordedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum recordedAt filter for nursingNote', index: 3 },
  { name: 'recordedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum recordedAt filter for nursingNote', index: 3 },
  { name: 'assessment', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'assessment parameter for nursingNote', index: 4 },
  { name: 'assessment', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'assessment parameter for nursingNote', index: 4 },
  { name: 'assessment', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'assessment parameter for nursingNote', index: 4 },
  { name: 'assessment', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'assessment parameter for nursingNote', index: 4 },
  { name: 'assessment', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'assessment parameter for nursingNote', index: 4 },
  { name: 'assessmentMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum assessment filter for nursingNote', index: 4 },
  { name: 'assessmentMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum assessment filter for nursingNote', index: 4 },
  { name: 'intervention', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'intervention parameter for nursingNote', index: 5 },
  { name: 'intervention', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'intervention parameter for nursingNote', index: 5 },
  { name: 'intervention', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'intervention parameter for nursingNote', index: 5 },
  { name: 'intervention', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'intervention parameter for nursingNote', index: 5 },
  { name: 'intervention', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'intervention parameter for nursingNote', index: 5 },
  { name: 'interventionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum intervention filter for nursingNote', index: 5 },
  { name: 'interventionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum intervention filter for nursingNote', index: 5 },
  { name: 'response', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'response parameter for nursingNote', index: 6 },
  { name: 'response', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'response parameter for nursingNote', index: 6 },
  { name: 'response', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'response parameter for nursingNote', index: 6 },
  { name: 'response', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'response parameter for nursingNote', index: 6 },
  { name: 'response', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'response parameter for nursingNote', index: 6 },
  { name: 'responseMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum response filter for nursingNote', index: 6 },
  { name: 'responseMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum response filter for nursingNote', index: 6 },
  { name: 'handover', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'handover parameter for nursingNote', index: 7 },
  { name: 'handover', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'handover parameter for nursingNote', index: 7 },
  { name: 'handover', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'handover parameter for nursingNote', index: 7 },
  { name: 'handover', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'handover parameter for nursingNote', index: 7 },
  { name: 'handover', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'handover parameter for nursingNote', index: 7 },
  { name: 'handoverMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum handover filter for nursingNote', index: 7 },
  { name: 'handoverMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum handover filter for nursingNote', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for nursingNote', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for nursingNote', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for nursingNote', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for nursingNote', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for nursingNote', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for nursingNote', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for nursingNote', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
