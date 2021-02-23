import { Sizes } from '../shared';
import { Animate, getAnimateByStatus } from './animate';

describe('getAnimateByStatus', () => {
  const sizes: Sizes = {
    roulette: {
      cardFullWidth: 120,
      cardMarginRight: 10,
      cardWidth: 110,

      containerHorizontalPadding: 44,
    },
  };

  it('if status !== start || started => return null', () => {
    expect(getAnimateByStatus(sizes, 8, 4, 'loading')).toBe(
      null,
    );
  });

  it('if status === start || started => return correct output', () => {
    const expected: Animate = {
      marginLeft: -3720,
      transition: '4s',
    };

    expect(
      getAnimateByStatus(sizes, 8, 4, 'started'),
    ).toEqual(expected);
  });
});
