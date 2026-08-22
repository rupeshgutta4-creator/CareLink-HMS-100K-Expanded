'use strict';
// Complete parameter catalog for calendarEvent.
const entity='calendarEvent';
const parameters=[
  { name: 'title', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'title parameter for calendarEvent', index: 1 },
  { name: 'title', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'title parameter for calendarEvent', index: 1 },
  { name: 'title', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'title parameter for calendarEvent', index: 1 },
  { name: 'title', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'title parameter for calendarEvent', index: 1 },
  { name: 'title', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'title parameter for calendarEvent', index: 1 },
  { name: 'titleMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum title filter for calendarEvent', index: 1 },
  { name: 'titleMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum title filter for calendarEvent', index: 1 },
  { name: 'description', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for calendarEvent', index: 2 },
  { name: 'description', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for calendarEvent', index: 2 },
  { name: 'description', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for calendarEvent', index: 2 },
  { name: 'description', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for calendarEvent', index: 2 },
  { name: 'description', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for calendarEvent', index: 2 },
  { name: 'descriptionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum description filter for calendarEvent', index: 2 },
  { name: 'descriptionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum description filter for calendarEvent', index: 2 },
  { name: 'startAt', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startAt parameter for calendarEvent', index: 3 },
  { name: 'startAt', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startAt parameter for calendarEvent', index: 3 },
  { name: 'startAt', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'startAt parameter for calendarEvent', index: 3 },
  { name: 'startAt', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'startAt parameter for calendarEvent', index: 3 },
  { name: 'startAt', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'startAt parameter for calendarEvent', index: 3 },
  { name: 'startAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum startAt filter for calendarEvent', index: 3 },
  { name: 'startAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum startAt filter for calendarEvent', index: 3 },
  { name: 'endAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endAt parameter for calendarEvent', index: 4 },
  { name: 'endAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endAt parameter for calendarEvent', index: 4 },
  { name: 'endAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'endAt parameter for calendarEvent', index: 4 },
  { name: 'endAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'endAt parameter for calendarEvent', index: 4 },
  { name: 'endAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'endAt parameter for calendarEvent', index: 4 },
  { name: 'endAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum endAt filter for calendarEvent', index: 4 },
  { name: 'endAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum endAt filter for calendarEvent', index: 4 },
  { name: 'location', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'location parameter for calendarEvent', index: 5 },
  { name: 'location', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'location parameter for calendarEvent', index: 5 },
  { name: 'location', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'location parameter for calendarEvent', index: 5 },
  { name: 'location', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'location parameter for calendarEvent', index: 5 },
  { name: 'location', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'location parameter for calendarEvent', index: 5 },
  { name: 'locationMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum location filter for calendarEvent', index: 5 },
  { name: 'locationMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum location filter for calendarEvent', index: 5 },
  { name: 'organizerId', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'organizerId parameter for calendarEvent', index: 6 },
  { name: 'organizerId', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'organizerId parameter for calendarEvent', index: 6 },
  { name: 'organizerId', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'organizerId parameter for calendarEvent', index: 6 },
  { name: 'organizerId', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'organizerId parameter for calendarEvent', index: 6 },
  { name: 'organizerId', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'organizerId parameter for calendarEvent', index: 6 },
  { name: 'organizerIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum organizerId filter for calendarEvent', index: 6 },
  { name: 'organizerIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum organizerId filter for calendarEvent', index: 6 },
  { name: 'participants', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'participants parameter for calendarEvent', index: 7 },
  { name: 'participants', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'participants parameter for calendarEvent', index: 7 },
  { name: 'participants', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'participants parameter for calendarEvent', index: 7 },
  { name: 'participants', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'participants parameter for calendarEvent', index: 7 },
  { name: 'participants', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'participants parameter for calendarEvent', index: 7 },
  { name: 'participantsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum participants filter for calendarEvent', index: 7 },
  { name: 'participantsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum participants filter for calendarEvent', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for calendarEvent', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for calendarEvent', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for calendarEvent', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for calendarEvent', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for calendarEvent', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for calendarEvent', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for calendarEvent', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
