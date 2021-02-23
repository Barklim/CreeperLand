import React from 'react';
import BuyCard from 'components/Card/Buy';
import {
  Items,
  Wrap,
  Delimiter,
  ItemsWrap,
  ItemsOverflowWrap,
  OverflowWrap,
} from './styles';
import { Sizes, Status } from '../shared';
import { Items as ItemsType } from 'services/caseService';
import { Animate } from '../services/animate';
import { getLineMaxWidthByCount } from '../services/maxWidth';
import { IconType } from 'components/Card/icons';

interface RouletteProps {
  onTransitionEnd: () => void;
  blocks: ItemsType;
  sizes: Sizes;
  animate: Animate;
  cardCountInBlock: number;
  status: Status;
}

const Roulette: React.FC<RouletteProps> = ({
  onTransitionEnd,
  sizes,
  blocks,
  animate,
  cardCountInBlock,
  status,
}) => {
  const { roulette } = sizes;

  const { cardWidth, cardMarginRight, containerHorizontalPadding } = roulette;

  const maxWidth = getLineMaxWidthByCount(cardCountInBlock, roulette);

  const getIcon = (icon: IconType, loader?: boolean) => {
    if (status === 'loading') return 'loader';
    if (loader) return 'loader';

    return icon;
  };

  const items = blocks.map(({ icon, loader }, i) => (
    <BuyCard key={i} width={cardWidth} icon={getIcon(icon, loader)} />
  ));

  return (
    <Wrap>
      <Delimiter />

      <ItemsWrap horizontalPadding={containerHorizontalPadding}>
        <OverflowWrap>
          <ItemsOverflowWrap maxWidth={maxWidth}>
            <Items
              cardMarginRight={cardMarginRight}
              animate={animate}
              onTransitionEnd={onTransitionEnd}
            >
              {items}
            </Items>
          </ItemsOverflowWrap>
        </OverflowWrap>
      </ItemsWrap>
    </Wrap>
  );
};

export default Roulette;
