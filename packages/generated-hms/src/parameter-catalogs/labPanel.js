'use strict';
// Complete parameter catalog for labPanel.
const entity='labPanel';
const parameters=[
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for labPanel', index: 1 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for labPanel', index: 1 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for labPanel', index: 1 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for labPanel', index: 1 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for labPanel', index: 1 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for labPanel', index: 1 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for labPanel', index: 1 },
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for labPanel', index: 2 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for labPanel', index: 2 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for labPanel', index: 2 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for labPanel', index: 2 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for labPanel', index: 2 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for labPanel', index: 2 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for labPanel', index: 2 },
  { name: 'description', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for labPanel', index: 3 },
  { name: 'description', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for labPanel', index: 3 },
  { name: 'description', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for labPanel', index: 3 },
  { name: 'description', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for labPanel', index: 3 },
  { name: 'description', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for labPanel', index: 3 },
  { name: 'descriptionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum description filter for labPanel', index: 3 },
  { name: 'descriptionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum description filter for labPanel', index: 3 },
  { name: 'department', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'department parameter for labPanel', index: 4 },
  { name: 'department', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'department parameter for labPanel', index: 4 },
  { name: 'department', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'department parameter for labPanel', index: 4 },
  { name: 'department', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'department parameter for labPanel', index: 4 },
  { name: 'department', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'department parameter for labPanel', index: 4 },
  { name: 'departmentMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum department filter for labPanel', index: 4 },
  { name: 'departmentMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum department filter for labPanel', index: 4 },
  { name: 'turnaroundHours', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'turnaroundHours parameter for labPanel', index: 5 },
  { name: 'turnaroundHours', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'turnaroundHours parameter for labPanel', index: 5 },
  { name: 'turnaroundHours', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'turnaroundHours parameter for labPanel', index: 5 },
  { name: 'turnaroundHours', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'turnaroundHours parameter for labPanel', index: 5 },
  { name: 'turnaroundHours', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'turnaroundHours parameter for labPanel', index: 5 },
  { name: 'turnaroundHoursMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum turnaroundHours filter for labPanel', index: 5 },
  { name: 'turnaroundHoursMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum turnaroundHours filter for labPanel', index: 5 },
  { name: 'price', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'price parameter for labPanel', index: 6 },
  { name: 'price', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'price parameter for labPanel', index: 6 },
  { name: 'price', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'price parameter for labPanel', index: 6 },
  { name: 'price', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'price parameter for labPanel', index: 6 },
  { name: 'price', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'price parameter for labPanel', index: 6 },
  { name: 'priceMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum price filter for labPanel', index: 6 },
  { name: 'priceMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum price filter for labPanel', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for labPanel', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for labPanel', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for labPanel', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for labPanel', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for labPanel', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for labPanel', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for labPanel', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
