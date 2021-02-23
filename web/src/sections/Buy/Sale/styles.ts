import styled from 'styled-components';
import promoBg from 'assets/img/promo_bg.png';
import promoBgMobile from 'assets/img/promo_bg_mobile.png';
import Typography from 'components/Typography';
import { fontSize, media } from 'styles/helpers';

export const Wrap = styled.div`
  margin-top: 20px;
  padding-top: 61px;
  padding-bottom: 53px;
  padding-left: 88px;

  background-image: url('${promoBg}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;

  ${media.max('mobile')} {
    padding: 49px 36px 64px;

    text-align: center;

    background-image: url('${promoBgMobile}');
    background-position: center center;
  }
`;

export const Price = styled(Typography).attrs({
  color: 'purple',
})`
  ${fontSize({ fs: 32, ln: 38, mfs: 22, mln: 26 })}

  padding-top: 10px;

  font-weight: 500;
`;
