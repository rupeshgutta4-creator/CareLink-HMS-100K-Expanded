'use strict';

describe('Billing helpers', () => {
  function invoiceTotals(lines, taxRate = 0.05) {
    const subtotal = lines.reduce((s, l) => s + (Number(l.amount) || 0) * (Number(l.quantity) || 1), 0);
    const tax = Math.round(subtotal * taxRate);
    return { subtotal, tax, total: subtotal + tax };
  }

  test('computes subtotal tax and total', () => {
    const t = invoiceTotals([
      { amount: 500, quantity: 1 },
      { amount: 100, quantity: 2 }
    ]);
    expect(t.subtotal).toBe(700);
    expect(t.tax).toBe(35);
    expect(t.total).toBe(735);
  });

  test('handles empty lines', () => {
    const t = invoiceTotals([]);
    expect(t.subtotal).toBe(0);
    expect(t.total).toBe(0);
  });
});
