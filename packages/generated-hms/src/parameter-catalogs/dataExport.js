'use strict';
// Complete parameter catalog for dataExport.
const entity='dataExport';
const parameters=[
  { name: 'requestedBy', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'requestedBy parameter for dataExport', index: 1 },
  { name: 'requestedBy', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'requestedBy parameter for dataExport', index: 1 },
  { name: 'requestedBy', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'requestedBy parameter for dataExport', index: 1 },
  { name: 'requestedBy', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'requestedBy parameter for dataExport', index: 1 },
  { name: 'requestedBy', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'requestedBy parameter for dataExport', index: 1 },
  { name: 'requestedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum requestedBy filter for dataExport', index: 1 },
  { name: 'requestedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum requestedBy filter for dataExport', index: 1 },
  { name: 'scope', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'scope parameter for dataExport', index: 2 },
  { name: 'scope', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'scope parameter for dataExport', index: 2 },
  { name: 'scope', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'scope parameter for dataExport', index: 2 },
  { name: 'scope', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'scope parameter for dataExport', index: 2 },
  { name: 'scope', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'scope parameter for dataExport', index: 2 },
  { name: 'scopeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum scope filter for dataExport', index: 2 },
  { name: 'scopeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum scope filter for dataExport', index: 2 },
  { name: 'filters', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'filters parameter for dataExport', index: 3 },
  { name: 'filters', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'filters parameter for dataExport', index: 3 },
  { name: 'filters', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'filters parameter for dataExport', index: 3 },
  { name: 'filters', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'filters parameter for dataExport', index: 3 },
  { name: 'filters', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'filters parameter for dataExport', index: 3 },
  { name: 'filtersMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum filters filter for dataExport', index: 3 },
  { name: 'filtersMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum filters filter for dataExport', index: 3 },
  { name: 'fileKey', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'fileKey parameter for dataExport', index: 4 },
  { name: 'fileKey', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'fileKey parameter for dataExport', index: 4 },
  { name: 'fileKey', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'fileKey parameter for dataExport', index: 4 },
  { name: 'fileKey', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'fileKey parameter for dataExport', index: 4 },
  { name: 'fileKey', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'fileKey parameter for dataExport', index: 4 },
  { name: 'fileKeyMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum fileKey filter for dataExport', index: 4 },
  { name: 'fileKeyMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum fileKey filter for dataExport', index: 4 },
  { name: 'requestedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'requestedAt parameter for dataExport', index: 5 },
  { name: 'requestedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'requestedAt parameter for dataExport', index: 5 },
  { name: 'requestedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'requestedAt parameter for dataExport', index: 5 },
  { name: 'requestedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'requestedAt parameter for dataExport', index: 5 },
  { name: 'requestedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'requestedAt parameter for dataExport', index: 5 },
  { name: 'requestedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum requestedAt filter for dataExport', index: 5 },
  { name: 'requestedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum requestedAt filter for dataExport', index: 5 },
  { name: 'completedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for dataExport', index: 6 },
  { name: 'completedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for dataExport', index: 6 },
  { name: 'completedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for dataExport', index: 6 },
  { name: 'completedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'completedAt parameter for dataExport', index: 6 },
  { name: 'completedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'completedAt parameter for dataExport', index: 6 },
  { name: 'completedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum completedAt filter for dataExport', index: 6 },
  { name: 'completedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum completedAt filter for dataExport', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for dataExport', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for dataExport', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for dataExport', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for dataExport', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for dataExport', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for dataExport', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for dataExport', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
