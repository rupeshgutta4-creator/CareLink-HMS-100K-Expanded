'use strict';
const { ClinicalPulseRec } = require('../../services/api/src/utils/recommendationCapsules');

describe('PulseRec Multi-Interest Clinical Capsules', () => {
  let pulseRec;

  beforeEach(() => {
    pulseRec = new ClinicalPulseRec();
  });

  test('generates cardiovascular monitoring capsule for elevated vitals', () => {
    const result = pulseRec.generatePatientCapsules({
      id: 'PT-101',
      vitals: { systolicBP: 155, heartRate: 110 }
    });

    expect(result.capsuleCount).toBe(1);
    expect(result.capsules[0].interest).toBe('cardiovascular_monitoring');
    expect(result.capsules[0].severity).toBe('HIGH');
  });

  test('returns empty capsules when patient profile is normal and up to date', () => {
    const result = pulseRec.generatePatientCapsules({
      id: 'PT-102',
      age: 30,
      vitals: { systolicBP: 120, heartRate: 72 }
    });

    expect(result.capsuleCount).toBe(0);
  });
});
