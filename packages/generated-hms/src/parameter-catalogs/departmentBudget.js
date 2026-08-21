'use strict';
// Complete parameter catalog for departmentBudget.
const entity='departmentBudget';
const parameters=[
  { name: 'departmentId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'departmentId parameter for departmentBudget', index: 1 },
  { name: 'departmentId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'departmentId parameter for departmentBudget', index: 1 },
  { name: 'departmentId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'departmentId parameter for departmentBudget', index: 1 },
  { name: 'departmentId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'departmentId parameter for departmentBudget', index: 1 },
  { name: 'departmentId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'departmentId parameter for departmentBudget', index: 1 },
  { name: 'departmentIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum departmentId filter for departmentBudget', index: 1 },
  { name: 'departmentIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum departmentId filter for departmentBudget', index: 1 },
  { name: 'period', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'period parameter for departmentBudget', index: 2 },
  { name: 'period', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'period parameter for departmentBudget', index: 2 },
  { name: 'period', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'period parameter for departmentBudget', index: 2 },
  { name: 'period', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'period parameter for departmentBudget', index: 2 },
  { name: 'period', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'period parameter for departmentBudget', index: 2 },
  { name: 'periodMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum period filter for departmentBudget', index: 2 },
  { name: 'periodMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum period filter for departmentBudget', index: 2 },
  { name: 'allocated', mode: 'input', type: 'number', required: true, nullable: true, defaultValue: null, description: 'allocated parameter for departmentBudget', index: 3 },
  { name: 'allocated', mode: 'filter', type: 'number', required: true, nullable: true, defaultValue: null, description: 'allocated parameter for departmentBudget', index: 3 },
  { name: 'allocated', mode: 'sort', type: 'number', required: true, nullable: true, defaultValue: false, description: 'allocated parameter for departmentBudget', index: 3 },
  { name: 'allocated', mode: 'search', type: 'number', required: true, nullable: true, defaultValue: null, description: 'allocated parameter for departmentBudget', index: 3 },
  { name: 'allocated', mode: 'export', type: 'number', required: true, nullable: true, defaultValue: false, description: 'allocated parameter for departmentBudget', index: 3 },
  { name: 'allocatedMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum allocated filter for departmentBudget', index: 3 },
  { name: 'allocatedMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum allocated filter for departmentBudget', index: 3 },
  { name: 'spent', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'spent parameter for departmentBudget', index: 4 },
  { name: 'spent', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'spent parameter for departmentBudget', index: 4 },
  { name: 'spent', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'spent parameter for departmentBudget', index: 4 },
  { name: 'spent', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'spent parameter for departmentBudget', index: 4 },
  { name: 'spent', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'spent parameter for departmentBudget', index: 4 },
  { name: 'spentMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum spent filter for departmentBudget', index: 4 },
  { name: 'spentMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum spent filter for departmentBudget', index: 4 },
  { name: 'remaining', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'remaining parameter for departmentBudget', index: 5 },
  { name: 'remaining', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'remaining parameter for departmentBudget', index: 5 },
  { name: 'remaining', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'remaining parameter for departmentBudget', index: 5 },
  { name: 'remaining', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'remaining parameter for departmentBudget', index: 5 },
  { name: 'remaining', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'remaining parameter for departmentBudget', index: 5 },
  { name: 'remainingMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum remaining filter for departmentBudget', index: 5 },
  { name: 'remainingMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum remaining filter for departmentBudget', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for departmentBudget', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for departmentBudget', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for departmentBudget', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for departmentBudget', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for departmentBudget', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for departmentBudget', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for departmentBudget', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
