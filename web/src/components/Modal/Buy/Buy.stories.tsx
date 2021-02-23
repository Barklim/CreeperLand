import React, { useState } from 'react';
import Button from 'components/Button';
import Buy, { BuyProps } from './Buy';
import { Story, Meta } from '@storybook/react';
import { useTheme } from 'styled-components';
import { useMedia } from 'react-use';

export default {
  title: 'Modal/Buy',
  component: Buy,
} as Meta;

const description = `
  <h4>Команды:</h4>

  <p><strong>/tp</strong> - телепортация к игроку</p>
  <p><strong>/heal</strong> - вылечиться</p>
  <p><strong>/god</strong> - включить/выключить режим Бога</p>
  <p><strong>/tp</strong> - телепортация к игроку</p>
  <p><strong>/heal</strong> - вылечиться</p>
  <p><strong>/god</strong> - включить/выключить режим Бога</p>

  <br />

  <h4>Команды:</h4>

  <p><strong>/tp</strong> - телепортация к игроку</p>
  <p><strong>/heal</strong> - вылечиться</p>
  <p><strong>/god</strong> - включить/выключить режим Бога</p>
  <p><strong>/tp</strong> - телепортация к игроку</p>
  <p><strong>/heal</strong> - вылечиться</p>
  <p><strong>/god</strong> - включить/выключить режим Бога</p>
`;

const baseProps: BuyProps = {
  icon: 'creeper',
  name: 'Creeper',
  title: 'Купить привилегию',
  description,
  price: 'Купить за 123 руб.',
  show: true,
  onClose: () => {},
};

const ToggleTemplate: Story<BuyProps> = (args) => {
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

      <Buy {...args} show={show} onClose={closeHandler} />
    </div>
  );
};

export const Base = ToggleTemplate.bind({});
Base.args = {
  ...baseProps,
};

const StaticTemplate: Story<BuyProps> = (args) => (
  <Buy {...args} />
);

export const Static = StaticTemplate.bind({});
Static.args = {
  ...baseProps,
  onClose: () => {},
  show: true,
};
