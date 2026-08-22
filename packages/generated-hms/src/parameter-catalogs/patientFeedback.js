'use strict';
// Complete parameter catalog for patientFeedback.
const entity='patientFeedback';
const parameters=[
  { name: 'patientId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for patientFeedback', index: 1 },
  { name: 'patientId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for patientFeedback', index: 1 },
  { name: 'patientId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for patientFeedback', index: 1 },
  { name: 'patientId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'patientId parameter for patientFeedback', index: 1 },
  { name: 'patientId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'patientId parameter for patientFeedback', index: 1 },
  { name: 'patientIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum patientId filter for patientFeedback', index: 1 },
  { name: 'patientIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum patientId filter for patientFeedback', index: 1 },
  { name: 'visitId', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'visitId parameter for patientFeedback', index: 2 },
  { name: 'visitId', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'visitId parameter for patientFeedback', index: 2 },
  { name: 'visitId', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'visitId parameter for patientFeedback', index: 2 },
  { name: 'visitId', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'visitId parameter for patientFeedback', index: 2 },
  { name: 'visitId', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'visitId parameter for patientFeedback', index: 2 },
  { name: 'visitIdMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum visitId filter for patientFeedback', index: 2 },
  { name: 'visitIdMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum visitId filter for patientFeedback', index: 2 },
  { name: 'rating', mode: 'input', type: 'string', required: true, nullable: true, defaultValue: null, description: 'rating parameter for patientFeedback', index: 3 },
  { name: 'rating', mode: 'filter', type: 'string', required: true, nullable: true, defaultValue: null, description: 'rating parameter for patientFeedback', index: 3 },
  { name: 'rating', mode: 'sort', type: 'string', required: true, nullable: true, defaultValue: false, description: 'rating parameter for patientFeedback', index: 3 },
  { name: 'rating', mode: 'search', type: 'string', required: true, nullable: true, defaultValue: null, description: 'rating parameter for patientFeedback', index: 3 },
  { name: 'rating', mode: 'export', type: 'string', required: true, nullable: true, defaultValue: false, description: 'rating parameter for patientFeedback', index: 3 },
  { name: 'ratingMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum rating filter for patientFeedback', index: 3 },
  { name: 'ratingMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum rating filter for patientFeedback', index: 3 },
  { name: 'category', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'category parameter for patientFeedback', index: 4 },
  { name: 'category', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'category parameter for patientFeedback', index: 4 },
  { name: 'category', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'category parameter for patientFeedback', index: 4 },
  { name: 'category', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'category parameter for patientFeedback', index: 4 },
  { name: 'category', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'category parameter for patientFeedback', index: 4 },
  { name: 'categoryMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum category filter for patientFeedback', index: 4 },
  { name: 'categoryMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum category filter for patientFeedback', index: 4 },
  { name: 'comments', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'comments parameter for patientFeedback', index: 5 },
  { name: 'comments', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'comments parameter for patientFeedback', index: 5 },
  { name: 'comments', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'comments parameter for patientFeedback', index: 5 },
  { name: 'comments', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'comments parameter for patientFeedback', index: 5 },
  { name: 'comments', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'comments parameter for patientFeedback', index: 5 },
  { name: 'commentsMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum comments filter for patientFeedback', index: 5 },
  { name: 'commentsMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum comments filter for patientFeedback', index: 5 },
  { name: 'submittedAt', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'submittedAt parameter for patientFeedback', index: 6 },
  { name: 'submittedAt', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'submittedAt parameter for patientFeedback', index: 6 },
  { name: 'submittedAt', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'submittedAt parameter for patientFeedback', index: 6 },
  { name: 'submittedAt', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'submittedAt parameter for patientFeedback', index: 6 },
  { name: 'submittedAt', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'submittedAt parameter for patientFeedback', index: 6 },
  { name: 'submittedAtMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum submittedAt filter for patientFeedback', index: 6 },
  { name: 'submittedAtMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum submittedAt filter for patientFeedback', index: 6 },
  { name: 'status', mode: 'input', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for patientFeedback', index: 7 },
  { name: 'status', mode: 'filter', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for patientFeedback', index: 7 },
  { name: 'status', mode: 'sort', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for patientFeedback', index: 7 },
  { name: 'status', mode: 'search', type: 'string', required: false, nullable: true, defaultValue: null, description: 'status parameter for patientFeedback', index: 7 },
  { name: 'status', mode: 'export', type: 'string', required: false, nullable: true, defaultValue: false, description: 'status parameter for patientFeedback', index: 7 },
  { name: 'statusMin', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Minimum status filter for patientFeedback', index: 7 },
  { name: 'statusMax', mode: 'range', type: 'string', required: false, nullable: true, defaultValue: null, description: 'Maximum status filter for patientFeedback', index: 7 },
];

function get(name){return parameters.find(p=>p.name===name)||null;}
function list(mode){return mode?parameters.filter(p=>p.mode===mode):[...parameters];}
function required(){return parameters.filter(p=>p.required);}
function validateParameter(name,value){const p=get(name);if(!p)return {ok:false,code:'UNKNOWN_PARAMETER'};if(value===null&&p.nullable)return {ok:true};if(p.type==='number'&&typeof value!=='number')return {ok:false,code:'TYPE_ERROR'};if(p.type==='boolean'&&typeof value!=='boolean')return {ok:false,code:'TYPE_ERROR'};if(p.type==='string'&&typeof value!=='string')return {ok:false,code:'TYPE_ERROR'};return {ok:true};}
function validateObject(input={}){const errors=[];for(const p of required()){if(input[p.name]===undefined||input[p.name]===null||input[p.name]==='')errors.push({field:p.name,code:'REQUIRED'});}for(const [k,v] of Object.entries(input)){const result=validateParameter(k,v);if(!result.ok)errors.push({field:k,code:result.code});}return errors;}
function defaults(){return Object.fromEntries(parameters.filter(p=>p.defaultValue!==null).map(p=>[p.name,p.defaultValue]));}
function describe(){return {entity,parameterCount:parameters.length,parameters};}
module.exports={entity,parameters,get,list,required,validateParameter,validateObject,defaults,describe};
