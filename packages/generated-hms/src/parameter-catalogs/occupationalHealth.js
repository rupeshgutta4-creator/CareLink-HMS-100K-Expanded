'use strict';
// Complete parameter catalog for occupationalHealth.
const entity='occupationalHealth';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for occupationalHealth', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for occupationalHealth', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for occupationalHealth', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for occupationalHealth', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for occupationalHealth', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for occupationalHealth', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for occupationalHealth', index: 1 },
  { name: 'employer', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'employer parameter for occupationalHealth', index: 2 },
  { name: 'employer', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'employer parameter for occupationalHealth', index: 2 },
  { name: 'employer', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'employer parameter for occupationalHealth', index: 2 },
  { name: 'employer', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'employer parameter for occupationalHealth', index: 2 },
  { name: 'employer', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'employer parameter for occupationalHealth', index: 2 },
  { name: 'employerMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum employer filter for occupationalHealth', index: 2 },
  { name: 'employerMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum employer filter for occupationalHealth', index: 2 },
  { name: 'jobTitle', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'jobTitle parameter for occupationalHealth', index: 3 },
  { name: 'jobTitle', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'jobTitle parameter for occupationalHealth', index: 3 },
  { name: 'jobTitle', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'jobTitle parameter for occupationalHealth', index: 3 },
  { name: 'jobTitle', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'jobTitle parameter for occupationalHealth', index: 3 },
  { name: 'jobTitle', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'jobTitle parameter for occupationalHealth', index: 3 },
  { name: 'jobTitleMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum jobTitle filter for occupationalHealth', index: 3 },
  { name: 'jobTitleMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum jobTitle filter for occupationalHealth', index: 3 },
  { name: 'exposureRisks', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'exposureRisks parameter for occupationalHealth', index: 4 },
  { name: 'exposureRisks', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'exposureRisks parameter for occupationalHealth', index: 4 },
  { name: 'exposureRisks', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'exposureRisks parameter for occupationalHealth', index: 4 },
  { name: 'exposureRisks', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'exposureRisks parameter for occupationalHealth', index: 4 },
  { name: 'exposureRisks', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'exposureRisks parameter for occupationalHealth', index: 4 },
  { name: 'exposureRisksMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum exposureRisks filter for occupationalHealth', index: 4 },
  { name: 'exposureRisksMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum exposureRisks filter for occupationalHealth', index: 4 },
  { name: 'assessmentDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'assessmentDate parameter for occupationalHealth', index: 5 },
  { name: 'assessmentDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'assessmentDate parameter for occupationalHealth', index: 5 },
  { name: 'assessmentDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'assessmentDate parameter for occupationalHealth', index: 5 },
  { name: 'assessmentDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'assessmentDate parameter for occupationalHealth', index: 5 },
  { name: 'assessmentDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'assessmentDate parameter for occupationalHealth', index: 5 },
  { name: 'assessmentDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum assessmentDate filter for occupationalHealth', index: 5 },
  { name: 'assessmentDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum assessmentDate filter for occupationalHealth', index: 5 },
  { name: 'restrictions', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'restrictions parameter for occupationalHealth', index: 6 },
  { name: 'restrictions', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'restrictions parameter for occupationalHealth', index: 6 },
  { name: 'restrictions', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'restrictions parameter for occupationalHealth', index: 6 },
  { name: 'restrictions', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'restrictions parameter for occupationalHealth', index: 6 },
  { name: 'restrictions', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'restrictions parameter for occupationalHealth', index: 6 },
  { name: 'restrictionsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum restrictions filter for occupationalHealth', index: 6 },
  { name: 'restrictionsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum restrictions filter for occupationalHealth', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for occupationalHealth', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for occupationalHealth', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for occupationalHealth', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for occupationalHealth', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for occupationalHealth', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for occupationalHealth', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for occupationalHealth', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
