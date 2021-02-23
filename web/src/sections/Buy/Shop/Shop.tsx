import React, { useState } from 'react';
import Tabs from 'components/Tabs';
import shopBlockTabsMock from 'mock/shopBlock.json';
import Title from '../Title';
import Card from 'components/Card/Shop';
import BuyModal from 'components/Modal/Buy';
import { IconType } from 'components/Card/icons';
import { Tab } from './styles';

interface CardObj {
  id: string;
  icon: IconType;
  title: string;
  value: string;
  description: string;
}

const Shop: React.FC = () => {
  const tabs = shopBlockTabsMock as CardObj[][];

  const [show, setShow] = useState(false);
  const [active, setActive] = useState<CardObj>(tabs[0][0]);

  const tabsButtons = ['Привилегии', 'Кейсы', 'Разбан'];

  const cardClickHandler = (tabIndex: number, index: number) => () => {
    const finded = tabs[tabIndex][index];

    setActive(finded);
    setShow(true);

    window.scrollTo(0, 0);
  };

  const tabsContent = tabs.map((arr, tabIndex) => (
    <Tab key={tabIndex}>
      {arr.map(({ icon, ...rest }, i) => (
        <Card
          key={i}
          icon={icon as IconType}
          {...rest}
          onClick={cardClickHandler(tabIndex, i)}
        />
      ))}
    </Tab>
  ));

  const closeModalHandler = () => {
    setShow(false);
  };

  const onModalSuccess = (body: { nickname: string; promo: string | null }) => {
    console.log(body);
    closeModalHandler();
  };

  return (
    <div>
      <Title type="shop">Магазин</Title>

      <Tabs tabs={tabsButtons} content={tabsContent} />

      {active && (
        <BuyModal
          show={show}
          onClose={closeModalHandler}
          onSuccess={onModalSuccess}
          title="Купить привилегию"
          price={active.value}
          name={active.title}
          description={active.description}
          icon={active.icon}
        />
      )}
    </div>
  );
};

export default Shop;
