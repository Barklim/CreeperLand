import styled from 'styled-components';
import Typography from 'components/Typography';
import ButtonUi from 'components/Button/Contained';
import { color, transition, rem, media } from 'styles/helpers';
import { X, TopBackdrop, TopWrap } from '../styles';

export const Backdrop = styled(TopBackdrop)`
  background-color: ${color('$buyBackdrop')};
`;

export const Wrap = styled(TopWrap)`
  width: 552px;
  min-height: 478px;

  background-color: ${color('white_2')};

  ${media.max('mobile')} {
    width: 100%;
    min-height: 100%;
  }
`;

export const XButton = styled(X)`
  position: absolute;
  top: 30px;
  right: 29px;

  path {
    transition: ${transition('primary')};

    fill: ${color('black')};
  }

  ${media.max('mobile')} {
    top: 20px;
    right: 20px;
  }
`;

export const BuyTitle = styled(Typography).attrs({
  variant: 'h3',
  color: 'black',
})`
  padding-top: 33px;

  text-align: center;

  ${media.max('mobile')} {
    padding-top: 20px;

    font-size: ${rem(16)};
    line-height: ${rem(19)};
  }
`;

export const Content = styled.div`
  position: relative;

  display: flex;

  margin-top: 17px;
  padding: 17px 0px 17px 29px;

  color: ${color('black')};

  background-color: ${color('white_3')};

  ${media.max('mobile')} {
    flex-flow: column wrap;

    padding: 15px 0px 15px 15px;
  }
`;

export const Left = styled.div`
  margin-right: 44px;

  ${media.max('mobile')} {
    padding: 0px 0px 15px;
  }
`;

export const Icon = styled.img`
  display: block;

  width: 75px;
  height: 75px;

  ${media.max('mobile')} {
    margin: 0 auto;
  }
`;

export const Name = styled(Typography).attrs({
  variant: 'h4',
})`
  padding-top: 12px;

  text-align: center;

  ${media.max('mobile')} {
    font-size: ${rem(16)};
    line-height: ${rem(19)};
  }
`;

export const RightHtmlContent = styled.div`
  flex-grow: 1;
  max-height: 214px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;

    background-color: ${color('lightGray')};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${color('gray_2')};
    border-radius: 3px;
  }

  strong,
  h4 {
    font-weight: 500;
  }

  h4 {
    margin: 0 0 10px;
    padding: 0;

    font-size: ${rem(16)};
    line-height: ${rem(19)};
  }

  p {
    margin: 0 0 6px;

    padding: 0;

    font-size: ${rem(14)};
    line-height: ${rem(17)};
  }

  ${media.max('mobile')} {
    h4 {
      font-size: ${rem(14)};
      line-height: ${rem(17)};
    }

    p {
      font-size: ${rem(11)};
      line-height: ${rem(14)};
    }
  }
`;

export const BottomForm = styled.form`
  padding: 26px 29px 34px;

  ${media.max('mobile')} {
    padding: 20px 20px 25px;
  }
`;

export const Inputs = styled.div`
  display: flex;

  > *:first-child {
    margin-right: 16px;
  }

  > label {
    flex-grow: 1;
  }

  ${media.max('mobile')} {
    flex-flow: column wrap;

    > *:first-child {
      margin-right: 0px;
      margin-bottom: 16px;
    }
  }
`;

export const LabelElement = styled.label``;

export const Label = styled.div`
  padding-bottom: 5px;

  color: ${color('black')};

  font-size: ${rem(16)};
  line-height: ${rem(19)};

  ${media.max('mobile')} {
    padding-bottom: 12px;

    font-size: ${rem(14)};
    line-height: ${rem(17)};
  }
`;

export const Input = styled.input`
  width: 100%;

  height: 34px;

  padding: 12px;

  color: ${color('black')};

  font-size: ${rem(16)};
  line-height: ${rem(19)};

  background-color: ${color('white_3')};
  border: none;

  border-radius: 5px;
  outline: none;

  &::placeholder {
    color: ${color('gray_2')};
  }

  ${media.max('mobile')} {
    padding: 8px 10px;

    font-size: ${rem(14)};
    line-height: ${rem(17)};
  }
`;

export const Button = styled(ButtonUi)`
  width: 100%;
  margin-top: 22px;
  padding: 10px 123px;

  font-weight: 500;
  font-size: ${rem(18)};
  line-height: ${rem(21)};

  background-color: ${color('lime')};

  ${media.max('mobile')} {
    width: auto;
    margin-right: auto;
    margin-left: auto;

    padding: 12px 45px;

    font-size: ${rem(14)};
    line-height: ${rem(17)};
  }
`;
