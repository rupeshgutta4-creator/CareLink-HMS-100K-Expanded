'use strict';
// Complete parameter catalog for workflowTask.
const entity='workflowTask';
const parameters=[
  { name: 'workflowId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'workflowId parameter for workflowTask', index: 1 },
  { name: 'workflowId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'workflowId parameter for workflowTask', index: 1 },
  { name: 'workflowId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'workflowId parameter for workflowTask', index: 1 },
  { name: 'workflowId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'workflowId parameter for workflowTask', index: 1 },
  { name: 'workflowId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'workflowId parameter for workflowTask', index: 1 },
  { name: 'workflowIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum workflowId filter for workflowTask', index: 1 },
  { name: 'workflowIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum workflowId filter for workflowTask', index: 1 },
  { name: 'entityId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'entityId parameter for workflowTask', index: 2 },
  { name: 'entityId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'entityId parameter for workflowTask', index: 2 },
  { name: 'entityId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'entityId parameter for workflowTask', index: 2 },
  { name: 'entityId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'entityId parameter for workflowTask', index: 2 },
  { name: 'entityId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'entityId parameter for workflowTask', index: 2 },
  { name: 'entityIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum entityId filter for workflowTask', index: 2 },
  { name: 'entityIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum entityId filter for workflowTask', index: 2 },
  { name: 'assigneeId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'assigneeId parameter for workflowTask', index: 3 },
  { name: 'assigneeId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'assigneeId parameter for workflowTask', index: 3 },
  { name: 'assigneeId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'assigneeId parameter for workflowTask', index: 3 },
  { name: 'assigneeId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'assigneeId parameter for workflowTask', index: 3 },
  { name: 'assigneeId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'assigneeId parameter for workflowTask', index: 3 },
  { name: 'assigneeIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum assigneeId filter for workflowTask', index: 3 },
  { name: 'assigneeIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum assigneeId filter for workflowTask', index: 3 },
  { name: 'step', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'step parameter for workflowTask', index: 4 },
  { name: 'step', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'step parameter for workflowTask', index: 4 },
  { name: 'step', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'step parameter for workflowTask', index: 4 },
  { name: 'step', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'step parameter for workflowTask', index: 4 },
  { name: 'step', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'step parameter for workflowTask', index: 4 },
  { name: 'stepMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum step filter for workflowTask', index: 4 },
  { name: 'stepMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum step filter for workflowTask', index: 4 },
  { name: 'dueAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'dueAt parameter for workflowTask', index: 5 },
  { name: 'dueAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'dueAt parameter for workflowTask', index: 5 },
  { name: 'dueAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'dueAt parameter for workflowTask', index: 5 },
  { name: 'dueAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'dueAt parameter for workflowTask', index: 5 },
  { name: 'dueAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'dueAt parameter for workflowTask', index: 5 },
  { name: 'dueAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum dueAt filter for workflowTask', index: 5 },
  { name: 'dueAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum dueAt filter for workflowTask', index: 5 },
  { name: 'completedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for workflowTask', index: 6 },
  { name: 'completedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for workflowTask', index: 6 },
  { name: 'completedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for workflowTask', index: 6 },
  { name: 'completedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for workflowTask', index: 6 },
  { name: 'completedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for workflowTask', index: 6 },
  { name: 'completedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum completedAt filter for workflowTask', index: 6 },
  { name: 'completedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum completedAt filter for workflowTask', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for workflowTask', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for workflowTask', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for workflowTask', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for workflowTask', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for workflowTask', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for workflowTask', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for workflowTask', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
