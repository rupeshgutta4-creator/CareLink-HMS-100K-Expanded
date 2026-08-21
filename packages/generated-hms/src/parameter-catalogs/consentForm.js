'use strict';
// Complete parameter catalog for consentForm.
const entity='consentForm';
const parameters=[
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for consentForm', index: 1 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for consentForm', index: 1 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for consentForm', index: 1 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for consentForm', index: 1 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for consentForm', index: 1 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for consentForm', index: 1 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for consentForm', index: 1 },
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for consentForm', index: 2 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for consentForm', index: 2 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for consentForm', index: 2 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for consentForm', index: 2 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for consentForm', index: 2 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for consentForm', index: 2 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for consentForm', index: 2 },
  { name: 'version', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'version parameter for consentForm', index: 3 },
  { name: 'version', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'version parameter for consentForm', index: 3 },
  { name: 'version', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'version parameter for consentForm', index: 3 },
  { name: 'version', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'version parameter for consentForm', index: 3 },
  { name: 'version', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'version parameter for consentForm', index: 3 },
  { name: 'versionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum version filter for consentForm', index: 3 },
  { name: 'versionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum version filter for consentForm', index: 3 },
  { name: 'content', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'content parameter for consentForm', index: 4 },
  { name: 'content', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'content parameter for consentForm', index: 4 },
  { name: 'content', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'content parameter for consentForm', index: 4 },
  { name: 'content', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'content parameter for consentForm', index: 4 },
  { name: 'content', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'content parameter for consentForm', index: 4 },
  { name: 'contentMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum content filter for consentForm', index: 4 },
  { name: 'contentMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum content filter for consentForm', index: 4 },
  { name: 'required', mode: 'input', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'required parameter for consentForm', index: 5 },
  { name: 'required', mode: 'filter', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'required parameter for consentForm', index: 5 },
  { name: 'required', mode: 'sort', type: 'boolean', required: false, nullable: true, defaultValue: false, description: 'required parameter for consentForm', index: 5 },
  { name: 'required', mode: 'search', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'required parameter for consentForm', index: 5 },
  { name: 'required', mode: 'export', type: 'boolean', required: false, nullable: true, defaultValue: false, description: 'required parameter for consentForm', index: 5 },
  { name: 'requiredMin', mode: 'range', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'Minimum required filter for consentForm', index: 5 },
  { name: 'requiredMax', mode: 'range', type: 'boolean', required: false, nullable: true, defaultValue: null, description: 'Maximum required filter for consentForm', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for consentForm', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for consentForm', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for consentForm', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for consentForm', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for consentForm', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for consentForm', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for consentForm', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
