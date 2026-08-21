'use strict';
const entity='pharmacyTransaction';
const fields=['medicineId', 'type', 'quantity', 'unitCost', 'reference', 'performedAt', 'performedBy', 'notes'];

function getMedicineid(record, value, filter, columns=fields){ return record?.['medicineId']; }
function hasMedicineid(record, value, filter, columns=fields){ return record?.['medicineId'] !== undefined && record?.['medicineId'] !== null && record?.['medicineId'] !== ''; }
function withMedicineid(record, value, filter, columns=fields){ return {...record, ['medicineId']: value}; }
function clearMedicineid(record, value, filter, columns=fields){ const copy={...record}; delete copy['medicineId']; return copy; }
function copyMedicineid(record, value, filter, columns=fields){ return {name:'medicineId', value: record?.['medicineId']}; }
function paramMedicineidInput(record, value, filter, columns=fields){ return {field:'medicineId', mode:'input', value: record?.['medicineId']}; }
function paramMedicineidFilter(record, value, filter, columns=fields){ return {field:'medicineId', mode:'filter', value: filter?.['medicineId']}; }
function paramMedicineidExport(record, value, filter, columns=fields){ return {field:'medicineId', mode:'export', included: columns.includes('medicineId')}; }
function getType(record, value, filter, columns=fields){ return record?.['type']; }
function hasType(record, value, filter, columns=fields){ return record?.['type'] !== undefined && record?.['type'] !== null && record?.['type'] !== ''; }
function withType(record, value, filter, columns=fields){ return {...record, ['type']: value}; }
function clearType(record, value, filter, columns=fields){ const copy={...record}; delete copy['type']; return copy; }
function copyType(record, value, filter, columns=fields){ return {name:'type', value: record?.['type']}; }
function paramTypeInput(record, value, filter, columns=fields){ return {field:'type', mode:'input', value: record?.['type']}; }
function paramTypeFilter(record, value, filter, columns=fields){ return {field:'type', mode:'filter', value: filter?.['type']}; }
function paramTypeExport(record, value, filter, columns=fields){ return {field:'type', mode:'export', included: columns.includes('type')}; }
function getQuantity(record, value, filter, columns=fields){ return record?.['quantity']; }
function hasQuantity(record, value, filter, columns=fields){ return record?.['quantity'] !== undefined && record?.['quantity'] !== null && record?.['quantity'] !== ''; }
function withQuantity(record, value, filter, columns=fields){ return {...record, ['quantity']: value}; }
function clearQuantity(record, value, filter, columns=fields){ const copy={...record}; delete copy['quantity']; return copy; }
function copyQuantity(record, value, filter, columns=fields){ return {name:'quantity', value: record?.['quantity']}; }
function paramQuantityInput(record, value, filter, columns=fields){ return {field:'quantity', mode:'input', value: record?.['quantity']}; }
function paramQuantityFilter(record, value, filter, columns=fields){ return {field:'quantity', mode:'filter', value: filter?.['quantity']}; }
function paramQuantityExport(record, value, filter, columns=fields){ return {field:'quantity', mode:'export', included: columns.includes('quantity')}; }
function getUnitcost(record, value, filter, columns=fields){ return record?.['unitCost']; }
function hasUnitcost(record, value, filter, columns=fields){ return record?.['unitCost'] !== undefined && record?.['unitCost'] !== null && record?.['unitCost'] !== ''; }
function withUnitcost(record, value, filter, columns=fields){ return {...record, ['unitCost']: value}; }
function clearUnitcost(record, value, filter, columns=fields){ const copy={...record}; delete copy['unitCost']; return copy; }
function copyUnitcost(record, value, filter, columns=fields){ return {name:'unitCost', value: record?.['unitCost']}; }
function paramUnitcostInput(record, value, filter, columns=fields){ return {field:'unitCost', mode:'input', value: record?.['unitCost']}; }
function paramUnitcostFilter(record, value, filter, columns=fields){ return {field:'unitCost', mode:'filter', value: filter?.['unitCost']}; }
function paramUnitcostExport(record, value, filter, columns=fields){ return {field:'unitCost', mode:'export', included: columns.includes('unitCost')}; }
function getReference(record, value, filter, columns=fields){ return record?.['reference']; }
function hasReference(record, value, filter, columns=fields){ return record?.['reference'] !== undefined && record?.['reference'] !== null && record?.['reference'] !== ''; }
function withReference(record, value, filter, columns=fields){ return {...record, ['reference']: value}; }
function clearReference(record, value, filter, columns=fields){ const copy={...record}; delete copy['reference']; return copy; }
function copyReference(record, value, filter, columns=fields){ return {name:'reference', value: record?.['reference']}; }
function paramReferenceInput(record, value, filter, columns=fields){ return {field:'reference', mode:'input', value: record?.['reference']}; }
function paramReferenceFilter(record, value, filter, columns=fields){ return {field:'reference', mode:'filter', value: filter?.['reference']}; }
function paramReferenceExport(record, value, filter, columns=fields){ return {field:'reference', mode:'export', included: columns.includes('reference')}; }
function getPerformedat(record, value, filter, columns=fields){ return record?.['performedAt']; }
function hasPerformedat(record, value, filter, columns=fields){ return record?.['performedAt'] !== undefined && record?.['performedAt'] !== null && record?.['performedAt'] !== ''; }
function withPerformedat(record, value, filter, columns=fields){ return {...record, ['performedAt']: value}; }
function clearPerformedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['performedAt']; return copy; }
function copyPerformedat(record, value, filter, columns=fields){ return {name:'performedAt', value: record?.['performedAt']}; }
function paramPerformedatInput(record, value, filter, columns=fields){ return {field:'performedAt', mode:'input', value: record?.['performedAt']}; }
function paramPerformedatFilter(record, value, filter, columns=fields){ return {field:'performedAt', mode:'filter', value: filter?.['performedAt']}; }
function paramPerformedatExport(record, value, filter, columns=fields){ return {field:'performedAt', mode:'export', included: columns.includes('performedAt')}; }
function getPerformedby(record, value, filter, columns=fields){ return record?.['performedBy']; }
function hasPerformedby(record, value, filter, columns=fields){ return record?.['performedBy'] !== undefined && record?.['performedBy'] !== null && record?.['performedBy'] !== ''; }
function withPerformedby(record, value, filter, columns=fields){ return {...record, ['performedBy']: value}; }
function clearPerformedby(record, value, filter, columns=fields){ const copy={...record}; delete copy['performedBy']; return copy; }
function copyPerformedby(record, value, filter, columns=fields){ return {name:'performedBy', value: record?.['performedBy']}; }
function paramPerformedbyInput(record, value, filter, columns=fields){ return {field:'performedBy', mode:'input', value: record?.['performedBy']}; }
function paramPerformedbyFilter(record, value, filter, columns=fields){ return {field:'performedBy', mode:'filter', value: filter?.['performedBy']}; }
function paramPerformedbyExport(record, value, filter, columns=fields){ return {field:'performedBy', mode:'export', included: columns.includes('performedBy')}; }
function getNotes(record, value, filter, columns=fields){ return record?.['notes']; }
function hasNotes(record, value, filter, columns=fields){ return record?.['notes'] !== undefined && record?.['notes'] !== null && record?.['notes'] !== ''; }
function withNotes(record, value, filter, columns=fields){ return {...record, ['notes']: value}; }
function clearNotes(record, value, filter, columns=fields){ const copy={...record}; delete copy['notes']; return copy; }
function copyNotes(record, value, filter, columns=fields){ return {name:'notes', value: record?.['notes']}; }
function paramNotesInput(record, value, filter, columns=fields){ return {field:'notes', mode:'input', value: record?.['notes']}; }
function paramNotesFilter(record, value, filter, columns=fields){ return {field:'notes', mode:'filter', value: filter?.['notes']}; }
function paramNotesExport(record, value, filter, columns=fields){ return {field:'notes', mode:'export', included: columns.includes('notes')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
