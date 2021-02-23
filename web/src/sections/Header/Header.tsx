import React from 'react';
import Navbar from 'sections/Navbar';
import Content from './Content';
import { AnyObject } from 'types/base';
import { Wrap, Lines, Container } from './styles';

interface HeaderProps extends Lines {
  content?: boolean;
  className?: string;
  containerProps?: AnyObject;
}

const Header: React.FC<HeaderProps> = ({
  children,
  lines,
  content,
  className,
  containerProps = {},
}) => (
  <Wrap lines={lines} className={className}>
    <Container {...containerProps}>
      <Navbar />

      {content && <Content />}

      {children}
    </Container>
  </Wrap>
);

export default Header;
