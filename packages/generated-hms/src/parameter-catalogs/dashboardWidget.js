'use strict';
// Complete parameter catalog for dashboardWidget.
const entity='dashboardWidget';
const parameters=[
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for dashboardWidget', index: 1 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for dashboardWidget', index: 1 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for dashboardWidget', index: 1 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for dashboardWidget', index: 1 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for dashboardWidget', index: 1 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for dashboardWidget', index: 1 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for dashboardWidget', index: 1 },
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for dashboardWidget', index: 2 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for dashboardWidget', index: 2 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for dashboardWidget', index: 2 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for dashboardWidget', index: 2 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for dashboardWidget', index: 2 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for dashboardWidget', index: 2 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for dashboardWidget', index: 2 },
  { name: 'type', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for dashboardWidget', index: 3 },
  { name: 'type', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for dashboardWidget', index: 3 },
  { name: 'type', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for dashboardWidget', index: 3 },
  { name: 'type', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for dashboardWidget', index: 3 },
  { name: 'type', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for dashboardWidget', index: 3 },
  { name: 'typeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum type filter for dashboardWidget', index: 3 },
  { name: 'typeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum type filter for dashboardWidget', index: 3 },
  { name: 'query', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'query parameter for dashboardWidget', index: 4 },
  { name: 'query', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'query parameter for dashboardWidget', index: 4 },
  { name: 'query', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'query parameter for dashboardWidget', index: 4 },
  { name: 'query', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'query parameter for dashboardWidget', index: 4 },
  { name: 'query', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'query parameter for dashboardWidget', index: 4 },
  { name: 'queryMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum query filter for dashboardWidget', index: 4 },
  { name: 'queryMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum query filter for dashboardWidget', index: 4 },
  { name: 'refreshSeconds', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'refreshSeconds parameter for dashboardWidget', index: 5 },
  { name: 'refreshSeconds', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'refreshSeconds parameter for dashboardWidget', index: 5 },
  { name: 'refreshSeconds', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'refreshSeconds parameter for dashboardWidget', index: 5 },
  { name: 'refreshSeconds', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'refreshSeconds parameter for dashboardWidget', index: 5 },
  { name: 'refreshSeconds', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'refreshSeconds parameter for dashboardWidget', index: 5 },
  { name: 'refreshSecondsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum refreshSeconds filter for dashboardWidget', index: 5 },
  { name: 'refreshSecondsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum refreshSeconds filter for dashboardWidget', index: 5 },
  { name: 'roles', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'roles parameter for dashboardWidget', index: 6 },
  { name: 'roles', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'roles parameter for dashboardWidget', index: 6 },
  { name: 'roles', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'roles parameter for dashboardWidget', index: 6 },
  { name: 'roles', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'roles parameter for dashboardWidget', index: 6 },
  { name: 'roles', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'roles parameter for dashboardWidget', index: 6 },
  { name: 'rolesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum roles filter for dashboardWidget', index: 6 },
  { name: 'rolesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum roles filter for dashboardWidget', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for dashboardWidget', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for dashboardWidget', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for dashboardWidget', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for dashboardWidget', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for dashboardWidget', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for dashboardWidget', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for dashboardWidget', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
