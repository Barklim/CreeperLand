import React from 'react';
import { Button } from './styles';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Button/Base',
  component: Button,
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
  <Button {...args} />
);

export const Base = Template.bind({});
Base.args = {
  children: 'Outlined',
};
