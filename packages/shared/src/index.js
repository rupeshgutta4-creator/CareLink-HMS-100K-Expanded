'use strict';

const ROLES = ['admin', 'doctor', 'nurse', 'reception', 'lab', 'pharmacy', 'patient'];

const APPOINTMENT_STATUSES = ['scheduled', 'checked_in', 'in_progress', 'completed', 'cancelled', 'no_show'];

const LAB_STATUSES = ['ordered', 'partial', 'completed', 'cancelled'];

function isRole(role) {
  return ROLES.includes(role);
}

function validateEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = {
  ROLES,
  APPOINTMENT_STATUSES,
  LAB_STATUSES,
  isRole,
  validateEmail
};
