'use strict';
// Complete parameter catalog for labSpecimen.
const entity='labSpecimen';
const parameters=[
  { name: 'labOrderId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'labOrderId parameter for labSpecimen', index: 1 },
  { name: 'labOrderId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'labOrderId parameter for labSpecimen', index: 1 },
  { name: 'labOrderId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'labOrderId parameter for labSpecimen', index: 1 },
  { name: 'labOrderId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'labOrderId parameter for labSpecimen', index: 1 },
  { name: 'labOrderId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'labOrderId parameter for labSpecimen', index: 1 },
  { name: 'labOrderIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum labOrderId filter for labSpecimen', index: 1 },
  { name: 'labOrderIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum labOrderId filter for labSpecimen', index: 1 },
  { name: 'type', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for labSpecimen', index: 2 },
  { name: 'type', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for labSpecimen', index: 2 },
  { name: 'type', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for labSpecimen', index: 2 },
  { name: 'type', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for labSpecimen', index: 2 },
  { name: 'type', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for labSpecimen', index: 2 },
  { name: 'typeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum type filter for labSpecimen', index: 2 },
  { name: 'typeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum type filter for labSpecimen', index: 2 },
  { name: 'barcode', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'barcode parameter for labSpecimen', index: 3 },
  { name: 'barcode', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'barcode parameter for labSpecimen', index: 3 },
  { name: 'barcode', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'barcode parameter for labSpecimen', index: 3 },
  { name: 'barcode', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'barcode parameter for labSpecimen', index: 3 },
  { name: 'barcode', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'barcode parameter for labSpecimen', index: 3 },
  { name: 'barcodeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum barcode filter for labSpecimen', index: 3 },
  { name: 'barcodeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum barcode filter for labSpecimen', index: 3 },
  { name: 'collectedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'collectedAt parameter for labSpecimen', index: 4 },
  { name: 'collectedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'collectedAt parameter for labSpecimen', index: 4 },
  { name: 'collectedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'collectedAt parameter for labSpecimen', index: 4 },
  { name: 'collectedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'collectedAt parameter for labSpecimen', index: 4 },
  { name: 'collectedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'collectedAt parameter for labSpecimen', index: 4 },
  { name: 'collectedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum collectedAt filter for labSpecimen', index: 4 },
  { name: 'collectedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum collectedAt filter for labSpecimen', index: 4 },
  { name: 'collectedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'collectedBy parameter for labSpecimen', index: 5 },
  { name: 'collectedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'collectedBy parameter for labSpecimen', index: 5 },
  { name: 'collectedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'collectedBy parameter for labSpecimen', index: 5 },
  { name: 'collectedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'collectedBy parameter for labSpecimen', index: 5 },
  { name: 'collectedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'collectedBy parameter for labSpecimen', index: 5 },
  { name: 'collectedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum collectedBy filter for labSpecimen', index: 5 },
  { name: 'collectedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum collectedBy filter for labSpecimen', index: 5 },
  { name: 'receivedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'receivedAt parameter for labSpecimen', index: 6 },
  { name: 'receivedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'receivedAt parameter for labSpecimen', index: 6 },
  { name: 'receivedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'receivedAt parameter for labSpecimen', index: 6 },
  { name: 'receivedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'receivedAt parameter for labSpecimen', index: 6 },
  { name: 'receivedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'receivedAt parameter for labSpecimen', index: 6 },
  { name: 'receivedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum receivedAt filter for labSpecimen', index: 6 },
  { name: 'receivedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum receivedAt filter for labSpecimen', index: 6 },
  { name: 'receivedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'receivedBy parameter for labSpecimen', index: 7 },
  { name: 'receivedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'receivedBy parameter for labSpecimen', index: 7 },
  { name: 'receivedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'receivedBy parameter for labSpecimen', index: 7 },
  { name: 'receivedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'receivedBy parameter for labSpecimen', index: 7 },
  { name: 'receivedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'receivedBy parameter for labSpecimen', index: 7 },
  { name: 'receivedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum receivedBy filter for labSpecimen', index: 7 },
  { name: 'receivedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum receivedBy filter for labSpecimen', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for labSpecimen', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for labSpecimen', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for labSpecimen', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for labSpecimen', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for labSpecimen', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for labSpecimen', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for labSpecimen', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
