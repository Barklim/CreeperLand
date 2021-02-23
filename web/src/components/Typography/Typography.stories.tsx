import React from 'react';
import Typography, { TypographyProps } from './Typography';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

interface Props extends TypographyProps {
  children?: string;
}

const text = (second: string) => `Typography ${second}`;

const Template: Story<Props> = (args) => (
  <Typography {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: text('Basic'),
};

export const Bold = Template.bind({});
Bold.args = {
  weight: 'bold',
  children: text('P4'),
};

export const White = Template.bind({});
White.args = {
  color: 'white',
  children: text('White'),
};
White.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  children: text('H1'),
  component: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
  children: text('H2'),
  component: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
  children: text('H3'),
  component: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
  variant: 'h4',
  children: text('H4'),
  component: 'h4',
};

export const P1 = Template.bind({});
P1.args = {
  variant: 'p1',
  children: text('P1'),
  component: 'p',
};

export const P2 = Template.bind({});
P2.args = {
  variant: 'p2',
  children: text('P2'),
  component: 'p',
};

export const P3 = Template.bind({});
P3.args = {
  variant: 'p3',
  children: text('P3'),
  component: 'p',
};
