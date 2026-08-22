'use strict';
// Complete parameter catalog for bloodUnit.
const entity='bloodUnit';
const parameters=[
  { name: 'donorCode', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'donorCode parameter for bloodUnit', index: 1 },
  { name: 'donorCode', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'donorCode parameter for bloodUnit', index: 1 },
  { name: 'donorCode', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'donorCode parameter for bloodUnit', index: 1 },
  { name: 'donorCode', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'donorCode parameter for bloodUnit', index: 1 },
  { name: 'donorCode', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'donorCode parameter for bloodUnit', index: 1 },
  { name: 'donorCodeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum donorCode filter for bloodUnit', index: 1 },
  { name: 'donorCodeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum donorCode filter for bloodUnit', index: 1 },
  { name: 'bloodGroup', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'bloodGroup parameter for bloodUnit', index: 2 },
  { name: 'bloodGroup', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'bloodGroup parameter for bloodUnit', index: 2 },
  { name: 'bloodGroup', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'bloodGroup parameter for bloodUnit', index: 2 },
  { name: 'bloodGroup', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'bloodGroup parameter for bloodUnit', index: 2 },
  { name: 'bloodGroup', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'bloodGroup parameter for bloodUnit', index: 2 },
  { name: 'bloodGroupMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum bloodGroup filter for bloodUnit', index: 2 },
  { name: 'bloodGroupMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum bloodGroup filter for bloodUnit', index: 2 },
  { name: 'component', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'component parameter for bloodUnit', index: 3 },
  { name: 'component', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'component parameter for bloodUnit', index: 3 },
  { name: 'component', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'component parameter for bloodUnit', index: 3 },
  { name: 'component', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'component parameter for bloodUnit', index: 3 },
  { name: 'component', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'component parameter for bloodUnit', index: 3 },
  { name: 'componentMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum component filter for bloodUnit', index: 3 },
  { name: 'componentMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum component filter for bloodUnit', index: 3 },
  { name: 'collectionDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'collectionDate parameter for bloodUnit', index: 4 },
  { name: 'collectionDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'collectionDate parameter for bloodUnit', index: 4 },
  { name: 'collectionDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'collectionDate parameter for bloodUnit', index: 4 },
  { name: 'collectionDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'collectionDate parameter for bloodUnit', index: 4 },
  { name: 'collectionDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'collectionDate parameter for bloodUnit', index: 4 },
  { name: 'collectionDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum collectionDate filter for bloodUnit', index: 4 },
  { name: 'collectionDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum collectionDate filter for bloodUnit', index: 4 },
  { name: 'expiryDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'expiryDate parameter for bloodUnit', index: 5 },
  { name: 'expiryDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'expiryDate parameter for bloodUnit', index: 5 },
  { name: 'expiryDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'expiryDate parameter for bloodUnit', index: 5 },
  { name: 'expiryDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'expiryDate parameter for bloodUnit', index: 5 },
  { name: 'expiryDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'expiryDate parameter for bloodUnit', index: 5 },
  { name: 'expiryDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum expiryDate filter for bloodUnit', index: 5 },
  { name: 'expiryDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum expiryDate filter for bloodUnit', index: 5 },
  { name: 'volumeMl', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'volumeMl parameter for bloodUnit', index: 6 },
  { name: 'volumeMl', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'volumeMl parameter for bloodUnit', index: 6 },
  { name: 'volumeMl', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'volumeMl parameter for bloodUnit', index: 6 },
  { name: 'volumeMl', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'volumeMl parameter for bloodUnit', index: 6 },
  { name: 'volumeMl', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'volumeMl parameter for bloodUnit', index: 6 },
  { name: 'volumeMlMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum volumeMl filter for bloodUnit', index: 6 },
  { name: 'volumeMlMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum volumeMl filter for bloodUnit', index: 6 },
  { name: 'storageLocation', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageLocation parameter for bloodUnit', index: 7 },
  { name: 'storageLocation', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageLocation parameter for bloodUnit', index: 7 },
  { name: 'storageLocation', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'storageLocation parameter for bloodUnit', index: 7 },
  { name: 'storageLocation', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'storageLocation parameter for bloodUnit', index: 7 },
  { name: 'storageLocation', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'storageLocation parameter for bloodUnit', index: 7 },
  { name: 'storageLocationMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum storageLocation filter for bloodUnit', index: 7 },
  { name: 'storageLocationMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum storageLocation filter for bloodUnit', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for bloodUnit', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for bloodUnit', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for bloodUnit', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for bloodUnit', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for bloodUnit', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for bloodUnit', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for bloodUnit', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
