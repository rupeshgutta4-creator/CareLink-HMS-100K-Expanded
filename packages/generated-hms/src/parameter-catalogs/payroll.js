'use strict';
// Complete parameter catalog for payroll.
const entity='payroll';
const parameters=[
  { name: 'staffId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for payroll', index: 1 },
  { name: 'staffId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for payroll', index: 1 },
  { name: 'staffId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'staffId parameter for payroll', index: 1 },
  { name: 'staffId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for payroll', index: 1 },
  { name: 'staffId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'staffId parameter for payroll', index: 1 },
  { name: 'staffIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum staffId filter for payroll', index: 1 },
  { name: 'staffIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum staffId filter for payroll', index: 1 },
  { name: 'period', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'period parameter for payroll', index: 2 },
  { name: 'period', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'period parameter for payroll', index: 2 },
  { name: 'period', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'period parameter for payroll', index: 2 },
  { name: 'period', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'period parameter for payroll', index: 2 },
  { name: 'period', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'period parameter for payroll', index: 2 },
  { name: 'periodMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum period filter for payroll', index: 2 },
  { name: 'periodMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum period filter for payroll', index: 2 },
  { name: 'basic', mode: 'input', type: 'number', required: true, nullable: true, defaultValue: null, description: 'basic parameter for payroll', index: 3 },
  { name: 'basic', mode: 'filter', type: 'number', required: true, nullable: true, defaultValue: null, description: 'basic parameter for payroll', index: 3 },
  { name: 'basic', mode: 'sort', type: 'number', required: true, nullable: true, defaultValue: false, description: 'basic parameter for payroll', index: 3 },
  { name: 'basic', mode: 'search', type: 'number', required: true, nullable: true, defaultValue: null, description: 'basic parameter for payroll', index: 3 },
  { name: 'basic', mode: 'export', type: 'number', required: true, nullable: true, defaultValue: false, description: 'basic parameter for payroll', index: 3 },
  { name: 'basicMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum basic filter for payroll', index: 3 },
  { name: 'basicMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum basic filter for payroll', index: 3 },
  { name: 'allowances', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'allowances parameter for payroll', index: 4 },
  { name: 'allowances', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'allowances parameter for payroll', index: 4 },
  { name: 'allowances', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'allowances parameter for payroll', index: 4 },
  { name: 'allowances', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'allowances parameter for payroll', index: 4 },
  { name: 'allowances', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'allowances parameter for payroll', index: 4 },
  { name: 'allowancesMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum allowances filter for payroll', index: 4 },
  { name: 'allowancesMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum allowances filter for payroll', index: 4 },
  { name: 'deductions', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'deductions parameter for payroll', index: 5 },
  { name: 'deductions', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'deductions parameter for payroll', index: 5 },
  { name: 'deductions', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'deductions parameter for payroll', index: 5 },
  { name: 'deductions', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'deductions parameter for payroll', index: 5 },
  { name: 'deductions', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'deductions parameter for payroll', index: 5 },
  { name: 'deductionsMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum deductions filter for payroll', index: 5 },
  { name: 'deductionsMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum deductions filter for payroll', index: 5 },
  { name: 'tax', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'tax parameter for payroll', index: 6 },
  { name: 'tax', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'tax parameter for payroll', index: 6 },
  { name: 'tax', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'tax parameter for payroll', index: 6 },
  { name: 'tax', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'tax parameter for payroll', index: 6 },
  { name: 'tax', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'tax parameter for payroll', index: 6 },
  { name: 'taxMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum tax filter for payroll', index: 6 },
  { name: 'taxMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum tax filter for payroll', index: 6 },
  { name: 'netPay', mode: 'input', type: 'number', required: false, nullable: true, defaultValue: null, description: 'netPay parameter for payroll', index: 7 },
  { name: 'netPay', mode: 'filter', type: 'number', required: false, nullable: true, defaultValue: null, description: 'netPay parameter for payroll', index: 7 },
  { name: 'netPay', mode: 'sort', type: 'number', required: false, nullable: true, defaultValue: false, description: 'netPay parameter for payroll', index: 7 },
  { name: 'netPay', mode: 'search', type: 'number', required: false, nullable: true, defaultValue: null, description: 'netPay parameter for payroll', index: 7 },
  { name: 'netPay', mode: 'export', type: 'number', required: false, nullable: true, defaultValue: false, description: 'netPay parameter for payroll', index: 7 },
  { name: 'netPayMin', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Minimum netPay filter for payroll', index: 7 },
  { name: 'netPayMax', mode: 'range', type: 'number', required: false, nullable: true, defaultValue: null, description: 'Maximum netPay filter for payroll', index: 7 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for payroll', index: 8 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for payroll', index: 8 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for payroll', index: 8 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for payroll', index: 8 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for payroll', index: 8 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for payroll', index: 8 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for payroll', index: 8 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
