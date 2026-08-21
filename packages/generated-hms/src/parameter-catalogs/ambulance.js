'use strict';
// Complete parameter catalog for ambulance.
const entity='ambulance';
const parameters=[
  { name: 'vehicleNumber', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'vehicleNumber parameter for ambulance', index: 1 },
  { name: 'vehicleNumber', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'vehicleNumber parameter for ambulance', index: 1 },
  { name: 'vehicleNumber', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'vehicleNumber parameter for ambulance', index: 1 },
  { name: 'vehicleNumber', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'vehicleNumber parameter for ambulance', index: 1 },
  { name: 'vehicleNumber', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'vehicleNumber parameter for ambulance', index: 1 },
  { name: 'vehicleNumberMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum vehicleNumber filter for ambulance', index: 1 },
  { name: 'vehicleNumberMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum vehicleNumber filter for ambulance', index: 1 },
  { name: 'registrationNumber', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'registrationNumber parameter for ambulance', index: 2 },
  { name: 'registrationNumber', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'registrationNumber parameter for ambulance', index: 2 },
  { name: 'registrationNumber', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'registrationNumber parameter for ambulance', index: 2 },
  { name: 'registrationNumber', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'registrationNumber parameter for ambulance', index: 2 },
  { name: 'registrationNumber', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'registrationNumber parameter for ambulance', index: 2 },
  { name: 'registrationNumberMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum registrationNumber filter for ambulance', index: 2 },
  { name: 'registrationNumberMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum registrationNumber filter for ambulance', index: 2 },
  { name: 'driverId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'driverId parameter for ambulance', index: 3 },
  { name: 'driverId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'driverId parameter for ambulance', index: 3 },
  { name: 'driverId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'driverId parameter for ambulance', index: 3 },
  { name: 'driverId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'driverId parameter for ambulance', index: 3 },
  { name: 'driverId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'driverId parameter for ambulance', index: 3 },
  { name: 'driverIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum driverId filter for ambulance', index: 3 },
  { name: 'driverIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum driverId filter for ambulance', index: 3 },
  { name: 'baseLocation', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'baseLocation parameter for ambulance', index: 4 },
  { name: 'baseLocation', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'baseLocation parameter for ambulance', index: 4 },
  { name: 'baseLocation', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'baseLocation parameter for ambulance', index: 4 },
  { name: 'baseLocation', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'baseLocation parameter for ambulance', index: 4 },
  { name: 'baseLocation', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'baseLocation parameter for ambulance', index: 4 },
  { name: 'baseLocationMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum baseLocation filter for ambulance', index: 4 },
  { name: 'baseLocationMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum baseLocation filter for ambulance', index: 4 },
  { name: 'equipment', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'equipment parameter for ambulance', index: 5 },
  { name: 'equipment', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'equipment parameter for ambulance', index: 5 },
  { name: 'equipment', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'equipment parameter for ambulance', index: 5 },
  { name: 'equipment', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'equipment parameter for ambulance', index: 5 },
  { name: 'equipment', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'equipment parameter for ambulance', index: 5 },
  { name: 'equipmentMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum equipment filter for ambulance', index: 5 },
  { name: 'equipmentMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum equipment filter for ambulance', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for ambulance', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for ambulance', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for ambulance', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for ambulance', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for ambulance', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for ambulance', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for ambulance', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
