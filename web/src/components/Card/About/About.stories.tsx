import React from 'react';
import About, { AboutProps } from './About';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Card/About',
  component: About,
} as Meta;

const Template: Story<AboutProps> = (args) => (
  <About {...args} />
);

export const Gamepad = Template.bind({});
Gamepad.args = {
  title: 'Постоянные обновления',
  icon: 'gamepad',
};

export const Server = Template.bind({});
Server.args = {
  title: 'Стабильное оборудование',
  icon: 'server',
};

export const King = Template.bind({});
King.args = {
  title: 'Проработанный донат',
  icon: 'king',
};

export const People = Template.bind({});
People.args = {
  title: 'Адекватный персонал',
  icon: 'people',
};
