import React, { useState } from 'react';
import Typography from 'components/Typography';
import Button from '../Button';
import Menu, { ModalProps } from './Menu';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    onClose: { action: 'onClose' },
    children: { control: 'text' },
  },
} as Meta;

const Template: Story<ModalProps> = ({
  show: initialShow,
  ...args
}) => {
  const [show, setShow] = useState(!!initialShow);

  const closeHandler = () => setShow(false);
  const openHandler = () => setShow(true);

  return (
    <>
      <Button onClick={openHandler}>
        <Typography component="span" color="black">
          toggle
        </Typography>
      </Button>
      <Menu
        children="Menu"
        show={show}
        {...args}
        onClose={closeHandler}
      />
    </>
  );
};

export const Primary = Template.bind({});
