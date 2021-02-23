import React from 'react';
import Case from './Case';
import { Meta, Story } from '@storybook/react';
import { CommonCardProps } from '../shared';

export default {
  title: 'Card/Case',
  component: Case,
} as Meta;

const Template: Story<CommonCardProps> = (args) => (
  <Case {...args} />
);

export const Case1 = Template.bind({});
Case1.args = {
  title: 'Кейс #1',
  icon: 'case_1',
  value: '123 руб.',
};

export const Case2 = Template.bind({});
Case2.args = {
  title: 'Кейс #2',
  icon: 'case_2',
  value: '123 руб.',
};

export const Case3 = Template.bind({});
Case3.args = {
  title: 'Кейс #3',
  icon: 'case_3',
  value: '123 руб.',
};

export const Case4 = Template.bind({});
Case4.args = {
  title: 'Кейс #4',
  icon: 'case_3',
  value: '123 руб.',
};
