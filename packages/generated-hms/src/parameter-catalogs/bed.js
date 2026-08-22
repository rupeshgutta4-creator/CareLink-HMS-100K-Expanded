'use strict';
// Complete parameter catalog for bed.
const entity='bed';
const parameters=[
  { name: 'wardId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'wardId parameter for bed', index: 1 },
  { name: 'wardId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'wardId parameter for bed', index: 1 },
  { name: 'wardId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'wardId parameter for bed', index: 1 },
  { name: 'wardId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'wardId parameter for bed', index: 1 },
  { name: 'wardId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'wardId parameter for bed', index: 1 },
  { name: 'wardIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum wardId filter for bed', index: 1 },
  { name: 'wardIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum wardId filter for bed', index: 1 },
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for bed', index: 2 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for bed', index: 2 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for bed', index: 2 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for bed', index: 2 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for bed', index: 2 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for bed', index: 2 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for bed', index: 2 },
  { name: 'roomNumber', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'roomNumber parameter for bed', index: 3 },
  { name: 'roomNumber', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'roomNumber parameter for bed', index: 3 },
  { name: 'roomNumber', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'roomNumber parameter for bed', index: 3 },
  { name: 'roomNumber', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'roomNumber parameter for bed', index: 3 },
  { name: 'roomNumber', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'roomNumber parameter for bed', index: 3 },
  { name: 'roomNumberMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum roomNumber filter for bed', index: 3 },
  { name: 'roomNumberMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum roomNumber filter for bed', index: 3 },
  { name: 'bedNumber', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'bedNumber parameter for bed', index: 4 },
  { name: 'bedNumber', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'bedNumber parameter for bed', index: 4 },
  { name: 'bedNumber', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'bedNumber parameter for bed', index: 4 },
  { name: 'bedNumber', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'bedNumber parameter for bed', index: 4 },
  { name: 'bedNumber', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'bedNumber parameter for bed', index: 4 },
  { name: 'bedNumberMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum bedNumber filter for bed', index: 4 },
  { name: 'bedNumberMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum bedNumber filter for bed', index: 4 },
  { name: 'type', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'type parameter for bed', index: 5 },
  { name: 'type', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'type parameter for bed', index: 5 },
  { name: 'type', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'type parameter for bed', index: 5 },
  { name: 'type', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'type parameter for bed', index: 5 },
  { name: 'type', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'type parameter for bed', index: 5 },
  { name: 'typeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum type filter for bed', index: 5 },
  { name: 'typeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum type filter for bed', index: 5 },
  { name: 'dailyRate', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'dailyRate parameter for bed', index: 6 },
  { name: 'dailyRate', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'dailyRate parameter for bed', index: 6 },
  { name: 'dailyRate', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'dailyRate parameter for bed', index: 6 },
  { name: 'dailyRate', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'dailyRate parameter for bed', index: 6 },
  { name: 'dailyRate', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'dailyRate parameter for bed', index: 6 },
  { name: 'dailyRateMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum dailyRate filter for bed', index: 6 },
  { name: 'dailyRateMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum dailyRate filter for bed', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for bed', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for bed', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for bed', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for bed', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for bed', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for bed', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for bed', index: 7 },
  { name: 'patientId', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'patientId parameter for bed', index: 8 },
  { name: 'patientId', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'patientId parameter for bed', index: 8 },
  { name: 'patientId', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'patientId parameter for bed', index: 8 },
  { name: 'patientId', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'patientId parameter for bed', index: 8 },
  { name: 'patientId', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'patientId parameter for bed', index: 8 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for bed', index: 8 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for bed', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
