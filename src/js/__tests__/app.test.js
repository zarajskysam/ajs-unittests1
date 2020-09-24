import healthStatus from '../app';

test('more than 50 health', () => {
  const expected = 'healthy';
  const received = healthStatus({ name: 'Маг', health: 90 });

  expect(received).toBe(expected);
});

test('50 health', () => {
  const expected = 'healthy';
  const received = healthStatus({ name: 'Маг', health: 50 });

  expect(received).toBe(expected);
});

test('more than 15 health, but less than 50', () => {
  const expected = 'wounded';
  const received = healthStatus({ name: 'Маг', health: 35 });

  expect(received).toBe(expected);
});

test('15 health', () => {
  const expected = 'wounded';
  const received = healthStatus({ name: 'Маг', health: 15 });

  expect(received).toBe(expected);
});

test('less than 15 health', () => {
  const expected = 'critical';
  const received = healthStatus({ name: 'Маг', health: 8 });

  expect(received).toBe(expected);
});
