'use strict';
// Complete parameter catalog for newbornRecord.
const entity='newbornRecord';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for newbornRecord', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for newbornRecord', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for newbornRecord', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for newbornRecord', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for newbornRecord', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for newbornRecord', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for newbornRecord', index: 1 },
  { name: 'motherPatientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'motherPatientId parameter for newbornRecord', index: 2 },
  { name: 'motherPatientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'motherPatientId parameter for newbornRecord', index: 2 },
  { name: 'motherPatientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'motherPatientId parameter for newbornRecord', index: 2 },
  { name: 'motherPatientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'motherPatientId parameter for newbornRecord', index: 2 },
  { name: 'motherPatientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'motherPatientId parameter for newbornRecord', index: 2 },
  { name: 'motherPatientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum motherPatientId filter for newbornRecord', index: 2 },
  { name: 'motherPatientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum motherPatientId filter for newbornRecord', index: 2 },
  { name: 'birthDate', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'birthDate parameter for newbornRecord', index: 3 },
  { name: 'birthDate', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'birthDate parameter for newbornRecord', index: 3 },
  { name: 'birthDate', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'birthDate parameter for newbornRecord', index: 3 },
  { name: 'birthDate', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'birthDate parameter for newbornRecord', index: 3 },
  { name: 'birthDate', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'birthDate parameter for newbornRecord', index: 3 },
  { name: 'birthDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum birthDate filter for newbornRecord', index: 3 },
  { name: 'birthDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum birthDate filter for newbornRecord', index: 3 },
  { name: 'birthWeightKg', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'birthWeightKg parameter for newbornRecord', index: 4 },
  { name: 'birthWeightKg', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'birthWeightKg parameter for newbornRecord', index: 4 },
  { name: 'birthWeightKg', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'birthWeightKg parameter for newbornRecord', index: 4 },
  { name: 'birthWeightKg', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'birthWeightKg parameter for newbornRecord', index: 4 },
  { name: 'birthWeightKg', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'birthWeightKg parameter for newbornRecord', index: 4 },
  { name: 'birthWeightKgMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum birthWeightKg filter for newbornRecord', index: 4 },
  { name: 'birthWeightKgMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum birthWeightKg filter for newbornRecord', index: 4 },
  { name: 'gestationalWeeks', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'gestationalWeeks parameter for newbornRecord', index: 5 },
  { name: 'gestationalWeeks', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'gestationalWeeks parameter for newbornRecord', index: 5 },
  { name: 'gestationalWeeks', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'gestationalWeeks parameter for newbornRecord', index: 5 },
  { name: 'gestationalWeeks', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'gestationalWeeks parameter for newbornRecord', index: 5 },
  { name: 'gestationalWeeks', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'gestationalWeeks parameter for newbornRecord', index: 5 },
  { name: 'gestationalWeeksMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum gestationalWeeks filter for newbornRecord', index: 5 },
  { name: 'gestationalWeeksMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum gestationalWeeks filter for newbornRecord', index: 5 },
  { name: 'apgar1', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'apgar1 parameter for newbornRecord', index: 6 },
  { name: 'apgar1', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'apgar1 parameter for newbornRecord', index: 6 },
  { name: 'apgar1', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'apgar1 parameter for newbornRecord', index: 6 },
  { name: 'apgar1', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'apgar1 parameter for newbornRecord', index: 6 },
  { name: 'apgar1', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'apgar1 parameter for newbornRecord', index: 6 },
  { name: 'apgar1Min', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum apgar1 filter for newbornRecord', index: 6 },
  { name: 'apgar1Max', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum apgar1 filter for newbornRecord', index: 6 },
  { name: 'apgar5', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'apgar5 parameter for newbornRecord', index: 7 },
  { name: 'apgar5', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'apgar5 parameter for newbornRecord', index: 7 },
  { name: 'apgar5', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'apgar5 parameter for newbornRecord', index: 7 },
  { name: 'apgar5', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'apgar5 parameter for newbornRecord', index: 7 },
  { name: 'apgar5', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'apgar5 parameter for newbornRecord', index: 7 },
  { name: 'apgar5Min', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum apgar5 filter for newbornRecord', index: 7 },
  { name: 'apgar5Max', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum apgar5 filter for newbornRecord', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for newbornRecord', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for newbornRecord', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for newbornRecord', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for newbornRecord', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for newbornRecord', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for newbornRecord', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for newbornRecord', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
