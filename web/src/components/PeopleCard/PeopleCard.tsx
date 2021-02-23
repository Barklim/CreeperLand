import React from 'react';
import { Wrap, Icon, Text } from './styles';

interface PeopleCardProps {
  variant?: 'green' | 'white';
  text: string;
  className?: string;
}

const PeopleCard: React.FC<PeopleCardProps> = ({
  variant = 'green',
  text,
  className,
}) => {
  return (
    <Wrap className={className}>
      <Icon variant={variant} />
      <Text variant={variant}>{text}</Text>
    </Wrap>
  );
};

export default PeopleCard;
