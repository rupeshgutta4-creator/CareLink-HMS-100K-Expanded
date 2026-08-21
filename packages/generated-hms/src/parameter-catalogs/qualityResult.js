'use strict';
// Complete parameter catalog for qualityResult.
const entity='qualityResult';
const parameters=[
  { name: 'indicatorId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'indicatorId parameter for qualityResult', index: 1 },
  { name: 'indicatorId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'indicatorId parameter for qualityResult', index: 1 },
  { name: 'indicatorId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'indicatorId parameter for qualityResult', index: 1 },
  { name: 'indicatorId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'indicatorId parameter for qualityResult', index: 1 },
  { name: 'indicatorId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'indicatorId parameter for qualityResult', index: 1 },
  { name: 'indicatorIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum indicatorId filter for qualityResult', index: 1 },
  { name: 'indicatorIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum indicatorId filter for qualityResult', index: 1 },
  { name: 'period', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'period parameter for qualityResult', index: 2 },
  { name: 'period', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'period parameter for qualityResult', index: 2 },
  { name: 'period', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'period parameter for qualityResult', index: 2 },
  { name: 'period', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'period parameter for qualityResult', index: 2 },
  { name: 'period', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'period parameter for qualityResult', index: 2 },
  { name: 'periodMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum period filter for qualityResult', index: 2 },
  { name: 'periodMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum period filter for qualityResult', index: 2 },
  { name: 'numerator', mode: 'input', type: 'number', required: true, nullable: true, defaultValue: null, description: 'numerator parameter for qualityResult', index: 3 },
  { name: 'numerator', mode: 'filter', type: 'number', required: true, nullable: true, defaultValue: null, description: 'numerator parameter for qualityResult', index: 3 },
  { name: 'numerator', mode: 'sort', type: 'number', required: true, nullable: true, defaultValue: false, description: 'numerator parameter for qualityResult', index: 3 },
  { name: 'numerator', mode: 'search', type: 'number', required: true, nullable: true, defaultValue: null, description: 'numerator parameter for qualityResult', index: 3 },
  { name: 'numerator', mode: 'export', type: 'number', required: true, nullable: true, defaultValue: false, description: 'numerator parameter for qualityResult', index: 3 },
  { name: 'numeratorMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum numerator filter for qualityResult', index: 3 },
  { name: 'numeratorMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum numerator filter for qualityResult', index: 3 },
  { name: 'denominator', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'denominator parameter for qualityResult', index: 4 },
  { name: 'denominator', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'denominator parameter for qualityResult', index: 4 },
  { name: 'denominator', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'denominator parameter for qualityResult', index: 4 },
  { name: 'denominator', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'denominator parameter for qualityResult', index: 4 },
  { name: 'denominator', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'denominator parameter for qualityResult', index: 4 },
  { name: 'denominatorMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum denominator filter for qualityResult', index: 4 },
  { name: 'denominatorMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum denominator filter for qualityResult', index: 4 },
  { name: 'rate', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'rate parameter for qualityResult', index: 5 },
  { name: 'rate', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'rate parameter for qualityResult', index: 5 },
  { name: 'rate', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'rate parameter for qualityResult', index: 5 },
  { name: 'rate', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'rate parameter for qualityResult', index: 5 },
  { name: 'rate', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'rate parameter for qualityResult', index: 5 },
  { name: 'rateMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum rate filter for qualityResult', index: 5 },
  { name: 'rateMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum rate filter for qualityResult', index: 5 },
  { name: 'calculatedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'calculatedAt parameter for qualityResult', index: 6 },
  { name: 'calculatedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'calculatedAt parameter for qualityResult', index: 6 },
  { name: 'calculatedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'calculatedAt parameter for qualityResult', index: 6 },
  { name: 'calculatedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'calculatedAt parameter for qualityResult', index: 6 },
  { name: 'calculatedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'calculatedAt parameter for qualityResult', index: 6 },
  { name: 'calculatedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum calculatedAt filter for qualityResult', index: 6 },
  { name: 'calculatedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum calculatedAt filter for qualityResult', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
