'use strict';
// Complete parameter catalog for radiologyImage.
const entity='radiologyImage';
const parameters=[
  { name: 'radiologyOrderId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'radiologyOrderId parameter for radiologyImage', index: 1 },
  { name: 'radiologyOrderId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'radiologyOrderId parameter for radiologyImage', index: 1 },
  { name: 'radiologyOrderId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'radiologyOrderId parameter for radiologyImage', index: 1 },
  { name: 'radiologyOrderId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'radiologyOrderId parameter for radiologyImage', index: 1 },
  { name: 'radiologyOrderId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'radiologyOrderId parameter for radiologyImage', index: 1 },
  { name: 'radiologyOrderIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum radiologyOrderId filter for radiologyImage', index: 1 },
  { name: 'radiologyOrderIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum radiologyOrderId filter for radiologyImage', index: 1 },
  { name: 'modality', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'modality parameter for radiologyImage', index: 2 },
  { name: 'modality', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'modality parameter for radiologyImage', index: 2 },
  { name: 'modality', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'modality parameter for radiologyImage', index: 2 },
  { name: 'modality', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'modality parameter for radiologyImage', index: 2 },
  { name: 'modality', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'modality parameter for radiologyImage', index: 2 },
  { name: 'modalityMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum modality filter for radiologyImage', index: 2 },
  { name: 'modalityMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum modality filter for radiologyImage', index: 2 },
  { name: 'fileName', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fileName parameter for radiologyImage', index: 3 },
  { name: 'fileName', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fileName parameter for radiologyImage', index: 3 },
  { name: 'fileName', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'fileName parameter for radiologyImage', index: 3 },
  { name: 'fileName', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'fileName parameter for radiologyImage', index: 3 },
  { name: 'fileName', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'fileName parameter for radiologyImage', index: 3 },
  { name: 'fileNameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum fileName filter for radiologyImage', index: 3 },
  { name: 'fileNameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum fileName filter for radiologyImage', index: 3 },
  { name: 'storageKey', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageKey parameter for radiologyImage', index: 4 },
  { name: 'storageKey', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageKey parameter for radiologyImage', index: 4 },
  { name: 'storageKey', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'storageKey parameter for radiologyImage', index: 4 },
  { name: 'storageKey', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageKey parameter for radiologyImage', index: 4 },
  { name: 'storageKey', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'storageKey parameter for radiologyImage', index: 4 },
  { name: 'storageKeyMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum storageKey filter for radiologyImage', index: 4 },
  { name: 'storageKeyMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum storageKey filter for radiologyImage', index: 4 },
  { name: 'studyInstanceUid', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'studyInstanceUid parameter for radiologyImage', index: 5 },
  { name: 'studyInstanceUid', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'studyInstanceUid parameter for radiologyImage', index: 5 },
  { name: 'studyInstanceUid', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'studyInstanceUid parameter for radiologyImage', index: 5 },
  { name: 'studyInstanceUid', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'studyInstanceUid parameter for radiologyImage', index: 5 },
  { name: 'studyInstanceUid', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'studyInstanceUid parameter for radiologyImage', index: 5 },
  { name: 'studyInstanceUidMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum studyInstanceUid filter for radiologyImage', index: 5 },
  { name: 'studyInstanceUidMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum studyInstanceUid filter for radiologyImage', index: 5 },
  { name: 'uploadedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedAt parameter for radiologyImage', index: 6 },
  { name: 'uploadedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedAt parameter for radiologyImage', index: 6 },
  { name: 'uploadedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'uploadedAt parameter for radiologyImage', index: 6 },
  { name: 'uploadedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'uploadedAt parameter for radiologyImage', index: 6 },
  { name: 'uploadedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'uploadedAt parameter for radiologyImage', index: 6 },
  { name: 'uploadedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum uploadedAt filter for radiologyImage', index: 6 },
  { name: 'uploadedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum uploadedAt filter for radiologyImage', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
