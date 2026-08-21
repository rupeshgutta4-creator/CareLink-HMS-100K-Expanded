'use strict';
const entity='vital';
const fields=['patientId', 'visitId', 'recordedAt', 'temperature', 'heartRate', 'respiratoryRate', 'systolicBp', 'diastolicBp', 'oxygenSaturation', 'weightKg', 'heightCm', 'bmi'];

function getPatientid(record, value, filter, columns=fields){ return record?.['patientId']; }
function hasPatientid(record, value, filter, columns=fields){ return record?.['patientId'] !== undefined && record?.['patientId'] !== null && record?.['patientId'] !== ''; }
function withPatientid(record, value, filter, columns=fields){ return {...record, ['patientId']: value}; }
function clearPatientid(record, value, filter, columns=fields){ const copy={...record}; delete copy['patientId']; return copy; }
function copyPatientid(record, value, filter, columns=fields){ return {name:'patientId', value: record?.['patientId']}; }
function paramPatientidInput(record, value, filter, columns=fields){ return {field:'patientId', mode:'input', value: record?.['patientId']}; }
function paramPatientidFilter(record, value, filter, columns=fields){ return {field:'patientId', mode:'filter', value: filter?.['patientId']}; }
function paramPatientidExport(record, value, filter, columns=fields){ return {field:'patientId', mode:'export', included: columns.includes('patientId')}; }
function getVisitid(record, value, filter, columns=fields){ return record?.['visitId']; }
function hasVisitid(record, value, filter, columns=fields){ return record?.['visitId'] !== undefined && record?.['visitId'] !== null && record?.['visitId'] !== ''; }
function withVisitid(record, value, filter, columns=fields){ return {...record, ['visitId']: value}; }
function clearVisitid(record, value, filter, columns=fields){ const copy={...record}; delete copy['visitId']; return copy; }
function copyVisitid(record, value, filter, columns=fields){ return {name:'visitId', value: record?.['visitId']}; }
function paramVisitidInput(record, value, filter, columns=fields){ return {field:'visitId', mode:'input', value: record?.['visitId']}; }
function paramVisitidFilter(record, value, filter, columns=fields){ return {field:'visitId', mode:'filter', value: filter?.['visitId']}; }
function paramVisitidExport(record, value, filter, columns=fields){ return {field:'visitId', mode:'export', included: columns.includes('visitId')}; }
function getRecordedat(record, value, filter, columns=fields){ return record?.['recordedAt']; }
function hasRecordedat(record, value, filter, columns=fields){ return record?.['recordedAt'] !== undefined && record?.['recordedAt'] !== null && record?.['recordedAt'] !== ''; }
function withRecordedat(record, value, filter, columns=fields){ return {...record, ['recordedAt']: value}; }
function clearRecordedat(record, value, filter, columns=fields){ const copy={...record}; delete copy['recordedAt']; return copy; }
function copyRecordedat(record, value, filter, columns=fields){ return {name:'recordedAt', value: record?.['recordedAt']}; }
function paramRecordedatInput(record, value, filter, columns=fields){ return {field:'recordedAt', mode:'input', value: record?.['recordedAt']}; }
function paramRecordedatFilter(record, value, filter, columns=fields){ return {field:'recordedAt', mode:'filter', value: filter?.['recordedAt']}; }
function paramRecordedatExport(record, value, filter, columns=fields){ return {field:'recordedAt', mode:'export', included: columns.includes('recordedAt')}; }
function getTemperature(record, value, filter, columns=fields){ return record?.['temperature']; }
function hasTemperature(record, value, filter, columns=fields){ return record?.['temperature'] !== undefined && record?.['temperature'] !== null && record?.['temperature'] !== ''; }
function withTemperature(record, value, filter, columns=fields){ return {...record, ['temperature']: value}; }
function clearTemperature(record, value, filter, columns=fields){ const copy={...record}; delete copy['temperature']; return copy; }
function copyTemperature(record, value, filter, columns=fields){ return {name:'temperature', value: record?.['temperature']}; }
function paramTemperatureInput(record, value, filter, columns=fields){ return {field:'temperature', mode:'input', value: record?.['temperature']}; }
function paramTemperatureFilter(record, value, filter, columns=fields){ return {field:'temperature', mode:'filter', value: filter?.['temperature']}; }
function paramTemperatureExport(record, value, filter, columns=fields){ return {field:'temperature', mode:'export', included: columns.includes('temperature')}; }
function getHeartrate(record, value, filter, columns=fields){ return record?.['heartRate']; }
function hasHeartrate(record, value, filter, columns=fields){ return record?.['heartRate'] !== undefined && record?.['heartRate'] !== null && record?.['heartRate'] !== ''; }
function withHeartrate(record, value, filter, columns=fields){ return {...record, ['heartRate']: value}; }
function clearHeartrate(record, value, filter, columns=fields){ const copy={...record}; delete copy['heartRate']; return copy; }
function copyHeartrate(record, value, filter, columns=fields){ return {name:'heartRate', value: record?.['heartRate']}; }
function paramHeartrateInput(record, value, filter, columns=fields){ return {field:'heartRate', mode:'input', value: record?.['heartRate']}; }
function paramHeartrateFilter(record, value, filter, columns=fields){ return {field:'heartRate', mode:'filter', value: filter?.['heartRate']}; }
function paramHeartrateExport(record, value, filter, columns=fields){ return {field:'heartRate', mode:'export', included: columns.includes('heartRate')}; }
function getRespiratoryrate(record, value, filter, columns=fields){ return record?.['respiratoryRate']; }
function hasRespiratoryrate(record, value, filter, columns=fields){ return record?.['respiratoryRate'] !== undefined && record?.['respiratoryRate'] !== null && record?.['respiratoryRate'] !== ''; }
function withRespiratoryrate(record, value, filter, columns=fields){ return {...record, ['respiratoryRate']: value}; }
function clearRespiratoryrate(record, value, filter, columns=fields){ const copy={...record}; delete copy['respiratoryRate']; return copy; }
function copyRespiratoryrate(record, value, filter, columns=fields){ return {name:'respiratoryRate', value: record?.['respiratoryRate']}; }
function paramRespiratoryrateInput(record, value, filter, columns=fields){ return {field:'respiratoryRate', mode:'input', value: record?.['respiratoryRate']}; }
function paramRespiratoryrateFilter(record, value, filter, columns=fields){ return {field:'respiratoryRate', mode:'filter', value: filter?.['respiratoryRate']}; }
function paramRespiratoryrateExport(record, value, filter, columns=fields){ return {field:'respiratoryRate', mode:'export', included: columns.includes('respiratoryRate')}; }
function getSystolicbp(record, value, filter, columns=fields){ return record?.['systolicBp']; }
function hasSystolicbp(record, value, filter, columns=fields){ return record?.['systolicBp'] !== undefined && record?.['systolicBp'] !== null && record?.['systolicBp'] !== ''; }
function withSystolicbp(record, value, filter, columns=fields){ return {...record, ['systolicBp']: value}; }
function clearSystolicbp(record, value, filter, columns=fields){ const copy={...record}; delete copy['systolicBp']; return copy; }
function copySystolicbp(record, value, filter, columns=fields){ return {name:'systolicBp', value: record?.['systolicBp']}; }
function paramSystolicbpInput(record, value, filter, columns=fields){ return {field:'systolicBp', mode:'input', value: record?.['systolicBp']}; }
function paramSystolicbpFilter(record, value, filter, columns=fields){ return {field:'systolicBp', mode:'filter', value: filter?.['systolicBp']}; }
function paramSystolicbpExport(record, value, filter, columns=fields){ return {field:'systolicBp', mode:'export', included: columns.includes('systolicBp')}; }
function getDiastolicbp(record, value, filter, columns=fields){ return record?.['diastolicBp']; }
function hasDiastolicbp(record, value, filter, columns=fields){ return record?.['diastolicBp'] !== undefined && record?.['diastolicBp'] !== null && record?.['diastolicBp'] !== ''; }
function withDiastolicbp(record, value, filter, columns=fields){ return {...record, ['diastolicBp']: value}; }
function clearDiastolicbp(record, value, filter, columns=fields){ const copy={...record}; delete copy['diastolicBp']; return copy; }
function copyDiastolicbp(record, value, filter, columns=fields){ return {name:'diastolicBp', value: record?.['diastolicBp']}; }
function paramDiastolicbpInput(record, value, filter, columns=fields){ return {field:'diastolicBp', mode:'input', value: record?.['diastolicBp']}; }
function paramDiastolicbpFilter(record, value, filter, columns=fields){ return {field:'diastolicBp', mode:'filter', value: filter?.['diastolicBp']}; }
function paramDiastolicbpExport(record, value, filter, columns=fields){ return {field:'diastolicBp', mode:'export', included: columns.includes('diastolicBp')}; }
function getOxygensaturation(record, value, filter, columns=fields){ return record?.['oxygenSaturation']; }
function hasOxygensaturation(record, value, filter, columns=fields){ return record?.['oxygenSaturation'] !== undefined && record?.['oxygenSaturation'] !== null && record?.['oxygenSaturation'] !== ''; }
function withOxygensaturation(record, value, filter, columns=fields){ return {...record, ['oxygenSaturation']: value}; }
function clearOxygensaturation(record, value, filter, columns=fields){ const copy={...record}; delete copy['oxygenSaturation']; return copy; }
function copyOxygensaturation(record, value, filter, columns=fields){ return {name:'oxygenSaturation', value: record?.['oxygenSaturation']}; }
function paramOxygensaturationInput(record, value, filter, columns=fields){ return {field:'oxygenSaturation', mode:'input', value: record?.['oxygenSaturation']}; }
function paramOxygensaturationFilter(record, value, filter, columns=fields){ return {field:'oxygenSaturation', mode:'filter', value: filter?.['oxygenSaturation']}; }
function paramOxygensaturationExport(record, value, filter, columns=fields){ return {field:'oxygenSaturation', mode:'export', included: columns.includes('oxygenSaturation')}; }
function getWeightkg(record, value, filter, columns=fields){ return record?.['weightKg']; }
function hasWeightkg(record, value, filter, columns=fields){ return record?.['weightKg'] !== undefined && record?.['weightKg'] !== null && record?.['weightKg'] !== ''; }
function withWeightkg(record, value, filter, columns=fields){ return {...record, ['weightKg']: value}; }
function clearWeightkg(record, value, filter, columns=fields){ const copy={...record}; delete copy['weightKg']; return copy; }
function copyWeightkg(record, value, filter, columns=fields){ return {name:'weightKg', value: record?.['weightKg']}; }
function paramWeightkgInput(record, value, filter, columns=fields){ return {field:'weightKg', mode:'input', value: record?.['weightKg']}; }
function paramWeightkgFilter(record, value, filter, columns=fields){ return {field:'weightKg', mode:'filter', value: filter?.['weightKg']}; }
function paramWeightkgExport(record, value, filter, columns=fields){ return {field:'weightKg', mode:'export', included: columns.includes('weightKg')}; }
function getHeightcm(record, value, filter, columns=fields){ return record?.['heightCm']; }
function hasHeightcm(record, value, filter, columns=fields){ return record?.['heightCm'] !== undefined && record?.['heightCm'] !== null && record?.['heightCm'] !== ''; }
function withHeightcm(record, value, filter, columns=fields){ return {...record, ['heightCm']: value}; }
function clearHeightcm(record, value, filter, columns=fields){ const copy={...record}; delete copy['heightCm']; return copy; }
function copyHeightcm(record, value, filter, columns=fields){ return {name:'heightCm', value: record?.['heightCm']}; }
function paramHeightcmInput(record, value, filter, columns=fields){ return {field:'heightCm', mode:'input', value: record?.['heightCm']}; }
function paramHeightcmFilter(record, value, filter, columns=fields){ return {field:'heightCm', mode:'filter', value: filter?.['heightCm']}; }
function paramHeightcmExport(record, value, filter, columns=fields){ return {field:'heightCm', mode:'export', included: columns.includes('heightCm')}; }
function getBmi(record, value, filter, columns=fields){ return record?.['bmi']; }
function hasBmi(record, value, filter, columns=fields){ return record?.['bmi'] !== undefined && record?.['bmi'] !== null && record?.['bmi'] !== ''; }
function withBmi(record, value, filter, columns=fields){ return {...record, ['bmi']: value}; }
function clearBmi(record, value, filter, columns=fields){ const copy={...record}; delete copy['bmi']; return copy; }
function copyBmi(record, value, filter, columns=fields){ return {name:'bmi', value: record?.['bmi']}; }
function paramBmiInput(record, value, filter, columns=fields){ return {field:'bmi', mode:'input', value: record?.['bmi']}; }
function paramBmiFilter(record, value, filter, columns=fields){ return {field:'bmi', mode:'filter', value: filter?.['bmi']}; }
function paramBmiExport(record, value, filter, columns=fields){ return {field:'bmi', mode:'export', included: columns.includes('bmi')}; }

function pick(record, columns=fields){const out={};for(const f of columns){if(fields.includes(f)&&record&&Object.prototype.hasOwnProperty.call(record,f))out[f]=record[f];}return out;}
function omit(record, columns=[]){const out={...record};for(const f of columns)delete out[f];return out;}
function compare(a,b,field){const av=a?.[field],bv=b?.[field];if(av===bv)return 0;return String(av??'').localeCompare(String(bv??''),undefined,{numeric:true});}
function normalize(record){const out={};for(const f of fields){let v=record?.[f];if(typeof v==='string')v=v.trim();out[f]=v===undefined?'':v;}return out;}
function empty(){return Object.fromEntries(fields.map(f=>[f,null]));}
function keys(){return [...fields];}
function parameterCount(){return fields.length;}
module.exports={entity,fields,pick,omit,compare,normalize,empty,keys,parameterCount};
