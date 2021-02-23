const isOdd = (num: number) => num % 2 !== 0;
const oddOrLowerOdd = (num: number) => (isOdd(num) ? num : num - 1);
const positiveOrOne = (num: number) => (num < 0 ? 1 : num);

const getCount = (width: number, cardWidth: number) => {
  const count = Math.floor(width / cardWidth);

  return positiveOrOne(oddOrLowerOdd(count));
};

export interface RouletteSizes {
  cardFullWidth: number;
  cardMarginRight: number;
  cardWidth: number;

  containerHorizontalPadding: number;
}

export const getCardsCountInBlock = (
  sizes: RouletteSizes,
  isScroll = false,
): number => {
  const padding = sizes.containerHorizontalPadding * 2;
  const cardWidth = sizes.cardFullWidth;

  const availableWidth = window.innerWidth - padding;

  const scrollWidth = 15;

  const cardsCount = getCount(availableWidth, cardWidth);

  if (isScroll) return cardsCount;

  const scrollCardsCount = getCount(availableWidth - scrollWidth, cardWidth);

  return Math.min(cardsCount, scrollCardsCount);
};
