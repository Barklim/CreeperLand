import React from 'react';
import { ReactComponent as Gamepad } from 'assets/svg/gamepad.svg';
import { ReactComponent as People } from 'assets/svg/people.svg';
import { ReactComponent as King } from 'assets/svg/king.svg';
import { ReactComponent as Server } from 'assets/svg/server.svg';
import { IconWrap, Title, Wrap } from './styles';

const icons = {
  gamepad: Gamepad,
  people: People,
  king: King,
  server: Server,
};

export type IconType = keyof typeof icons;

export interface AboutProps {
  title: string;
  icon: IconType;
}

const About: React.FC<AboutProps> = ({ title, icon }) => {
  const Icon = icons[icon];

  return (
    <Wrap>
      <IconWrap>
        <Icon />
      </IconWrap>

      <Title>{title}</Title>
    </Wrap>
  );
};

export default About;
