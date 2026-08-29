'use strict';
const { VortexFeatureStore } = require('../../services/api/src/utils/featureStore');

describe('Vortex Feature Store Point-in-Time Joins', () => {
  let store;

  beforeEach(() => {
    store = new VortexFeatureStore();
  });

  test('registers and retrieves historical feature snapshots as-of timestamp', () => {
    store.registerFeature('telemedicine_billing_rate', 50, '2026-01-01T00:00:00Z');
    store.registerFeature('telemedicine_billing_rate', 75, '2026-04-01T00:00:00Z');

    const marchState = store.asOfJoin('2026-03-15T00:00:00Z', ['telemedicine_billing_rate']);
    expect(marchState.features.telemedicine_billing_rate.value).toBe(50);

    const mayState = store.asOfJoin('2026-05-01T00:00:00Z', ['telemedicine_billing_rate']);
    expect(mayState.features.telemedicine_billing_rate.value).toBe(75);
  });

  test('handles missing flags with fallback defaults', () => {
    const result = store.asOfJoin('2026-01-01T00:00:00Z', ['unregistered_flag'], {
      defaults: { unregistered_flag: false }
    });
    expect(result.missing).toContain('unregistered_flag');
    expect(result.features.unregistered_flag.value).toBe(false);
  });
});
