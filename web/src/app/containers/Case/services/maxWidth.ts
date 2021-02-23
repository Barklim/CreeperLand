import { RouletteSizes } from './count';

export const getLineMaxWidthByCount = (
  cardsCountInBlock: number,
  sizes: RouletteSizes,
): number => {
  const { cardFullWidth, cardMarginRight } = sizes;

  return cardsCountInBlock * cardFullWidth - cardMarginRight;
};
