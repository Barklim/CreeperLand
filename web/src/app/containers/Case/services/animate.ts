import { Sizes, Status } from '../shared';
import { RouletteSizes } from './count';

export type Animate = null | {
  marginLeft: number;
  transition: string;
};

const getAnimate = (
  sizes: RouletteSizes,
  cardsCountInBlock: number,
  blocksCount: number,
): Animate => {
  const card = sizes.cardFullWidth;
  const block = card * cardsCountInBlock;

  const marginLeft = -(block * blocksCount - card);

  return {
    marginLeft,
    transition: `${blocksCount}s`,
  };
};

export const getAnimateByStatus = (
  sizes: Sizes,
  cardsCountInBlock: number,
  blocksCount: number,
  status: Status,
): Animate => {
  if (status === 'start' || status === 'started') {
    return getAnimate(sizes.roulette, cardsCountInBlock, blocksCount);
  }

  return null;
};
