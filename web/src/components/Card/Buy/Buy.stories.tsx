import React from 'react';
import Buy, { BuyProps } from './Buy';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Card/Buy',
  component: Buy,
} as Meta;

const Template: Story<BuyProps> = (args) => (
  <Buy {...args} />
);

export const Roulette = Template.bind({});
Roulette.args = {
  icon: 'enderman',
  roulette: true,
};

export const Enderman = Template.bind({});
Enderman.args = {
  icon: 'enderman',
};

export const Blaze = Template.bind({});
Blaze.args = {
  icon: 'blaze',
};

export const Creeper = Template.bind({});
Creeper.args = {
  icon: 'creeper',
};

export const Wither = Template.bind({});
Wither.args = {
  icon: 'wither',
};
