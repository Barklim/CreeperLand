import React, { useState } from 'react';
import { Content as iContent } from 'types/props';
import { TabsWrap, Tab, Content, ContentWrap } from './styles';

interface TabsProps {
  tabs: iContent[];
  content: iContent[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, content }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const TabClickHandler = (index: number) => () => {
    setActiveIndex(index);
  };

  return (
    <div>
      <TabsWrap>
        {tabs.map((title, i) => (
          <Tab key={i} onClick={TabClickHandler(i)} active={i === activeIndex}>
            {title}
          </Tab>
        ))}
      </TabsWrap>

      <ContentWrap>
        {content.map((value, i) => (
          <Content key={i} active={i === activeIndex}>
            {value}
          </Content>
        ))}
      </ContentWrap>
    </div>
  );
};

export default Tabs;
