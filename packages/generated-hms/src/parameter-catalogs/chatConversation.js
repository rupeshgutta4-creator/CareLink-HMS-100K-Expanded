'use strict';
// Complete parameter catalog for chatConversation.
const entity='chatConversation';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for chatConversation', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for chatConversation', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for chatConversation', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for chatConversation', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for chatConversation', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for chatConversation', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for chatConversation', index: 1 },
  { name: 'subject', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'subject parameter for chatConversation', index: 2 },
  { name: 'subject', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'subject parameter for chatConversation', index: 2 },
  { name: 'subject', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'subject parameter for chatConversation', index: 2 },
  { name: 'subject', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'subject parameter for chatConversation', index: 2 },
  { name: 'subject', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'subject parameter for chatConversation', index: 2 },
  { name: 'subjectMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum subject filter for chatConversation', index: 2 },
  { name: 'subjectMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum subject filter for chatConversation', index: 2 },
  { name: 'participants', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'participants parameter for chatConversation', index: 3 },
  { name: 'participants', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'participants parameter for chatConversation', index: 3 },
  { name: 'participants', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'participants parameter for chatConversation', index: 3 },
  { name: 'participants', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'participants parameter for chatConversation', index: 3 },
  { name: 'participants', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'participants parameter for chatConversation', index: 3 },
  { name: 'participantsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum participants filter for chatConversation', index: 3 },
  { name: 'participantsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum participants filter for chatConversation', index: 3 },
  { name: 'createdAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'createdAt parameter for chatConversation', index: 4 },
  { name: 'createdAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'createdAt parameter for chatConversation', index: 4 },
  { name: 'createdAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'createdAt parameter for chatConversation', index: 4 },
  { name: 'createdAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'createdAt parameter for chatConversation', index: 4 },
  { name: 'createdAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'createdAt parameter for chatConversation', index: 4 },
  { name: 'createdAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum createdAt filter for chatConversation', index: 4 },
  { name: 'createdAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum createdAt filter for chatConversation', index: 4 },
  { name: 'closedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'closedAt parameter for chatConversation', index: 5 },
  { name: 'closedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'closedAt parameter for chatConversation', index: 5 },
  { name: 'closedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'closedAt parameter for chatConversation', index: 5 },
  { name: 'closedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'closedAt parameter for chatConversation', index: 5 },
  { name: 'closedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'closedAt parameter for chatConversation', index: 5 },
  { name: 'closedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum closedAt filter for chatConversation', index: 5 },
  { name: 'closedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum closedAt filter for chatConversation', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for chatConversation', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for chatConversation', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for chatConversation', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for chatConversation', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for chatConversation', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for chatConversation', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for chatConversation', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
