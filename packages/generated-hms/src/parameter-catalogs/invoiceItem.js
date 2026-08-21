'use strict';
// Complete parameter catalog for invoiceItem.
const entity='invoiceItem';
const parameters=[
  { name: 'invoiceId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'invoiceId parameter for invoiceItem', index: 1 },
  { name: 'invoiceId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'invoiceId parameter for invoiceItem', index: 1 },
  { name: 'invoiceId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'invoiceId parameter for invoiceItem', index: 1 },
  { name: 'invoiceId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'invoiceId parameter for invoiceItem', index: 1 },
  { name: 'invoiceId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'invoiceId parameter for invoiceItem', index: 1 },
  { name: 'invoiceIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum invoiceId filter for invoiceItem', index: 1 },
  { name: 'invoiceIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum invoiceId filter for invoiceItem', index: 1 },
  { name: 'serviceCode', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'serviceCode parameter for invoiceItem', index: 2 },
  { name: 'serviceCode', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'serviceCode parameter for invoiceItem', index: 2 },
  { name: 'serviceCode', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'serviceCode parameter for invoiceItem', index: 2 },
  { name: 'serviceCode', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'serviceCode parameter for invoiceItem', index: 2 },
  { name: 'serviceCode', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'serviceCode parameter for invoiceItem', index: 2 },
  { name: 'serviceCodeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum serviceCode filter for invoiceItem', index: 2 },
  { name: 'serviceCodeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum serviceCode filter for invoiceItem', index: 2 },
  { name: 'description', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for invoiceItem', index: 3 },
  { name: 'description', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for invoiceItem', index: 3 },
  { name: 'description', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for invoiceItem', index: 3 },
  { name: 'description', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'description parameter for invoiceItem', index: 3 },
  { name: 'description', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'description parameter for invoiceItem', index: 3 },
  { name: 'descriptionMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum description filter for invoiceItem', index: 3 },
  { name: 'descriptionMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum description filter for invoiceItem', index: 3 },
  { name: 'quantity', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'quantity parameter for invoiceItem', index: 4 },
  { name: 'quantity', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'quantity parameter for invoiceItem', index: 4 },
  { name: 'quantity', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'quantity parameter for invoiceItem', index: 4 },
  { name: 'quantity', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'quantity parameter for invoiceItem', index: 4 },
  { name: 'quantity', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'quantity parameter for invoiceItem', index: 4 },
  { name: 'quantityMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum quantity filter for invoiceItem', index: 4 },
  { name: 'quantityMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum quantity filter for invoiceItem', index: 4 },
  { name: 'unitPrice', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'unitPrice parameter for invoiceItem', index: 5 },
  { name: 'unitPrice', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'unitPrice parameter for invoiceItem', index: 5 },
  { name: 'unitPrice', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'unitPrice parameter for invoiceItem', index: 5 },
  { name: 'unitPrice', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'unitPrice parameter for invoiceItem', index: 5 },
  { name: 'unitPrice', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'unitPrice parameter for invoiceItem', index: 5 },
  { name: 'unitPriceMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum unitPrice filter for invoiceItem', index: 5 },
  { name: 'unitPriceMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum unitPrice filter for invoiceItem', index: 5 },
  { name: 'discount', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'discount parameter for invoiceItem', index: 6 },
  { name: 'discount', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'discount parameter for invoiceItem', index: 6 },
  { name: 'discount', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'discount parameter for invoiceItem', index: 6 },
  { name: 'discount', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'discount parameter for invoiceItem', index: 6 },
  { name: 'discount', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'discount parameter for invoiceItem', index: 6 },
  { name: 'discountMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum discount filter for invoiceItem', index: 6 },
  { name: 'discountMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum discount filter for invoiceItem', index: 6 },
  { name: 'taxRate', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'taxRate parameter for invoiceItem', index: 7 },
  { name: 'taxRate', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'taxRate parameter for invoiceItem', index: 7 },
  { name: 'taxRate', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'taxRate parameter for invoiceItem', index: 7 },
  { name: 'taxRate', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'taxRate parameter for invoiceItem', index: 7 },
  { name: 'taxRate', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'taxRate parameter for invoiceItem', index: 7 },
  { name: 'taxRateMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum taxRate filter for invoiceItem', index: 7 },
  { name: 'taxRateMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum taxRate filter for invoiceItem', index: 7 },
  { name: 'lineTotal', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'lineTotal parameter for invoiceItem', index: 8 },
  { name: 'lineTotal', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'lineTotal parameter for invoiceItem', index: 8 },
  { name: 'lineTotal', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'lineTotal parameter for invoiceItem', index: 8 },
  { name: 'lineTotal', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'lineTotal parameter for invoiceItem', index: 8 },
  { name: 'lineTotal', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'lineTotal parameter for invoiceItem', index: 8 },
  { name: 'lineTotalMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum lineTotal filter for invoiceItem', index: 8 },
  { name: 'lineTotalMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum lineTotal filter for invoiceItem', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
