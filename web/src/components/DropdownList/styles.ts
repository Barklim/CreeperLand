import styled from 'styled-components';
import { ReactComponent as VRaw } from 'assets/svg/V.svg';
import { color, media, transition } from 'styles/helpers';

export const Wrap = styled.div`
  overflow: hidden;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 18px 41px 18px 29px;

  text-align: left;

  background-color: ${color('black')};

  transition: ${transition('primary')};

  &:hover {
    background-color: ${color('gray')};
  }

  ${media.max('mobile')} {
    padding: 16px 30px 17px 8px;
  }
`;

export const V = styled(VRaw)<{ $active?: boolean }>`
  flex-shrink: 0;

  align-self: center;
  width: 18px;
  height: 10px;
  margin-left: 23px;

  transition: ${transition('primary')};

  ${p => p.$active && 'transform: rotate(180deg);'}

  ${media.max('mobile')} {
    width: 12px;
    height: 8px;
  }
`;

export const List = styled.div<{ maxHeight: number }>`
  max-height: ${p => p.maxHeight}px;

  background-color: ${color('white_3')};

  transition: ${transition('primary')};
`;

export const Item = styled.li`
  position: relative;

  display: flex;

  &:not(:last-child) {
    margin-bottom: 23px;
  }

  &::before {
    display: inline-block;

    flex-shrink: 0;
    width: 8px;
    height: 8px;

    margin-right: 10px;

    background-color: ${color('black')};
    transform: rotate(45deg);
    transform-origin: 0 100%;

    content: '';
  }
`;

export const Items = styled.ul`
  padding: 19px 83px 49px 34px;

  ${media.max('mobile')} {
    padding: 13px 17px 27px 10px;
  }
`;
