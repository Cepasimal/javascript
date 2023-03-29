const { applyFinancialCrisis, formatAllRecipients, getTotalPrice } = require('../invoices');

let invoices = [];

describe('invoices', () => {
  beforeEach(() => {
    invoices = [
      {
        from: 'Toto',
        to: 'Titi',
        price: 100,
      },
      {
        from: 'Titi',
        to: 'Tutu',
        price: 20,
      },
      {
        from: 'Tutu',
        to: 'Toto',
        price: 88,
      },
    ];
  });

  test('applyFinancialCrisis() should multiply all invoice prices by the factor', () => {
    const newPrices = applyFinancialCrisis(invoices, 1.5);
    expect(newPrices[0]).toBe(150);
  });

  test('formatAllRecipients() should format all recipients into a message', () => {
    const message = formatAllRecipients(invoices);
    expect(message).toBe('Titi;Tutu;Toto;');
  });

  test('getTotalPrice() should sum all invoices prices', () => {
    const total = getTotalPrice(invoices);
    expect(total).toBe(208);
  });
});
