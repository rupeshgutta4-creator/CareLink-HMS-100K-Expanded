'use strict';
// Complete parameter catalog for leaveRequest.
const entity='leaveRequest';
const parameters=[
  { name: 'staffId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for leaveRequest', index: 1 },
  { name: 'staffId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for leaveRequest', index: 1 },
  { name: 'staffId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'staffId parameter for leaveRequest', index: 1 },
  { name: 'staffId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for leaveRequest', index: 1 },
  { name: 'staffId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'staffId parameter for leaveRequest', index: 1 },
  { name: 'staffIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum staffId filter for leaveRequest', index: 1 },
  { name: 'staffIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum staffId filter for leaveRequest', index: 1 },
  { name: 'type', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for leaveRequest', index: 2 },
  { name: 'type', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for leaveRequest', index: 2 },
  { name: 'type', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for leaveRequest', index: 2 },
  { name: 'type', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for leaveRequest', index: 2 },
  { name: 'type', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for leaveRequest', index: 2 },
  { name: 'typeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum type filter for leaveRequest', index: 2 },
  { name: 'typeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum type filter for leaveRequest', index: 2 },
  { name: 'startDate', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startDate parameter for leaveRequest', index: 3 },
  { name: 'startDate', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startDate parameter for leaveRequest', index: 3 },
  { name: 'startDate', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'startDate parameter for leaveRequest', index: 3 },
  { name: 'startDate', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startDate parameter for leaveRequest', index: 3 },
  { name: 'startDate', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'startDate parameter for leaveRequest', index: 3 },
  { name: 'startDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum startDate filter for leaveRequest', index: 3 },
  { name: 'startDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum startDate filter for leaveRequest', index: 3 },
  { name: 'endDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endDate parameter for leaveRequest', index: 4 },
  { name: 'endDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endDate parameter for leaveRequest', index: 4 },
  { name: 'endDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'endDate parameter for leaveRequest', index: 4 },
  { name: 'endDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endDate parameter for leaveRequest', index: 4 },
  { name: 'endDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'endDate parameter for leaveRequest', index: 4 },
  { name: 'endDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum endDate filter for leaveRequest', index: 4 },
  { name: 'endDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum endDate filter for leaveRequest', index: 4 },
  { name: 'reason', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for leaveRequest', index: 5 },
  { name: 'reason', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for leaveRequest', index: 5 },
  { name: 'reason', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reason parameter for leaveRequest', index: 5 },
  { name: 'reason', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for leaveRequest', index: 5 },
  { name: 'reason', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reason parameter for leaveRequest', index: 5 },
  { name: 'reasonMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum reason filter for leaveRequest', index: 5 },
  { name: 'reasonMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum reason filter for leaveRequest', index: 5 },
  { name: 'approvedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'approvedBy parameter for leaveRequest', index: 6 },
  { name: 'approvedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'approvedBy parameter for leaveRequest', index: 6 },
  { name: 'approvedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'approvedBy parameter for leaveRequest', index: 6 },
  { name: 'approvedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'approvedBy parameter for leaveRequest', index: 6 },
  { name: 'approvedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'approvedBy parameter for leaveRequest', index: 6 },
  { name: 'approvedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum approvedBy filter for leaveRequest', index: 6 },
  { name: 'approvedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum approvedBy filter for leaveRequest', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for leaveRequest', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for leaveRequest', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for leaveRequest', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for leaveRequest', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for leaveRequest', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for leaveRequest', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for leaveRequest', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
