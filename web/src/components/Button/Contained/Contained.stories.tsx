import React from 'react';
import Contained from './Contained';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Button/Contained',
  component: Contained,
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
  <Contained {...args} />
);

export const Base = Template.bind({});
Base.args = {
  children: 'Contained',
};
