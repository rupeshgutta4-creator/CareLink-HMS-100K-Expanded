'use strict';
const ENTITY='doctor';
const FIELDS=["employeeId", "firstName", "lastName", "specialization", "department", "licenseNumber", "phone", "email", "qualification", "experienceYears", "consultationFee", "status"];

function normalize(value){ if(value===undefined||value===null)return value; if(typeof value==='string')return value.trim(); return value; }
function buildFilter(query={}){ const filter={}; for(const key of FIELDS){ if(query[key]!==undefined) filter[key]=normalize(query[key]); } return filter; }
function buildSort(query={}){ const raw=String(query.sort||'createdAt'); const direction=String(query.direction||'desc').toLowerCase()==='asc'?'asc':'desc'; const field=FIELDS.includes(raw)?raw:'createdAt'; return {field,direction}; }
function buildPagination(query={}){ const limit=Math.min(Math.max(Number(query.limit||50),1),500); const offset=Math.max(Number(query.offset||0),0); return {limit,offset}; }
function buildSearch(query={}){ const q=normalize(query.q||''); if(!q)return null; return {term:q,fields:FIELDS.filter(f=>/name|code|number|email|phone|description|title/i.test(f))}; }
function buildQuery(query={}){ return {entity:ENTITY,filter:buildFilter(query),sort:buildSort(query),pagination:buildPagination(query),search:buildSearch(query)}; }
module.exports={ENTITY,FIELDS,buildFilter,buildSort,buildPagination,buildSearch,buildQuery};
function getDoctorEmployeeid(row){return row?.['employeeId'];}
function getDoctorFirstname(row){return row?.['firstName'];}
function getDoctorLastname(row){return row?.['lastName'];}
function getDoctorSpecialization(row){return row?.['specialization'];}
function getDoctorDepartment(row){return row?.['department'];}
function getDoctorLicensenumber(row){return row?.['licenseNumber'];}
function getDoctorPhone(row){return row?.['phone'];}
function getDoctorEmail(row){return row?.['email'];}
function getDoctorQualification(row){return row?.['qualification'];}
function getDoctorExperienceyears(row){return row?.['experienceYears'];}
function getDoctorConsultationfee(row){return row?.['consultationFee'];}
function getDoctorStatus(row){return row?.['status'];}

function project(row, requested=[]){ if(!row)return row; if(!requested.length)return {...row}; const allowed=requested.filter(x=>FIELDS.includes(x)); return Object.fromEntries(allowed.map(k=>[k,row[k]])); }
function matches(row, filter={}){ return Object.entries(filter).every(([k,v])=>v===undefined||v===null||String(row[k]).toLowerCase()===String(v).toLowerCase()); }
function sortRows(rows, sort){ const copy=[...rows]; return copy.sort((a,b)=>{const av=a?.[sort.field],bv=b?.[sort.field]; if(av===bv)return 0; const c=String(av??'').localeCompare(String(bv??''),undefined,{numeric:true}); return sort.direction==='asc'?c:-c;}); }
function paginate(rows,p){return rows.slice(p.offset,p.offset+p.limit);}
module.exports.project=project; module.exports.matches=matches; module.exports.sortRows=sortRows; module.exports.paginate=paginate;

