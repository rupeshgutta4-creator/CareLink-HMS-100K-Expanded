'use strict';

class ClinicalPulseRec {
  generatePatientCapsules(patientData = {}) {
    const capsules = [];

    // Vital signs capsule
    if (patientData.vitals) {
      const alerts = [];
      if (patientData.vitals.systolicBP > 140) alerts.push('Elevated systolic blood pressure');
      if (patientData.vitals.heartRate > 100) alerts.push('Tachycardia alert');
      if (alerts.length) {
        capsules.push({
          interest: 'cardiovascular_monitoring',
          severity: 'HIGH',
          recommendations: alerts
        });
      }
    }

    // Preventive care & immunization capsule
    if (patientData.age >= 50 && !patientData.screenedColorectal) {
      capsules.push({
        interest: 'preventive_screening',
        severity: 'MEDIUM',
        recommendations: ['Schedule routine colorectal screening']
      });
    }

    return {
      patientId: patientData.id || 'N/A',
      capsuleCount: capsules.length,
      capsules
    };
  }
}

module.exports = { ClinicalPulseRec };
