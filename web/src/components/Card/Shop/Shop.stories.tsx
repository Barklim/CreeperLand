import React from 'react';
import Shop from './Shop';
import { Meta, Story } from '@storybook/react';
import { CommonCardProps } from '../shared';

export default {
  title: 'Card/Shop',
  component: Shop,
} as Meta;

const Template: Story<CommonCardProps> = (args) => (
  <Shop {...args} />
);

export const Creeper = Template.bind({});
Creeper.args = {
  title: 'Creeper',
  icon: 'creeper',
  value: '123 руб.',
};

export const Ender = Template.bind({});
Ender.args = {
  title: 'Ender',
  icon: 'enderman',
  value: '123 руб.',
};

export const Blaze = Template.bind({});
Blaze.args = {
  title: 'Blaze',
  icon: 'blaze',
  value: '123 руб.',
};

export const Wither = Template.bind({});
Wither.args = {
  title: 'Wither',
  icon: 'wither',
  value: '123 руб.',
};
