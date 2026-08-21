'use strict';
// Complete parameter catalog for employeeAttendance.
const entity='employeeAttendance';
const parameters=[
  { name: 'staffId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for employeeAttendance', index: 1 },
  { name: 'staffId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for employeeAttendance', index: 1 },
  { name: 'staffId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'staffId parameter for employeeAttendance', index: 1 },
  { name: 'staffId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'staffId parameter for employeeAttendance', index: 1 },
  { name: 'staffId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'staffId parameter for employeeAttendance', index: 1 },
  { name: 'staffIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum staffId filter for employeeAttendance', index: 1 },
  { name: 'staffIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum staffId filter for employeeAttendance', index: 1 },
  { name: 'date', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'date parameter for employeeAttendance', index: 2 },
  { name: 'date', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'date parameter for employeeAttendance', index: 2 },
  { name: 'date', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'date parameter for employeeAttendance', index: 2 },
  { name: 'date', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'date parameter for employeeAttendance', index: 2 },
  { name: 'date', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'date parameter for employeeAttendance', index: 2 },
  { name: 'dateMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum date filter for employeeAttendance', index: 2 },
  { name: 'dateMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum date filter for employeeAttendance', index: 2 },
  { name: 'checkIn', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'checkIn parameter for employeeAttendance', index: 3 },
  { name: 'checkIn', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'checkIn parameter for employeeAttendance', index: 3 },
  { name: 'checkIn', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'checkIn parameter for employeeAttendance', index: 3 },
  { name: 'checkIn', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'checkIn parameter for employeeAttendance', index: 3 },
  { name: 'checkIn', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'checkIn parameter for employeeAttendance', index: 3 },
  { name: 'checkInMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum checkIn filter for employeeAttendance', index: 3 },
  { name: 'checkInMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum checkIn filter for employeeAttendance', index: 3 },
  { name: 'checkOut', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'checkOut parameter for employeeAttendance', index: 4 },
  { name: 'checkOut', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'checkOut parameter for employeeAttendance', index: 4 },
  { name: 'checkOut', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'checkOut parameter for employeeAttendance', index: 4 },
  { name: 'checkOut', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'checkOut parameter for employeeAttendance', index: 4 },
  { name: 'checkOut', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'checkOut parameter for employeeAttendance', index: 4 },
  { name: 'checkOutMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum checkOut filter for employeeAttendance', index: 4 },
  { name: 'checkOutMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum checkOut filter for employeeAttendance', index: 4 },
  { name: 'shift', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'shift parameter for employeeAttendance', index: 5 },
  { name: 'shift', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'shift parameter for employeeAttendance', index: 5 },
  { name: 'shift', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'shift parameter for employeeAttendance', index: 5 },
  { name: 'shift', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'shift parameter for employeeAttendance', index: 5 },
  { name: 'shift', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'shift parameter for employeeAttendance', index: 5 },
  { name: 'shiftMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum shift filter for employeeAttendance', index: 5 },
  { name: 'shiftMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum shift filter for employeeAttendance', index: 5 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for employeeAttendance', index: 6 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for employeeAttendance', index: 6 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for employeeAttendance', index: 6 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for employeeAttendance', index: 6 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for employeeAttendance', index: 6 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for employeeAttendance', index: 6 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for employeeAttendance', index: 6 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
