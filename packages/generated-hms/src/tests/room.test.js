'use strict';
const entity=require('../entities/room');
test('Room validates required parameters',()=>{const errors=entity.validate({});expect(errors.length).toBeGreaterThan(0);});
test('Room accepts a complete parameter object',()=>{const value={};for(const [k,r] of Object.entries(entity.fields)){value[k]=r.type==='number'?1:r.type==='boolean'?true:'x';}expect(entity.validate(value)).toEqual([]);});
