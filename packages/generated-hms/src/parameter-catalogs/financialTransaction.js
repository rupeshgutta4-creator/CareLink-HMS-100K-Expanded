'use strict';
// Complete parameter catalog for financialTransaction.
const entity='financialTransaction';
const parameters=[
  { name: 'costCenterId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'costCenterId parameter for financialTransaction', index: 1 },
  { name: 'costCenterId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'costCenterId parameter for financialTransaction', index: 1 },
  { name: 'costCenterId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'costCenterId parameter for financialTransaction', index: 1 },
  { name: 'costCenterId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'costCenterId parameter for financialTransaction', index: 1 },
  { name: 'costCenterId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'costCenterId parameter for financialTransaction', index: 1 },
  { name: 'costCenterIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum costCenterId filter for financialTransaction', index: 1 },
  { name: 'costCenterIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum costCenterId filter for financialTransaction', index: 1 },
  { name: 'type', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for financialTransaction', index: 2 },
  { name: 'type', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for financialTransaction', index: 2 },
  { name: 'type', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for financialTransaction', index: 2 },
  { name: 'type', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for financialTransaction', index: 2 },
  { name: 'type', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for financialTransaction', index: 2 },
  { name: 'typeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum type filter for financialTransaction', index: 2 },
  { name: 'typeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum type filter for financialTransaction', index: 2 },
  { name: 'reference', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'reference parameter for financialTransaction', index: 3 },
  { name: 'reference', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'reference parameter for financialTransaction', index: 3 },
  { name: 'reference', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'reference parameter for financialTransaction', index: 3 },
  { name: 'reference', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'reference parameter for financialTransaction', index: 3 },
  { name: 'reference', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'reference parameter for financialTransaction', index: 3 },
  { name: 'referenceMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum reference filter for financialTransaction', index: 3 },
  { name: 'referenceMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum reference filter for financialTransaction', index: 3 },
  { name: 'amount', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'amount parameter for financialTransaction', index: 4 },
  { name: 'amount', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'amount parameter for financialTransaction', index: 4 },
  { name: 'amount', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'amount parameter for financialTransaction', index: 4 },
  { name: 'amount', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'amount parameter for financialTransaction', index: 4 },
  { name: 'amount', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'amount parameter for financialTransaction', index: 4 },
  { name: 'amountMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum amount filter for financialTransaction', index: 4 },
  { name: 'amountMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum amount filter for financialTransaction', index: 4 },
  { name: 'currency', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'currency parameter for financialTransaction', index: 5 },
  { name: 'currency', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'currency parameter for financialTransaction', index: 5 },
  { name: 'currency', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'currency parameter for financialTransaction', index: 5 },
  { name: 'currency', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'currency parameter for financialTransaction', index: 5 },
  { name: 'currency', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'currency parameter for financialTransaction', index: 5 },
  { name: 'currencyMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum currency filter for financialTransaction', index: 5 },
  { name: 'currencyMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum currency filter for financialTransaction', index: 5 },
  { name: 'transactionDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'transactionDate parameter for financialTransaction', index: 6 },
  { name: 'transactionDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'transactionDate parameter for financialTransaction', index: 6 },
  { name: 'transactionDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'transactionDate parameter for financialTransaction', index: 6 },
  { name: 'transactionDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'transactionDate parameter for financialTransaction', index: 6 },
  { name: 'transactionDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'transactionDate parameter for financialTransaction', index: 6 },
  { name: 'transactionDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum transactionDate filter for financialTransaction', index: 6 },
  { name: 'transactionDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum transactionDate filter for financialTransaction', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for financialTransaction', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for financialTransaction', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for financialTransaction', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for financialTransaction', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for financialTransaction', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for financialTransaction', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for financialTransaction', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
