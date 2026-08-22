'use strict';
// Complete parameter catalog for pregnancyRecord.
const entity='pregnancyRecord';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for pregnancyRecord', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for pregnancyRecord', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for pregnancyRecord', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for pregnancyRecord', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for pregnancyRecord', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for pregnancyRecord', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for pregnancyRecord', index: 1 },
  { name: 'lmpDate', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'lmpDate parameter for pregnancyRecord', index: 2 },
  { name: 'lmpDate', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'lmpDate parameter for pregnancyRecord', index: 2 },
  { name: 'lmpDate', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'lmpDate parameter for pregnancyRecord', index: 2 },
  { name: 'lmpDate', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'lmpDate parameter for pregnancyRecord', index: 2 },
  { name: 'lmpDate', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'lmpDate parameter for pregnancyRecord', index: 2 },
  { name: 'lmpDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum lmpDate filter for pregnancyRecord', index: 2 },
  { name: 'lmpDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum lmpDate filter for pregnancyRecord', index: 2 },
  { name: 'eddDate', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'eddDate parameter for pregnancyRecord', index: 3 },
  { name: 'eddDate', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'eddDate parameter for pregnancyRecord', index: 3 },
  { name: 'eddDate', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'eddDate parameter for pregnancyRecord', index: 3 },
  { name: 'eddDate', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'eddDate parameter for pregnancyRecord', index: 3 },
  { name: 'eddDate', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'eddDate parameter for pregnancyRecord', index: 3 },
  { name: 'eddDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum eddDate filter for pregnancyRecord', index: 3 },
  { name: 'eddDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum eddDate filter for pregnancyRecord', index: 3 },
  { name: 'gravida', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'gravida parameter for pregnancyRecord', index: 4 },
  { name: 'gravida', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'gravida parameter for pregnancyRecord', index: 4 },
  { name: 'gravida', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'gravida parameter for pregnancyRecord', index: 4 },
  { name: 'gravida', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'gravida parameter for pregnancyRecord', index: 4 },
  { name: 'gravida', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'gravida parameter for pregnancyRecord', index: 4 },
  { name: 'gravidaMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum gravida filter for pregnancyRecord', index: 4 },
  { name: 'gravidaMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum gravida filter for pregnancyRecord', index: 4 },
  { name: 'para', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'para parameter for pregnancyRecord', index: 5 },
  { name: 'para', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'para parameter for pregnancyRecord', index: 5 },
  { name: 'para', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'para parameter for pregnancyRecord', index: 5 },
  { name: 'para', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'para parameter for pregnancyRecord', index: 5 },
  { name: 'para', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'para parameter for pregnancyRecord', index: 5 },
  { name: 'paraMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum para filter for pregnancyRecord', index: 5 },
  { name: 'paraMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum para filter for pregnancyRecord', index: 5 },
  { name: 'riskLevel', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'riskLevel parameter for pregnancyRecord', index: 6 },
  { name: 'riskLevel', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'riskLevel parameter for pregnancyRecord', index: 6 },
  { name: 'riskLevel', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'riskLevel parameter for pregnancyRecord', index: 6 },
  { name: 'riskLevel', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'riskLevel parameter for pregnancyRecord', index: 6 },
  { name: 'riskLevel', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'riskLevel parameter for pregnancyRecord', index: 6 },
  { name: 'riskLevelMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum riskLevel filter for pregnancyRecord', index: 6 },
  { name: 'riskLevelMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum riskLevel filter for pregnancyRecord', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for pregnancyRecord', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for pregnancyRecord', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for pregnancyRecord', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for pregnancyRecord', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for pregnancyRecord', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for pregnancyRecord', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for pregnancyRecord', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
