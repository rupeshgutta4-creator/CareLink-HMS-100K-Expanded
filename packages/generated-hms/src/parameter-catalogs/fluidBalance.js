'use strict';
// Complete parameter catalog for fluidBalance.
const entity='fluidBalance';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for fluidBalance', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for fluidBalance', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for fluidBalance', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for fluidBalance', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for fluidBalance', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for fluidBalance', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for fluidBalance', index: 1 },
  { name: 'recordedAt', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'recordedAt parameter for fluidBalance', index: 2 },
  { name: 'recordedAt', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'recordedAt parameter for fluidBalance', index: 2 },
  { name: 'recordedAt', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'recordedAt parameter for fluidBalance', index: 2 },
  { name: 'recordedAt', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'recordedAt parameter for fluidBalance', index: 2 },
  { name: 'recordedAt', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'recordedAt parameter for fluidBalance', index: 2 },
  { name: 'recordedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum recordedAt filter for fluidBalance', index: 2 },
  { name: 'recordedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum recordedAt filter for fluidBalance', index: 2 },
  { name: 'intakeMl', mode: 'input', type: 'number', required: true, nullable: true, defaultValue: null, description: 'intakeMl parameter for fluidBalance', index: 3 },
  { name: 'intakeMl', mode: 'filter', type: 'number', required: true, nullable: true, defaultValue: null, description: 'intakeMl parameter for fluidBalance', index: 3 },
  { name: 'intakeMl', mode: 'sort', type: 'number', required: true, nullable: true, defaultValue: false, description: 'intakeMl parameter for fluidBalance', index: 3 },
  { name: 'intakeMl', mode: 'search', type: 'number', required: true, nullable: true, defaultValue: null, description: 'intakeMl parameter for fluidBalance', index: 3 },
  { name: 'intakeMl', mode: 'export', type: 'number', required: true, nullable: true, defaultValue: false, description: 'intakeMl parameter for fluidBalance', index: 3 },
  { name: 'intakeMlMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum intakeMl filter for fluidBalance', index: 3 },
  { name: 'intakeMlMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum intakeMl filter for fluidBalance', index: 3 },
  { name: 'outputMl', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'outputMl parameter for fluidBalance', index: 4 },
  { name: 'outputMl', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'outputMl parameter for fluidBalance', index: 4 },
  { name: 'outputMl', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'outputMl parameter for fluidBalance', index: 4 },
  { name: 'outputMl', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'outputMl parameter for fluidBalance', index: 4 },
  { name: 'outputMl', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'outputMl parameter for fluidBalance', index: 4 },
  { name: 'outputMlMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum outputMl filter for fluidBalance', index: 4 },
  { name: 'outputMlMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum outputMl filter for fluidBalance', index: 4 },
  { name: 'balanceMl', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'balanceMl parameter for fluidBalance', index: 5 },
  { name: 'balanceMl', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'balanceMl parameter for fluidBalance', index: 5 },
  { name: 'balanceMl', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'balanceMl parameter for fluidBalance', index: 5 },
  { name: 'balanceMl', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'balanceMl parameter for fluidBalance', index: 5 },
  { name: 'balanceMl', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'balanceMl parameter for fluidBalance', index: 5 },
  { name: 'balanceMlMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum balanceMl filter for fluidBalance', index: 5 },
  { name: 'balanceMlMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum balanceMl filter for fluidBalance', index: 5 },
  { name: 'recordedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'recordedBy parameter for fluidBalance', index: 6 },
  { name: 'recordedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'recordedBy parameter for fluidBalance', index: 6 },
  { name: 'recordedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'recordedBy parameter for fluidBalance', index: 6 },
  { name: 'recordedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'recordedBy parameter for fluidBalance', index: 6 },
  { name: 'recordedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'recordedBy parameter for fluidBalance', index: 6 },
  { name: 'recordedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum recordedBy filter for fluidBalance', index: 6 },
  { name: 'recordedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum recordedBy filter for fluidBalance', index: 6 },
  { name: 'notes', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for fluidBalance', index: 7 },
  { name: 'notes', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for fluidBalance', index: 7 },
  { name: 'notes', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'notes parameter for fluidBalance', index: 7 },
  { name: 'notes', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for fluidBalance', index: 7 },
  { name: 'notes', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'notes parameter for fluidBalance', index: 7 },
  { name: 'notesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum notes filter for fluidBalance', index: 7 },
  { name: 'notesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum notes filter for fluidBalance', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
