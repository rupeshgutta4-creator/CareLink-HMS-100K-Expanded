'use strict';
// Complete parameter catalog for shift.
const entity='shift';
const parameters=[
  { name: 'departmentId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'departmentId parameter for shift', index: 1 },
  { name: 'departmentId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'departmentId parameter for shift', index: 1 },
  { name: 'departmentId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'departmentId parameter for shift', index: 1 },
  { name: 'departmentId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'departmentId parameter for shift', index: 1 },
  { name: 'departmentId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'departmentId parameter for shift', index: 1 },
  { name: 'departmentIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum departmentId filter for shift', index: 1 },
  { name: 'departmentIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum departmentId filter for shift', index: 1 },
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for shift', index: 2 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for shift', index: 2 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for shift', index: 2 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for shift', index: 2 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for shift', index: 2 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for shift', index: 2 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for shift', index: 2 },
  { name: 'startTime', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startTime parameter for shift', index: 3 },
  { name: 'startTime', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startTime parameter for shift', index: 3 },
  { name: 'startTime', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'startTime parameter for shift', index: 3 },
  { name: 'startTime', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startTime parameter for shift', index: 3 },
  { name: 'startTime', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'startTime parameter for shift', index: 3 },
  { name: 'startTimeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum startTime filter for shift', index: 3 },
  { name: 'startTimeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum startTime filter for shift', index: 3 },
  { name: 'endTime', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endTime parameter for shift', index: 4 },
  { name: 'endTime', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endTime parameter for shift', index: 4 },
  { name: 'endTime', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'endTime parameter for shift', index: 4 },
  { name: 'endTime', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endTime parameter for shift', index: 4 },
  { name: 'endTime', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'endTime parameter for shift', index: 4 },
  { name: 'endTimeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum endTime filter for shift', index: 4 },
  { name: 'endTimeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum endTime filter for shift', index: 4 },
  { name: 'graceMinutes', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'graceMinutes parameter for shift', index: 5 },
  { name: 'graceMinutes', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'graceMinutes parameter for shift', index: 5 },
  { name: 'graceMinutes', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'graceMinutes parameter for shift', index: 5 },
  { name: 'graceMinutes', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'graceMinutes parameter for shift', index: 5 },
  { name: 'graceMinutes', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'graceMinutes parameter for shift', index: 5 },
  { name: 'graceMinutesMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum graceMinutes filter for shift', index: 5 },
  { name: 'graceMinutesMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum graceMinutes filter for shift', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for shift', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for shift', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for shift', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for shift', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for shift', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for shift', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for shift', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
