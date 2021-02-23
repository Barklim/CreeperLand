import { Div } from 'types/props';
import { IconType } from './icons';

export interface CommonCardProps extends Div {
  title: string;
  value: string;
  icon: IconType;
}
