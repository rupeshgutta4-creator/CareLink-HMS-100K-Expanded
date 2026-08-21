'use strict';
// Complete parameter catalog for pharmacyTransaction.
const entity='pharmacyTransaction';
const parameters=[
  { name: 'medicineId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'medicineId parameter for pharmacyTransaction', index: 1 },
  { name: 'medicineId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'medicineId parameter for pharmacyTransaction', index: 1 },
  { name: 'medicineId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'medicineId parameter for pharmacyTransaction', index: 1 },
  { name: 'medicineId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'medicineId parameter for pharmacyTransaction', index: 1 },
  { name: 'medicineId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'medicineId parameter for pharmacyTransaction', index: 1 },
  { name: 'medicineIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum medicineId filter for pharmacyTransaction', index: 1 },
  { name: 'medicineIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum medicineId filter for pharmacyTransaction', index: 1 },
  { name: 'type', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for pharmacyTransaction', index: 2 },
  { name: 'type', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for pharmacyTransaction', index: 2 },
  { name: 'type', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for pharmacyTransaction', index: 2 },
  { name: 'type', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'type parameter for pharmacyTransaction', index: 2 },
  { name: 'type', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'type parameter for pharmacyTransaction', index: 2 },
  { name: 'typeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum type filter for pharmacyTransaction', index: 2 },
  { name: 'typeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum type filter for pharmacyTransaction', index: 2 },
  { name: 'quantity', mode: 'input', type: 'number', required: true, nullable: true, defaultValue: null, description: 'quantity parameter for pharmacyTransaction', index: 3 },
  { name: 'quantity', mode: 'filter', type: 'number', required: true, nullable: true, defaultValue: null, description: 'quantity parameter for pharmacyTransaction', index: 3 },
  { name: 'quantity', mode: 'sort', type: 'number', required: true, nullable: true, defaultValue: false, description: 'quantity parameter for pharmacyTransaction', index: 3 },
  { name: 'quantity', mode: 'search', type: 'number', required: true, nullable: true, defaultValue: null, description: 'quantity parameter for pharmacyTransaction', index: 3 },
  { name: 'quantity', mode: 'export', type: 'number', required: true, nullable: true, defaultValue: false, description: 'quantity parameter for pharmacyTransaction', index: 3 },
  { name: 'quantityMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum quantity filter for pharmacyTransaction', index: 3 },
  { name: 'quantityMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum quantity filter for pharmacyTransaction', index: 3 },
  { name: 'unitCost', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'unitCost parameter for pharmacyTransaction', index: 4 },
  { name: 'unitCost', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'unitCost parameter for pharmacyTransaction', index: 4 },
  { name: 'unitCost', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'unitCost parameter for pharmacyTransaction', index: 4 },
  { name: 'unitCost', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'unitCost parameter for pharmacyTransaction', index: 4 },
  { name: 'unitCost', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'unitCost parameter for pharmacyTransaction', index: 4 },
  { name: 'unitCostMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum unitCost filter for pharmacyTransaction', index: 4 },
  { name: 'unitCostMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum unitCost filter for pharmacyTransaction', index: 4 },
  { name: 'reference', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reference parameter for pharmacyTransaction', index: 5 },
  { name: 'reference', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reference parameter for pharmacyTransaction', index: 5 },
  { name: 'reference', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reference parameter for pharmacyTransaction', index: 5 },
  { name: 'reference', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'reference parameter for pharmacyTransaction', index: 5 },
  { name: 'reference', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'reference parameter for pharmacyTransaction', index: 5 },
  { name: 'referenceMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum reference filter for pharmacyTransaction', index: 5 },
  { name: 'referenceMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum reference filter for pharmacyTransaction', index: 5 },
  { name: 'performedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'performedAt parameter for pharmacyTransaction', index: 6 },
  { name: 'performedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'performedAt parameter for pharmacyTransaction', index: 6 },
  { name: 'performedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'performedAt parameter for pharmacyTransaction', index: 6 },
  { name: 'performedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'performedAt parameter for pharmacyTransaction', index: 6 },
  { name: 'performedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'performedAt parameter for pharmacyTransaction', index: 6 },
  { name: 'performedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum performedAt filter for pharmacyTransaction', index: 6 },
  { name: 'performedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum performedAt filter for pharmacyTransaction', index: 6 },
  { name: 'performedBy', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'performedBy parameter for pharmacyTransaction', index: 7 },
  { name: 'performedBy', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'performedBy parameter for pharmacyTransaction', index: 7 },
  { name: 'performedBy', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'performedBy parameter for pharmacyTransaction', index: 7 },
  { name: 'performedBy', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'performedBy parameter for pharmacyTransaction', index: 7 },
  { name: 'performedBy', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'performedBy parameter for pharmacyTransaction', index: 7 },
  { name: 'performedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum performedBy filter for pharmacyTransaction', index: 7 },
  { name: 'performedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum performedBy filter for pharmacyTransaction', index: 7 },
  { name: 'notes', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for pharmacyTransaction', index: 8 },
  { name: 'notes', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for pharmacyTransaction', index: 8 },
  { name: 'notes', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'notes parameter for pharmacyTransaction', index: 8 },
  { name: 'notes', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for pharmacyTransaction', index: 8 },
  { name: 'notes', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'notes parameter for pharmacyTransaction', index: 8 },
  { name: 'notesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum notes filter for pharmacyTransaction', index: 8 },
  { name: 'notesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum notes filter for pharmacyTransaction', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
