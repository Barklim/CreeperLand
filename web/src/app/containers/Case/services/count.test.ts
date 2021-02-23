import {
  getCardsCountInBlock,
  RouletteSizes,
} from './count';

describe('getCardsCountInBlock', () => {
  const pcSizes: RouletteSizes = {
    cardFullWidth: 120,
    cardMarginRight: 10,
    cardWidth: 110,

    containerHorizontalPadding: 44,
  };

  const mobileSizes: RouletteSizes = {
    cardFullWidth: 61,
    cardMarginRight: 5,
    cardWidth: 56,

    containerHorizontalPadding: 25,
  };

  it('at screen resolution === 1024 => count === 7', () => {
    global.innerWidth = 1024;

    expect(getCardsCountInBlock(pcSizes)).toBe(7);
  });

  it('at screen resolution === 576 => count === 7', () => {
    global.innerWidth = 576;

    expect(getCardsCountInBlock(mobileSizes)).toBe(7);
  });
});
