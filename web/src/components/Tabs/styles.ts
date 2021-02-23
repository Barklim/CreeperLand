import styled, { css } from 'styled-components';
import { color, fontSize, transition, media, opacity } from 'styles/helpers';

interface Active {
  active?: boolean;
}

export const ContentWrap = styled.div`
  padding-top: 26px;
`;

export const Content = styled.div<Active>`
  height: ${p => (p.active ? 'auto' : '0')};
  overflow: hidden;

  opacity: ${p => (p.active ? '1' : '0')};

  transition: ${transition('primary')};
`;

export const Tab = styled.button<Active>`
  ${fontSize({ fs: 16, ln: 19, mfs: 11, mln: 12 })}

  padding: 10px 17px;

  color: ${color('black')};
  font-weight: normal;

  transition: all ${transition('primary')}, font-weight 0s;

  background: ${color('white_3')};
  border-radius: 5px;

  &:hover {
    opacity: ${opacity('primary')};
  }

  ${p =>
    p.active &&
    css`
      color: ${color('white')};
      background: ${color('black')};
      font-weight: 500;
    `}

  ${media.max('mobile')} {
    padding: 8px 10px;
  }
`;

export const TabsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -20px;
  margin-bottom: -20px;

  > ${Tab} {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  ${media.max('mobile')} {
    margin-right: -12px;
    margin-bottom: -12px;

    > ${Tab} {
      margin-right: 12px;
      margin-bottom: 12px;
    }
  }
`;
