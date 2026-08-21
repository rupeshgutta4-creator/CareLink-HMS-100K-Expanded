'use strict';
// Complete parameter catalog for serviceCatalog.
const entity='serviceCatalog';
const parameters=[
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for serviceCatalog', index: 1 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for serviceCatalog', index: 1 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for serviceCatalog', index: 1 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for serviceCatalog', index: 1 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for serviceCatalog', index: 1 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for serviceCatalog', index: 1 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for serviceCatalog', index: 1 },
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for serviceCatalog', index: 2 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for serviceCatalog', index: 2 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for serviceCatalog', index: 2 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for serviceCatalog', index: 2 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for serviceCatalog', index: 2 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for serviceCatalog', index: 2 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for serviceCatalog', index: 2 },
  { name: 'category', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'category parameter for serviceCatalog', index: 3 },
  { name: 'category', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'category parameter for serviceCatalog', index: 3 },
  { name: 'category', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'category parameter for serviceCatalog', index: 3 },
  { name: 'category', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'category parameter for serviceCatalog', index: 3 },
  { name: 'category', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'category parameter for serviceCatalog', index: 3 },
  { name: 'categoryMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum category filter for serviceCatalog', index: 3 },
  { name: 'categoryMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum category filter for serviceCatalog', index: 3 },
  { name: 'departmentId', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'departmentId parameter for serviceCatalog', index: 4 },
  { name: 'departmentId', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'departmentId parameter for serviceCatalog', index: 4 },
  { name: 'departmentId', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'departmentId parameter for serviceCatalog', index: 4 },
  { name: 'departmentId', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'departmentId parameter for serviceCatalog', index: 4 },
  { name: 'departmentId', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'departmentId parameter for serviceCatalog', index: 4 },
  { name: 'departmentIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum departmentId filter for serviceCatalog', index: 4 },
  { name: 'departmentIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum departmentId filter for serviceCatalog', index: 4 },
  { name: 'basePrice', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'basePrice parameter for serviceCatalog', index: 5 },
  { name: 'basePrice', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'basePrice parameter for serviceCatalog', index: 5 },
  { name: 'basePrice', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'basePrice parameter for serviceCatalog', index: 5 },
  { name: 'basePrice', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'basePrice parameter for serviceCatalog', index: 5 },
  { name: 'basePrice', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'basePrice parameter for serviceCatalog', index: 5 },
  { name: 'basePriceMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum basePrice filter for serviceCatalog', index: 5 },
  { name: 'basePriceMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum basePrice filter for serviceCatalog', index: 5 },
  { name: 'taxRate', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'taxRate parameter for serviceCatalog', index: 6 },
  { name: 'taxRate', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'taxRate parameter for serviceCatalog', index: 6 },
  { name: 'taxRate', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'taxRate parameter for serviceCatalog', index: 6 },
  { name: 'taxRate', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'taxRate parameter for serviceCatalog', index: 6 },
  { name: 'taxRate', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'taxRate parameter for serviceCatalog', index: 6 },
  { name: 'taxRateMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum taxRate filter for serviceCatalog', index: 6 },
  { name: 'taxRateMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum taxRate filter for serviceCatalog', index: 6 },
  { name: 'durationMinutes', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'durationMinutes parameter for serviceCatalog', index: 7 },
  { name: 'durationMinutes', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'durationMinutes parameter for serviceCatalog', index: 7 },
  { name: 'durationMinutes', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'durationMinutes parameter for serviceCatalog', index: 7 },
  { name: 'durationMinutes', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'durationMinutes parameter for serviceCatalog', index: 7 },
  { name: 'durationMinutes', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'durationMinutes parameter for serviceCatalog', index: 7 },
  { name: 'durationMinutesMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum durationMinutes filter for serviceCatalog', index: 7 },
  { name: 'durationMinutesMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum durationMinutes filter for serviceCatalog', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for serviceCatalog', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for serviceCatalog', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for serviceCatalog', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for serviceCatalog', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for serviceCatalog', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for serviceCatalog', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for serviceCatalog', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
