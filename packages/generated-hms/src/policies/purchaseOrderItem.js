'use strict';
const ENTITY='purchaseOrderItem';
const ACTIONS=['read','list','create','update','delete','export'];
function normalizeRoles(roles){return Array.isArray(roles)?roles.map(String):roles?[String(roles)]:[];}
function can(role,action,record,context={}){
  const roles=normalizeRoles(role);
  if(!ACTIONS.includes(action))return false;
  if(roles.includes('super_admin')||roles.includes('admin'))return true;
  if(action==='read'||action==='list')return roles.length>0;
  if(action==='create')return roles.length>0;
  if(action==='update')return roles.some(r=>['doctor','nurse','pharmacist','lab_technician','billing','manager'].includes(r));
  if(action==='delete')return roles.includes('manager');
  if(action==='export')return roles.includes('manager');
  return false;
}
function authorize(ctx,action,record){if(!can(ctx?.roles,action,record,ctx))throw Object.assign(new Error('Forbidden'),{status:403,code:'FORBIDDEN',entity:ENTITY,action});return true;}
module.exports={ENTITY,ACTIONS,can,authorize};
