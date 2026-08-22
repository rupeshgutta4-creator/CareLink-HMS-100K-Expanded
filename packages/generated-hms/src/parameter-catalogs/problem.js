'use strict';
// Complete parameter catalog for problem.
const entity='problem';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for problem', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for problem', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for problem', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for problem', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for problem', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for problem', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for problem', index: 1 },
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for problem', index: 2 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for problem', index: 2 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for problem', index: 2 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for problem', index: 2 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for problem', index: 2 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for problem', index: 2 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for problem', index: 2 },
  { name: 'description', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for problem', index: 3 },
  { name: 'description', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for problem', index: 3 },
  { name: 'description', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for problem', index: 3 },
  { name: 'description', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for problem', index: 3 },
  { name: 'description', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for problem', index: 3 },
  { name: 'descriptionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum description filter for problem', index: 3 },
  { name: 'descriptionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum description filter for problem', index: 3 },
  { name: 'onsetDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'onsetDate parameter for problem', index: 4 },
  { name: 'onsetDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'onsetDate parameter for problem', index: 4 },
  { name: 'onsetDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'onsetDate parameter for problem', index: 4 },
  { name: 'onsetDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'onsetDate parameter for problem', index: 4 },
  { name: 'onsetDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'onsetDate parameter for problem', index: 4 },
  { name: 'onsetDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum onsetDate filter for problem', index: 4 },
  { name: 'onsetDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum onsetDate filter for problem', index: 4 },
  { name: 'resolvedDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'resolvedDate parameter for problem', index: 5 },
  { name: 'resolvedDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'resolvedDate parameter for problem', index: 5 },
  { name: 'resolvedDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'resolvedDate parameter for problem', index: 5 },
  { name: 'resolvedDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'resolvedDate parameter for problem', index: 5 },
  { name: 'resolvedDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'resolvedDate parameter for problem', index: 5 },
  { name: 'resolvedDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum resolvedDate filter for problem', index: 5 },
  { name: 'resolvedDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum resolvedDate filter for problem', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for problem', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for problem', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for problem', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for problem', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for problem', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for problem', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for problem', index: 6 },
  { name: 'notes', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for problem', index: 7 },
  { name: 'notes', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for problem', index: 7 },
  { name: 'notes', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'notes parameter for problem', index: 7 },
  { name: 'notes', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for problem', index: 7 },
  { name: 'notes', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'notes parameter for problem', index: 7 },
  { name: 'notesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum notes filter for problem', index: 7 },
  { name: 'notesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum notes filter for problem', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
