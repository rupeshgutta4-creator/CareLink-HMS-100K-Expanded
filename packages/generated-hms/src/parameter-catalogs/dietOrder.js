'use strict';
// Complete parameter catalog for dietOrder.
const entity='dietOrder';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for dietOrder', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for dietOrder', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for dietOrder', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for dietOrder', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for dietOrder', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for dietOrder', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for dietOrder', index: 1 },
  { name: 'doctorId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for dietOrder', index: 2 },
  { name: 'doctorId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for dietOrder', index: 2 },
  { name: 'doctorId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'doctorId parameter for dietOrder', index: 2 },
  { name: 'doctorId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for dietOrder', index: 2 },
  { name: 'doctorId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'doctorId parameter for dietOrder', index: 2 },
  { name: 'doctorIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum doctorId filter for dietOrder', index: 2 },
  { name: 'doctorIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum doctorId filter for dietOrder', index: 2 },
  { name: 'dietType', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'dietType parameter for dietOrder', index: 3 },
  { name: 'dietType', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'dietType parameter for dietOrder', index: 3 },
  { name: 'dietType', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'dietType parameter for dietOrder', index: 3 },
  { name: 'dietType', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'dietType parameter for dietOrder', index: 3 },
  { name: 'dietType', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'dietType parameter for dietOrder', index: 3 },
  { name: 'dietTypeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum dietType filter for dietOrder', index: 3 },
  { name: 'dietTypeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum dietType filter for dietOrder', index: 3 },
  { name: 'calorieTarget', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'calorieTarget parameter for dietOrder', index: 4 },
  { name: 'calorieTarget', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'calorieTarget parameter for dietOrder', index: 4 },
  { name: 'calorieTarget', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'calorieTarget parameter for dietOrder', index: 4 },
  { name: 'calorieTarget', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'calorieTarget parameter for dietOrder', index: 4 },
  { name: 'calorieTarget', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'calorieTarget parameter for dietOrder', index: 4 },
  { name: 'calorieTargetMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum calorieTarget filter for dietOrder', index: 4 },
  { name: 'calorieTargetMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum calorieTarget filter for dietOrder', index: 4 },
  { name: 'restrictions', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'restrictions parameter for dietOrder', index: 5 },
  { name: 'restrictions', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'restrictions parameter for dietOrder', index: 5 },
  { name: 'restrictions', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'restrictions parameter for dietOrder', index: 5 },
  { name: 'restrictions', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'restrictions parameter for dietOrder', index: 5 },
  { name: 'restrictions', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'restrictions parameter for dietOrder', index: 5 },
  { name: 'restrictionsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum restrictions filter for dietOrder', index: 5 },
  { name: 'restrictionsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum restrictions filter for dietOrder', index: 5 },
  { name: 'startDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startDate parameter for dietOrder', index: 6 },
  { name: 'startDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startDate parameter for dietOrder', index: 6 },
  { name: 'startDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'startDate parameter for dietOrder', index: 6 },
  { name: 'startDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'startDate parameter for dietOrder', index: 6 },
  { name: 'startDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'startDate parameter for dietOrder', index: 6 },
  { name: 'startDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum startDate filter for dietOrder', index: 6 },
  { name: 'startDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum startDate filter for dietOrder', index: 6 },
  { name: 'endDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endDate parameter for dietOrder', index: 7 },
  { name: 'endDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endDate parameter for dietOrder', index: 7 },
  { name: 'endDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'endDate parameter for dietOrder', index: 7 },
  { name: 'endDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endDate parameter for dietOrder', index: 7 },
  { name: 'endDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'endDate parameter for dietOrder', index: 7 },
  { name: 'endDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum endDate filter for dietOrder', index: 7 },
  { name: 'endDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum endDate filter for dietOrder', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for dietOrder', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for dietOrder', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for dietOrder', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for dietOrder', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for dietOrder', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for dietOrder', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for dietOrder', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
