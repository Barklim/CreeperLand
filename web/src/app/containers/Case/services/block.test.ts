import { Items, Status } from '../shared';
import {
  Context,
  generate,
  getBlockWithPrize,
  getBlocksWithPrize,
  loadingItems,
  oneRandom,
  startHandler,
  oneLast,
  waitHandler,
  startedHandler,
  renderBlocks,
  RenderStrategy,
} from './block';

const baseContext: Context = {
  isFirst: false,

  items: [loadingItems[0], { ...loadingItems[0], id: '2' }],

  blocks: [],

  prize: { ...loadingItems[0], id: '2' },
  cardCountInBlock: 5,
  blocksCount: 5,
};

const contextWithBlocks: Context = {
  ...baseContext,
  blocks: Array.from(
    { length: baseContext.cardCountInBlock },
    () => {
      const items = baseContext.items as Items;

      return items[0];
    },
  ),
};

describe('generate', () => {
  const cardCountInBlock = 5;

  it('must work if items === undefined', () => {
    expect(() =>
      generate(cardCountInBlock),
    ).not.toThrowError();
  });

  it('must work if items === null', () => {
    expect(() =>
      generate(cardCountInBlock, null),
    ).not.toThrowError();
  });

  it('generated.length === cardCountInBlock', () => {
    expect(generate(cardCountInBlock)).toHaveLength(
      cardCountInBlock,
    );
  });

  it('can override items', () => {
    const items: Items = [
      {
        ...loadingItems[0],
        id: '5',
      },
    ];

    const expected = Array.from(
      { length: cardCountInBlock },
      () => items[0],
    );

    expect(generate(cardCountInBlock, items)).toEqual(
      expected,
    );
  });
});

describe('getBlockWithPrize', () => {
  const context = { ...baseContext };

  it('return block that have length === context.cardCountInBlock', () => {
    expect(getBlockWithPrize(context)).toHaveLength(
      context.cardCountInBlock,
    );
  });

  it('return block that have prize in the middle', () => {
    const result = getBlockWithPrize(context);
    const items = context.items as Items;

    expect(result[2]).toEqual(items[1]);
  });

  it('if items === null => return empty array', () => {
    const innerContext: Context = { ...context, items: [] };

    expect(getBlockWithPrize(innerContext)).toHaveLength(0);
  });

  it('if prize === null => return empty array', () => {
    const innerContext: Context = {
      ...context,
      prize: null,
    };

    expect(getBlockWithPrize(innerContext)).toHaveLength(0);
  });
});

describe('getBlocksWithPrize', () => {
  it('return blocks with prize', () => {
    const context = { ...baseContext };

    const result = getBlocksWithPrize(context);
    const length =
      context.cardCountInBlock * context.blocksCount - 1;

    const resultIndex =
      result.length -
      context.cardCountInBlock +
      Math.floor(context.cardCountInBlock / 2);

    expect(result).toHaveLength(length);
    expect(typeof result[0]).toBe('object');
    expect(result[resultIndex]).toEqual(context.prize);
  });
});

describe('oneRandom', () => {
  it('return one block with random cards', () => {
    const context: Context = { ...baseContext };

    const result = oneRandom(context);

    expect(result).toHaveLength(context.cardCountInBlock);
    expect(typeof result[0]).toBe('object');
  });
});

describe('startHandler', () => {
  it('return blocks with prize', () => {
    const context: Context = { ...contextWithBlocks };

    const result = startHandler(context);
    const length =
      context.cardCountInBlock * context.blocksCount +
      context.blocks.length -
      1;

    expect(result).toHaveLength(length);
    expect(typeof result[0]).toBe('object');
  });
});

describe('oneLast', () => {
  const context: Context = { ...contextWithBlocks };

  it('if blocks.length === cardCountInBlock => return last line', () => {
    expect(oneLast(context)).toHaveLength(
      context.blocks.length,
    );
  });

  it('if blocks.length !== cardCountInBlock => rerender', () => {
    const innerContext: Context = {
      ...contextWithBlocks,
      blocks: Array.from(
        { length: 9 },
        () => loadingItems[0],
      ),
      cardCountInBlock: 5,
    };

    expect(oneLast(innerContext)).toHaveLength(5);
  });
});

describe('waitHandler', () => {
  const context: Context = { ...contextWithBlocks };

  it('if isFirst === true => get one random', () => {
    const innerContext = { ...context, isFirst: true };

    expect(waitHandler(innerContext)).toHaveLength(
      context.cardCountInBlock,
    );
    expect(
      waitHandler(innerContext) === context.blocks,
    ).toBe(false);
  });

  it('if isFirst === false => run one last', () => {
    expect(
      waitHandler({ ...context, isFirst: false }),
    ).toEqual(context.blocks);
  });
});

describe('startedHandler', () => {
  const context: Context = { ...contextWithBlocks };

  it('if newBlocks.length === context.blocks.length => return context.blocks', () => {
    const innerContext: Context = {
      ...context,
      blocks: [
        ...context.blocks,
        ...getBlocksWithPrize(context),
      ],
    };

    expect(startedHandler(innerContext)).toEqual(
      innerContext.blocks,
    );
  });

  it('if newBlocks.length !== context.blocks.length => return new blocks', () => {
    const innerContext: Context = {
      ...context,
      blocks: Array.from(
        { length: context.cardCountInBlock + 2 },
        () => loadingItems[0],
      ),
    };

    expect(startedHandler(innerContext)).not.toEqual(
      context.blocks,
    );
  });
});

describe('renderBlocks', () => {
  it('call handler by status', () => {
    const renderStrategy: RenderStrategy = {
      loading: jest.fn(),
      wait: jest.fn(),
      start: jest.fn(),
      started: jest.fn(),
      ended: jest.fn(),
    };

    const render = (status: Status) =>
      renderBlocks(
        status,
        { ...baseContext },
        renderStrategy,
      );

    const keys = Object.keys(renderStrategy) as Status[];

    keys.forEach((status) => render(status));
    keys.forEach((status) =>
      expect(renderStrategy[status]).toBeCalled(),
    );
  });
});
