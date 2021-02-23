import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import Footer from 'sections/Footer';
import Content from './Content';
import Header from './Header';
import Roulette from './Roulette';
import _ from 'lodash';
// import rollAudio from 'assets/audio/roll.mp3';
import caseService from 'services/caseService';
import WinModal from 'components/Modal/Win';
import { LoginModal } from 'app/containers/LoginModal';

import { useParams, useHistory } from 'react-router-dom';
import { Status, Prize, Sizes, Items, Item as CaseItem } from './shared';
import { useAudio, useMedia } from 'react-use';
import { ThemeContext } from 'styled-components';
import { getCardsCountInBlock } from './services/count';
import { renderBlocks } from './services/block';
import {
  isFirstHandler,
  startedStatusHandler,
  songHandler,
} from './services/handlers';
import { getAnimateByStatus } from './services/animate';
import {
  removeOneRollFromLocation,
  setRollsToLocation,
} from './services/location';

const BLOCKS_COUNT = 10;

const Case: React.FC = () => {
  const params = useParams<{ id: string }>();

  const history = useHistory();
  const { location } = history;
  const queryParams = new URLSearchParams(location.search);
  const rolls = queryParams.get('rolls');

  const [status, setStatus] = useState<Status>('loading');
  const [prize, setPrize] = useState<Prize>(null);
  const [item, setItem] = useState<CaseItem>(null);
  const [isFirst, setIsFirst] = useState(true);
  const [blocks, setBlocks] = useState<Items>([]);
  const [show, setShow] = useState(false);

  const theme = useContext(ThemeContext);
  const isMobile = useMedia(`(max-width: ${theme.breakpoints.mobile})`);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [audio, state, controls] = useAudio({
    // src: rollAudio,
    src: '',
  });

  const cardWidth = isMobile ? 56 : 110;
  const cardMarginRight = isMobile ? 5 : 10;
  const cardFullWidth = cardWidth + cardMarginRight;

  const containerHorizontalPadding = isMobile ? 25 : 44;

  const sizes: Sizes = {
    roulette: {
      cardWidth,
      cardMarginRight,
      cardFullWidth,
      containerHorizontalPadding,
    },
  };

  const cardCountInBlock = getCardsCountInBlock(sizes.roulette, isMobile);
  const blocksCount = BLOCKS_COUNT;
  const animate = getAnimateByStatus(
    sizes,
    cardCountInBlock,
    blocksCount,
    status,
  );

  // render, useLayoutEffect because need sync update after render
  useLayoutEffect(() => {
    const render = () => {
      const renderBlocksContext = {
        items: item ? item.items : null,
        prize,
        cardCountInBlock,
        blocksCount,
        blocks,
        isFirst,
      };
      isFirstHandler(status, isFirst, setIsFirst);
      setBlocks(renderBlocks(status, renderBlocksContext));
      startedStatusHandler(status, setStatus);
      songHandler(status, controls);
    };

    render();
    window.addEventListener('resize', render);

    return () => window.removeEventListener('resize', render);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, cardCountInBlock]);

  useEffect(() => {
    setStatus('loading');

    (async () => {
      const caseItem = await caseService.getById(params.id);

      setItem(caseItem);
      setStatus('wait');
    })();
  }, [params.id]);

  const rollButtonClickHandler = () => {
    if (!item) return;

    setStatus('start');
    // TODO: add prize logic request
    setPrize(_.sample(item.items) as Prize);
  };

  const buyButtonClickHandler = () => {
    // TODO add buy logic
    history.push(setRollsToLocation(location, 5));
  };

  const transitionEndHandler = () => {
    setStatus('ended');
    setBlocks(blocks.slice(blocks.length - cardCountInBlock));
    setShow(true);

    history.replace(removeOneRollFromLocation(location));
  };

  const modalCloseHandler = () => {
    setShow(false);
  };

  return (
    <>
      {audio}
      {/* Lets importings modals in page  */}
      <LoginModal></LoginModal>
      <Header
        status={status}
        item={item}
        onRollButtonClick={rollButtonClickHandler}
        onBuyButtonClick={buyButtonClickHandler}
        rolls={rolls}
      />
      <Roulette
        status={status}
        cardCountInBlock={cardCountInBlock}
        blocks={blocks}
        sizes={sizes}
        animate={animate}
        onTransitionEnd={transitionEndHandler}
      />
      <Content item={item} status={status} />
      <Footer />
      {prize && (
        <WinModal
          color={prize.lines}
          description={prize.title}
          card={prize}
          show={show}
          onClose={modalCloseHandler}
        />
      )}
    </>
  );
};

export default Case;
