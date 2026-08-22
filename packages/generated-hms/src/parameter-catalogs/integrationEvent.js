'use strict';
// Complete parameter catalog for integrationEvent.
const entity='integrationEvent';
const parameters=[
  { name: 'integrationId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'integrationId parameter for integrationEvent', index: 1 },
  { name: 'integrationId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'integrationId parameter for integrationEvent', index: 1 },
  { name: 'integrationId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'integrationId parameter for integrationEvent', index: 1 },
  { name: 'integrationId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'integrationId parameter for integrationEvent', index: 1 },
  { name: 'integrationId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'integrationId parameter for integrationEvent', index: 1 },
  { name: 'integrationIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum integrationId filter for integrationEvent', index: 1 },
  { name: 'integrationIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum integrationId filter for integrationEvent', index: 1 },
  { name: 'eventType', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'eventType parameter for integrationEvent', index: 2 },
  { name: 'eventType', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'eventType parameter for integrationEvent', index: 2 },
  { name: 'eventType', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'eventType parameter for integrationEvent', index: 2 },
  { name: 'eventType', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'eventType parameter for integrationEvent', index: 2 },
  { name: 'eventType', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'eventType parameter for integrationEvent', index: 2 },
  { name: 'eventTypeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum eventType filter for integrationEvent', index: 2 },
  { name: 'eventTypeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum eventType filter for integrationEvent', index: 2 },
  { name: 'externalId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'externalId parameter for integrationEvent', index: 3 },
  { name: 'externalId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'externalId parameter for integrationEvent', index: 3 },
  { name: 'externalId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'externalId parameter for integrationEvent', index: 3 },
  { name: 'externalId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'externalId parameter for integrationEvent', index: 3 },
  { name: 'externalId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'externalId parameter for integrationEvent', index: 3 },
  { name: 'externalIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum externalId filter for integrationEvent', index: 3 },
  { name: 'externalIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum externalId filter for integrationEvent', index: 3 },
  { name: 'payload', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'payload parameter for integrationEvent', index: 4 },
  { name: 'payload', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'payload parameter for integrationEvent', index: 4 },
  { name: 'payload', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'payload parameter for integrationEvent', index: 4 },
  { name: 'payload', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'payload parameter for integrationEvent', index: 4 },
  { name: 'payload', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'payload parameter for integrationEvent', index: 4 },
  { name: 'payloadMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum payload filter for integrationEvent', index: 4 },
  { name: 'payloadMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum payload filter for integrationEvent', index: 4 },
  { name: 'receivedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'receivedAt parameter for integrationEvent', index: 5 },
  { name: 'receivedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'receivedAt parameter for integrationEvent', index: 5 },
  { name: 'receivedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'receivedAt parameter for integrationEvent', index: 5 },
  { name: 'receivedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'receivedAt parameter for integrationEvent', index: 5 },
  { name: 'receivedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'receivedAt parameter for integrationEvent', index: 5 },
  { name: 'receivedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum receivedAt filter for integrationEvent', index: 5 },
  { name: 'receivedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum receivedAt filter for integrationEvent', index: 5 },
  { name: 'processedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'processedAt parameter for integrationEvent', index: 6 },
  { name: 'processedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'processedAt parameter for integrationEvent', index: 6 },
  { name: 'processedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'processedAt parameter for integrationEvent', index: 6 },
  { name: 'processedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'processedAt parameter for integrationEvent', index: 6 },
  { name: 'processedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'processedAt parameter for integrationEvent', index: 6 },
  { name: 'processedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum processedAt filter for integrationEvent', index: 6 },
  { name: 'processedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum processedAt filter for integrationEvent', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for integrationEvent', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for integrationEvent', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for integrationEvent', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for integrationEvent', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for integrationEvent', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for integrationEvent', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for integrationEvent', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
