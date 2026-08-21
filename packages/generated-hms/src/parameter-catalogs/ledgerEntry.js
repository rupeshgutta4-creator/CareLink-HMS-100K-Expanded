'use strict';
// Complete parameter catalog for ledgerEntry.
const entity='ledgerEntry';
const parameters=[
  { name: 'transactionId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'transactionId parameter for ledgerEntry', index: 1 },
  { name: 'transactionId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'transactionId parameter for ledgerEntry', index: 1 },
  { name: 'transactionId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'transactionId parameter for ledgerEntry', index: 1 },
  { name: 'transactionId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'transactionId parameter for ledgerEntry', index: 1 },
  { name: 'transactionId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'transactionId parameter for ledgerEntry', index: 1 },
  { name: 'transactionIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum transactionId filter for ledgerEntry', index: 1 },
  { name: 'transactionIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum transactionId filter for ledgerEntry', index: 1 },
  { name: 'accountCode', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'accountCode parameter for ledgerEntry', index: 2 },
  { name: 'accountCode', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'accountCode parameter for ledgerEntry', index: 2 },
  { name: 'accountCode', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'accountCode parameter for ledgerEntry', index: 2 },
  { name: 'accountCode', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'accountCode parameter for ledgerEntry', index: 2 },
  { name: 'accountCode', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'accountCode parameter for ledgerEntry', index: 2 },
  { name: 'accountCodeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum accountCode filter for ledgerEntry', index: 2 },
  { name: 'accountCodeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum accountCode filter for ledgerEntry', index: 2 },
  { name: 'debit', mode: 'input', type: 'number', required: true, nullable: true, defaultValue: null, description: 'debit parameter for ledgerEntry', index: 3 },
  { name: 'debit', mode: 'filter', type: 'number', required: true, nullable: true, defaultValue: null, description: 'debit parameter for ledgerEntry', index: 3 },
  { name: 'debit', mode: 'sort', type: 'number', required: true, nullable: true, defaultValue: false, description: 'debit parameter for ledgerEntry', index: 3 },
  { name: 'debit', mode: 'search', type: 'number', required: true, nullable: true, defaultValue: null, description: 'debit parameter for ledgerEntry', index: 3 },
  { name: 'debit', mode: 'export', type: 'number', required: true, nullable: true, defaultValue: false, description: 'debit parameter for ledgerEntry', index: 3 },
  { name: 'debitMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum debit filter for ledgerEntry', index: 3 },
  { name: 'debitMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum debit filter for ledgerEntry', index: 3 },
  { name: 'credit', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'credit parameter for ledgerEntry', index: 4 },
  { name: 'credit', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'credit parameter for ledgerEntry', index: 4 },
  { name: 'credit', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'credit parameter for ledgerEntry', index: 4 },
  { name: 'credit', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'credit parameter for ledgerEntry', index: 4 },
  { name: 'credit', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'credit parameter for ledgerEntry', index: 4 },
  { name: 'creditMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum credit filter for ledgerEntry', index: 4 },
  { name: 'creditMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum credit filter for ledgerEntry', index: 4 },
  { name: 'description', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'description parameter for ledgerEntry', index: 5 },
  { name: 'description', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'description parameter for ledgerEntry', index: 5 },
  { name: 'description', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'description parameter for ledgerEntry', index: 5 },
  { name: 'description', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'description parameter for ledgerEntry', index: 5 },
  { name: 'description', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'description parameter for ledgerEntry', index: 5 },
  { name: 'descriptionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum description filter for ledgerEntry', index: 5 },
  { name: 'descriptionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum description filter for ledgerEntry', index: 5 },
  { name: 'postedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'postedAt parameter for ledgerEntry', index: 6 },
  { name: 'postedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'postedAt parameter for ledgerEntry', index: 6 },
  { name: 'postedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'postedAt parameter for ledgerEntry', index: 6 },
  { name: 'postedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'postedAt parameter for ledgerEntry', index: 6 },
  { name: 'postedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'postedAt parameter for ledgerEntry', index: 6 },
  { name: 'postedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum postedAt filter for ledgerEntry', index: 6 },
  { name: 'postedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum postedAt filter for ledgerEntry', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for ledgerEntry', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for ledgerEntry', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for ledgerEntry', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for ledgerEntry', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for ledgerEntry', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for ledgerEntry', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for ledgerEntry', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
