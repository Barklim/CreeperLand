import Typography from 'components/Typography';
import styled from 'styled-components';

interface TitleProps {
  type?: 'case' | 'shop';
}

const Title = styled(Typography).attrs({
  variant: 'h2',
  color: 'black',
})<TitleProps>`
  padding-bottom: 19px;

  ${p => p.type === 'case' && 'padding-bottom: 12px;'}
`;

export default Title;
