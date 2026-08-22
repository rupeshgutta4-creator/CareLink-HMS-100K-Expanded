'use strict';
// Complete parameter catalog for purchaseOrderItem.
const entity='purchaseOrderItem';
const parameters=[
  { name: 'purchaseOrderId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'purchaseOrderId parameter for purchaseOrderItem', index: 1 },
  { name: 'purchaseOrderId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'purchaseOrderId parameter for purchaseOrderItem', index: 1 },
  { name: 'purchaseOrderId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'purchaseOrderId parameter for purchaseOrderItem', index: 1 },
  { name: 'purchaseOrderId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'purchaseOrderId parameter for purchaseOrderItem', index: 1 },
  { name: 'purchaseOrderId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'purchaseOrderId parameter for purchaseOrderItem', index: 1 },
  { name: 'purchaseOrderIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum purchaseOrderId filter for purchaseOrderItem', index: 1 },
  { name: 'purchaseOrderIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum purchaseOrderId filter for purchaseOrderItem', index: 1 },
  { name: 'medicineId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'medicineId parameter for purchaseOrderItem', index: 2 },
  { name: 'medicineId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'medicineId parameter for purchaseOrderItem', index: 2 },
  { name: 'medicineId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'medicineId parameter for purchaseOrderItem', index: 2 },
  { name: 'medicineId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'medicineId parameter for purchaseOrderItem', index: 2 },
  { name: 'medicineId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'medicineId parameter for purchaseOrderItem', index: 2 },
  { name: 'medicineIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum medicineId filter for purchaseOrderItem', index: 2 },
  { name: 'medicineIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum medicineId filter for purchaseOrderItem', index: 2 },
  { name: 'batchNumber', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'batchNumber parameter for purchaseOrderItem', index: 3 },
  { name: 'batchNumber', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'batchNumber parameter for purchaseOrderItem', index: 3 },
  { name: 'batchNumber', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'batchNumber parameter for purchaseOrderItem', index: 3 },
  { name: 'batchNumber', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'batchNumber parameter for purchaseOrderItem', index: 3 },
  { name: 'batchNumber', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'batchNumber parameter for purchaseOrderItem', index: 3 },
  { name: 'batchNumberMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum batchNumber filter for purchaseOrderItem', index: 3 },
  { name: 'batchNumberMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum batchNumber filter for purchaseOrderItem', index: 3 },
  { name: 'quantity', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'quantity parameter for purchaseOrderItem', index: 4 },
  { name: 'quantity', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'quantity parameter for purchaseOrderItem', index: 4 },
  { name: 'quantity', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'quantity parameter for purchaseOrderItem', index: 4 },
  { name: 'quantity', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'quantity parameter for purchaseOrderItem', index: 4 },
  { name: 'quantity', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'quantity parameter for purchaseOrderItem', index: 4 },
  { name: 'quantityMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum quantity filter for purchaseOrderItem', index: 4 },
  { name: 'quantityMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum quantity filter for purchaseOrderItem', index: 4 },
  { name: 'unitCost', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'unitCost parameter for purchaseOrderItem', index: 5 },
  { name: 'unitCost', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'unitCost parameter for purchaseOrderItem', index: 5 },
  { name: 'unitCost', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'unitCost parameter for purchaseOrderItem', index: 5 },
  { name: 'unitCost', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'unitCost parameter for purchaseOrderItem', index: 5 },
  { name: 'unitCost', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'unitCost parameter for purchaseOrderItem', index: 5 },
  { name: 'unitCostMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum unitCost filter for purchaseOrderItem', index: 5 },
  { name: 'unitCostMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum unitCost filter for purchaseOrderItem', index: 5 },
  { name: 'expiryDate', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'expiryDate parameter for purchaseOrderItem', index: 6 },
  { name: 'expiryDate', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'expiryDate parameter for purchaseOrderItem', index: 6 },
  { name: 'expiryDate', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'expiryDate parameter for purchaseOrderItem', index: 6 },
  { name: 'expiryDate', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'expiryDate parameter for purchaseOrderItem', index: 6 },
  { name: 'expiryDate', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'expiryDate parameter for purchaseOrderItem', index: 6 },
  { name: 'expiryDateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum expiryDate filter for purchaseOrderItem', index: 6 },
  { name: 'expiryDateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum expiryDate filter for purchaseOrderItem', index: 6 },
  { name: 'taxRate', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'taxRate parameter for purchaseOrderItem', index: 7 },
  { name: 'taxRate', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'taxRate parameter for purchaseOrderItem', index: 7 },
  { name: 'taxRate', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'taxRate parameter for purchaseOrderItem', index: 7 },
  { name: 'taxRate', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'taxRate parameter for purchaseOrderItem', index: 7 },
  { name: 'taxRate', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'taxRate parameter for purchaseOrderItem', index: 7 },
  { name: 'taxRateMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum taxRate filter for purchaseOrderItem', index: 7 },
  { name: 'taxRateMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum taxRate filter for purchaseOrderItem', index: 7 },
  { name: 'lineTotal', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'lineTotal parameter for purchaseOrderItem', index: 8 },
  { name: 'lineTotal', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'lineTotal parameter for purchaseOrderItem', index: 8 },
  { name: 'lineTotal', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'lineTotal parameter for purchaseOrderItem', index: 8 },
  { name: 'lineTotal', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'lineTotal parameter for purchaseOrderItem', index: 8 },
  { name: 'lineTotal', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'lineTotal parameter for purchaseOrderItem', index: 8 },
  { name: 'lineTotalMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum lineTotal filter for purchaseOrderItem', index: 8 },
  { name: 'lineTotalMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum lineTotal filter for purchaseOrderItem', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
