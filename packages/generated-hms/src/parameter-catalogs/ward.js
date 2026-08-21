'use strict';
// Complete parameter catalog for ward.
const entity='ward';
const parameters=[
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for ward', index: 1 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for ward', index: 1 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for ward', index: 1 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for ward', index: 1 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for ward', index: 1 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for ward', index: 1 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for ward', index: 1 },
  { name: 'name', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for ward', index: 2 },
  { name: 'name', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for ward', index: 2 },
  { name: 'name', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for ward', index: 2 },
  { name: 'name', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'name parameter for ward', index: 2 },
  { name: 'name', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'name parameter for ward', index: 2 },
  { name: 'nameMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum name filter for ward', index: 2 },
  { name: 'nameMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum name filter for ward', index: 2 },
  { name: 'departmentId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'departmentId parameter for ward', index: 3 },
  { name: 'departmentId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'departmentId parameter for ward', index: 3 },
  { name: 'departmentId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'departmentId parameter for ward', index: 3 },
  { name: 'departmentId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'departmentId parameter for ward', index: 3 },
  { name: 'departmentId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'departmentId parameter for ward', index: 3 },
  { name: 'departmentIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum departmentId filter for ward', index: 3 },
  { name: 'departmentIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum departmentId filter for ward', index: 3 },
  { name: 'floor', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'floor parameter for ward', index: 4 },
  { name: 'floor', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'floor parameter for ward', index: 4 },
  { name: 'floor', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'floor parameter for ward', index: 4 },
  { name: 'floor', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'floor parameter for ward', index: 4 },
  { name: 'floor', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'floor parameter for ward', index: 4 },
  { name: 'floorMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum floor filter for ward', index: 4 },
  { name: 'floorMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum floor filter for ward', index: 4 },
  { name: 'capacity', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'capacity parameter for ward', index: 5 },
  { name: 'capacity', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'capacity parameter for ward', index: 5 },
  { name: 'capacity', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'capacity parameter for ward', index: 5 },
  { name: 'capacity', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'capacity parameter for ward', index: 5 },
  { name: 'capacity', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'capacity parameter for ward', index: 5 },
  { name: 'capacityMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum capacity filter for ward', index: 5 },
  { name: 'capacityMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum capacity filter for ward', index: 5 },
  { name: 'genderPolicy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'genderPolicy parameter for ward', index: 6 },
  { name: 'genderPolicy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'genderPolicy parameter for ward', index: 6 },
  { name: 'genderPolicy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'genderPolicy parameter for ward', index: 6 },
  { name: 'genderPolicy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'genderPolicy parameter for ward', index: 6 },
  { name: 'genderPolicy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'genderPolicy parameter for ward', index: 6 },
  { name: 'genderPolicyMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum genderPolicy filter for ward', index: 6 },
  { name: 'genderPolicyMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum genderPolicy filter for ward', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for ward', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for ward', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for ward', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for ward', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for ward', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for ward', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for ward', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
