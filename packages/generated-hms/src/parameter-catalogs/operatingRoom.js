'use strict';
// Complete parameter catalog for operatingRoom.
const entity='operatingRoom';
const parameters=[
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for operatingRoom', index: 1 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for operatingRoom', index: 1 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for operatingRoom', index: 1 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for operatingRoom', index: 1 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for operatingRoom', index: 1 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for operatingRoom', index: 1 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for operatingRoom', index: 1 },
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for operatingRoom', index: 2 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for operatingRoom', index: 2 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for operatingRoom', index: 2 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for operatingRoom', index: 2 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for operatingRoom', index: 2 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for operatingRoom', index: 2 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for operatingRoom', index: 2 },
  { name: 'floor', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'floor parameter for operatingRoom', index: 3 },
  { name: 'floor', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'floor parameter for operatingRoom', index: 3 },
  { name: 'floor', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'floor parameter for operatingRoom', index: 3 },
  { name: 'floor', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'floor parameter for operatingRoom', index: 3 },
  { name: 'floor', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'floor parameter for operatingRoom', index: 3 },
  { name: 'floorMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum floor filter for operatingRoom', index: 3 },
  { name: 'floorMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum floor filter for operatingRoom', index: 3 },
  { name: 'specialties', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'specialties parameter for operatingRoom', index: 4 },
  { name: 'specialties', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'specialties parameter for operatingRoom', index: 4 },
  { name: 'specialties', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'specialties parameter for operatingRoom', index: 4 },
  { name: 'specialties', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'specialties parameter for operatingRoom', index: 4 },
  { name: 'specialties', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'specialties parameter for operatingRoom', index: 4 },
  { name: 'specialtiesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum specialties filter for operatingRoom', index: 4 },
  { name: 'specialtiesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum specialties filter for operatingRoom', index: 4 },
  { name: 'availability', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'availability parameter for operatingRoom', index: 5 },
  { name: 'availability', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'availability parameter for operatingRoom', index: 5 },
  { name: 'availability', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'availability parameter for operatingRoom', index: 5 },
  { name: 'availability', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'availability parameter for operatingRoom', index: 5 },
  { name: 'availability', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'availability parameter for operatingRoom', index: 5 },
  { name: 'availabilityMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum availability filter for operatingRoom', index: 5 },
  { name: 'availabilityMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum availability filter for operatingRoom', index: 5 },
  { name: 'hourlyRate', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'hourlyRate parameter for operatingRoom', index: 6 },
  { name: 'hourlyRate', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'hourlyRate parameter for operatingRoom', index: 6 },
  { name: 'hourlyRate', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'hourlyRate parameter for operatingRoom', index: 6 },
  { name: 'hourlyRate', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'hourlyRate parameter for operatingRoom', index: 6 },
  { name: 'hourlyRate', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'hourlyRate parameter for operatingRoom', index: 6 },
  { name: 'hourlyRateMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum hourlyRate filter for operatingRoom', index: 6 },
  { name: 'hourlyRateMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum hourlyRate filter for operatingRoom', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for operatingRoom', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for operatingRoom', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for operatingRoom', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for operatingRoom', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for operatingRoom', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for operatingRoom', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for operatingRoom', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
