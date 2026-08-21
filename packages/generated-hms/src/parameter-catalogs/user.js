'use strict';
// Complete parameter catalog for user.
const entity='user';
const parameters=[
  { name: 'username', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'username parameter for user', index: 1 },
  { name: 'username', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'username parameter for user', index: 1 },
  { name: 'username', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'username parameter for user', index: 1 },
  { name: 'username', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'username parameter for user', index: 1 },
  { name: 'username', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'username parameter for user', index: 1 },
  { name: 'usernameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum username filter for user', index: 1 },
  { name: 'usernameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum username filter for user', index: 1 },
  { name: 'email', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'email parameter for user', index: 2 },
  { name: 'email', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'email parameter for user', index: 2 },
  { name: 'email', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'email parameter for user', index: 2 },
  { name: 'email', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'email parameter for user', index: 2 },
  { name: 'email', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'email parameter for user', index: 2 },
  { name: 'emailMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum email filter for user', index: 2 },
  { name: 'emailMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum email filter for user', index: 2 },
  { name: 'passwordHash', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'passwordHash parameter for user', index: 3 },
  { name: 'passwordHash', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'passwordHash parameter for user', index: 3 },
  { name: 'passwordHash', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'passwordHash parameter for user', index: 3 },
  { name: 'passwordHash', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'passwordHash parameter for user', index: 3 },
  { name: 'passwordHash', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'passwordHash parameter for user', index: 3 },
  { name: 'passwordHashMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum passwordHash filter for user', index: 3 },
  { name: 'passwordHashMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum passwordHash filter for user', index: 3 },
  { name: 'role', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'role parameter for user', index: 4 },
  { name: 'role', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'role parameter for user', index: 4 },
  { name: 'role', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'role parameter for user', index: 4 },
  { name: 'role', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'role parameter for user', index: 4 },
  { name: 'role', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'role parameter for user', index: 4 },
  { name: 'roleMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum role filter for user', index: 4 },
  { name: 'roleMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum role filter for user', index: 4 },
  { name: 'staffId', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'staffId parameter for user', index: 5 },
  { name: 'staffId', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'staffId parameter for user', index: 5 },
  { name: 'staffId', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'staffId parameter for user', index: 5 },
  { name: 'staffId', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'staffId parameter for user', index: 5 },
  { name: 'staffId', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'staffId parameter for user', index: 5 },
  { name: 'staffIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum staffId filter for user', index: 5 },
  { name: 'staffIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum staffId filter for user', index: 5 },
  { name: 'lastLoginAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'lastLoginAt parameter for user', index: 6 },
  { name: 'lastLoginAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'lastLoginAt parameter for user', index: 6 },
  { name: 'lastLoginAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'lastLoginAt parameter for user', index: 6 },
  { name: 'lastLoginAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'lastLoginAt parameter for user', index: 6 },
  { name: 'lastLoginAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'lastLoginAt parameter for user', index: 6 },
  { name: 'lastLoginAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum lastLoginAt filter for user', index: 6 },
  { name: 'lastLoginAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum lastLoginAt filter for user', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for user', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for user', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for user', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for user', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for user', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for user', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for user', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
