'use strict';
const express=require('express');
const {controller}=require('../controllers/smsTemplate');
module.exports=function createRouter(service){const r=express.Router();const c=controller(service);r.get('/',c.list);r.get('/metadata',c.metadata);r.get('/:id',c.get);r.post('/',c.create);r.patch('/:id',c.update);r.delete('/:id',c.remove);return r;};
