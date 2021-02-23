import { Case, Items, Item as CaseItem } from 'services/caseService';
import { RouletteSizes } from './services/count';

export type Status = 'loading' | 'wait' | 'start' | 'started' | 'ended';

export type Prize = null | CaseItem;

export type Item = Case | null;

export interface Sizes {
  roulette: RouletteSizes;
}

export type { Case };
export type { Items };
