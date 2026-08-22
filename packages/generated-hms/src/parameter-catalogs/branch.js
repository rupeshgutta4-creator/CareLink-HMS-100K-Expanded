'use strict';
// Complete parameter catalog for branch.
const entity='branch';
const parameters=[
  { name: 'organizationId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'organizationId parameter for branch', index: 1 },
  { name: 'organizationId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'organizationId parameter for branch', index: 1 },
  { name: 'organizationId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'organizationId parameter for branch', index: 1 },
  { name: 'organizationId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'organizationId parameter for branch', index: 1 },
  { name: 'organizationId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'organizationId parameter for branch', index: 1 },
  { name: 'organizationIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum organizationId filter for branch', index: 1 },
  { name: 'organizationIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum organizationId filter for branch', index: 1 },
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for branch', index: 2 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for branch', index: 2 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for branch', index: 2 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for branch', index: 2 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for branch', index: 2 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for branch', index: 2 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for branch', index: 2 },
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for branch', index: 3 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for branch', index: 3 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for branch', index: 3 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for branch', index: 3 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for branch', index: 3 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for branch', index: 3 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for branch', index: 3 },
  { name: 'address', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'address parameter for branch', index: 4 },
  { name: 'address', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'address parameter for branch', index: 4 },
  { name: 'address', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'address parameter for branch', index: 4 },
  { name: 'address', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'address parameter for branch', index: 4 },
  { name: 'address', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'address parameter for branch', index: 4 },
  { name: 'addressMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum address filter for branch', index: 4 },
  { name: 'addressMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum address filter for branch', index: 4 },
  { name: 'phone', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'phone parameter for branch', index: 5 },
  { name: 'phone', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'phone parameter for branch', index: 5 },
  { name: 'phone', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'phone parameter for branch', index: 5 },
  { name: 'phone', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'phone parameter for branch', index: 5 },
  { name: 'phone', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'phone parameter for branch', index: 5 },
  { name: 'phoneMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum phone filter for branch', index: 5 },
  { name: 'phoneMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum phone filter for branch', index: 5 },
  { name: 'email', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'email parameter for branch', index: 6 },
  { name: 'email', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'email parameter for branch', index: 6 },
  { name: 'email', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'email parameter for branch', index: 6 },
  { name: 'email', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'email parameter for branch', index: 6 },
  { name: 'email', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'email parameter for branch', index: 6 },
  { name: 'emailMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum email filter for branch', index: 6 },
  { name: 'emailMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum email filter for branch', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for branch', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for branch', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for branch', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for branch', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for branch', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for branch', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for branch', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
