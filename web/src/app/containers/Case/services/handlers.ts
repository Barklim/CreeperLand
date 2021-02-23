import { Status } from '../shared';
import { HTMLMediaControls } from 'react-use/lib/util/createHTMLMediaHook';

export const startedStatusHandler = (
  status: Status,
  setStatus: (status: Status) => void,
): void => {
  if (status === 'start') {
    setStatus('started');
  }
};

export const isFirstHandler = (
  status: Status,
  isFirst: boolean,
  setIsFirst: (isFirst: boolean) => void,
): void => {
  if (!isFirst || status !== 'ended') return;

  setIsFirst(false);
};

export const songHandler = (
  status: Status,
  controls: HTMLMediaControls,
): void => {
  if (status === 'started') {
    controls.play();
  } else if (status === 'ended') {
    controls.pause();
    controls.seek(0);
  }
};
