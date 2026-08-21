'use strict';
// Complete parameter catalog for webhook.
const entity='webhook';
const parameters=[
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for webhook', index: 1 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for webhook', index: 1 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for webhook', index: 1 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for webhook', index: 1 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for webhook', index: 1 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for webhook', index: 1 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for webhook', index: 1 },
  { name: 'url', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'url parameter for webhook', index: 2 },
  { name: 'url', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'url parameter for webhook', index: 2 },
  { name: 'url', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'url parameter for webhook', index: 2 },
  { name: 'url', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'url parameter for webhook', index: 2 },
  { name: 'url', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'url parameter for webhook', index: 2 },
  { name: 'urlMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum url filter for webhook', index: 2 },
  { name: 'urlMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum url filter for webhook', index: 2 },
  { name: 'events', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'events parameter for webhook', index: 3 },
  { name: 'events', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'events parameter for webhook', index: 3 },
  { name: 'events', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'events parameter for webhook', index: 3 },
  { name: 'events', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'events parameter for webhook', index: 3 },
  { name: 'events', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'events parameter for webhook', index: 3 },
  { name: 'eventsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum events filter for webhook', index: 3 },
  { name: 'eventsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum events filter for webhook', index: 3 },
  { name: 'secretHash', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'secretHash parameter for webhook', index: 4 },
  { name: 'secretHash', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'secretHash parameter for webhook', index: 4 },
  { name: 'secretHash', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'secretHash parameter for webhook', index: 4 },
  { name: 'secretHash', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'secretHash parameter for webhook', index: 4 },
  { name: 'secretHash', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'secretHash parameter for webhook', index: 4 },
  { name: 'secretHashMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum secretHash filter for webhook', index: 4 },
  { name: 'secretHashMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum secretHash filter for webhook', index: 4 },
  { name: 'retryLimit', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'retryLimit parameter for webhook', index: 5 },
  { name: 'retryLimit', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'retryLimit parameter for webhook', index: 5 },
  { name: 'retryLimit', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'retryLimit parameter for webhook', index: 5 },
  { name: 'retryLimit', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'retryLimit parameter for webhook', index: 5 },
  { name: 'retryLimit', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'retryLimit parameter for webhook', index: 5 },
  { name: 'retryLimitMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum retryLimit filter for webhook', index: 5 },
  { name: 'retryLimitMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum retryLimit filter for webhook', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for webhook', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for webhook', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for webhook', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for webhook', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for webhook', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for webhook', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for webhook', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
