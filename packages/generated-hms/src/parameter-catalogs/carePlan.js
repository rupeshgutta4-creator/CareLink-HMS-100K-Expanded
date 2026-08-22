'use strict';
// Complete parameter catalog for carePlan.
const entity='carePlan';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for carePlan', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for carePlan', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for carePlan', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for carePlan', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for carePlan', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for carePlan', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for carePlan', index: 1 },
  { name: 'doctorId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for carePlan', index: 2 },
  { name: 'doctorId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for carePlan', index: 2 },
  { name: 'doctorId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'doctorId parameter for carePlan', index: 2 },
  { name: 'doctorId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for carePlan', index: 2 },
  { name: 'doctorId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'doctorId parameter for carePlan', index: 2 },
  { name: 'doctorIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum doctorId filter for carePlan', index: 2 },
  { name: 'doctorIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum doctorId filter for carePlan', index: 2 },
  { name: 'title', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'title parameter for carePlan', index: 3 },
  { name: 'title', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'title parameter for carePlan', index: 3 },
  { name: 'title', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'title parameter for carePlan', index: 3 },
  { name: 'title', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'title parameter for carePlan', index: 3 },
  { name: 'title', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'title parameter for carePlan', index: 3 },
  { name: 'titleMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum title filter for carePlan', index: 3 },
  { name: 'titleMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum title filter for carePlan', index: 3 },
  { name: 'goals', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'goals parameter for carePlan', index: 4 },
  { name: 'goals', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'goals parameter for carePlan', index: 4 },
  { name: 'goals', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'goals parameter for carePlan', index: 4 },
  { name: 'goals', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'goals parameter for carePlan', index: 4 },
  { name: 'goals', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'goals parameter for carePlan', index: 4 },
  { name: 'goalsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum goals filter for carePlan', index: 4 },
  { name: 'goalsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum goals filter for carePlan', index: 4 },
  { name: 'interventions', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'interventions parameter for carePlan', index: 5 },
  { name: 'interventions', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'interventions parameter for carePlan', index: 5 },
  { name: 'interventions', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'interventions parameter for carePlan', index: 5 },
  { name: 'interventions', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'interventions parameter for carePlan', index: 5 },
  { name: 'interventions', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'interventions parameter for carePlan', index: 5 },
  { name: 'interventionsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum interventions filter for carePlan', index: 5 },
  { name: 'interventionsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum interventions filter for carePlan', index: 5 },
  { name: 'startDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startDate parameter for carePlan', index: 6 },
  { name: 'startDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startDate parameter for carePlan', index: 6 },
  { name: 'startDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'startDate parameter for carePlan', index: 6 },
  { name: 'startDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startDate parameter for carePlan', index: 6 },
  { name: 'startDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'startDate parameter for carePlan', index: 6 },
  { name: 'startDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum startDate filter for carePlan', index: 6 },
  { name: 'startDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum startDate filter for carePlan', index: 6 },
  { name: 'reviewDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reviewDate parameter for carePlan', index: 7 },
  { name: 'reviewDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reviewDate parameter for carePlan', index: 7 },
  { name: 'reviewDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reviewDate parameter for carePlan', index: 7 },
  { name: 'reviewDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reviewDate parameter for carePlan', index: 7 },
  { name: 'reviewDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reviewDate parameter for carePlan', index: 7 },
  { name: 'reviewDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum reviewDate filter for carePlan', index: 7 },
  { name: 'reviewDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum reviewDate filter for carePlan', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for carePlan', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for carePlan', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for carePlan', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for carePlan', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for carePlan', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for carePlan', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for carePlan', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
