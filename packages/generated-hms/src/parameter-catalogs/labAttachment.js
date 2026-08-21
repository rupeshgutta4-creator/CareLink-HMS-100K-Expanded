'use strict';
// Complete parameter catalog for labAttachment.
const entity='labAttachment';
const parameters=[
  { name: 'labResultId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'labResultId parameter for labAttachment', index: 1 },
  { name: 'labResultId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'labResultId parameter for labAttachment', index: 1 },
  { name: 'labResultId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'labResultId parameter for labAttachment', index: 1 },
  { name: 'labResultId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'labResultId parameter for labAttachment', index: 1 },
  { name: 'labResultId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'labResultId parameter for labAttachment', index: 1 },
  { name: 'labResultIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum labResultId filter for labAttachment', index: 1 },
  { name: 'labResultIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum labResultId filter for labAttachment', index: 1 },
  { name: 'fileName', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fileName parameter for labAttachment', index: 2 },
  { name: 'fileName', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fileName parameter for labAttachment', index: 2 },
  { name: 'fileName', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'fileName parameter for labAttachment', index: 2 },
  { name: 'fileName', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fileName parameter for labAttachment', index: 2 },
  { name: 'fileName', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'fileName parameter for labAttachment', index: 2 },
  { name: 'fileNameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum fileName filter for labAttachment', index: 2 },
  { name: 'fileNameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum fileName filter for labAttachment', index: 2 },
  { name: 'mimeType', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'mimeType parameter for labAttachment', index: 3 },
  { name: 'mimeType', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'mimeType parameter for labAttachment', index: 3 },
  { name: 'mimeType', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'mimeType parameter for labAttachment', index: 3 },
  { name: 'mimeType', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'mimeType parameter for labAttachment', index: 3 },
  { name: 'mimeType', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'mimeType parameter for labAttachment', index: 3 },
  { name: 'mimeTypeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum mimeType filter for labAttachment', index: 3 },
  { name: 'mimeTypeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum mimeType filter for labAttachment', index: 3 },
  { name: 'storageKey', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageKey parameter for labAttachment', index: 4 },
  { name: 'storageKey', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageKey parameter for labAttachment', index: 4 },
  { name: 'storageKey', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'storageKey parameter for labAttachment', index: 4 },
  { name: 'storageKey', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageKey parameter for labAttachment', index: 4 },
  { name: 'storageKey', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'storageKey parameter for labAttachment', index: 4 },
  { name: 'storageKeyMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum storageKey filter for labAttachment', index: 4 },
  { name: 'storageKeyMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum storageKey filter for labAttachment', index: 4 },
  { name: 'sizeBytes', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'sizeBytes parameter for labAttachment', index: 5 },
  { name: 'sizeBytes', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'sizeBytes parameter for labAttachment', index: 5 },
  { name: 'sizeBytes', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'sizeBytes parameter for labAttachment', index: 5 },
  { name: 'sizeBytes', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'sizeBytes parameter for labAttachment', index: 5 },
  { name: 'sizeBytes', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'sizeBytes parameter for labAttachment', index: 5 },
  { name: 'sizeBytesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum sizeBytes filter for labAttachment', index: 5 },
  { name: 'sizeBytesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum sizeBytes filter for labAttachment', index: 5 },
  { name: 'uploadedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedBy parameter for labAttachment', index: 6 },
  { name: 'uploadedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedBy parameter for labAttachment', index: 6 },
  { name: 'uploadedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'uploadedBy parameter for labAttachment', index: 6 },
  { name: 'uploadedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedBy parameter for labAttachment', index: 6 },
  { name: 'uploadedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'uploadedBy parameter for labAttachment', index: 6 },
  { name: 'uploadedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum uploadedBy filter for labAttachment', index: 6 },
  { name: 'uploadedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum uploadedBy filter for labAttachment', index: 6 },
  { name: 'uploadedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedAt parameter for labAttachment', index: 7 },
  { name: 'uploadedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedAt parameter for labAttachment', index: 7 },
  { name: 'uploadedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'uploadedAt parameter for labAttachment', index: 7 },
  { name: 'uploadedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedAt parameter for labAttachment', index: 7 },
  { name: 'uploadedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'uploadedAt parameter for labAttachment', index: 7 },
  { name: 'uploadedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum uploadedAt filter for labAttachment', index: 7 },
  { name: 'uploadedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum uploadedAt filter for labAttachment', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
