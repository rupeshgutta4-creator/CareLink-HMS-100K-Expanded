'use strict';
// Complete parameter catalog for pricingRule.
const entity='pricingRule';
const parameters=[
  { name: 'code', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for pricingRule', index: 1 },
  { name: 'code', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for pricingRule', index: 1 },
  { name: 'code', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for pricingRule', index: 1 },
  { name: 'code', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'code parameter for pricingRule', index: 1 },
  { name: 'code', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'code parameter for pricingRule', index: 1 },
  { name: 'codeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum code filter for pricingRule', index: 1 },
  { name: 'codeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum code filter for pricingRule', index: 1 },
  { name: 'serviceCode', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'serviceCode parameter for pricingRule', index: 2 },
  { name: 'serviceCode', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'serviceCode parameter for pricingRule', index: 2 },
  { name: 'serviceCode', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'serviceCode parameter for pricingRule', index: 2 },
  { name: 'serviceCode', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'serviceCode parameter for pricingRule', index: 2 },
  { name: 'serviceCode', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'serviceCode parameter for pricingRule', index: 2 },
  { name: 'serviceCodeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum serviceCode filter for pricingRule', index: 2 },
  { name: 'serviceCodeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum serviceCode filter for pricingRule', index: 2 },
  { name: 'payerType', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'payerType parameter for pricingRule', index: 3 },
  { name: 'payerType', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'payerType parameter for pricingRule', index: 3 },
  { name: 'payerType', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'payerType parameter for pricingRule', index: 3 },
  { name: 'payerType', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'payerType parameter for pricingRule', index: 3 },
  { name: 'payerType', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'payerType parameter for pricingRule', index: 3 },
  { name: 'payerTypeMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum payerType filter for pricingRule', index: 3 },
  { name: 'payerTypeMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum payerType filter for pricingRule', index: 3 },
  { name: 'discountPercent', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'discountPercent parameter for pricingRule', index: 4 },
  { name: 'discountPercent', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'discountPercent parameter for pricingRule', index: 4 },
  { name: 'discountPercent', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'discountPercent parameter for pricingRule', index: 4 },
  { name: 'discountPercent', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'discountPercent parameter for pricingRule', index: 4 },
  { name: 'discountPercent', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'discountPercent parameter for pricingRule', index: 4 },
  { name: 'discountPercentMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum discountPercent filter for pricingRule', index: 4 },
  { name: 'discountPercentMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum discountPercent filter for pricingRule', index: 4 },
  { name: 'taxPercent', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'taxPercent parameter for pricingRule', index: 5 },
  { name: 'taxPercent', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'taxPercent parameter for pricingRule', index: 5 },
  { name: 'taxPercent', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'taxPercent parameter for pricingRule', index: 5 },
  { name: 'taxPercent', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'taxPercent parameter for pricingRule', index: 5 },
  { name: 'taxPercent', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'taxPercent parameter for pricingRule', index: 5 },
  { name: 'taxPercentMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum taxPercent filter for pricingRule', index: 5 },
  { name: 'taxPercentMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum taxPercent filter for pricingRule', index: 5 },
  { name: 'effectiveFrom', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'effectiveFrom parameter for pricingRule', index: 6 },
  { name: 'effectiveFrom', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'effectiveFrom parameter for pricingRule', index: 6 },
  { name: 'effectiveFrom', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'effectiveFrom parameter for pricingRule', index: 6 },
  { name: 'effectiveFrom', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'effectiveFrom parameter for pricingRule', index: 6 },
  { name: 'effectiveFrom', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'effectiveFrom parameter for pricingRule', index: 6 },
  { name: 'effectiveFromMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum effectiveFrom filter for pricingRule', index: 6 },
  { name: 'effectiveFromMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum effectiveFrom filter for pricingRule', index: 6 },
  { name: 'effectiveTo', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'effectiveTo parameter for pricingRule', index: 7 },
  { name: 'effectiveTo', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'effectiveTo parameter for pricingRule', index: 7 },
  { name: 'effectiveTo', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'effectiveTo parameter for pricingRule', index: 7 },
  { name: 'effectiveTo', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'effectiveTo parameter for pricingRule', index: 7 },
  { name: 'effectiveTo', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'effectiveTo parameter for pricingRule', index: 7 },
  { name: 'effectiveToMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum effectiveTo filter for pricingRule', index: 7 },
  { name: 'effectiveToMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum effectiveTo filter for pricingRule', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for pricingRule', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for pricingRule', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for pricingRule', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for pricingRule', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for pricingRule', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for pricingRule', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for pricingRule', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
