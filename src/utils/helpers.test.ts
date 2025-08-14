import { describe, expect, it } from 'vitest';
import { polarToCartesian } from './helpers';

describe('polarToCartesian', () => {
  it('computes coordinates for main compass points', () => {
    const north = polarToCartesian(0, 0, 1, 0);
    expect(north.x).toBeCloseTo(0);
    expect(north.y).toBeCloseTo(-1);

    const east = polarToCartesian(0, 0, 1, 90);
    expect(east.x).toBeCloseTo(1);
    expect(east.y).toBeCloseTo(0);

    const south = polarToCartesian(0, 0, 1, 180);
    expect(south.x).toBeCloseTo(0);
    expect(south.y).toBeCloseTo(1);

    const west = polarToCartesian(0, 0, 1, 270);
    expect(west.x).toBeCloseTo(-1);
    expect(west.y).toBeCloseTo(0);
  });

  it('computes coordinates for diagonal angles', () => {
    const result = polarToCartesian(0, 0, 1, 45);
    expect(result.x).toBeCloseTo(Math.SQRT1_2);
    expect(result.y).toBeCloseTo(-Math.SQRT1_2);
  });
});
