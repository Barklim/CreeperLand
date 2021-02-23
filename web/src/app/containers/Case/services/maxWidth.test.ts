import { RouletteSizes } from './count';
import { getLineMaxWidthByCount } from './maxWidth';

describe('getLineMaxWidthByCount', () => {
  const sizes: RouletteSizes = {
    cardFullWidth: 120,
    cardMarginRight: 10,
    cardWidth: 110,

    containerHorizontalPadding: 44,
  };

  it('at count === 8 => maxWidth === 950', () => {
    expect(getLineMaxWidthByCount(8, sizes)).toBe(950);
  });
});
