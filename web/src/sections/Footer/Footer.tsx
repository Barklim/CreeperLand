import React from 'react';
import Navbar from 'sections/Navbar';
import Typography from 'components/Typography';
import { ReactComponent as WebFocus } from 'assets/svg/WebFocus.svg';
import { Wrap, Container, MobileHidden, Bottom, Design } from './styles';

const Footer: React.FC = () => (
  <Wrap>
    <Container>
      <Navbar footer />

      <MobileHidden>
        <Bottom>
          <Typography variant="p2" color="white">
            Copyright 2021
          </Typography>

          <Design>
            <WebFocus />
            <Typography variant="p2" color="white">
              Designed by WebFocus
            </Typography>
          </Design>
        </Bottom>
      </MobileHidden>
    </Container>
  </Wrap>
);

export default Footer;
