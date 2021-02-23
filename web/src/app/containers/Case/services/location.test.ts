import {
  removeOneRollFromLocation,
  setRollsToLocation,
} from './location';

const baseLocation = {
  state: null,
  key: '',
  pathname: '',
  search: '',
  hash: '',
};

describe('removeOneRollFromLocation', () => {
  it('if rolls === null => return location', () => {
    expect(removeOneRollFromLocation(baseLocation)).toEqual(
      baseLocation,
    );
  });

  it('if rolls === 1 => remove rolls from location', () => {
    expect(
      removeOneRollFromLocation({
        ...baseLocation,
        search: '?rolls=1',
      }),
    ).toEqual(baseLocation);
  });

  it('remove one roll from location', () => {
    expect(
      removeOneRollFromLocation({
        ...baseLocation,
        search: '?rolls=2',
      }),
    ).toEqual({ ...baseLocation, search: '?rolls=1' });
  });
});

describe('setRollsToLocation', () => {
  it('set rolls params to location', () => {
    expect(
      setRollsToLocation({ ...baseLocation }, 5),
    ).toEqual({ ...baseLocation, search: '?rolls=5' });
  });

  it('corect work with not empty location.search', () => {
    expect(
      setRollsToLocation(
        { ...baseLocation, search: '?test=1' },
        5,
      ),
    ).toEqual({
      ...baseLocation,
      search: '?test=1&rolls=5',
    });
  });
});
