'use strict';
// Complete parameter catalog for radiologyReport.
const entity='radiologyReport';
const parameters=[
  { name: 'radiologyOrderId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'radiologyOrderId parameter for radiologyReport', index: 1 },
  { name: 'radiologyOrderId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'radiologyOrderId parameter for radiologyReport', index: 1 },
  { name: 'radiologyOrderId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'radiologyOrderId parameter for radiologyReport', index: 1 },
  { name: 'radiologyOrderId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'radiologyOrderId parameter for radiologyReport', index: 1 },
  { name: 'radiologyOrderId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'radiologyOrderId parameter for radiologyReport', index: 1 },
  { name: 'radiologyOrderIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum radiologyOrderId filter for radiologyReport', index: 1 },
  { name: 'radiologyOrderIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum radiologyOrderId filter for radiologyReport', index: 1 },
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for radiologyReport', index: 2 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for radiologyReport', index: 2 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for radiologyReport', index: 2 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for radiologyReport', index: 2 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for radiologyReport', index: 2 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for radiologyReport', index: 2 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for radiologyReport', index: 2 },
  { name: 'findings', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'findings parameter for radiologyReport', index: 3 },
  { name: 'findings', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'findings parameter for radiologyReport', index: 3 },
  { name: 'findings', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'findings parameter for radiologyReport', index: 3 },
  { name: 'findings', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'findings parameter for radiologyReport', index: 3 },
  { name: 'findings', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'findings parameter for radiologyReport', index: 3 },
  { name: 'findingsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum findings filter for radiologyReport', index: 3 },
  { name: 'findingsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum findings filter for radiologyReport', index: 3 },
  { name: 'impression', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'impression parameter for radiologyReport', index: 4 },
  { name: 'impression', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'impression parameter for radiologyReport', index: 4 },
  { name: 'impression', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'impression parameter for radiologyReport', index: 4 },
  { name: 'impression', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'impression parameter for radiologyReport', index: 4 },
  { name: 'impression', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'impression parameter for radiologyReport', index: 4 },
  { name: 'impressionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum impression filter for radiologyReport', index: 4 },
  { name: 'impressionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum impression filter for radiologyReport', index: 4 },
  { name: 'reportedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reportedBy parameter for radiologyReport', index: 5 },
  { name: 'reportedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reportedBy parameter for radiologyReport', index: 5 },
  { name: 'reportedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reportedBy parameter for radiologyReport', index: 5 },
  { name: 'reportedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reportedBy parameter for radiologyReport', index: 5 },
  { name: 'reportedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reportedBy parameter for radiologyReport', index: 5 },
  { name: 'reportedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum reportedBy filter for radiologyReport', index: 5 },
  { name: 'reportedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum reportedBy filter for radiologyReport', index: 5 },
  { name: 'reportedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reportedAt parameter for radiologyReport', index: 6 },
  { name: 'reportedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reportedAt parameter for radiologyReport', index: 6 },
  { name: 'reportedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reportedAt parameter for radiologyReport', index: 6 },
  { name: 'reportedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reportedAt parameter for radiologyReport', index: 6 },
  { name: 'reportedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reportedAt parameter for radiologyReport', index: 6 },
  { name: 'reportedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum reportedAt filter for radiologyReport', index: 6 },
  { name: 'reportedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum reportedAt filter for radiologyReport', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for radiologyReport', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for radiologyReport', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for radiologyReport', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for radiologyReport', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for radiologyReport', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for radiologyReport', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for radiologyReport', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
