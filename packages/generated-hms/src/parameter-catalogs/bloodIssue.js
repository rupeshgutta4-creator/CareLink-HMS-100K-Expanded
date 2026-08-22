'use strict';
// Complete parameter catalog for bloodIssue.
const entity='bloodIssue';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for bloodIssue', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for bloodIssue', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for bloodIssue', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for bloodIssue', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for bloodIssue', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for bloodIssue', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for bloodIssue', index: 1 },
  { name: 'bloodUnitId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'bloodUnitId parameter for bloodIssue', index: 2 },
  { name: 'bloodUnitId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'bloodUnitId parameter for bloodIssue', index: 2 },
  { name: 'bloodUnitId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'bloodUnitId parameter for bloodIssue', index: 2 },
  { name: 'bloodUnitId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'bloodUnitId parameter for bloodIssue', index: 2 },
  { name: 'bloodUnitId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'bloodUnitId parameter for bloodIssue', index: 2 },
  { name: 'bloodUnitIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum bloodUnitId filter for bloodIssue', index: 2 },
  { name: 'bloodUnitIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum bloodUnitId filter for bloodIssue', index: 2 },
  { name: 'requestedBy', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'requestedBy parameter for bloodIssue', index: 3 },
  { name: 'requestedBy', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'requestedBy parameter for bloodIssue', index: 3 },
  { name: 'requestedBy', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'requestedBy parameter for bloodIssue', index: 3 },
  { name: 'requestedBy', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'requestedBy parameter for bloodIssue', index: 3 },
  { name: 'requestedBy', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'requestedBy parameter for bloodIssue', index: 3 },
  { name: 'requestedByMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum requestedBy filter for bloodIssue', index: 3 },
  { name: 'requestedByMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum requestedBy filter for bloodIssue', index: 3 },
  { name: 'issuedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'issuedAt parameter for bloodIssue', index: 4 },
  { name: 'issuedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'issuedAt parameter for bloodIssue', index: 4 },
  { name: 'issuedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'issuedAt parameter for bloodIssue', index: 4 },
  { name: 'issuedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'issuedAt parameter for bloodIssue', index: 4 },
  { name: 'issuedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'issuedAt parameter for bloodIssue', index: 4 },
  { name: 'issuedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum issuedAt filter for bloodIssue', index: 4 },
  { name: 'issuedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum issuedAt filter for bloodIssue', index: 4 },
  { name: 'crossmatchResult', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'crossmatchResult parameter for bloodIssue', index: 5 },
  { name: 'crossmatchResult', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'crossmatchResult parameter for bloodIssue', index: 5 },
  { name: 'crossmatchResult', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'crossmatchResult parameter for bloodIssue', index: 5 },
  { name: 'crossmatchResult', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'crossmatchResult parameter for bloodIssue', index: 5 },
  { name: 'crossmatchResult', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'crossmatchResult parameter for bloodIssue', index: 5 },
  { name: 'crossmatchResultMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum crossmatchResult filter for bloodIssue', index: 5 },
  { name: 'crossmatchResultMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum crossmatchResult filter for bloodIssue', index: 5 },
  { name: 'transfusionStatus', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'transfusionStatus parameter for bloodIssue', index: 6 },
  { name: 'transfusionStatus', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'transfusionStatus parameter for bloodIssue', index: 6 },
  { name: 'transfusionStatus', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'transfusionStatus parameter for bloodIssue', index: 6 },
  { name: 'transfusionStatus', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'transfusionStatus parameter for bloodIssue', index: 6 },
  { name: 'transfusionStatus', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'transfusionStatus parameter for bloodIssue', index: 6 },
  { name: 'transfusionStatusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum transfusionStatus filter for bloodIssue', index: 6 },
  { name: 'transfusionStatusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum transfusionStatus filter for bloodIssue', index: 6 },
  { name: 'notes', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for bloodIssue', index: 7 },
  { name: 'notes', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for bloodIssue', index: 7 },
  { name: 'notes', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'notes parameter for bloodIssue', index: 7 },
  { name: 'notes', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'notes parameter for bloodIssue', index: 7 },
  { name: 'notes', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'notes parameter for bloodIssue', index: 7 },
  { name: 'notesMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum notes filter for bloodIssue', index: 7 },
  { name: 'notesMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum notes filter for bloodIssue', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
