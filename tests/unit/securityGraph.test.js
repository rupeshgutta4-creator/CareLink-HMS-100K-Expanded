'use strict';
const { AegisSecurityGraph } = require('../../services/api/src/utils/securityGraph');

describe('AegisGuard Graph Ring Analytics', () => {
  let graph;

  beforeEach(() => {
    graph = new AegisSecurityGraph();
  });

  test('detects circular access rings across users and shared resources', () => {
    // Ring: UserA -> ResourceB -> UserC -> UserA
    graph.addAccessEdge('UserA', 'ResourceB');
    graph.addAccessEdge('ResourceB', 'UserC');
    graph.addAccessEdge('UserC', 'UserA');

    const result = graph.detectRingCycles('UserA');
    expect(result.hasRingAnomaly).toBe(true);
    expect(result.cycles.length).toBeGreaterThan(0);
  });

  test('reports clean when access hierarchy is acyclic DAG', () => {
    graph.addAccessEdge('DoctorA', 'PatientRecord1');
    graph.addAccessEdge('DoctorB', 'PatientRecord1');

    const result = graph.detectRingCycles('DoctorA');
    expect(result.hasRingAnomaly).toBe(false);
  });
});
