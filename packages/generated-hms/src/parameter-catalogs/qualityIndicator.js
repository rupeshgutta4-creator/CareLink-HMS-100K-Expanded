'use strict';
// Complete parameter catalog for qualityIndicator.
const entity='qualityIndicator';
const parameters=[
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for qualityIndicator', index: 1 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for qualityIndicator', index: 1 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for qualityIndicator', index: 1 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for qualityIndicator', index: 1 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for qualityIndicator', index: 1 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for qualityIndicator', index: 1 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for qualityIndicator', index: 1 },
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for qualityIndicator', index: 2 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for qualityIndicator', index: 2 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for qualityIndicator', index: 2 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for qualityIndicator', index: 2 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for qualityIndicator', index: 2 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for qualityIndicator', index: 2 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for qualityIndicator', index: 2 },
  { name: 'numeratorQuery', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'numeratorQuery parameter for qualityIndicator', index: 3 },
  { name: 'numeratorQuery', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'numeratorQuery parameter for qualityIndicator', index: 3 },
  { name: 'numeratorQuery', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'numeratorQuery parameter for qualityIndicator', index: 3 },
  { name: 'numeratorQuery', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'numeratorQuery parameter for qualityIndicator', index: 3 },
  { name: 'numeratorQuery', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'numeratorQuery parameter for qualityIndicator', index: 3 },
  { name: 'numeratorQueryMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum numeratorQuery filter for qualityIndicator', index: 3 },
  { name: 'numeratorQueryMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum numeratorQuery filter for qualityIndicator', index: 3 },
  { name: 'denominatorQuery', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'denominatorQuery parameter for qualityIndicator', index: 4 },
  { name: 'denominatorQuery', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'denominatorQuery parameter for qualityIndicator', index: 4 },
  { name: 'denominatorQuery', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'denominatorQuery parameter for qualityIndicator', index: 4 },
  { name: 'denominatorQuery', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'denominatorQuery parameter for qualityIndicator', index: 4 },
  { name: 'denominatorQuery', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'denominatorQuery parameter for qualityIndicator', index: 4 },
  { name: 'denominatorQueryMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum denominatorQuery filter for qualityIndicator', index: 4 },
  { name: 'denominatorQueryMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum denominatorQuery filter for qualityIndicator', index: 4 },
  { name: 'target', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'target parameter for qualityIndicator', index: 5 },
  { name: 'target', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'target parameter for qualityIndicator', index: 5 },
  { name: 'target', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'target parameter for qualityIndicator', index: 5 },
  { name: 'target', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'target parameter for qualityIndicator', index: 5 },
  { name: 'target', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'target parameter for qualityIndicator', index: 5 },
  { name: 'targetMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum target filter for qualityIndicator', index: 5 },
  { name: 'targetMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum target filter for qualityIndicator', index: 5 },
  { name: 'period', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'period parameter for qualityIndicator', index: 6 },
  { name: 'period', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'period parameter for qualityIndicator', index: 6 },
  { name: 'period', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'period parameter for qualityIndicator', index: 6 },
  { name: 'period', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'period parameter for qualityIndicator', index: 6 },
  { name: 'period', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'period parameter for qualityIndicator', index: 6 },
  { name: 'periodMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum period filter for qualityIndicator', index: 6 },
  { name: 'periodMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum period filter for qualityIndicator', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for qualityIndicator', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for qualityIndicator', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for qualityIndicator', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for qualityIndicator', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for qualityIndicator', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for qualityIndicator', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for qualityIndicator', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
