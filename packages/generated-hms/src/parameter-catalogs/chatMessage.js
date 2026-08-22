'use strict';
// Complete parameter catalog for chatMessage.
const entity='chatMessage';
const parameters=[
  { name: 'conversationId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'conversationId parameter for chatMessage', index: 1 },
  { name: 'conversationId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'conversationId parameter for chatMessage', index: 1 },
  { name: 'conversationId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'conversationId parameter for chatMessage', index: 1 },
  { name: 'conversationId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'conversationId parameter for chatMessage', index: 1 },
  { name: 'conversationId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'conversationId parameter for chatMessage', index: 1 },
  { name: 'conversationIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum conversationId filter for chatMessage', index: 1 },
  { name: 'conversationIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum conversationId filter for chatMessage', index: 1 },
  { name: 'senderId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'senderId parameter for chatMessage', index: 2 },
  { name: 'senderId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'senderId parameter for chatMessage', index: 2 },
  { name: 'senderId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'senderId parameter for chatMessage', index: 2 },
  { name: 'senderId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'senderId parameter for chatMessage', index: 2 },
  { name: 'senderId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'senderId parameter for chatMessage', index: 2 },
  { name: 'senderIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum senderId filter for chatMessage', index: 2 },
  { name: 'senderIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum senderId filter for chatMessage', index: 2 },
  { name: 'recipientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'recipientId parameter for chatMessage', index: 3 },
  { name: 'recipientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'recipientId parameter for chatMessage', index: 3 },
  { name: 'recipientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'recipientId parameter for chatMessage', index: 3 },
  { name: 'recipientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'recipientId parameter for chatMessage', index: 3 },
  { name: 'recipientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'recipientId parameter for chatMessage', index: 3 },
  { name: 'recipientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum recipientId filter for chatMessage', index: 3 },
  { name: 'recipientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum recipientId filter for chatMessage', index: 3 },
  { name: 'message', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'message parameter for chatMessage', index: 4 },
  { name: 'message', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'message parameter for chatMessage', index: 4 },
  { name: 'message', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'message parameter for chatMessage', index: 4 },
  { name: 'message', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'message parameter for chatMessage', index: 4 },
  { name: 'message', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'message parameter for chatMessage', index: 4 },
  { name: 'messageMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum message filter for chatMessage', index: 4 },
  { name: 'messageMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum message filter for chatMessage', index: 4 },
  { name: 'sentAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'sentAt parameter for chatMessage', index: 5 },
  { name: 'sentAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'sentAt parameter for chatMessage', index: 5 },
  { name: 'sentAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'sentAt parameter for chatMessage', index: 5 },
  { name: 'sentAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'sentAt parameter for chatMessage', index: 5 },
  { name: 'sentAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'sentAt parameter for chatMessage', index: 5 },
  { name: 'sentAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum sentAt filter for chatMessage', index: 5 },
  { name: 'sentAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum sentAt filter for chatMessage', index: 5 },
  { name: 'readAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'readAt parameter for chatMessage', index: 6 },
  { name: 'readAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'readAt parameter for chatMessage', index: 6 },
  { name: 'readAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'readAt parameter for chatMessage', index: 6 },
  { name: 'readAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'readAt parameter for chatMessage', index: 6 },
  { name: 'readAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'readAt parameter for chatMessage', index: 6 },
  { name: 'readAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum readAt filter for chatMessage', index: 6 },
  { name: 'readAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum readAt filter for chatMessage', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for chatMessage', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for chatMessage', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for chatMessage', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for chatMessage', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for chatMessage', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for chatMessage', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for chatMessage', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
