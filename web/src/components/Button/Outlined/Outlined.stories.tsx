import React from 'react';
import Outlined from './Outlined';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Button/Outlined',
  component: Outlined,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    children: { control: 'text' },
  },
} as Meta;

interface Props {
  children: string;
}

const Template: Story<Props> = (args) => (
  <Outlined {...args} />
);

export const Base = Template.bind({});
Base.args = {
  children: 'Outlined',
};
