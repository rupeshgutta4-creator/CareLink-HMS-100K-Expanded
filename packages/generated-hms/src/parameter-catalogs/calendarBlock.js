'use strict';
// Complete parameter catalog for calendarBlock.
const entity='calendarBlock';
const parameters=[
  { name: 'doctorId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for calendarBlock', index: 1 },
  { name: 'doctorId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for calendarBlock', index: 1 },
  { name: 'doctorId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'doctorId parameter for calendarBlock', index: 1 },
  { name: 'doctorId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'doctorId parameter for calendarBlock', index: 1 },
  { name: 'doctorId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'doctorId parameter for calendarBlock', index: 1 },
  { name: 'doctorIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum doctorId filter for calendarBlock', index: 1 },
  { name: 'doctorIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum doctorId filter for calendarBlock', index: 1 },
  { name: 'startAt', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startAt parameter for calendarBlock', index: 2 },
  { name: 'startAt', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startAt parameter for calendarBlock', index: 2 },
  { name: 'startAt', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'startAt parameter for calendarBlock', index: 2 },
  { name: 'startAt', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startAt parameter for calendarBlock', index: 2 },
  { name: 'startAt', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'startAt parameter for calendarBlock', index: 2 },
  { name: 'startAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum startAt filter for calendarBlock', index: 2 },
  { name: 'startAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum startAt filter for calendarBlock', index: 2 },
  { name: 'endAt', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'endAt parameter for calendarBlock', index: 3 },
  { name: 'endAt', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'endAt parameter for calendarBlock', index: 3 },
  { name: 'endAt', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'endAt parameter for calendarBlock', index: 3 },
  { name: 'endAt', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'endAt parameter for calendarBlock', index: 3 },
  { name: 'endAt', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'endAt parameter for calendarBlock', index: 3 },
  { name: 'endAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum endAt filter for calendarBlock', index: 3 },
  { name: 'endAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum endAt filter for calendarBlock', index: 3 },
  { name: 'reason', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for calendarBlock', index: 4 },
  { name: 'reason', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for calendarBlock', index: 4 },
  { name: 'reason', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reason parameter for calendarBlock', index: 4 },
  { name: 'reason', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reason parameter for calendarBlock', index: 4 },
  { name: 'reason', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reason parameter for calendarBlock', index: 4 },
  { name: 'reasonMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum reason filter for calendarBlock', index: 4 },
  { name: 'reasonMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum reason filter for calendarBlock', index: 4 },
  { name: 'recurring', mode: 'input', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'recurring parameter for calendarBlock', index: 5 },
  { name: 'recurring', mode: 'filter', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'recurring parameter for calendarBlock', index: 5 },
  { name: 'recurring', mode: 'sort', type: 'boolean', required: false, nullable: true, defaultValue: false, description: 'recurring parameter for calendarBlock', index: 5 },
  { name: 'recurring', mode: 'search', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'recurring parameter for calendarBlock', index: 5 },
  { name: 'recurring', mode: 'export', type: 'boolean', required: false, nullable: true, defaultValue: false, description: 'recurring parameter for calendarBlock', index: 5 },
  { name: 'recurringMin', mode: 'range', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'Minimum recurring filter for calendarBlock', index: 5 },
  { name: 'recurringMax', mode: 'range', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'Maximum recurring filter for calendarBlock', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for calendarBlock', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for calendarBlock', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for calendarBlock', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for calendarBlock', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for calendarBlock', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for calendarBlock', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for calendarBlock', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
