'use strict';

const registry = new Map();
function register(name, definition) { registry.set(name, definition); return definition; }
function get(name) { return registry.get(name); }
function list() { return [...registry.keys()]; }
module.exports = { register, get, list };
