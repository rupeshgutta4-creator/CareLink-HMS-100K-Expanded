'use strict';
// Complete parameter catalog for webhookDelivery.
const entity='webhookDelivery';
const parameters=[
  { name: 'webhookId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'webhookId parameter for webhookDelivery', index: 1 },
  { name: 'webhookId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'webhookId parameter for webhookDelivery', index: 1 },
  { name: 'webhookId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'webhookId parameter for webhookDelivery', index: 1 },
  { name: 'webhookId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'webhookId parameter for webhookDelivery', index: 1 },
  { name: 'webhookId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'webhookId parameter for webhookDelivery', index: 1 },
  { name: 'webhookIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum webhookId filter for webhookDelivery', index: 1 },
  { name: 'webhookIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum webhookId filter for webhookDelivery', index: 1 },
  { name: 'event', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'event parameter for webhookDelivery', index: 2 },
  { name: 'event', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'event parameter for webhookDelivery', index: 2 },
  { name: 'event', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'event parameter for webhookDelivery', index: 2 },
  { name: 'event', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'event parameter for webhookDelivery', index: 2 },
  { name: 'event', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'event parameter for webhookDelivery', index: 2 },
  { name: 'eventMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum event filter for webhookDelivery', index: 2 },
  { name: 'eventMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum event filter for webhookDelivery', index: 2 },
  { name: 'payload', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'payload parameter for webhookDelivery', index: 3 },
  { name: 'payload', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'payload parameter for webhookDelivery', index: 3 },
  { name: 'payload', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'payload parameter for webhookDelivery', index: 3 },
  { name: 'payload', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'payload parameter for webhookDelivery', index: 3 },
  { name: 'payload', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'payload parameter for webhookDelivery', index: 3 },
  { name: 'payloadMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum payload filter for webhookDelivery', index: 3 },
  { name: 'payloadMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum payload filter for webhookDelivery', index: 3 },
  { name: 'attempt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'attempt parameter for webhookDelivery', index: 4 },
  { name: 'attempt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'attempt parameter for webhookDelivery', index: 4 },
  { name: 'attempt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'attempt parameter for webhookDelivery', index: 4 },
  { name: 'attempt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'attempt parameter for webhookDelivery', index: 4 },
  { name: 'attempt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'attempt parameter for webhookDelivery', index: 4 },
  { name: 'attemptMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum attempt filter for webhookDelivery', index: 4 },
  { name: 'attemptMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum attempt filter for webhookDelivery', index: 4 },
  { name: 'nextRetryAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'nextRetryAt parameter for webhookDelivery', index: 5 },
  { name: 'nextRetryAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'nextRetryAt parameter for webhookDelivery', index: 5 },
  { name: 'nextRetryAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'nextRetryAt parameter for webhookDelivery', index: 5 },
  { name: 'nextRetryAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'nextRetryAt parameter for webhookDelivery', index: 5 },
  { name: 'nextRetryAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'nextRetryAt parameter for webhookDelivery', index: 5 },
  { name: 'nextRetryAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum nextRetryAt filter for webhookDelivery', index: 5 },
  { name: 'nextRetryAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum nextRetryAt filter for webhookDelivery', index: 5 },
  { name: 'deliveredAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'deliveredAt parameter for webhookDelivery', index: 6 },
  { name: 'deliveredAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'deliveredAt parameter for webhookDelivery', index: 6 },
  { name: 'deliveredAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'deliveredAt parameter for webhookDelivery', index: 6 },
  { name: 'deliveredAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'deliveredAt parameter for webhookDelivery', index: 6 },
  { name: 'deliveredAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'deliveredAt parameter for webhookDelivery', index: 6 },
  { name: 'deliveredAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum deliveredAt filter for webhookDelivery', index: 6 },
  { name: 'deliveredAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum deliveredAt filter for webhookDelivery', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for webhookDelivery', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for webhookDelivery', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for webhookDelivery', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for webhookDelivery', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for webhookDelivery', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for webhookDelivery', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for webhookDelivery', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
