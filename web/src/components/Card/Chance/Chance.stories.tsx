import React from 'react';
import Chance, { ChanceProps } from './Chance';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Card/Chance',
  component: Chance,
} as Meta;

const Template: Story<ChanceProps> = args => <Chance {...args} />;

export const Base = Template.bind({});
Base.args = {
  icon: 'creeper',
  title: 'Creeper',
  value: 'Шанс 25%',
};
