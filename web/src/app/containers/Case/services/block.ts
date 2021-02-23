import _ from 'lodash';
import { Items, Status, Prize } from '../shared';

// generate
type Generate = (length: number, items?: Items | null) => Items;

export const loadingItems: Items = [
  {
    id: 'loader',
    title: 'loader',
    value: '123',
    lines: 'black',
    icon: 'enderman',
    loader: true,
  },
];

export const generate: Generate = (length, items) => {
  const innerItems = items ?? loadingItems;

  return Array.from({ length }, () => _.sample(innerItems)) as Items;
};

// base
export interface Context {
  items: Items | null;
  prize: Prize;
  cardCountInBlock: number;
  blocksCount: number;
  blocks: Items;
  isFirst: boolean;
}

type BlockHandler = (context: Context) => Items;

export const getBlockWithPrize: BlockHandler = ({
  items,
  prize,
  cardCountInBlock,
}) => {
  if (!items || !prize || !items.length) return [];

  const generatedBlock = generate(cardCountInBlock, items);

  const centerIndex = Math.floor(cardCountInBlock / 2);
  generatedBlock[centerIndex] = prize;

  return generatedBlock;
};

export const getBlocksWithPrize: BlockHandler = context => {
  const { cardCountInBlock, items, blocksCount } = context;

  const prizeBlock = getBlockWithPrize(context);
  const rest = generate(cardCountInBlock * (blocksCount - 1) - 1, items);

  const blocksWithResult = [...rest, ...prizeBlock];

  return blocksWithResult;
};

// handlers

export const oneRandom: BlockHandler = ({ cardCountInBlock, items }) =>
  generate(cardCountInBlock, items);

export const startHandler: BlockHandler = context => {
  const generated = getBlocksWithPrize(context);

  return [...context.blocks, ...generated];
};

export const oneLast: BlockHandler = context => {
  const { blocks, cardCountInBlock } = context;
  if (cardCountInBlock === blocks.length)
    return blocks.slice(blocks.length - cardCountInBlock);

  return getBlockWithPrize(context);
};

export const waitHandler: BlockHandler = context => {
  const handler = context.isFirst ? oneRandom : oneLast;

  return handler(context);
};

export const startedHandler: BlockHandler = context => {
  const { blocks, cardCountInBlock } = context;

  const blocksWithPrize = getBlocksWithPrize(context);

  const newBlocks = [...blocks.slice(0, cardCountInBlock), ...blocksWithPrize];

  if (newBlocks.length !== blocks.length) return newBlocks;

  return blocks;
};

export type RenderStrategy = {
  [k in Status]: BlockHandler;
};

const renderStrategy: RenderStrategy = {
  loading: oneRandom,
  start: startHandler,
  started: startedHandler,
  wait: waitHandler,
  ended: oneLast,
};

export const renderBlocks = (
  status: Status,
  context: Context,
  strategy: RenderStrategy = renderStrategy,
): Items => {
  const handler = strategy[status];

  return handler(context);
};
