import { HTMLMediaControls } from 'react-use/lib/util/createHTMLMediaHook';
import {
  isFirstHandler,
  songHandler,
  startedStatusHandler,
} from './handlers';

describe('startedStatusHandler', () => {
  let setStatus = jest.fn();

  beforeEach(() => {
    setStatus = jest.fn();
  });

  it('if status === start => change it to started', () => {
    startedStatusHandler('start', setStatus);

    expect(setStatus).toBeCalledWith('started');
  });

  it('if status !== start => ignore', () => {
    startedStatusHandler('loading', setStatus);

    expect(setStatus).not.toBeCalledWith('started');
  });
});

describe('isFirstHandler', () => {
  let setIsFirst = jest.fn();

  beforeEach(() => {
    setIsFirst = jest.fn();
  });

  it('if status === ended => change isFirst to false', () => {
    isFirstHandler('ended', true, setIsFirst);
    expect(setIsFirst).toBeCalledWith(false);
  });

  it('if status === ended && isFirst === false => ignore', () => {
    isFirstHandler('started', false, setIsFirst);
    expect(setIsFirst).not.toBeCalled();
  });

  it('if status !== ended || isFirst === false => ignore', () => {
    isFirstHandler('loading', false, setIsFirst);
    expect(setIsFirst).not.toBeCalled();
  });
});

describe('songHandler', () => {
  const getControls = () => ({
    play: jest.fn(),
    pause: jest.fn(),
    mute: jest.fn(),
    unmute: jest.fn(),
    volume: jest.fn(),
    seek: jest.fn(),
  });

  let controls: HTMLMediaControls = getControls();

  beforeEach(() => {
    controls = getControls();
  });

  it('if status === started => play', () => {
    songHandler('started', controls);

    expect(controls.play).toBeCalled();
  });

  it('if status === ended => pause, and go to 0', () => {
    songHandler('ended', controls);

    expect(controls.pause).toBeCalled();
    expect(controls.seek).toBeCalledWith(0);
  });

  it('if status !== ended || status !== started => ignore', () => {
    songHandler('loading', controls);

    expect(controls.play).not.toBeCalled();
    expect(controls.pause).not.toBeCalled();
    expect(controls.seek).not.toBeCalled();
  });
});
