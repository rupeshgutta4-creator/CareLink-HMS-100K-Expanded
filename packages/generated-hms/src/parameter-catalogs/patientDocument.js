'use strict';
// Complete parameter catalog for patientDocument.
const entity='patientDocument';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for patientDocument', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for patientDocument', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for patientDocument', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for patientDocument', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for patientDocument', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for patientDocument', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for patientDocument', index: 1 },
  { name: 'documentType', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'documentType parameter for patientDocument', index: 2 },
  { name: 'documentType', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'documentType parameter for patientDocument', index: 2 },
  { name: 'documentType', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'documentType parameter for patientDocument', index: 2 },
  { name: 'documentType', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'documentType parameter for patientDocument', index: 2 },
  { name: 'documentType', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'documentType parameter for patientDocument', index: 2 },
  { name: 'documentTypeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum documentType filter for patientDocument', index: 2 },
  { name: 'documentTypeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum documentType filter for patientDocument', index: 2 },
  { name: 'fileName', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fileName parameter for patientDocument', index: 3 },
  { name: 'fileName', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fileName parameter for patientDocument', index: 3 },
  { name: 'fileName', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'fileName parameter for patientDocument', index: 3 },
  { name: 'fileName', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fileName parameter for patientDocument', index: 3 },
  { name: 'fileName', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'fileName parameter for patientDocument', index: 3 },
  { name: 'fileNameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum fileName filter for patientDocument', index: 3 },
  { name: 'fileNameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum fileName filter for patientDocument', index: 3 },
  { name: 'mimeType', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'mimeType parameter for patientDocument', index: 4 },
  { name: 'mimeType', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'mimeType parameter for patientDocument', index: 4 },
  { name: 'mimeType', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'mimeType parameter for patientDocument', index: 4 },
  { name: 'mimeType', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'mimeType parameter for patientDocument', index: 4 },
  { name: 'mimeType', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'mimeType parameter for patientDocument', index: 4 },
  { name: 'mimeTypeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum mimeType filter for patientDocument', index: 4 },
  { name: 'mimeTypeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum mimeType filter for patientDocument', index: 4 },
  { name: 'storageKey', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageKey parameter for patientDocument', index: 5 },
  { name: 'storageKey', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageKey parameter for patientDocument', index: 5 },
  { name: 'storageKey', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'storageKey parameter for patientDocument', index: 5 },
  { name: 'storageKey', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageKey parameter for patientDocument', index: 5 },
  { name: 'storageKey', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'storageKey parameter for patientDocument', index: 5 },
  { name: 'storageKeyMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum storageKey filter for patientDocument', index: 5 },
  { name: 'storageKeyMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum storageKey filter for patientDocument', index: 5 },
  { name: 'uploadedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedBy parameter for patientDocument', index: 6 },
  { name: 'uploadedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedBy parameter for patientDocument', index: 6 },
  { name: 'uploadedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'uploadedBy parameter for patientDocument', index: 6 },
  { name: 'uploadedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedBy parameter for patientDocument', index: 6 },
  { name: 'uploadedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'uploadedBy parameter for patientDocument', index: 6 },
  { name: 'uploadedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum uploadedBy filter for patientDocument', index: 6 },
  { name: 'uploadedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum uploadedBy filter for patientDocument', index: 6 },
  { name: 'uploadedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedAt parameter for patientDocument', index: 7 },
  { name: 'uploadedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedAt parameter for patientDocument', index: 7 },
  { name: 'uploadedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'uploadedAt parameter for patientDocument', index: 7 },
  { name: 'uploadedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedAt parameter for patientDocument', index: 7 },
  { name: 'uploadedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'uploadedAt parameter for patientDocument', index: 7 },
  { name: 'uploadedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum uploadedAt filter for patientDocument', index: 7 },
  { name: 'uploadedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum uploadedAt filter for patientDocument', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for patientDocument', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for patientDocument', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for patientDocument', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for patientDocument', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for patientDocument', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for patientDocument', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for patientDocument', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
