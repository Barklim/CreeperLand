import React, { useState } from 'react';
import Button from 'components/Button';
import Win, { WinProps } from './Win';
import { Story, Meta } from '@storybook/react';
import { useTheme } from 'styled-components';
import { useMedia } from 'react-use';

export default {
  title: 'Modal/Win',
  component: Win,
} as Meta;

const color = 'red';
const description = 'Creeper на 30 дней';
const card: WinProps['card'] = {
  title: 'Creeper',
  value: 'Шанс 25%',
  icon: 'creeper',
};

const ToggleTemplate: Story<WinProps> = (args) => {
  const [show, setShow] = useState(false);

  const openHandler = () => setShow(true);
  const closeHandler = () => setShow(false);

  const theme = useTheme();
  const isMobile = useMedia(
    `(max-width: ${theme.breakpoints.mobile})`,
  );

  return (
    <div style={{ minHeight: isMobile ? 0 : 750 }}>
      <Button onClick={openHandler}>Toggle</Button>

      <Win {...args} show={show} onClose={closeHandler} />
    </div>
  );
};

export const Base = ToggleTemplate.bind({});
Base.args = {
  card,
  description,
  color,
};

const StaticTemplate: Story<WinProps> = (args) => (
  <Win {...args} />
);

export const Static = StaticTemplate.bind({});
Static.args = {
  onClose: () => {},
  show: true,
  card,
  color,
  description,
};
