'use strict';
// Complete parameter catalog for emailTemplate.
const entity='emailTemplate';
const parameters=[
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for emailTemplate', index: 1 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for emailTemplate', index: 1 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for emailTemplate', index: 1 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for emailTemplate', index: 1 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for emailTemplate', index: 1 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for emailTemplate', index: 1 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for emailTemplate', index: 1 },
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for emailTemplate', index: 2 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for emailTemplate', index: 2 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for emailTemplate', index: 2 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for emailTemplate', index: 2 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for emailTemplate', index: 2 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for emailTemplate', index: 2 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for emailTemplate', index: 2 },
  { name: 'subject', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'subject parameter for emailTemplate', index: 3 },
  { name: 'subject', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'subject parameter for emailTemplate', index: 3 },
  { name: 'subject', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'subject parameter for emailTemplate', index: 3 },
  { name: 'subject', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'subject parameter for emailTemplate', index: 3 },
  { name: 'subject', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'subject parameter for emailTemplate', index: 3 },
  { name: 'subjectMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum subject filter for emailTemplate', index: 3 },
  { name: 'subjectMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum subject filter for emailTemplate', index: 3 },
  { name: 'body', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'body parameter for emailTemplate', index: 4 },
  { name: 'body', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'body parameter for emailTemplate', index: 4 },
  { name: 'body', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'body parameter for emailTemplate', index: 4 },
  { name: 'body', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'body parameter for emailTemplate', index: 4 },
  { name: 'body', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'body parameter for emailTemplate', index: 4 },
  { name: 'bodyMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum body filter for emailTemplate', index: 4 },
  { name: 'bodyMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum body filter for emailTemplate', index: 4 },
  { name: 'variables', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'variables parameter for emailTemplate', index: 5 },
  { name: 'variables', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'variables parameter for emailTemplate', index: 5 },
  { name: 'variables', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'variables parameter for emailTemplate', index: 5 },
  { name: 'variables', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'variables parameter for emailTemplate', index: 5 },
  { name: 'variables', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'variables parameter for emailTemplate', index: 5 },
  { name: 'variablesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum variables filter for emailTemplate', index: 5 },
  { name: 'variablesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum variables filter for emailTemplate', index: 5 },
  { name: 'language', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'language parameter for emailTemplate', index: 6 },
  { name: 'language', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'language parameter for emailTemplate', index: 6 },
  { name: 'language', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'language parameter for emailTemplate', index: 6 },
  { name: 'language', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'language parameter for emailTemplate', index: 6 },
  { name: 'language', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'language parameter for emailTemplate', index: 6 },
  { name: 'languageMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum language filter for emailTemplate', index: 6 },
  { name: 'languageMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum language filter for emailTemplate', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for emailTemplate', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for emailTemplate', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for emailTemplate', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for emailTemplate', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for emailTemplate', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for emailTemplate', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for emailTemplate', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
