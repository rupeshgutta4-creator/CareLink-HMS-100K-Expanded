'use strict';
// Complete parameter catalog for room.
const entity='room';
const parameters=[
  { name: 'wardId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'wardId parameter for room', index: 1 },
  { name: 'wardId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'wardId parameter for room', index: 1 },
  { name: 'wardId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'wardId parameter for room', index: 1 },
  { name: 'wardId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'wardId parameter for room', index: 1 },
  { name: 'wardId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'wardId parameter for room', index: 1 },
  { name: 'wardIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum wardId filter for room', index: 1 },
  { name: 'wardIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum wardId filter for room', index: 1 },
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for room', index: 2 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for room', index: 2 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for room', index: 2 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for room', index: 2 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for room', index: 2 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for room', index: 2 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for room', index: 2 },
  { name: 'type', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for room', index: 3 },
  { name: 'type', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for room', index: 3 },
  { name: 'type', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for room', index: 3 },
  { name: 'type', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for room', index: 3 },
  { name: 'type', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for room', index: 3 },
  { name: 'typeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum type filter for room', index: 3 },
  { name: 'typeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum type filter for room', index: 3 },
  { name: 'floor', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'floor parameter for room', index: 4 },
  { name: 'floor', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'floor parameter for room', index: 4 },
  { name: 'floor', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'floor parameter for room', index: 4 },
  { name: 'floor', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'floor parameter for room', index: 4 },
  { name: 'floor', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'floor parameter for room', index: 4 },
  { name: 'floorMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum floor filter for room', index: 4 },
  { name: 'floorMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum floor filter for room', index: 4 },
  { name: 'capacity', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'capacity parameter for room', index: 5 },
  { name: 'capacity', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'capacity parameter for room', index: 5 },
  { name: 'capacity', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'capacity parameter for room', index: 5 },
  { name: 'capacity', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'capacity parameter for room', index: 5 },
  { name: 'capacity', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'capacity parameter for room', index: 5 },
  { name: 'capacityMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum capacity filter for room', index: 5 },
  { name: 'capacityMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum capacity filter for room', index: 5 },
  { name: 'rate', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'rate parameter for room', index: 6 },
  { name: 'rate', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'rate parameter for room', index: 6 },
  { name: 'rate', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'rate parameter for room', index: 6 },
  { name: 'rate', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'rate parameter for room', index: 6 },
  { name: 'rate', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'rate parameter for room', index: 6 },
  { name: 'rateMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum rate filter for room', index: 6 },
  { name: 'rateMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum rate filter for room', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for room', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for room', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for room', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for room', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for room', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for room', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for room', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
