'use strict';

const express = require('express');
const bcrypt = require('bcryptjs');
const { db, id, now, audit } = require('../utils/store');
const { signToken, authenticate } = require('../middleware/auth');
const { createError } = require('../middleware/errorHandler');

const authRouter = express.Router();

authRouter.post('/login', (req, res, next) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) throw createError(400, 'Email and password required', 'VALIDATION');
    const user = db.users.find(u => u.email.toLowerCase() === String(email).toLowerCase());
    if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
      throw createError(401, 'Invalid credentials', 'AUTH_FAILED');
    }
    const token = signToken({
      sub: user.id,
      email: user.email,
      role: user.role,
      name: user.name
    });
    audit(user.id, 'login', 'user', user.id);
    res.json({
      token,
      user: { id: user.id, email: user.email, name: user.name, role: user.role }
    });
  } catch (err) {
    next(err);
  }
});

authRouter.post('/register', (req, res, next) => {
  try {
    const { email, password, name, role } = req.body || {};
    if (!email || !password || !name) throw createError(400, 'email, password, name required', 'VALIDATION');
    if (db.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      throw createError(409, 'Email already registered', 'DUPLICATE');
    }
    const allowed = ['patient', 'reception', 'nurse', 'doctor', 'lab', 'pharmacy', 'admin'];
    const r = allowed.includes(role) ? role : 'patient';
    const user = {
      id: id(),
      email: email.toLowerCase(),
      name,
      role: r,
      passwordHash: bcrypt.hashSync(password, 8),
      createdAt: now()
    };
    db.users.push(user);
    audit(user.id, 'register', 'user', user.id);
    const token = signToken({ sub: user.id, email: user.email, role: user.role, name: user.name });
    res.status(201).json({
      token,
      user: { id: user.id, email: user.email, name: user.name, role: user.role }
    });
  } catch (err) {
    next(err);
  }
});

authRouter.get('/me', authenticate, (req, res) => {
  const user = db.users.find(u => u.id === req.user.sub);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ id: user.id, email: user.email, name: user.name, role: user.role });
});

module.exports = { authRouter };
