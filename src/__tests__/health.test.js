import { describe, test, expect } from '@jest/globals';
import { getHealthStatus } from '../health.js';

describe('getHealthStatus', () => {
  test('returns healthy when health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 51 })).toBe('healthy');
  });

  test('returns wounded when health is between 15 and 50 inclusive', () => {
    expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
  });

  test('returns critical when health < 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
  });
});
