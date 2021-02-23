import React from 'react';
import Typography from 'components/Typography';
import descriptionPoints from 'mock/descrtipionPoints.json';
import { mapIndexToTitleNumber } from 'components/DropdownList/shared';
import { Points, Point, PointTitle } from './styles';

const HowToStart: React.FC = () => (
  <div>
    <Typography variant="h2" color="black">
      Как начать играть?
    </Typography>

    <Points>
      {descriptionPoints.map(({ title, text }, i) => (
        <Point key={i}>
          <PointTitle>
            {`${mapIndexToTitleNumber(i)}. `}
            {title}
          </PointTitle>
          <Typography variant="p2" color="black">
            {text}
          </Typography>
        </Point>
      ))}
    </Points>
  </div>
);

export default HowToStart;
