'use strict';
// Complete parameter catalog for checklistRun.
const entity='checklistRun';
const parameters=[
  { name: 'checklistId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'checklistId parameter for checklistRun', index: 1 },
  { name: 'checklistId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'checklistId parameter for checklistRun', index: 1 },
  { name: 'checklistId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'checklistId parameter for checklistRun', index: 1 },
  { name: 'checklistId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'checklistId parameter for checklistRun', index: 1 },
  { name: 'checklistId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'checklistId parameter for checklistRun', index: 1 },
  { name: 'checklistIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum checklistId filter for checklistRun', index: 1 },
  { name: 'checklistIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum checklistId filter for checklistRun', index: 1 },
  { name: 'entityId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'entityId parameter for checklistRun', index: 2 },
  { name: 'entityId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'entityId parameter for checklistRun', index: 2 },
  { name: 'entityId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'entityId parameter for checklistRun', index: 2 },
  { name: 'entityId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'entityId parameter for checklistRun', index: 2 },
  { name: 'entityId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'entityId parameter for checklistRun', index: 2 },
  { name: 'entityIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum entityId filter for checklistRun', index: 2 },
  { name: 'entityIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum entityId filter for checklistRun', index: 2 },
  { name: 'startedAt', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startedAt parameter for checklistRun', index: 3 },
  { name: 'startedAt', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startedAt parameter for checklistRun', index: 3 },
  { name: 'startedAt', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'startedAt parameter for checklistRun', index: 3 },
  { name: 'startedAt', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startedAt parameter for checklistRun', index: 3 },
  { name: 'startedAt', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'startedAt parameter for checklistRun', index: 3 },
  { name: 'startedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum startedAt filter for checklistRun', index: 3 },
  { name: 'startedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum startedAt filter for checklistRun', index: 3 },
  { name: 'completedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for checklistRun', index: 4 },
  { name: 'completedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for checklistRun', index: 4 },
  { name: 'completedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for checklistRun', index: 4 },
  { name: 'completedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for checklistRun', index: 4 },
  { name: 'completedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for checklistRun', index: 4 },
  { name: 'completedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum completedAt filter for checklistRun', index: 4 },
  { name: 'completedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum completedAt filter for checklistRun', index: 4 },
  { name: 'answers', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'answers parameter for checklistRun', index: 5 },
  { name: 'answers', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'answers parameter for checklistRun', index: 5 },
  { name: 'answers', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'answers parameter for checklistRun', index: 5 },
  { name: 'answers', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'answers parameter for checklistRun', index: 5 },
  { name: 'answers', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'answers parameter for checklistRun', index: 5 },
  { name: 'answersMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum answers filter for checklistRun', index: 5 },
  { name: 'answersMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum answers filter for checklistRun', index: 5 },
  { name: 'score', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'score parameter for checklistRun', index: 6 },
  { name: 'score', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'score parameter for checklistRun', index: 6 },
  { name: 'score', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'score parameter for checklistRun', index: 6 },
  { name: 'score', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'score parameter for checklistRun', index: 6 },
  { name: 'score', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'score parameter for checklistRun', index: 6 },
  { name: 'scoreMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum score filter for checklistRun', index: 6 },
  { name: 'scoreMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum score filter for checklistRun', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for checklistRun', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for checklistRun', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for checklistRun', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for checklistRun', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for checklistRun', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for checklistRun', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for checklistRun', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
