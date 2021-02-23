import styled from 'styled-components';
import chartPlaceholder from 'assets/img/chart__placeholder.png';
import chartPlaceholderMobile from 'assets/img/chart__placeholder-mobile.png';
import { media } from 'styles/helpers';

const Chart = styled.div`
  display: flex;
  width: 100%;
  height: 204px;
  margin-top: 10px;

  background-image: url('${chartPlaceholder}');
  background-repeat: no-repeat;
  background-position: center center;

  ${media.max('mobile')} {
    height: 101px;

    background-image: url('${chartPlaceholderMobile}');
  }
`;

export default Chart;
