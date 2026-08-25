'use strict';

const { ROLES, isRole, validateEmail, APPOINTMENT_STATUSES } = require('../../packages/shared/src/index.js');

describe('CareLink shared constants', () => {
  test('roles include clinical and admin roles', () => {
    expect(ROLES).toContain('admin');
    expect(ROLES).toContain('doctor');
    expect(ROLES).toContain('patient');
    expect(isRole('doctor')).toBe(true);
    expect(isRole('hacker')).toBe(false);
  });

  test('email validation', () => {
    expect(validateEmail('admin@carelink.local')).toBe(true);
    expect(validateEmail('bad')).toBe(false);
  });

  test('appointment statuses are defined', () => {
    expect(APPOINTMENT_STATUSES).toContain('scheduled');
    expect(APPOINTMENT_STATUSES).toContain('completed');
  });
});
