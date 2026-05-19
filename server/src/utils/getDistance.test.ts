import { getDistance } from './getDistance';

describe('getDistance', () => {
  it('returns 0 for identical points', () => {
    const point = { lat: 48.8566, lng: 2.3522 };
    expect(getDistance(point, point)).toBeCloseTo(0);
  });

  it('calculates distance between Paris and London (~340 km)', () => {
    const paris = { lat: 48.8566, lng: 2.3522 };
    const london = { lat: 51.5074, lng: -0.1278 };
    expect(getDistance(paris, london)).toBeCloseTo(340, -1);
  });

  it('returns a positive number', () => {
    const a = { lat: 0, lng: 0 };
    const b = { lat: 10, lng: 10 };
    expect(getDistance(a, b)).toBeGreaterThanOrEqual(0);
  });
});
