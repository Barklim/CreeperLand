import caseMock from 'mock/case.json';
import { IconType } from 'components/Card/icons';
import { PaletteColor } from 'styles/theme';

export interface Item {
  id: string;
  title: string;
  icon: IconType;
  loader?: boolean;
  value: string;
  lines: PaletteColor;
}

export type Items = Item[];

export interface Case {
  title: string;
  icon: IconType;
  items: Items;
}

interface CaseService {
  getById: (id: string) => Promise<Case>;
}

class MockCaseService implements CaseService {
  getById = async (id: string) =>
    new Promise<Case>(res => {
      // eslint-disable-next-line no-console
      console.log(`case id: ${id}`);
      setTimeout(res, 3000, caseMock);
    });
}

const caseService = new MockCaseService();

export default caseService;
