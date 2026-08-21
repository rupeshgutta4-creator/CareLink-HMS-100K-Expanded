'use strict';
// Complete parameter catalog for ambulanceTrip.
const entity='ambulanceTrip';
const parameters=[
  { name: 'ambulanceId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'ambulanceId parameter for ambulanceTrip', index: 1 },
  { name: 'ambulanceId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'ambulanceId parameter for ambulanceTrip', index: 1 },
  { name: 'ambulanceId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'ambulanceId parameter for ambulanceTrip', index: 1 },
  { name: 'ambulanceId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'ambulanceId parameter for ambulanceTrip', index: 1 },
  { name: 'ambulanceId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'ambulanceId parameter for ambulanceTrip', index: 1 },
  { name: 'ambulanceIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum ambulanceId filter for ambulanceTrip', index: 1 },
  { name: 'ambulanceIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum ambulanceId filter for ambulanceTrip', index: 1 },
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for ambulanceTrip', index: 2 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for ambulanceTrip', index: 2 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for ambulanceTrip', index: 2 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for ambulanceTrip', index: 2 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for ambulanceTrip', index: 2 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for ambulanceTrip', index: 2 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for ambulanceTrip', index: 2 },
  { name: 'pickupLocation', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'pickupLocation parameter for ambulanceTrip', index: 3 },
  { name: 'pickupLocation', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'pickupLocation parameter for ambulanceTrip', index: 3 },
  { name: 'pickupLocation', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'pickupLocation parameter for ambulanceTrip', index: 3 },
  { name: 'pickupLocation', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'pickupLocation parameter for ambulanceTrip', index: 3 },
  { name: 'pickupLocation', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'pickupLocation parameter for ambulanceTrip', index: 3 },
  { name: 'pickupLocationMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum pickupLocation filter for ambulanceTrip', index: 3 },
  { name: 'pickupLocationMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum pickupLocation filter for ambulanceTrip', index: 3 },
  { name: 'destination', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'destination parameter for ambulanceTrip', index: 4 },
  { name: 'destination', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'destination parameter for ambulanceTrip', index: 4 },
  { name: 'destination', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'destination parameter for ambulanceTrip', index: 4 },
  { name: 'destination', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'destination parameter for ambulanceTrip', index: 4 },
  { name: 'destination', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'destination parameter for ambulanceTrip', index: 4 },
  { name: 'destinationMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum destination filter for ambulanceTrip', index: 4 },
  { name: 'destinationMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum destination filter for ambulanceTrip', index: 4 },
  { name: 'requestedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'requestedAt parameter for ambulanceTrip', index: 5 },
  { name: 'requestedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'requestedAt parameter for ambulanceTrip', index: 5 },
  { name: 'requestedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'requestedAt parameter for ambulanceTrip', index: 5 },
  { name: 'requestedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'requestedAt parameter for ambulanceTrip', index: 5 },
  { name: 'requestedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'requestedAt parameter for ambulanceTrip', index: 5 },
  { name: 'requestedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum requestedAt filter for ambulanceTrip', index: 5 },
  { name: 'requestedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum requestedAt filter for ambulanceTrip', index: 5 },
  { name: 'departedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'departedAt parameter for ambulanceTrip', index: 6 },
  { name: 'departedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'departedAt parameter for ambulanceTrip', index: 6 },
  { name: 'departedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'departedAt parameter for ambulanceTrip', index: 6 },
  { name: 'departedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'departedAt parameter for ambulanceTrip', index: 6 },
  { name: 'departedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'departedAt parameter for ambulanceTrip', index: 6 },
  { name: 'departedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum departedAt filter for ambulanceTrip', index: 6 },
  { name: 'departedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum departedAt filter for ambulanceTrip', index: 6 },
  { name: 'arrivedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'arrivedAt parameter for ambulanceTrip', index: 7 },
  { name: 'arrivedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'arrivedAt parameter for ambulanceTrip', index: 7 },
  { name: 'arrivedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'arrivedAt parameter for ambulanceTrip', index: 7 },
  { name: 'arrivedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'arrivedAt parameter for ambulanceTrip', index: 7 },
  { name: 'arrivedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'arrivedAt parameter for ambulanceTrip', index: 7 },
  { name: 'arrivedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum arrivedAt filter for ambulanceTrip', index: 7 },
  { name: 'arrivedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum arrivedAt filter for ambulanceTrip', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for ambulanceTrip', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for ambulanceTrip', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for ambulanceTrip', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for ambulanceTrip', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for ambulanceTrip', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for ambulanceTrip', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for ambulanceTrip', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
