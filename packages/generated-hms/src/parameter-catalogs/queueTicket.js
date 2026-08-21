'use strict';
// Complete parameter catalog for queueTicket.
const entity='queueTicket';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for queueTicket', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for queueTicket', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for queueTicket', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for queueTicket', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for queueTicket', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for queueTicket', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for queueTicket', index: 1 },
  { name: 'departmentId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'departmentId parameter for queueTicket', index: 2 },
  { name: 'departmentId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'departmentId parameter for queueTicket', index: 2 },
  { name: 'departmentId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'departmentId parameter for queueTicket', index: 2 },
  { name: 'departmentId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'departmentId parameter for queueTicket', index: 2 },
  { name: 'departmentId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'departmentId parameter for queueTicket', index: 2 },
  { name: 'departmentIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum departmentId filter for queueTicket', index: 2 },
  { name: 'departmentIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum departmentId filter for queueTicket', index: 2 },
  { name: 'ticketNumber', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'ticketNumber parameter for queueTicket', index: 3 },
  { name: 'ticketNumber', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'ticketNumber parameter for queueTicket', index: 3 },
  { name: 'ticketNumber', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'ticketNumber parameter for queueTicket', index: 3 },
  { name: 'ticketNumber', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'ticketNumber parameter for queueTicket', index: 3 },
  { name: 'ticketNumber', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'ticketNumber parameter for queueTicket', index: 3 },
  { name: 'ticketNumberMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum ticketNumber filter for queueTicket', index: 3 },
  { name: 'ticketNumberMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum ticketNumber filter for queueTicket', index: 3 },
  { name: 'priority', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'priority parameter for queueTicket', index: 4 },
  { name: 'priority', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'priority parameter for queueTicket', index: 4 },
  { name: 'priority', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'priority parameter for queueTicket', index: 4 },
  { name: 'priority', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'priority parameter for queueTicket', index: 4 },
  { name: 'priority', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'priority parameter for queueTicket', index: 4 },
  { name: 'priorityMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum priority filter for queueTicket', index: 4 },
  { name: 'priorityMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum priority filter for queueTicket', index: 4 },
  { name: 'issuedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'issuedAt parameter for queueTicket', index: 5 },
  { name: 'issuedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'issuedAt parameter for queueTicket', index: 5 },
  { name: 'issuedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'issuedAt parameter for queueTicket', index: 5 },
  { name: 'issuedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'issuedAt parameter for queueTicket', index: 5 },
  { name: 'issuedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'issuedAt parameter for queueTicket', index: 5 },
  { name: 'issuedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum issuedAt filter for queueTicket', index: 5 },
  { name: 'issuedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum issuedAt filter for queueTicket', index: 5 },
  { name: 'calledAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'calledAt parameter for queueTicket', index: 6 },
  { name: 'calledAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'calledAt parameter for queueTicket', index: 6 },
  { name: 'calledAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'calledAt parameter for queueTicket', index: 6 },
  { name: 'calledAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'calledAt parameter for queueTicket', index: 6 },
  { name: 'calledAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'calledAt parameter for queueTicket', index: 6 },
  { name: 'calledAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum calledAt filter for queueTicket', index: 6 },
  { name: 'calledAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum calledAt filter for queueTicket', index: 6 },
  { name: 'servedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'servedAt parameter for queueTicket', index: 7 },
  { name: 'servedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'servedAt parameter for queueTicket', index: 7 },
  { name: 'servedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'servedAt parameter for queueTicket', index: 7 },
  { name: 'servedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'servedAt parameter for queueTicket', index: 7 },
  { name: 'servedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'servedAt parameter for queueTicket', index: 7 },
  { name: 'servedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum servedAt filter for queueTicket', index: 7 },
  { name: 'servedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum servedAt filter for queueTicket', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for queueTicket', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for queueTicket', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for queueTicket', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for queueTicket', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for queueTicket', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for queueTicket', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for queueTicket', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
