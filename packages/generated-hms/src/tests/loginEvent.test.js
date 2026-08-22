'use strict';
const entity=require('../entities/loginEvent');
test('Loginevent validates required parameters',()=>{const errors=entity.validate({});expect(errors.length).toBeGreaterThan(0);});
test('Loginevent accepts a complete parameter object',()=>{const value={};for(const [k,r] of Object.entries(entity.fields)){value[k]=r.type==='number'?1:r.type==='boolean'?true:'x';}expect(entity.validate(value)).toEqual([]);});
